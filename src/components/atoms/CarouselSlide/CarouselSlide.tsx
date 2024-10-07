import styles from "./CarouselSlide.module.scss";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import SocialMediaBar from "../social-media-bar/SocialMediaBar";

interface SocialMedia {
  icon: string;
  href: string;
}
interface CarouselSlideProps {
  id: number;
  image: string;
  dishname: string;
  price: string;
  link: string;
  socialMedia: SocialMedia[];
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  id,
  image,
  dishname,
  price,
  link,
  socialMedia,
}) => {
  return (
    <SwiperSlide style={{ width: "1166px" }} key={id}>
      <div className={styles["swiper-slide"]}>
        <div className={styles["swiper-slide--main"]}>
          <div className={styles["swiper-slide--main--headings"]}>
            <h4>Best In Town</h4>
            <h2>
              Enjoy Our Chicken <span>{dishname}</span> Fast Food
            </h2>
          </div>
          <div className={styles["swiper-slide--main--image"]}>
            <img src={image} alt={dishname} />
          </div>
        </div>
        <div className={styles["swiper-slide--main--cta"]}>
          <Link href={link}>Order Now</Link>{" "}
          <p>
            Price: <span>${price}</span>
          </p>
        </div>
      </div>
      <div className={styles["swiper-slide--socials"]}>
        <SocialMediaBar size={"medium"} socialMedias={socialMedia} />
      </div>
    </SwiperSlide>
  );
};

export default CarouselSlide;
