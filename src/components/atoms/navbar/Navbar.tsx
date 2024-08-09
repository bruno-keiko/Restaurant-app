import { FC } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

type NavBar = {
  title: string;
  href: string;
};
type NavBarProps = {
  navItems: NavBar[];
};

const NavBar: FC<NavBarProps> = ({ navItems }) => {
  return (
    <nav className={`${styles["navbar"]}`}>
      {navItems.map((items, index) => (
        <Link
          key={index}
          href={items.href}
          className={`${styles["navbar__items"]}`}
        >
          {items.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
