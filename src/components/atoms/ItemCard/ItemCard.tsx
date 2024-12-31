import styles from "../../pages/ItemsPage/ItemsPage.module.scss";
import style from "./ItemCard.module.scss";
import React from "react";
import Image from "next/image";
import DiscountOne from "./DiscountOne";
import DiscountTwo from "./DiscountTwo";
interface ItemCardProps {
  id: number;
  image: string;
  dishname: string;
  price: number;
  description: string;
  discountOne: string;
  discountTwo: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  image,
  dishname,
  price,
  description,
  discountOne,
  discountTwo,
}) => {
  if (dishname) {
    return (
      <div className={`${styles["item-card"]} ${style["card"]}`} key={id}>
        <div className={`${styles["item-card-text"]} ${style["card-text"]}`}>
          <h3>{dishname}</h3>
          <p>{description}</p>
          <h4>
            From $<span>{price}</span>
          </h4>
        </div>
        <div className={`${styles["item-card-img"]} ${style["card-img"]}`}>
          <Image
            src={image}
            alt={dishname}
            className={styles["item-card-image"]}
            width="150"
            height="150"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    );
  } else if (discountOne) {
    return <DiscountOne discountOne={discountOne} />;
  } else if (discountTwo) {
    return <DiscountTwo discountTwo={discountTwo} />;
  }
};

export default ItemCard;
