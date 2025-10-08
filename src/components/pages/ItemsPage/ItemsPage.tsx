"use client";
import React, { useState, useEffect } from "react";
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
  const [filteredItems, setFilteredItems] = useState(items);

  // Update filtered items when items prop changes
  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleSearch = (searchTerm: string): void => {
    if (!searchTerm.trim()) {
      setFilteredItems(items);
      return;
    }

    const filtered = items.filter(
      (item) =>
        item.dishname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredItems(filtered);
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
        {filteredItems.map((item, index) => {
          return <ItemCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ItemsPage;
