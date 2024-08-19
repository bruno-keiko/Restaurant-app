import React from "react";
import styles from "./InfoCard.module.scss";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string | React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title }) => {
  return (
    <article className={styles["info-card"]}>
      <div className={styles["info-card__icon"]}>
        <div className={styles["info-card__icon__box"]}>{icon}</div>
      </div>
      <div className={styles["info-card__title"]}>{title}</div>
    </article>
  );
};

export default InfoCard;
