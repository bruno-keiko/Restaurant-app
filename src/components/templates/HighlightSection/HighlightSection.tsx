import HighlightCard from "@/components/atoms/HighlightCard";
import React from "react";
import styles from "./HighlightSection.module.scss";

const HighlightSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.section__heading}>Why We are the best</h2>
      <div className={styles.section__content}>
        <HighlightCard
          image="icons/highlight-icon.svg"
          title="100 % Fresh Foods"
          description="Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
          link="/"
          mode="secondary"
        />
        <HighlightCard
          image="icons/highlight-icon.svg"
          title="100 % Fresh Foods"
          description="Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
          link="/"
          mode="primary"
        />
        <HighlightCard
          image="icons/highlight-icon.svg"
          title="100 % Fresh Foods"
          description="Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
          link="/"
          mode="secondary"
        />
      </div>
    </div>
  );
};

export default HighlightSection;
