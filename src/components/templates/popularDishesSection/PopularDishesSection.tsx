"use client";
import React from "react";
import styles from "./PopularDishesSection.module.scss";
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
import PopularDishCard from "@/components/atoms/PopularDishCard/PopularDishCard";

const PopularDishesSection = () => {
  return (
    <div className={styles["popular-dishes-section"]}>
      <p className={styles["popular-dishes-section__subheading"]}>Food Items</p>
      <h2 className={styles["popular-dishes-section__heading"]}>
        Popular Dishes
      </h2>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
        // spaceBetween={}
        // slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          321: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: false }}
      >
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <PopularDishCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularDishesSection;
