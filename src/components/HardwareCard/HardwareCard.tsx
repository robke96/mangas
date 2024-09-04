"use client";
import { IconType } from "react-icons/lib";
import Card from "../Card/Card";
import styles from "./HardwareCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Hardware } from "@/data/hardware";
import { FreeMode } from "swiper/modules";
import "swiper/css";

interface HardwareCardProps {
    icon?: IconType;
    text: string;
}

const HardwareCard = () => {
  return (
    <Swiper slidesPerView={3} spaceBetween={20} freeMode={true} loop={true} modules={[FreeMode, ]}>
      {Hardware.map((item) => (
        <SwiperSlide key={item.type}>
          <HardwareComponentCard text={item.name} icon={item.icon} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const HardwareComponentCard = ({ text, icon: Icon }: HardwareCardProps) => {
    return (
    <Card className={styles.componentContainer}>
        <div className={styles.iconContainer}>
          {Icon && <Icon size={44} color='#fff' />}
        </div>
        <div className={styles.content}>
            <p>{text}</p>
        </div>
    </Card>
    )
}

export default HardwareCard