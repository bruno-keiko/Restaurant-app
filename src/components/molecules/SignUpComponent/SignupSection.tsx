import React from "react";
import Header from "../Header";
import BannerImage from "@/../../public/images/banner.png";
import CopyrightInfo from "@/components/atoms/CopyrightInfo";
import styles from "./SignupSection.module.scss";
import Link from "next/link";
import Banner from "@/components/atoms/Banner/Banner";
import BranchSection from "@/components/atoms/BranchSection";

const SignupSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner image={BannerImage} text="My Account" />
      <div className={styles.content}>
        <div className={styles.forms}>
          <div className={styles["register-form"]}>
            <h2>Register</h2>
            <form>
              <div className={styles["form-group"]}>
                <label>Email address *</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <p>
                A link to set a new password will be sent to your email address.
              </p>
              <button type="submit">Register</button>

              <p className={styles["old-user"]}>
                Already have an account?{" "}
                <Link href={"/login"}>login here...</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <BranchSection />
      <CopyrightInfo text="Copyright © 2024 | Shaheen Uddin Ahmad" />
    </div>
  );
};

export default SignupSection;
