import React, { FC, useState } from "react";
import ReviewCard from "./ReviewCard";
import "./ReviewCardCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/autoplay";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type ReviewCardType = {
  reviewer: string;
  comment: string;
  image: string;
  rate: number;
};

type ReviewCardProps = {
  reviewers: ReviewCardType[];
};

const ReviewCardCarousel: FC<ReviewCardProps> = ({ reviewers }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const slidesPerView = 3;

  return (
    <div className="review-card-container">
      <div className="headings">
        <h5>Testimonial</h5>
        <h2>
          <span>Review</span> from our guests
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={slidesPerView}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: false,
        }}
        centeredSlides={true}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {reviewers.length !== 0 ? (
          reviewers.map((reviewer, idx) => {
            const centerIndex = activeIndex;

            return (
              <SwiperSlide key={idx}>
                <ReviewCard
                  reviewer={reviewer.reviewer}
                  comment={reviewer.comment}
                  image={reviewer.image}
                  rate={reviewer.rate}
                  isActive={idx === centerIndex}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <h1>No reviewers!</h1>
        )}
      </Swiper>
    </div>
  );
};

export default ReviewCardCarousel;
