import React from "react";
import styles from "./SpecialSectionTabs.module.scss";

interface SpecialSectionTabsProps {
  activeIndex: number;
  handleTabClick: (index: number) => void;
  tabs: string[];
}

const SpecialSectionTabs: React.FC<SpecialSectionTabsProps> = ({
  activeIndex,
  handleTabClick,
  tabs,
}) => {
  return (
    <ul className={styles["tabs"]}>
      {tabs.map((tab, index) => (
        <li key={index} className={styles["tabs__tab-wrapper"]}>
          <button
            className={`${styles["tabs__tab"]} ${
              index === activeIndex ? styles["tabs__tab--active"] : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SpecialSectionTabs;
