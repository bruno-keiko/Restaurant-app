import React from "react";
import styles from "./ItemsPage.module.scss";

interface ItemsPageProps {}

const ItemsPage: React.FC<ItemsPageProps> = () => {
  return (
    <div className={styles["items-page"]}>
      <section className={styles["secondary-header"]}>
        <div className={styles["secondary-header--textContent"]}>
          <h2>Items</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            mod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </section>
      <h3>It&apos;s the food and groceries you love, delivered</h3>
      <section></section>
      <section></section>
    </div>
  );
};

export default ItemsPage;
