import React from "react";
import styles from "./PopularDishesSection.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularDishesSection = () => {
  return (
    <div className={styles["popular-dishes-section"]}>
      <p>Food Items</p>
      <h2>Popular Dishes</h2>
      <Swiper>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularDishesSection;
