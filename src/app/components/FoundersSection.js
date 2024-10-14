import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../styles/foundersSection.module.css";

const foundersData = [
  {
    name: "Moses",
    role: "Co-founder & CEO",
    image: "/images/black-businessman.png",
    biography:
      "Moses is an avid adventurer and nature enthusiast, passionate about creating unforgettable safari experiences.",
    quote: "Every safari is a story waiting to be told.",
  },
  {
    name: "Ibrahim",
    role: "Co-founder & COO",
    image: "/images/black-businessman.png",
    biography:
      "Ibrahim is a logistics mastermind, ensuring every Loyani safari runs smoothly. His love for the African wilderness is unmatched.",
    quote: "In the heart of the wild, we find our true selves.",
  },
];

const FoundersSection = () => {
  return (
    <section className={styles.foundersSection}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.sectionTitle}
        >
          The Visionaries Behind Loyani Safaris
        </motion.h2>

        <div className={styles.foundersGrid}>
          {foundersData.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={styles.founderCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={founder.image}
                  alt={`${founder.name} - Founder`}
                  layout="fill"
                  objectFit="cover"
                  className={styles.founderImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.founderName}>{founder.name}</h3>
                <p className={styles.founderRole}>{founder.role}</p>
                <p className={styles.founderBio}>{founder.biography}</p>
                <div className={styles.quoteWrapper}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <p className={styles.founderQuote}>{founder.quote}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.storySection}
        >
          <h3 className={styles.storyTitle}>Our Story</h3>
          <p className={styles.storyText}>
            At Loyani Safaris, we bring the untamed wilderness of Africa closer
            to you. With years of experience, our dedicated team offers the most
            personalized safari experience, ensuring you leave with memories
            that last a lifetime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersSection;
