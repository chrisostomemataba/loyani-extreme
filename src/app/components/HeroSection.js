"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/heroSection.module.css";

const images = [
  "/images/guideselephant.jpg",
  "/images/elephantears.jpg",
  "/images/herd-elephant.jpg",
];

const headlines = [
  "Embark on a Journey of Discovery",
  "Witness Nature's Majestic Giants",
  "Experience the Heart of Africa",
];

const subheadlines = [
  "Where every step unveils a new wonder",
  "Unforgettable encounters in their natural habitat",
  "Immerse yourself in the rhythm of the wild",
];

export default function HeroSection({ onButtonClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt={`Safari landscape ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority={index === 0}
          className={`${styles.heroImage} ${
            index === currentImageIndex ? styles.active : ""
          }`}
        />
      ))}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heroTitle}>{headlines[currentImageIndex]}</h1>
          <p className={styles.heroSubtitle}>
            {subheadlines[currentImageIndex]}
          </p>
          <button onClick={onButtonClick} className={styles.heroButton}>
            Begin Your Safari
          </button>
        </div>
      </div>
    </section>
  );
}
