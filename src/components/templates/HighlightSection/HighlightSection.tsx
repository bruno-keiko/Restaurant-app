import HighlightCard from '@/components/atoms/HighlightCard';
import React from 'react';
import styles from './HighlightSection.module.scss';

const HighlightSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.section__heading}>Why We are the best</h2>
      <div className={styles.section__content}>
        <HighlightCard
          image="icons/cooking.svg"
          title="Passionate Chefs"
          description="Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
          link="/"
          mode="secondary"
          badge={1}
        />
        <HighlightCard
          image="icons/highlight-icon.svg"
          title="100 % Fresh Foods"
          description="Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
          link="/"
          mode="primary"
          badge={2}
        />
        <HighlightCard
          image="icons/candle.svg"
          title="Memorable Ambience"
          description="Beguiled and demoralized by all get charms pleasure the moments ever so blinded by desire."
          link="/"
          mode="secondary"
          badge={3}
        />
      </div>
    </div>
  );
};

export default HighlightSection;
