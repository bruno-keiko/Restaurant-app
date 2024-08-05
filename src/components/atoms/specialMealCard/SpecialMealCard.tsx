import React from "react";
import styles from "./SpecialMealCard.module.scss";

interface SpecialMealCardProps {
  image: string;
  title: string;
}

const SpecialMealCard: React.FC<SpecialMealCardProps> = ({ image, title }) => {
  return (
    <article className={styles.card}>
      <figure className={styles["card__img-box"]}>
        <img
          src={image}
          alt="Special meal image"
          className={styles["card__img-box__img"]}
        />
      </figure>
      <h3 className={styles["card__title"]}>{title}</h3>
    </article>
  );
};

export default SpecialMealCard;
