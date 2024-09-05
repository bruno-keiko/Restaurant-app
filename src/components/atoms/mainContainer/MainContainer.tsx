import React from "react";
import styles from "./MainContainer.module.scss";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default MainContainer;
