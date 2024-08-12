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
    <div className={styles["contact-card"]}>
      <div className={styles["contact-info"]}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.tel}>{tel}</p>
      </div>
      <Image src={foodImage} alt={title} className={styles["food-image"]} />
    </div>
  );
};

export default DeliveryOrderCard;
