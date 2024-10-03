import React, { FC } from "react";
import styles from "./PopularDishCard.module.scss";
import Link from "next/link";
import Image from "next/image";

type PopularDishCardProps = {
  image: string;
  link: string;
};

const PopularDishCard: FC<PopularDishCardProps> = ({ image, link }) => {
  return (
    <Link href={link}>
      <Image
        src={image}
        width={229}
        height={120}
        alt="Popular dish"
        className={styles["popular-dish"]}
      />
    </Link>
  );
};

export default PopularDishCard;
