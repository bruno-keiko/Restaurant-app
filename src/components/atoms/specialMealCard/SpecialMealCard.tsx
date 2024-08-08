import React from "react";
import styles from "./SpecialMealCard.module.scss";

interface SpecialMealCardProps {
  image: string;
  title: string;
}

const SpecialMealCard: React.FC<SpecialMealCardProps> = ({ image, title }) => {
  return (
    <article className={styles.card}>
      <figure className={styles["card__box"]}>
        <img src={image} alt={title} className={styles["card__box__img"]} />
        <figcaption className={styles["card__box__title"]}>{title}</figcaption>
      </figure>
    </article>
  );
};

export default SpecialMealCard;
