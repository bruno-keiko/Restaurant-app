import React, { useState, useRef } from "react";
import styles from "./SpecialSection.module.scss";
import MainContainer from "../../atoms/mainContainer/MainContainer";
import SpecialCarousel from "../../molecules/SpecialCarousel";
import SpecialSectionTabs from "../../molecules/SpecialSectionTabs";
import type { SwiperRef } from "swiper/react";

const SpecialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const tabs = ["Breakfast", "Lunch", "Dinner", "Starters", "Beverages"];

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section className={styles["special-section"]}>
      <MainContainer>
        <div className={styles["special-section__container"]}>
          <p className={styles["special-section__upheading"]}>specials</p>
          <h2 className={styles["special-section__heading"]}>
            Check out our menu
          </h2>
          <p className={styles["special-section__subheading"]}>
            Demoralized by the charms of pleasure of the moment so blinded
            except to some advantage.
          </p>

          <SpecialSectionTabs
            handleTabClick={handleTabClick}
            activeIndex={activeIndex}
            tabs={tabs}
          />

          <SpecialCarousel
            tabsNumber={tabs.length}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            swiperRef={swiperRef}
          />
        </div>
      </MainContainer>
    </section>
  );
};

export default SpecialSection;
