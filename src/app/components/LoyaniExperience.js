"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHiking, FaCompass, FaMountain } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/loyaniExperience.module.css";

export default function LoyaniExperience() {
  const [currency, setCurrency] = useState("USD");
  const currencyRates = { USD: 1, EUR: 0.85, GBP: 0.75 };

  const experiences = [
    {
      id: "unparalleled-adventures",
      title: "Unparalleled Adventures",
      icon: <FaHiking />,
      description:
        "Step into the heart of Africa with Loyani Safaris. Our adventures are designed for explorers, dreamers, and those who seek the extraordinary.",
      image: "/images/cheetah-walking.jpg",
      duration: "7 Days",
      price: 3200,
    },
    {
      id: "guided-by-nature",
      title: "Guided by Nature",
      icon: <FaCompass />,
      description:
        "Let nature guide your journey. From the vast savannahs to the majestic mountains, every step uncovers a new world waiting to be explored.",
      image: "/images/giraffe-view.jpg",
      duration: "5 Days",
      price: 2700,
    },
    {
      id: "discover-the-peaks",
      title: "Discover the Peaks",
      icon: <FaMountain />,
      description:
        "Reach new heights with Loyani's mountain expeditions. Conquer the peaks and take in breathtaking views that are truly one-of-a-kind.",
      image: "/images/mount-kilimanjaro.jpg",
      duration: "8 Days",
      price: 4500,
    },
  ];

  const formatPrice = (price, currency) => {
    const convertedPrice = (price * currencyRates[currency]).toFixed(2);
    return `${currency} ${convertedPrice}`;
  };

  return (
    <section className={styles.loyaniExperience}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h2 className={styles.title}>The Loyani Experience</h2>
        <p className={styles.subtitle}>
          Embark on a journey like no other, where every moment is a step into
          the extraordinary.
        </p>

        <div className={styles.currencySelector}>
          <label htmlFor="currency">Choose your currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div className={styles.experienceGrid}>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={styles.experienceCard}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardIcon}>{experience.icon}</div>
              <h3 className={styles.cardTitle}>{experience.title}</h3>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={experience.image}
                  alt={experience.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className={styles.cardDescription}>{experience.description}</p>
              <div className={styles.cardDetails}>
                <span>Duration: {experience.duration}</span>
                <span>Price: {formatPrice(experience.price, currency)}</span>
              </div>
              <Link
                href={`/safaris/${experience.id}`}
                className={styles.exploreButton}
              >
                Explore
                <svg
                  className={styles.arrow}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
