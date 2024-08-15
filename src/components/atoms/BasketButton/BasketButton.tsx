import React from "react";
import styles from "./BasketButton.module.scss";
import Image from "next/image";

interface BasketButtonProps {
  count: number;
}

const BasketButton: React.FC<BasketButtonProps> = ({ count }) => {
  return (
    <button className={styles["basket-button"]}>
      <span className={styles["basket-button__count"]}>{count}</span>
      <Image
        src="icons/cart_icon.svg"
        alt="Cart icon"
        width={35}
        height={35}
        className={styles["basket-button__icon"]}
      />
    </button>
  );
};

export default BasketButton;
