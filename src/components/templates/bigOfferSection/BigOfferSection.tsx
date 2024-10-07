"use client";
import React from "react";
import styles from "./BigOfferSection.module.scss";
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
import BigOfferCard from "@/components/atoms/BigOfferCard";

const BigOfferSection = () => {
  return (
    <div className={styles["big-offer-section"]}>
      {" "}
      <h2 className={styles["big-offer-section__heading"]}>Big Offer</h2>
      <p className={styles["big-offer-section__subheading"]}>
        For in this week, take your food, buy your best one.
      </p>
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={18}
        slidesPerView={2}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        initialSlide={1}
        loop
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: false }}
      >
        <SwiperSlide>
          <BigOfferCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
        <SwiperSlide>
          <BigOfferCard image="/images/popular_image.png" link={"#"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BigOfferSection;
