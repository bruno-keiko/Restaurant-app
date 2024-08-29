import React from "react";
import styles from "./SpecialServiceCard.module.scss";

export interface SpecialServiceCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const SpecialServiceCard: React.FC<SpecialServiceCardProps> = ({ title, description }) => {
  return (
    <article className={styles["service-card"]}>
      <div className={styles["service-card__Title"]}>{title}</div>
      <div className={styles["service-card__Description"]}>{description}</div>
    </article>
  );
};

export default SpecialServiceCard;
