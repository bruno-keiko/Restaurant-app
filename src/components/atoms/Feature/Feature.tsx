import React from "react";
import styles from "./Feature.module.scss";
import Image from "next/image";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
  children: React.ReactNode;
  number: number;
}

const Feature: React.FC<FeatureProps> = ({
  image,
  title,
  description,
  children,
  number,
}) => {
  return (
    <div className={styles["feature"]}>
      <div className={styles["feature__image-box"]}>
        <Image
          src={image}
          alt="feature image"
          height={80}
          width={80}
          className={styles["feature__image-box__image"]}
        />
        <div>{number}</div>
      </div>

      <h3 className={styles["feature__title"]}>{title}</h3>

      <p className={styles["feature__description"]}>{description}</p>
      <div className={styles["feature__button"]}>{children}</div>
    </div>
  );
};

export default Feature;
