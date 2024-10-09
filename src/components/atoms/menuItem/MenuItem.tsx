import React from "react";
import styles from "./MenuItem.module.scss";

export interface MenuItemProps {
  name: string;
  ingredients: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, ingredients, price }) => {
  return (
    <div className={styles["menu-item"]}>
      <div className={styles["menu-item__info-box"]}>
        <h4 className={styles["menu-item__info-box__title"]}>{name}</h4>
        <p className={styles["menu-item__info-box__ingredients"]}>
          {ingredients}
        </p>
      </div>
      <div className={styles["menu-item__price-box"]}>
        <span>{`$${price}`}</span>
      </div>
    </div>
  );
};

export default MenuItem;
