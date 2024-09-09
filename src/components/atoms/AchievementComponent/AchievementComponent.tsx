import React from "react";
import styles from "./AchievementComponent.module.scss";
import Image from "next/image";
import Button from "../button/Button";

interface AchievementProps {
  title: string;
  description: string;
  image: string;
}

const AchievementComponent: React.FC<AchievementProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className={`${styles["main-container"]}`}>
        <div className={`${styles["info-container"]}`}>
          <div className={`${styles["image-container"]}`}>
            <Image
              src={image}
              alt="achievement"
              className={`${styles["image"]}`}
              height={"50"}
              width={"50"}
            />
          </div>
          <div className={`${styles["main-content"]}`}>
            <h1 className={`${styles["header"]}`}>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <Button
          size="small"
          style={{
            borderRadius: "25px",
            width: "fit-content",
            marginLeft: "100px",
            paddingLeft: "0.75rem",
            paddingRight: "1rem",
            marginTop: "0.5rem",
          }}
        >
          Read More
          <svg className={`${styles["icon"]}`}>
            <image href="/icons/arrow_right.svg" />
          </svg>
        </Button>
      </div>
    </>
  );
};
export default AchievementComponent;
