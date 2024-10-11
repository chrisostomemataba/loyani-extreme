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
    <section className={`${styles.hero} relative h-screen`}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className={`${styles.overlay} absolute inset-0`}></div>

      <div className="relative z-10 text-center flex flex-col justify-center items-center h-full px-6">
        <h1 className="text-white text-5xl font-bold">{title}</h1>
        <p className="text-white text-xl mt-4">{subtitle}</p>

        {/* Button */}
        <button
          className="mt-8 bg-secondary text-white py-2 px-6 rounded-lg hover:bg-muted transition duration-300"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
