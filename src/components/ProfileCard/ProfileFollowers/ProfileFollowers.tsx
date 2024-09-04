import Counter from "@/components/AnimatedCounter/Counter";
import styles from "./ProfileFollowers.module.scss"; 
import TikTok from 'tiktok-is-live';
import { TwitchApiResponse } from "@/app/api/checkLive/services/types"; 

const tiktokUsername = process.env.TIKTOK_USERNAME as string;
const twitchUsername = process.env.TWITCH_USERNAME as string;

const ProfileFollowers = async () => {
  const tiktokResult = await TikTok.getUser(tiktokUsername);

  const twitchRawResult = await fetch(`https://api.ivr.fi/v2/twitch/user?login=${twitchUsername}`)
  const twitchJsonResult: TwitchApiResponse = await twitchRawResult.json();
  const twitchUser = twitchJsonResult[0];

  const followerList = [
    { name: "TikTok", count: tiktokResult.data.stats.followerCount },
    { name: "Twitch", count: twitchUser.followers }
  ]

  return (
    <div className={styles.container}>
      {followerList.map((platform) => (
        <div key={platform.name} className={styles.followWrapper}>
          <Counter to={platform.count} />
          <p>{platform.name} Sekėjai</p>
        </div>
      ))}
    </div> 
  )
}

export default ProfileFollowers