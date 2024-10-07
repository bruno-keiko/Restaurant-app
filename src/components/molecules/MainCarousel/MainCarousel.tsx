"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./MainCarousel.module.scss";
import CarouselSlide from "@/components/atoms/CarouselSlide";
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

const swiperParams = {
  slidesPerView: 1,
  cssMode: true,
  centeredSlides: true,
  spaceBetween: 50,
  speed: 9000,
  loop: true,
  effect: "slide",
  navigation: true,
};

const MainCarousel: React.FC<MainCarouselProps> = ({ slides }) => {
  return (
    <Swiper
      className={styles["swiper"]}
      modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      {...swiperParams}
    >
      {slides.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CarouselSlide {...item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainCarousel;
