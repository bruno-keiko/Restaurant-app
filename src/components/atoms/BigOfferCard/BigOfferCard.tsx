import React from "react";
import styles from "./BigOfferCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface BigOfferCardProps {
  image: string;
  link: string;
}

const BigOfferCard: React.FC<BigOfferCardProps> = ({ image, link }) => {
  return (
    <figure className={styles["big-offer-card"]}>
      <Link href={link} className={styles["big-offer-card__link"]}>
        <Image
          src={image}
          alt="Big offer"
          height={200}
          width={560}
          className={styles["big-offer-card__link__img"]}
        />
      </Link>
    </figure>
  );
};

export default BigOfferCard;
