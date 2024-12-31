import React from "react";
import Image from "next/image";
import styles from "./ItemCard.module.scss";
const DiscountTwo = ({ discountTwo }: { discountTwo: string }) => {
  return (
    <div
      className={`${styles["discount-image-full-width"]} ${styles["discount-full-width"]}`}
      style={{ position: "relative" }}
    >
      <Image src={discountTwo} fill alt="discount offer" objectFit="cover" />
    </div>
  );
};

export default DiscountTwo;
