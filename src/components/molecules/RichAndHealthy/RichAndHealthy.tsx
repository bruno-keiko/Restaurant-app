import React from "react";
import styles from "./RichAndHealthy.module.scss";
import Image from "next/image";
import Link from "next/link";

const RichAndHealthy: React.FC = () => {
  return (
    <section className={styles["rich-and-healthy"]}>
      <p className={styles["rich-and-healthy__subheading"]}>RICH & HEALTHY</p>
      <div className={styles["rich-and-healthy__inner-box"]}>
        <Image
          width={361}
          height={600}
          src={"/images/image_richHealthy_1.png"}
          alt="a chef cooking meal"
          className={styles["rich-and-healthy__image-1"]}
        />
        <div>
          <h2 className={styles["rich-and-healthy__heading"]}>
            Highest quality artisangrains, proteins & seasonal ingredients
          </h2>
          <p className={styles["rich-and-healthy__text"]}>
            Righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desires, that they cannot foresee.
          </p>
          <div className={styles["rich-and-healthy__feature-and-contact"]}>
            <div className={styles["rich-and-healthy__features-wrapper"]}>
              <ul className={styles["rich-and-healthy__features"]}>
                <li className={styles["rich-and-healthy__feature-item"]}>
                  <Image
                    width={20}
                    height={20}
                    src={"/icons/red_star.svg"}
                    alt="red star"
                  />
                  <p className={styles["rich-and-healthy__feature-item__text"]}>
                    Simple and easy to distinguish
                  </p>
                </li>
                <li className={styles["rich-and-healthy__feature-item"]}>
                  <Image
                    width={20}
                    height={20}
                    src={"/icons/red_star.svg"}
                    alt="red star"
                  />
                  <p className={styles["rich-and-healthy__feature-item__text"]}>
                    Pleasure of the momentblinded desire
                  </p>
                </li>
                <li className={styles["rich-and-healthy__feature-item"]}>
                  <Image
                    width={20}
                    height={20}
                    src={"/icons/red_star.svg"}
                    alt="red star"
                  />
                  <p className={styles["rich-and-healthy__feature-item__text"]}>
                    Able to do what we like best
                  </p>
                </li>
              </ul>
              <div className={styles["rich-and-healthy__link-wrapper"]}>
                <Link href={"#"} className={styles["rich-and-healthy__link"]}>
                  Read More
                </Link>
              </div>
            </div>
            <Image
              className={styles["rich-and-healthy__image-2"]}
              width={359}
              height={377}
              src={"/images/image_richHealthy_2.png"}
              alt="someone eating meal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichAndHealthy;
