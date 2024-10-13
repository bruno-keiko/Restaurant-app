"use client";

import React, { useState } from "react";
import Header from "../Header";
import BannerImage from "@/../../public/images/banner.png";
import CopyrightInfo from "@/components/atoms/CopyrightInfo";
import styles from "./AuthSection.module.scss";
import Banner from "@/components/atoms/Banner/Banner";
import BranchSection from "@/components/atoms/BranchSection";

interface AuthSectionProps {
  initialMode?: "login" | "signup";
}

const AuthSection: React.FC<AuthSectionProps> = ({ initialMode = "login" }) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  return (
    <div className={styles.container}>
      <Header />
      <Banner image={BannerImage} text="My Account" />
      <div className={styles.content}>
        <div className={styles.forms}>
          {mode === "login" ? (
            <div className={styles["login-form"]}>
              <h2>Login</h2>
              <form>
                <div className={styles["form-group"]}>
                  <label>Username or email address *</label>
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className={styles["form-group"]}>
                  <label>Password *</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                  />
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
                New user?{" "}
                <a href="#" onClick={toggleMode}>
                  sign up here...
                </a>
              </div>
            </div>
          ) : (
            <div className={styles["register-form"]}>
              <h2>Register</h2>
              <form>
                <div className={styles["form-group"]}>
                  <label>Email address *</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <p>
                  A link to set a new password will be sent to your email
                  address.
                </p>
                <button type="submit">Register</button>
              </form>
              <p className={styles["old-user"]}>
                Already have an account?{" "}
                <a href="#" onClick={toggleMode}>
                  login here...
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
      <BranchSection />
      <CopyrightInfo text="Copyright © 2024 | Shaheen Uddin Ahmad" />
    </div>
  );
};

export default AuthSection;
