import React from "react";
import styles from "./BranchCard.module.scss";
import Image from "next/image";

interface BranchCardProps {
  name: string;
  address: string;
  time: string;
  location: string;
  tel: string;
}

const BranchCard: React.FC<BranchCardProps> = ({
  name,
  address,
  time,
  tel,
  location,
}) => {
  return (
    <div className={styles["branch-card"]}>
      <div className={styles["branch-card__info"]}>
        <h3 className={styles["branch-card__info__name"]}>{name}</h3>
        <p className={styles["branch-card__info__address"]}>{address}</p>
        <p className={styles["branch-card__info__info_block"]}>
          <span className={styles["branch-card__info__info_block__time"]}>
            <Image
              src="/icons/watch.svg"
              alt="Phone"
              width={20}
              height={20}
              className={styles["branch-card__info__info_block__tel__icon"]}
            />
            {time}
          </span>
          <span className={styles["branch-card__info__info_block__tel"]}>
            <Image
              src="/icons/phone.svg"
              alt="Phone"
              width={20}
              height={20}
              className={styles["branch-card__info__info_block__tel__icon"]}
            />
            {tel}
          </span>
        </p>
        <a className={styles["branch-card__info__location"]} href={location}>
          Click to View Google Map
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
