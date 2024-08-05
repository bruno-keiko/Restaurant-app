import React from "react";
import styles from "./CopyrightInfo.module.scss";

interface CopyrightInfoProps {
  text: string;
}

const CopyrightInfo: React.FC<CopyrightInfoProps> = ({ text }) => {
  return (
    <div className={`${styles.copyrightInfo}`}>
      <span>{text}</span>
    </div>
  );
};

export default CopyrightInfo;
