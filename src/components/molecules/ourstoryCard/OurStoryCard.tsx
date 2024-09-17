import React, { ReactNode } from "react";
import styles from "./OurStoryCard.module.scss";
import Image from "next/image";

interface OurStoryCardProps {
  image: string;
  story: ReactNode;
  mode?: "primary" | "secondary";
}

const OurStoryCard: React.FC<OurStoryCardProps> = ({
  image,
  story,
  mode = "primary",
}) => {
  return (
    <div
      className={`${styles["ourstory-card"]} ${
        mode === "secondary"
          ? styles["ourstory-card--secondary"]
          : styles["ourstory-card--primary"]
      }`}
    >
      <div className={styles["ourstory-card__image"]}>
        <Image
          src={image}
          alt="Our Story"
          layout="responsive"
          width={511}
          height={294}
        />
      </div>
      <div className={styles["ourstory-card__info"]}>
        <div className={styles["ourstory-card__info__story"]} />
        {story}
      </div>
    </div>
  );
};

export default OurStoryCard;
