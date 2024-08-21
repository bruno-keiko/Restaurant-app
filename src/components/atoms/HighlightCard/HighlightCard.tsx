import React from "react";
import styles from "./HighlightCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface HighlightCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <article className={styles["highlight-card"]}>
      <figure className={styles["highlight-card__image-box"]}>
        <Image src={image} alt="Card icon" width={80} height={80} />
      </figure>

      <h3 className={styles["highlight-card__title"]}>{title}</h3>

      <p className={styles["highlight-card__description"]}>{description}</p>

      <Link className={styles["highlight-card__link"]} href={link}>
        Read More
      </Link>
    </article>
  );
};

export default HighlightCard;
