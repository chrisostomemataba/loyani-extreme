"use client";  // Ensure this component is client-side

import React from 'react';
import Image from 'next/image';
import { FaLeaf, FaMapMarkedAlt, FaBinoculars } from 'react-icons/fa'; // React Icons
import styles from '../../styles/whyLoyani.module.css';  // Updated CSS module

export default function WhyLoyani() {
  const images = [
    "/images/elephantshero.jpg",
    "/images/giraffeloyani.jpg",
    "/images/zebrasafari.jpg",
    "/images/touristgiraffe.jpg",
    "/images/guideselephant.jpg",
    "/images/touristloyani1.jpg",
  ];

  return (
    <section className={`${styles.whyLoyani} relative py-16`}>
      {/* Doodled Background */}
      <div className={styles.doodledBackground}></div>

      <h2 className="text-4xl font-bold text-primary text-center text-[#ce6510] mb-12">
        Why Choose Loyani Tours?
      </h2>

      {/* Advanced Carousel with Layered Images */}
      <div className={`${styles.carouselContainer}`}>
        <div className={`${styles.carousel}`}>
          {images.map((image, index) => (
            <div key={index} className={`${styles.slide}`}>
              <Image
                src={image}
                alt={`Loyani Safari ${index}`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Why Loyani Features in Shadowed Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-20">
        <div className={`${styles.card} text-center`}>
          <div className="flex justify-center">
            <FaLeaf className="text-secondary text-7xl mb-6" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Eco-Friendly Safaris
          </h3>
          <p className="text-muted leading-relaxed">
            At Loyani, we believe in responsible tourism. Our eco-friendly
            safaris ensure that wildlife is protected, and the environment
            remains untouched for future generations to enjoy.
          </p>
        </div>
        <div className={`${styles.card} text-center`}>
          <div className="flex justify-center">
            <FaMapMarkedAlt className="text-secondary text-7xl mb-6" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Guided by Local Experts
          </h3>
          <p className="text-muted leading-relaxed">
            Discover Africas untamed beauty with our seasoned guides, each
            deeply rooted in the local culture. We guarantee a unique experience
            every time you step into the wild.
          </p>
        </div>
        <div className={`${styles.card} text-center`}>
          <div className="flex justify-center">
            <FaBinoculars className="text-secondary text-7xl mb-6" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Exclusive Private Safaris
          </h3>
          <p className="text-muted leading-relaxed">
            Experience Africa in a way that few others have. Our private safaris
            offer exclusive, intimate encounters with nature that are tailored
            to your specific interests.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="/about"
          className={`${styles.ctaButton} bg-secondary text-white py-3 px-8 rounded-full hover:bg-muted transition duration-300`}
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
}
