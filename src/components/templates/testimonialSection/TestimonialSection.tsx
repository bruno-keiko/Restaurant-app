"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./TestimonialSection.module.scss";
import TestimonialCard from "@/components/molecules/TestimonialCard/TestimonialCard";
const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <div className={styles["testimonial-section"]}>
      <p className={styles["testimonial-section__name"]}>Testimonial</p>
      <h2 className={styles["testimonial-section__heading"]}>
        <span>Review</span> form our guests
      </h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={2.5}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        initialSlide={1}
        pagination={{ clickable: true }}
        loop
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles["testimonial-section__swiper"]}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard
              name={"Bernadette R. Martin"}
              description={
                "Also very good and so was the service. I had the mushroom risotto with scallops which was awesome. My wife had a burger over greens ..."
              }
              isActive={index == currentSlide}
              rating={3}
              image={"/images/man.jpg"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
