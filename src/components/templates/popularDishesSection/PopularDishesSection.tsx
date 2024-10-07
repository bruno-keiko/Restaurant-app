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
        spaceBetween={18}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop
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
