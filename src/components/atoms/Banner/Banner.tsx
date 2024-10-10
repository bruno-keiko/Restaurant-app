import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./Banner.module.scss";

type Props = {
  image: StaticImageData;
  text: string;
};

const Banner = ({ image, text }: Props) => {
  return (
    <div className={styles.banner}>
      <Image
        src={image}
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className={styles.overlay} />
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
