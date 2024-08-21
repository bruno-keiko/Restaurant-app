import React from "react";
import styles from "./BranchCard.module.scss";
import Image from "next/image";
import InfoCard from "@/components/atoms/infoCard/InfoCard";

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
        <div className={styles["branch-card__info__info_block"]}>
          <InfoCard
            icon={
              <Image
                src="/icons/watch.svg"
                alt="Watch"
                width={20}
                height={20}
                className={styles["branch-card__info__info_block__icon"]}
              />
            }
            title={time}
          />
          <InfoCard
            icon={
              <Image
                src="/icons/phone.svg"
                alt="Phone"
                width={20}
                height={20}
                className={styles["branch-card__info__info_block__icon"]}
              />
            }
            title={tel}
          />
        </div>
        <a className={styles["branch-card__info__location"]} href={location}>
          Click to View Google Map
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
