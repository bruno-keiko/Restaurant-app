import React from "react";
import Image from "next/image";
import foodImage from "./images/food.png";
import styles from "./DeliveryOrderCard.module.scss";

interface DeliveryOrderCardProps {
  title: string;
  tel: string;
}

const DeliveryOrderCard: React.FC<DeliveryOrderCardProps> = ({
  title,
  tel,
}) => {
  return (
    <div className={styles["delivery-card"]}>
      <div className={styles["delievry-card__info"]}>
        <h2 className={styles["delivery-card__info__title"]}>{title}</h2>
        <p className={styles["delivery-card__info__tel"]}>{tel}</p>
      </div>
      <Image
        src={foodImage}
        alt={title}
        className={styles["delivery-order__image"]}
      />
    </div>
  );
};

export default DeliveryOrderCard;
