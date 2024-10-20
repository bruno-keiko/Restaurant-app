import React from "react";
import InfoCard from "../infoCard";
import Image from "next/image";
import styles from "./BranchSection.module.scss";

const BranchSection = () => {
  return (
    <div className={styles["branch-section"]}>
      <div className={styles.branches}>
        {["Robert Food", "Mark A. Reed Food", "Karie K. Hill Food"].map(
          (branch, index) => (
            <div key={index} className={styles.branch}>
              <h3>{branch}</h3>
              <div className={styles.address}>
                {
                  [
                    "1986 Hilltop DriveBorger, TX 79007",
                    "4877 Rose AvenueNew Orleans, LA 70112",
                    "1509 Peaceful LaneCleveland, OH 44115",
                  ][index]
                }
              </div>
              <div className={styles["info-box"]}>
                <InfoCard
                  title="7.30 AM - 9.30 PM"
                  icon={
                    <Image
                      src="/icons/watch_icon.svg"
                      alt="Watch icon"
                      width={20}
                      height={20}
                    />
                  }
                />
                <InfoCard
                  title="+880 1630 225 015"
                  icon={
                    <Image
                      src="/icons/phone_icon.svg"
                      alt="Phone icon"
                      width={20}
                      height={20}
                    />
                  }
                />
              </div>
              <a href="#" className={styles.link}>
                Click to View Google Map
              </a>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default BranchSection;
