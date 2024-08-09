import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

type NavBar = {
  title: string;
  href: string;
};
type NavBarProps = {
  navItems: NavBar[];
  size?: "small" | "medium" | "large";
};
export default function Navbar({ navItems, size = "medium" }: NavBarProps) {
  return (
    <nav className={`${styles["navbar"]} ${styles[`navbar--${size}`]}`}>
      {navItems.map((items, index) => (
        <Link key={index} href={items.href} className={`${styles["items"]}`}>
          {items.title}
        </Link>
      ))}
    </nav>
  );
}
