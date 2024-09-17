import Image from "next/image";
import React, { FC } from "react";
import styles from "./ReviewCard.module.scss";
import StarRating from "./StarRating";

type ReviewCard = {
  reviewer: string;
  comment: string;
  image: string;
  rate: number;
  isActive: boolean;
};

const ReviewCard: FC<ReviewCard> = ({
  reviewer,
  comment,
  image,
  rate,
  isActive,
}) => {
  const capitalizeFirstLetterOfEachWord = (str: string) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const limitWords = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div
      className={`${styles["card-container"]} ${!isActive && styles["do-opaque"]} `}
    >
      <Image
        src={image}
        alt="img"
        width={100}
        height={100}
        className={`${styles["card-img"]}`}
      />
      <h1 className={styles["card-heading"]}>
        {capitalizeFirstLetterOfEachWord(reviewer)}
      </h1>
      <p className={styles["card-comment"]}>{limitWords(comment, 20)}</p>
      <StarRating rating={rate} />
    </div>
  );
};

export default ReviewCard;
