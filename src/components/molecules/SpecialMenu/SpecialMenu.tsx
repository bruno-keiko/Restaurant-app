import React from "react";
import styles from "./SpecialMenu.module.scss";
import SpecialMealCard from "@/components/atoms/specialMealCard";
import MainContainer from "@/components/atoms/mainContainer/MainContainer";

interface SpecialMenuProps {
  meals: { id: number; image: string; title: string }[];
}

const SpecialMenu: React.FC<SpecialMenuProps> = ({ meals }) => {
  return (
    <section className={styles["special-menu"]}>
      <MainContainer>
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
      </MainContainer>
    </section>
  );
};

export default SpecialMenu;
