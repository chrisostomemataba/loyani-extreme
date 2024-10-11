"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/wildlifeShowcase.module.css";

export default function WildlifeShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const wildlife = [
    {
      title: "Lions of Serengeti",
      image: "/images/lion-cubs.jpg",
      description:
        "Witness the mighty kings of the savannah as they roam the vast plains of Serengeti. A rare and unforgettable encounter.",
      duration: "3 Days",
      detailsLink: "/safaris/lions-of-serengeti",
      fact: "Lions can sleep up to 20 hours a day!",
    },
    {
      title: "The Elephant Herd",
      image: "/images/herd-elephant.jpg",
      description:
        "Travel alongside herds of majestic elephants, the largest land animals, as they move gracefully through their natural habitat.",
      duration: "5 Days",
      detailsLink: "/safaris/elephant-herd",
      fact: "Elephants can communicate over long distances using infrasound.",
    },
    {
      title: "Cheetahs in Action",
      image: "/images/cheetah-walking.jpg",
      description:
        "Watch cheetahs sprint through the savannah in search of prey, showcasing the fastest land speed in the animal kingdom.",
      duration: "4 Days",
      detailsLink: "/safaris/cheetahs-in-action",
      fact: "Cheetahs can accelerate from 0 to 60 mph in just 3 seconds!",
    },
    {
      title: "Graceful Giraffes",
      image: "/images/giraffe-view.jpg",
      description:
        "Observe the elegance of giraffes as they tower over the landscape, their long necks gracefully sweeping across the treetops.",
      duration: "3 Days",
      detailsLink: "/safaris/graceful-giraffes",
      fact: "A giraffe's spots are like human fingerprints - no two patterns are the same.",
    },
    {
      title: "The Flamingo Paradise",
      image: "/images/flamingo-lake.jpg",
      description:
        "Discover flocks of flamingos as they paint the lakes with their vibrant pink hues—a sight to behold in the wetlands of Africa.",
      duration: "2 Days",
      detailsLink: "/tours/flamingo-paradise",
      fact: "Flamingos get their pink color from the food they eat!",
    },
    {
      title: "Sleeping Lions",
      image: "/images/sleeping-lion.jpg",
      description:
        "Experience the tranquility of lions as they rest in the shade, conserving energy for their next hunt in the wild savannah.",
      duration: "3 Days",
      detailsLink: "/safaris/sleeping-lions",
      fact: "A lion's roar can be heard up to 5 miles away!",
    },
  ];

  return (
    <section className={styles.wildlifeShowcase}>
      <div className={styles.backgroundImage}></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h2 className={styles.title}>Meet the Majestic Wildlife</h2>
        <p className={styles.subtitle}>
          Embark on a journey to witness natures most awe-inspiring creatures
          in their natural habitats.
        </p>

        <div className={styles.cardGrid}>
          {wildlife.map((animal, index) => (
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
                  src={animal.image}
                  alt={animal.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
                <div className={styles.cardDuration}>{animal.duration}</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{animal.title}</h3>
                <p className={styles.cardDescription}>{animal.description}</p>
              </div>
              {hoveredCard === index && (
                <motion.div
                  className={styles.cardOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={styles.funFact}>Fun Fact: {animal.fact}</p>
                  <a href={animal.detailsLink} className={styles.cardButton}>
                    Explore This Tour
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
