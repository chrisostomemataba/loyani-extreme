"use client";  // Client-side component

import React, { useState } from 'react';
import { FaHiking, FaCompass, FaMountain } from 'react-icons/fa'; // Font Awesome Icons
import Image from 'next/image';
import Link from 'next/link';  // Import Next.js Link component
import styles from '../../styles/loyaniExperience.module.css';  // Custom CSS for translucent cards

export default function LoyaniExperience() {
  // Currency conversion logic
  const [currency, setCurrency] = useState('USD'); // Default to USD
  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75
  };

  const experiences = [
    {
      id: "unparalleled-adventures",  // Dynamic ID for Unparalleled Adventures
      title: "Unparalleled Adventures",
      icon: <FaHiking className="text-5xl text-secondary mb-4" />,
      description: "Step into the heart of Africa with Loyani Safaris. Our adventures are designed for explorers, dreamers, and those who seek the extraordinary.",
      image: "/images/cheetah-walking.jpg",
      duration: "7 Days",
      price: 3200, // Price in USD
    },
    {
      id: "guided-by-nature",  // Dynamic ID for Guided by Nature
      title: "Guided by Nature",
      icon: <FaCompass className="text-5xl text-secondary mb-4" />,
      description: "Let nature guide your journey. From the vast savannahs to the majestic mountains, every step uncovers a new world waiting to be explored.",
      image: "/images/giraffe-view.jpg",
      duration: "5 Days",
      price: 2700, // Price in USD
    },
    {
      id: "discover-the-peaks",  // Dynamic ID for Discover the Peaks
      title: "Discover the Peaks",
      icon: <FaMountain className="text-5xl text-secondary mb-4" />,
      description: "Reach new heights with Loyani's mountain expeditions. Conquer the peaks and take in breathtaking views that are truly one-of-a-kind.",
      image: "/images/mount-kilimanjaro.jpg",
      duration: "8 Days",
      price: 4500, // Price in USD
    },
  ]; 

  // Function to format price according to the selected currency
  const formatPrice = (price, currency) => {
    const convertedPrice = (price * currencyRates[currency]).toFixed(2);
    return `${currency} ${convertedPrice}`;
  };

  return (
    <section className={`${styles.loyaniExperience} relative py-16`}>
      {/* Paintbrush Background */}
      <div className={styles.backgroundImage}></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-bold text-secondary">The Loyani Experience</h2>
        <p className="text-xl text-muted mt-4">Embark on a journey like no other, where every moment is a step into the extraordinary. With each tour, you will experience the diverse beauty of Tanzania, from the plains of the Serengeti to the peaks of Mount Kilimanjaro.</p>
        <div className="mt-4 flex justify-center">
          {/* Currency Selector */}
          <label htmlFor="currency" className="text-white mr-4">Choose your currency:</label>
          <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className="p-2 rounded bg-white text-primary">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>

      {/* Translucent Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {experiences.map((experience, index) => (
          <div key={index} className={`${styles.card} shadow-lg`}>
            <div className="flex justify-center">
              {experience.icon}
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">{experience.title}</h3>
              <div className="flex justify-center mb-4">
                <Image src={experience.image} alt={experience.title} width={300} height={200} className="rounded-lg" />
              </div>
              <p className="text-muted leading-relaxed mb-4">{experience.description}</p>
              <div className="text-secondary font-semibold mb-2">Duration: {experience.duration}</div>
              <div className="text-primary font-bold mb-4">Price: {formatPrice(experience.price, currency)}</div>

              {/* Dynamic Link without the <a> tag */}
              <Link href={`/safaris/${experience.id}`} className={`${styles.customButton}`}>
                Explore
                <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
