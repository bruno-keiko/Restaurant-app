"use client";
import React, { useEffect } from "react";
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
import { useDishStore } from "@/entities/dish/dish.store";
import PopularDishCard from "@/components/atoms/PopularDishCard/PopularDishCard";

const PopularDishesSection = () => {
  const dishes = useDishStore();
  useEffect(() => {
    dishes.fetchPopular();
  }, []);
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
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: false }}
      >
        {dishes.popularDishes.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <PopularDishCard image={item.image} link={`${item.id}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularDishesSection;
