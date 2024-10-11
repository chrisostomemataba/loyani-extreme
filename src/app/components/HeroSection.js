"use client";  // Ensure the component runs on the client side

import React from 'react';
import styles from '../../styles/heroSection.module.css';

export default function HeroSection({ onButtonClick }) {
  return (
    <section className={`${styles.hero} relative`}>
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/videos/giraffes.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`${styles.mistyOverlay} absolute inset-0`}></div>
      <div className={`${styles.overlay} absolute inset-0 flex items-center justify-center`}>
        <div className="text-center">
          <h1 className={`${styles.heroTitle} text-white text-5xl font-bold`}>
            Discover the Wonders of Loyani
          </h1>
          <p className={`${styles.heroSubtitle} text-white text-xl mt-4`}>
            Embark on an unforgettable safari experience with Loyani Tours & Safaris.
          </p>
          <button
            onClick={onButtonClick}  // Handle button click
            className={`${styles.heroButton} mt-8 bg-secondary text-white font-semibold py-2 px-6 rounded hover:bg-muted transition duration-300`}
          >
            Book Your Adventure
          </button>
        </div>
      </div>
    </section>
  );
}
