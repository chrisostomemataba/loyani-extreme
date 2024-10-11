"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import styles from "../../styles/testimonials.module.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback:
        "Loyani Safaris exceeded all of my expectations! The guides were incredibly knowledgeable, and the views were simply breathtaking.",
      image: "/images/tourist2giraffe.jpg",
      location: "United States",
    },
    {
      name: "Liam O'Connor",
      feedback:
        "The entire experience was magical. From the moment we landed, Loyani took care of everything. The wildlife, the culture, the accommodations—it was all top-notch.",
      image: "/images/guideselephant.jpg",
      location: "Ireland",
    },
    {
      name: "Aisha Mwangi",
      feedback:
        "This was my third safari, but Loyani was by far the best. The attention to detail, the stunning scenery, and the personalized service made it unforgettable.",
      image: "/images/lions.jpg",
      location: "Kenya",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={styles.testimonials}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>What Our Guests Say</h2>
        <p className={styles.subtitle}>
          Discover the experiences that make Loyani Safaris unforgettable
        </p>

        <div className={styles.testimonialCarousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className={styles.testimonialCard}
            >
              <FaQuoteLeft className={styles.quoteIcon} />
              <p className={styles.feedback}>
                {testimonials[currentIndex].feedback}
              </p>
              <div className={styles.author}>
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={80}
                  height={80}
                  className={styles.authorImage}
                />
                <div>
                  <h3 className={styles.authorName}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className={styles.authorLocation}>
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
