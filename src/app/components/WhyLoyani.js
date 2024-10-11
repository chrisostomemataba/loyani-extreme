"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaLeaf,
  FaMapMarkedAlt,
  FaBinoculars,
  FaQuoteLeft,
} from "react-icons/fa";
import styles from "../../styles/whyLoyani.module.css";

export default function WhyLoyani() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/elephantshero.jpg",
    "/images/giraffeloyani.jpg",
    "/images/zebrasafari.jpg",
    "/images/touristgiraffe.jpg",
    "/images/guideselephant.jpg",
    "/images/touristloyani1.jpg",
    "/images/savanna.jpg",
    "/images/small-giraffe.jpg",
  ];

  const testimonials = [
    {
      text: "An unforgettable journey through the heart of Africa!",
      author: "Sarah T.",
    },
    {
      text: "Loyani's guides made our safari an educational adventure!",
      author: "Michael R.",
    },
    {
      text: "The eco-friendly approach truly sets Loyani apart.",
      author: "Emma L.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.whyLoyani}>
      <div className={styles.doodledBackground}></div>

      <h2 className={styles.sectionTitle}>Why Choose Loyani Tours?</h2>

      <div className={styles.carouselContainer}>
        <div
          className={styles.carousel}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={image}
                alt={`Loyani Safari ${index + 1}`}
                width={800}
                height={600}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.card}>
          <FaLeaf className={styles.icon} />
          <h3>Eco-Friendly Safaris</h3>
          <p>
            Experience nature responsibly with our sustainable tourism
            practices.
          </p>
        </div>
        <div className={styles.card}>
          <FaMapMarkedAlt className={styles.icon} />
          <h3>Expert Local Guides</h3>
          <p>
            Discover hidden gems with our knowledgeable and passionate guides.
          </p>
        </div>
        <div className={styles.card}>
          <FaBinoculars className={styles.icon} />
          <h3>Exclusive Experiences</h3>
          <p>Enjoy personalized, intimate encounters with Africas wildlife.</p>
        </div>
      </div>

      <div className={styles.testimonialSection}>
        <h3 className={styles.testimonialTitle}>What Our Adventurers Say</h3>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <FaQuoteLeft className={styles.quoteIcon} />
              <p>{testimonial.text}</p>
              <span className={styles.author}>- {testimonial.author}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaContainer}>
        <a href="/about" className={styles.ctaButton}>
          Embark on Your Safari Adventure
        </a>
      </div>
    </section>
  );
}
