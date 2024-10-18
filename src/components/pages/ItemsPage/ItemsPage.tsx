import React, { SetStateAction } from "react";
import styles from "./ItemsPage.module.scss";
import SecondaryHeaderPages from "@/components/templates/SecondaryHeaderPages";
import SearchBar from "@/components/molecules/SearchBar";
import ItemCard from "@/components/atoms/ItemCard";

interface ItemsPageProps {
  items: {
    id: number;
    image: string;
    dishname: string;
    price: number;
    description: string;
    discountOne: string;
    discountTwo: string;
  }[];
}

const ItemsPage: React.FC<ItemsPageProps> = ({ items }) => {
  const handleSearch = (searchTerm: SetStateAction<string>): void => {
    alert(`Search ${searchTerm}`);
  };

  return (
    <div className={styles["items-page"]}>
      <SecondaryHeaderPages
        backgroundImg="/images/itemsheadbg.png"
        title="items"
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna."
      >
        <h3>It&apos;s the food and groceries you love, delivered</h3>
      </SecondaryHeaderPages>

      <div className={styles["items-page-searchbox"]}>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className={styles["items-page-container"]}>
        {items.map((item, index) => {
          return <ItemCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ItemsPage;
