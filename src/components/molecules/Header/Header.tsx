import styles from "./Header.module.scss";

import BasketButton from "@/components/atoms/BasketButton";
import DeliveryOrderCard from "@/components/atoms/deliveryOrderCard";
import InfoCard from "@/components/atoms/infoCard";
import NavBar from "@/components/atoms/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles["header"]}>
      <section className={styles["header__top"]}>
        <div className={styles["header__top__info-box"]}>
          <InfoCard
            title="7.30 AM - 9.30 PM"
            icon={
              <Image
                src="icons/watch_icon.svg"
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
                src="icons/phone_icon.svg"
                alt="Phone icon"
                width={20}
                height={20}
              />
            }
          />
        </div>
        <Link href="#" className={styles["header__top__link"]}>
          Register
        </Link>
      </section>
      <section className={styles["header__bottom"]}>
        <Image
          src="icons/logo.png"
          alt="Plate and with spoon and fork"
          height={75}
          width={112}
          className={styles["header__bottom__logo"]}
        />
        <div className={styles["header__bottom__info-box"]}>
          <NavBar
            navItems={[
              { title: "Home", href: "/" },
              { title: "About", href: "/" },
              { title: "Items", href: "/" },
              { title: "Pages", href: "/" },
              { title: "Contact", href: "/" },
            ]}
          />

          <BasketButton count={2} />

          <DeliveryOrderCard title="Delivery Order" tel="+880 1630 225 015" />
          <Link href="#" className={styles["header__bottom__info-box__link"]}>
            Login
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
