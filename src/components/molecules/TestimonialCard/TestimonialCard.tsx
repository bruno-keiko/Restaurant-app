import Image from "next/image";
import React from "react";
import styles from "./TestimonialCard.module.scss";
import Stars from "../stars/Stars";

interface TestimonialCardProps {
  name: string;
  description: string;
  rating: number;
  image: string;
  isActive?: boolean;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  description,
  rating,
  image,
  isActive = true,
}) => {
  return (
    <div className={`${styles.card} ${isActive ? "" : styles["card--blur"]}`}>
      <Image
        src={image}
        width={100}
        height={100}
        className={styles["card__image"]}
        alt={""}
      />
      <h2 className={styles["card__name"]}> {name}</h2>
      <p className={styles["card__description"]}>{description}</p>
      <div className={styles["card__rating"]}>
        <Stars count={rating} />
      </div>
    </div>
  );
};

export default TestimonialCard;
