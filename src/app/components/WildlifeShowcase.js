"use client";  // Client-side component

import React from 'react';
import Image from 'next/image';
import styles from '../../styles/wildlifeShowcase.module.css';  // Enhanced CSS module

export default function WildlifeShowcase() {
  const wildlife = [
    {
      title: "Lions of Serengeti",
      image: "/images/lion-cubs.jpg",
      description: "Witness the mighty kings of the savannah as they roam the vast plains of Serengeti. A rare and unforgettable encounter.",
      duration: "3 Days",
      detailsLink: "/tours/lions-of-serengeti",
    },
    {
      title: "The Elephant Herd",
      image: "/images/herd-elephant.jpg",
      description: "Travel alongside herds of majestic elephants, the largest land animals, as they move gracefully through their natural habitat.",
      duration: "5 Days",
      detailsLink: "/tours/elephant-herd",
    },
    {
      title: "Cheetahs in Action",
      image: "/images/cheetah-walking.jpg",
      description: "Watch cheetahs sprint through the savannah in search of prey, showcasing the fastest land speed in the animal kingdom.",
      duration: "4 Days",
      detailsLink: "/tours/cheetahs-in-action",
    },
    {
      title: "Graceful Giraffes",
      image: "/images/giraffe-view.jpg",
      description: "Observe the elegance of giraffes as they tower over the landscape, their long necks gracefully sweeping across the treetops.",
      duration: "3 Days",
      detailsLink: "/tours/graceful-giraffes",
    },
    {
      title: "The Flamingo Paradise",
      image: "/images/flamingo-lake.jpg",
      description: "Discover flocks of flamingos as they paint the lakes with their vibrant pink hues—a sight to behold in the wetlands of Africa.",
      duration: "2 Days",
      detailsLink: "/tours/flamingo-paradise",
    },
    {
      title: "Sleeping Lions",
      image: "/images/sleeping-lion.jpg",
      description: "Experience the tranquility of lions as they rest in the shade, conserving energy for their next hunt in the wild savannah.",
      duration: "3 Days",
      detailsLink: "/safaris/sleeping-lions",
    },
  ];

  return (
    <section className={`${styles.wildlifeShowcase} relative py-16`}>
      {/* Background with Lion Image and fading opacity */}
      <div className={styles.backgroundImage}></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-bold text-white">Meet the Majestic Wildlife</h2>
        <p className="text-xl text-white mt-4">Explore the incredible wildlife that makes the Loyani Safari an unforgettable experience.</p>
      </div>

      {/* Wildlife Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {wildlife.map((animal, index) => (
          <div key={index} className={`${styles.card} shadow-lg`}>
            <Image src={animal.image} alt={animal.title} width={600} height={400} className="rounded-t-lg" />
            <div className={`${styles.cardBody} p-6`}>
              <h3 className="text-2xl font-bold mb-4 text-primary">{animal.title}</h3>
              <p className="text-muted leading-relaxed mb-4">{animal.description}</p>
              <p className="text-secondary font-semibold mb-2">Duration: {animal.duration}</p>
              <a href={animal.detailsLink} className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-muted transition duration-300">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
