"use client";
import { CheckLiveResult } from "@/app/api/checkLive/route";
import styles from "./LiveButton.module.scss";
import Link from 'next/link';
import useSWR from "swr";

const fetcher = (url: string): Promise<CheckLiveResult> => fetch(url).then(res => res.json());

const LiveButton = () => {
  // TikTok Checking
  const { data: tiktokData, error: tiktokError } = useSWR('/api/checkLive?platform=tiktok', fetcher, {
    refreshInterval: 60000
  })

  // Twitch Checking
  const { data: twitchData, error: twitchError } = useSWR(tiktokData?.isLive ? null : '/api/checkLive?platform=twitch', fetcher, {
    refreshInterval: 60000
  })

  if (tiktokError || twitchError) {
    console.log("Couldn't get data from live-button ")
    return <div></div>
  }

  if (!tiktokData) return <div>Loading..</div>;

  let data = tiktokData.isLive ? tiktokData : twitchData;

  return (
    <Link href={`${data?.stream?.url}`} target="_blank" className={`${styles.container} ${!data?.isLive && styles.liveDisabled}`}>
        <div className={styles.blinkingDot}></div>
        <h3>LIVE</h3>
    </Link>
  )
}

export default LiveButton