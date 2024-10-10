import React from "react";
import styles from "./ItemsPage.module.scss";
import SecondaryHeaderPages from "@/components/templates/SecondaryHeaderPages";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";

interface ItemsPageProps {}

const ItemsPage: React.FC<ItemsPageProps> = () => {
  const handleSearch = (searchTerm: string) => {
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
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default ItemsPage;
