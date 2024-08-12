import React from "react";
import styles from "./InfoCard.module.scss";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string | React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title }) => {
  return (
    <div className={styles["info-card"]}>
      <span className={styles["info-card__icon"]}>{icon}</span>
      <span className={styles["info-card__title"]}>{title}</span>
    </div>
  );
};

export default InfoCard;
