"use client";  // Client-side component

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link for dynamic routing
import styles from '../../styles/safariExperiences.module.css';

export default function SafariExperiences() {
  const safaris = [
    {
      title: "Luxury Safari",
      image: "/images/elephantloyani1.jpg",
      description: "Experience the best of African wilderness in absolute luxury. Enjoy exclusive accommodations, private game drives, and gourmet dining under the stars.",
      duration: "7 Days",
      price: "$5,500",
      detailsLink: "/safaris/luxury-safaris",  // Dynamic route link
    },
    {
      title: "Adventure Safari",
      image: "/images/zebrasafari.jpg",
      description: "Get up close and personal with Africa's most iconic animals. Ideal for thrill-seekers, this adventure safari includes walking tours, jeep safaris, and bush camping.",
      duration: "5 Days",
      price: "$3,200",
      detailsLink: "/safaris/adventure-safaris",  // Dynamic route link
    },
    {
      title: "Cultural Safari",
      image: "/images/touristgiraffe.jpg",
      description: "Immerse yourself in the rich cultural history of Africa. Visit local tribes, explore ancient sites, and enjoy storytelling around a campfire.",
      duration: "6 Days",
      price: "$4,000",
      detailsLink: "/safaris/cultural-safaris",  // Dynamic route link
    }
  ];

  return (
    <section className={`${styles.safariExperiences} relative py-16`}>
      {/* Background with Mount Kilimanjaro */}
      <div className={styles.backgroundImage}></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-bold text-white">Our Safari Experiences</h2>
        <p className="text-xl text-white mt-4">Explore Africa with our specially curated safaris, each designed to offer a unique adventure.</p>
      </div>

      {/* Safari Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {safaris.map((safari, index) => (
          <div key={index} className={`${styles.card} shadow-lg`}>
            <Image src={safari.image} alt={safari.title} width={600} height={400} className="rounded-t-lg" />
            <div className={`${styles.cardBody} p-6`}>
              <h3 className="text-2xl font-bold mb-4 text-primary">{safari.title}</h3>
              <p className="text-muted leading-relaxed">{safari.description}</p>
              <div className="mt-6">
                <span className="block text-secondary font-semibold mb-2">Duration: {safari.duration}</span>
                <span className="block text-secondary font-semibold mb-4">Price: {safari.price}</span>
                {/* Link to dynamic route page */}
                <Link href={safari.detailsLink} className="bg-secondary text-white py-3 px-6 rounded-lg hover:bg-muted transition duration-300">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
