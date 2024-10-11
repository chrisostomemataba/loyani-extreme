"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/heroSection.module.css";

export default function SafariHero({
  title,
  subtitle,
  image,
  buttonText,
  onButtonClick,
}) {
  return (
    <section className={`${styles.hero} relative`}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={`${styles.mistyOverlay} absolute inset-0`}></div>
      <div
        className={`${styles.overlay} absolute inset-0 flex items-center justify-center`}
      >
        <div className="text-center">
          <h1 className={`${styles.heroTitle} text-white text-5xl font-bold`}>
            {title}
          </h1>
          <p className={`${styles.heroSubtitle} text-white text-xl mt-4`}>
            {subtitle}
          </p>
          <button
            onClick={onButtonClick} // Trigger booking modal on click
            className={`${styles.heroButton} mt-8 bg-secondary text-white font-semibold py-2 px-6 rounded hover:bg-muted transition duration-300`}
          >
            {buttonText || "Book Your Adventure"}
          </button>
        </div>
      </div>
    </section>
  );
}
