import React from "react";
import styles from "./HighlightCard.module.scss";
import Link from "next/link";

interface HighlightCardProps {
  image: React.ReactElement<React.SVGProps<SVGSVGElement>>;
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
      <figure className={styles["highlight-card__image-box"]}>{image}</figure>

      <h3 className={styles["highlight-card__title"]}>{title}</h3>

      <p className={styles["highlight-card__description"]}>{description}</p>

      <Link
        className={styles["highlight-card__link"]}
        href={link}
        target="_blank"
      >
        Read More
      </Link>
    </article>
  );
};

export default HighlightCard;
