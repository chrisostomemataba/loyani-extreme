import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import styles from "../../styles/aboutHero.module.css";

const AboutHero = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/images/about-hero.jpg"
        alt="About Loyani Safaris"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <Button
          variant="contained"
          onClick={onButtonClick}
          className={styles.heroButton}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default AboutHero;
