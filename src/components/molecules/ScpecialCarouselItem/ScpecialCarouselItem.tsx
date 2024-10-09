import MenuItem, { MenuItemProps } from "@/components/atoms/menuItem/MenuItem";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./ScpecialCarouselItem.module.scss";

interface SpecialCarouselItemsProps {
  menuItems: MenuItemProps[];
  imageUrl: string;
}

const SpecialCarouselItem: React.FC<SpecialCarouselItemsProps> = ({
  menuItems = [],
  imageUrl,
}) => {
  return (
    <div className={styles["carousel-item"]}>
      <div className={styles["carousel-item__cta"]}>
        <div className={styles["carousel-item__img-wrapper"]}>
          <Image
            className={styles["carousel-item__img"]}
            src={imageUrl}
            height={615}
            width={489}
            alt="breakfast image"
          />
        </div>
        <Link className={styles["carousel-item__link"]} href={"#"}>
          <span>VIEW ALL MENU</span>
          <Image
            className={styles["carousel-item__arrow-icon"]}
            src={"/icons/Vector.svg"}
            width={33.3}
            height={33.3}
            alt="right arrow icon"
          />
        </Link>
      </div>

      <div className={styles["carousel-item__menu"]}>
        {menuItems.map((menuItem) => (
          <MenuItem
            name={menuItem.name}
            ingredients={menuItem.ingredients}
            price={menuItem.price}
            key={menuItem.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialCarouselItem;
