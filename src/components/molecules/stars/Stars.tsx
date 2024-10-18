import React, { FC } from "react";
import styles from "./Stars.module.scss";
interface StarsProps {
  count: number;
}
const Stars: FC<StarsProps> = ({ count }) => {
  return (
    <div className={styles["stars"]}>
      {[...Array(5)].map((_, i) => {
        if (i >= count)
          return (
            <svg
              width="20"
              height="19"
              key={i}
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.986922L12.2156 4.7574L12.3855 5.04649L12.7174 4.99906L17.0467 4.38044L15.4802 8.46353L15.3601 8.77658L15.6042 9.00653L18.7871 12.0056L14.6181 13.3266L14.2985 13.4279L14.2709 13.7621L13.9106 18.1205L10.2785 15.6847L10 15.498L9.72152 15.6847L6.08937 18.1205L5.72913 13.7621L5.70151 13.4279L5.38186 13.3266L1.2129 12.0056L4.39583 9.00653L4.63987 8.77658L4.51976 8.46353L2.95329 4.38044L7.28258 4.99906L7.61452 5.04649L7.78439 4.7574L10 0.986922Z"
                fill="#FFF8EE"
                stroke="#CC3333"
              />
            </svg>
          );

        return (
          <svg
            width="20"
            height="19"
            key={i}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0L12.6467 4.50409L17.8183 3.7651L15.9471 8.64262L19.7493 12.2252L14.7692 13.8033L14.3388 19.0097L10 16.1L5.66116 19.0097L5.23083 13.8033L0.250721 12.2252L4.05294 8.64262L2.18168 3.7651L7.35331 4.50409L10 0Z"
              fill="#CC3333"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Stars;
