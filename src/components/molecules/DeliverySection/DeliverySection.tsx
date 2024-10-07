import React from "react";
import DeliveryOrderCard from "@/components/atoms/deliveryOrderCard";
import Button from "@/components/atoms/button/Button";
import Image from "next/image";
import styles from "./DeliverySection.module.scss";

const DeliverySection = () => {
  return (
    <div className={styles["delivery-section"]}>
      <h2 className={styles["delivery-section__sectionTitle"]}>Delivery</h2>
      <div className={styles["delivery-section__content"]}>
        <div className={styles["delivery-section__left"]}>
          <h2 className={styles["delivery-section__left__title"]}>
            A Moments Of <span>Delivered On Right Time & Place</span>
          </h2>
          <p>
            Food Khan is a restaurant, bar and coffee roastery located on a busy
            corner site in Farringdon&apos;s Exmouth Market. With glazed
            frontage on two sides of the building, overlooking the market and a
            bustling London inteon.
          </p>
          <div className={styles["delivery-section__delivery-order-card"]}>
            <DeliveryOrderCard title="Delivery Order" tel="+880 1630 225 015" />
            <Button
              size="small"
              style={{
                height: "50px",
                minWidth: "159px",
                fontSize: "25px",
                fontWeight: "400",
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
        <Image
          src="/images/image_delivery_section.png"
          alt={"food delivery"}
          width="447"
          height="330"
        />
      </div>
    </div>
  );
};

export default DeliverySection;
