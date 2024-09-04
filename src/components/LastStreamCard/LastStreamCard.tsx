"use client";
import styles from "./LastStreamCard.module.scss";
import Card from "../Card/Card";
import StreamCard from "./StreamCard/StreamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import { streamsDocument } from "@/model/streamModel";
import useSWR from "swr";

type streamsType = streamsDocument[]

const fetcher = (url: string): Promise<streamsType> => fetch(url).then((res) => res.json());

const LastStreamCard = () => {
  const { data, error, isLoading } = useSWR("/api/streams", fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: true,
  })
  
  if (error) return <div>{error}</div>
  if (isLoading) return <LoadingCard />

  return (
    <Card className={`${styles.container}`}>
      <Swiper
        className={styles.swiperContainer}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Grid, Autoplay]}
        autoplay={true}
        grid={{
          rows: 2
        }}
      >
        {data?.map((stream: any) => (
          <SwiperSlide key={stream.id} className={styles.swiperSlide}>
            <StreamCard title={stream.title} category={stream.category} createdAt={stream.createdAt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default LastStreamCard;

const LoadingCard = ()=> {
  return (
    <Card className={`${styles.container}`}>
      <div></div>
    </Card>
  )
}

