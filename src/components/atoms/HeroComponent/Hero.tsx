import React from "react";
import styles from "./Hero.module.scss";

interface HeroProps {
  image: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ image, title, subtitle }) => {
  return (
    <div
      className={styles["text-container"]}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  );
};

export default Hero;
