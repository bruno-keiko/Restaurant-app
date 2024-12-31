import React from "react";
import Image from "next/image";
import styles from "./ItemCard.module.scss";

const DiscountOne = ({ discountOne }: { discountOne: string }) => {
  return (
    <div
      className={`${styles["discount-image"]} ${styles["discount"]}`}
      style={{ position: "relative" }}
    >
      <Image src={discountOne} fill alt="discount offer" objectFit="cover" />
    </div>
  );
};

export default DiscountOne;
