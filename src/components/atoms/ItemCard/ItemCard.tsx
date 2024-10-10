import styles from "../../pages/ItemsPage/ItemsPage.module.scss";
import style from "./ItemCard.module.scss";
import React from "react";
import Image from "next/image";
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
            width="150"
            height="150"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    );
  } else if (discountOne) {
    return (
      <div
        className={`${styles["discount-image"]} ${style["discount"]}`}
        style={{ position: "relative" }}
      >
        <Image
          src={discountOne}
          fill
          alt="discount offer"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  } else if (discountTwo) {
    return (
      <div
        className={`${styles["discount-image-full-width"]} ${style["discount-full-width"]}`}
        style={{ position: "relative" }}
      >
        <Image
          src={discountTwo}
          fill
          alt="discount offer"
          style={{ objectFit: "cover" }}
        />
      </div>
    );
  }
};

export default ItemCard;
