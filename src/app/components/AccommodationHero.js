"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/accommodationHero.module.css";

export default function AccommodationHero({
  title,
  subtitle,
  image,
  buttonText,
  onButtonClick,
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <button className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </section>
  );
}
