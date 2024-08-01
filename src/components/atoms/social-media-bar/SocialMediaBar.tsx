import React, { FC } from "react";
import Image from "next/image";
import styles from "./SocialMediaBar.module.scss";
import Link from "next/link";

type SocialMedia = {
  icon: string;
  href: string;
};

type SocialMediaBarProps = {
  socialMedias: SocialMedia[];
  size?: "small" | "medium" | "large";
};

const SocialMediaBar: FC<SocialMediaBarProps> = ({
  socialMedias,
  size = "medium",
}) => {
  return (
    <div
      className={`${styles["social-media-bar"]} ${styles[`social-media-bar--${size}`]}`}
    >
      {socialMedias.map((socialMedia, index) => (
        <Link href={socialMedia.href} key={index}>
          <Image src={socialMedia.icon} alt="icon" width={25} height={25} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaBar;
