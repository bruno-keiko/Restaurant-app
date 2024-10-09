import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import SpecialCarouselItem from "../ScpecialCarouselItem/ScpecialCarouselItem";

import styles from "./SpecialCarousel.module.scss";
import "swiper/css";

export const menuItems = [
  {
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    name: "Gazpacho Garlic",
    price: 55,
  },
  {
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    name: "Gazpacho Garlic",
    price: 55,
  },
  {
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    name: "Gazpacho Garlic",
    price: 55,
  },
  {
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    name: "Gazpacho Garlic",
    price: 55,
  },
  {
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    name: "Gazpacho Garlic",
    price: 55,
  },
  {
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    name: "Gazpacho Garlic",
    price: 55,
  },
  {
    ingredients:
      "Marinated seabass with sour sauce, dill & coriander on bread.",
    name: "Gazpacho Garlic",
    price: 55,
  },
];

interface SpecialCarouselProps {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  swiperRef: React.RefObject<SwiperRef>;
  activeIndex: number;
  tabsNumber: number;
}

const SpecialCarousel: React.FC<SpecialCarouselProps> = ({
  setActiveIndex,
  swiperRef,
  activeIndex,
  tabsNumber,
}) => {
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className={styles.swiper}>
      <button
        disabled={activeIndex <= 0 ? true : false}
        onClick={handlePrev}
        className={`${styles["swiper__btn"]} ${styles[`swiper__btn--${activeIndex <= 0 ? "disabled" : ""}`]} ${styles["swiper__left-arrow-btn"]}`}
      >
        <Image
          className={styles["swiper__btn-icon"]}
          width={33.3}
          height={33.3}
          src={"/icons/left-arrow.svg"}
          alt="left arrow"
        />
      </button>

      <button
        disabled={activeIndex >= tabsNumber - 1 ? true : false}
        onClick={handleNext}
        className={`${styles["swiper__btn"]} ${styles[`swiper__btn--${activeIndex >= tabsNumber - 1 ? "disabled" : ""}`]}  ${styles["swiper__right-arrow-btn"]}`}
      >
        <Image
          className={styles["swiper__btn-icon"]}
          width={33.3}
          height={33.3}
          src={"/icons/right-arrow.svg"}
          alt="right arrow"
        />
      </button>

      <Swiper
        ref={swiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <SpecialCarouselItem
            menuItems={menuItems}
            imageUrl="/images/image_specials_1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCarouselItem
            menuItems={menuItems}
            imageUrl="/images/image_specials_1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCarouselItem
            menuItems={menuItems}
            imageUrl="/images/image_specials_1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCarouselItem
            menuItems={menuItems}
            imageUrl="/images/image_specials_1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCarouselItem
            menuItems={menuItems}
            imageUrl="/images/image_specials_1.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpecialCarousel;
