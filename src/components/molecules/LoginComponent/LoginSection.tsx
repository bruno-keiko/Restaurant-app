import React from "react";
import Header from "../Header";
import BannerImage from "@/../../public/images/banner.png";
import CopyrightInfo from "@/components/atoms/CopyrightInfo";
import Link from "next/link";
import styles from "./LoginSection.module.scss";
import Banner from "@/components/atoms/Banner/Banner";
import BranchSection from "@/components/atoms/BranchSection";

const LoginSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner image={BannerImage} text="My Account" />

      <div className={styles.content}>
        <div className={styles.forms}>
          <div className={styles["login-form"]}>
            <h2>Login</h2>
            <form>
              <div className={styles["form-group"]}>
                <label>Username or email address *</label>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className={styles["form-group"]}>
                <label>Password *</label>
                <input type="password" placeholder="Enter password" required />
              </div>
              <button type="submit">Log in</button>
              <div className={styles.rememberMe}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className={styles["lost-password"]}>
                Lost your password?
              </a>
            </form>
            <div className={styles["new-user"]}>
              New user? <Link href="/signup">sign up here...</Link>
            </div>
          </div>
        </div>
      </div>
      <BranchSection />
      <CopyrightInfo text="Copyright © 2024 | Shaheen Uddin Ahmad" />
    </div>
  );
};

export default LoginSection;
