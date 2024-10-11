"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../styles/safariExperiences.module.css";

export default function SafariExperiences() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const safaris = [
    {
      title: "Luxury Safari",
      image: "/images/elephantloyani1.jpg",
      description:
        "Experience the best of African wilderness in absolute luxury. Enjoy exclusive accommodations, private game drives, and gourmet dining under the stars.",
      duration: "7 Days",
      price: "$5,500",
      detailsLink: "/safaris/luxury-safaris",
      icon: "🏆",
    },
    {
      title: "Adventure Safari",
      image: "/images/zebrasafari.jpg",
      description:
        "Get up close and personal with Africa's most iconic animals. Ideal for thrill-seekers, this adventure safari includes walking tours, jeep safaris, and bush camping.",
      duration: "5 Days",
      price: "$3,200",
      detailsLink: "/safaris/adventure-safaris",
      icon: "🌿",
    },
    {
      title: "Cultural Safari",
      image: "/images/touristgiraffe.jpg",
      description:
        "Immerse yourself in the rich cultural history of Africa. Visit local tribes, explore ancient sites, and enjoy storytelling around a campfire.",
      duration: "6 Days",
      price: "$4,000",
      detailsLink: "/safaris/cultural-safaris",
      icon: "🏛️",
    },
    {
      title: "Photography Safari",
      image: "/images/lion-cubs.jpg",
      description:
        "Capture the raw beauty of African wildlife through your lens. Guided by expert photographers, perfect your skills in the most picturesque settings.",
      duration: "8 Days",
      price: "$4,800",
      detailsLink: "/safaris/photography-safaris",
      icon: "📸",
    },
  ];

  return (
    <section className={styles.safariExperiences}>
      <div className={styles.backgroundImage}></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h2 className={styles.title}>Our Safari Experiences</h2>
        <p className={styles.subtitle}>
          Embark on a journey of a lifetime with our curated safari adventures.
        </p>

        <div className={styles.cardGrid}>
          {safaris.map((safari, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className={styles.cardImageWrapper}>
                <Image
                  src={safari.image}
                  alt={safari.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
                <div className={styles.cardIcon}>{safari.icon}</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{safari.title}</h3>
                <p className={styles.cardDescription}>{safari.description}</p>
                <div className={styles.cardDetails}>
                  <span className={styles.cardDuration}>{safari.duration}</span>
                  <span className={styles.cardPrice}>{safari.price}</span>
                </div>
              </div>
              {hoveredCard === index && (
                <motion.div
                  className={styles.cardOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>
                    Discover the wonders of {safari.title.toLowerCase()} with
                    Loyani Tours
                  </p>
                  <Link href={safari.detailsLink} className={styles.cardButton}>
                    Explore This Safari
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
