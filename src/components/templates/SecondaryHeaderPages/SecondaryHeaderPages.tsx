import React from "react";
import styles from "./SecondaryHeaderPages.module.scss";

type SecondaryHeaderProps = {
  title: string;
  textContent: string;
  backgroundImg: string;
  children: React.ReactNode;
};

const SecondaryHeaderPages: React.FC<SecondaryHeaderProps> = ({
  title,
  textContent,
  backgroundImg,
  children,
}) => {
  return (
    <>
      <section
        className={styles["secondary-header"]}
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className={styles["secondary-header--textContent"]}>
          <h2>{title}</h2>
          <p>{textContent}</p>
        </div>
      </section>
      {children}
    </>
  );
};

export default SecondaryHeaderPages;
