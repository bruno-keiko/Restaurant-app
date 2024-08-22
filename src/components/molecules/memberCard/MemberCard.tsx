import React from "react";
import styles from "./MemberCard.module.scss";
import Image from "next/image";
import SocialMediaBar from "@/components/atoms/social-media-bar/SocialMediaBar";

interface SocialMedia {
  icon: string;
  href: string;
}

interface MemberCardProps {
  name: string;
  about: string;
  image: string;
  socialMedia: SocialMedia[];
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  about,
  image,
  socialMedia,
}) => {
  return (
    <div className={styles["member-card"]}>
      <div className={styles["member-card__image"]}>
        <Image src={image} alt={`${name}'s picture`} width={180} height={180} />
      </div>
      <div className={styles["member-card__info"]}>
        <h3 className={styles["member-card__info__name"]}>{name}</h3>
        <p className={styles["member-card__info__about"]}>{about}</p>
      </div>
      <div className={styles["member-card__social-media"]}>
        <SocialMediaBar size="medium" socialMedias={socialMedia} />
      </div>
    </div>
  );
};

export default MemberCard;
