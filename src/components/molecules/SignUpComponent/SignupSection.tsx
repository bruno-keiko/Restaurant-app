import React from "react";
import Header from "../Header";
import BannerImage from "@/../../public/images/banner.png";
import CopyrightInfo from "@/components/atoms/CopyrightInfo";
import styles from "./SignupSection.module.scss";
import Link from "next/link";
import Banner from "@/components/atoms/Banner/Banner";
import Image from "next/image";
import InfoCard from "@/components/atoms/infoCard";

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
      <div className={styles["branch-section"]}>
        <h2>Our Branch</h2>
        <div className={styles.branches}>
          {["Robert Food", "Mark A. Reed Food", "Karie K. Hill Food"].map(
            (branch, index) => (
              <div key={index} className={styles.branch}>
                <h3>{branch}</h3>
                <div>
                  {
                    [
                      "1986 Hilltop DriveBorger, TX 79007",
                      "4877 Rose AvenueNew Orleans, LA 70112",
                      "1509 Peaceful LaneCleveland, OH 44115",
                    ][index]
                  }
                </div>
                <span>
                  <InfoCard
                    title="7.30 AM - 9.30 PM"
                    icon={
                      <Image
                        src="/icons/watch_icon.svg"
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
                        src="/icons/phone_icon.svg"
                        alt="Phone icon"
                        width={20}
                        height={20}
                      />
                    }
                  />
                </span>
                <a href="#">Click to View Google Map</a>
              </div>
            ),
          )}
        </div>
      </div>
      <CopyrightInfo text="Copyright © 2024 | Shaheen Uddin Ahmad" />
    </div>
  );
};

export default SignupSection;
