"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./MainCarousel.module.scss";
import CarouselSlide from "@/components/atoms/CarouselSlide";
import "swiper/css";
import "swiper/css/pagination";

interface MainCarouselProps {
  slides: {
    id: number;
    image: string;
    dishname: string;
    price: string;
    link: string;
    socialMedia: {
      icon: string;
      href: string;
    }[];
  }[];
}

const MainCarousel: React.FC<MainCarouselProps> = ({ slides }) => {
  return (
    <Swiper className={styles.swiper} modules={[Pagination]}>
      {slides.map((item) => (
        <SwiperSlide key={item.id}>
          <CarouselSlide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainCarousel;
