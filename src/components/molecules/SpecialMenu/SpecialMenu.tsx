import React from "react";
import styles from "./SpecialMenu.module.scss";
import SpecialMealCard from "@/components/atoms/specialMealCard";

interface SpecialMenuProps {
  meals: { id: number; image: string; title: string }[];
}

const SpecialMenu: React.FC<SpecialMenuProps> = ({ meals }) => {
  return (
    <section className={styles["special-menu"]}>
      <h2 className={styles["special-menu__header"]}>
        SPECIALS MANU FOR ALL TIME
      </h2>
      <div className={styles["special-menu__meals-container"]}>
        {meals.map((meal) => (
          <SpecialMealCard
            image={meal.image}
            title={meal.title}
            key={meal.id}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialMenu;
