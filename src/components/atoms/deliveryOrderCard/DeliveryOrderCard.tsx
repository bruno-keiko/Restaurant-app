import React from "react";
import Image from "next/image";
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
      <div className={styles["delivery-card__info"]}>
        <h2 className={styles["delivery-card__info__title"]}>{title}</h2>
        <p className={styles["delivery-card__info__tel"]}>{tel}</p>
      </div>
      <Image
        src="/images/food.png"
        alt={title}
        width="100"
        height="100"
        className={styles["delivery-card__image"]}
      />
    </div>
  );
};

export default DeliveryOrderCard;
