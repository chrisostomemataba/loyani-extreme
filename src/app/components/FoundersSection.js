import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/foundersSection.module.css";
import ourStoryStyles from "../../styles/ourStory.module.css";

const foundersData = [
  {
    name: "Moses",
    role: "Co-founder & CEO",
    image: "/images/black-businessman.png",
    biography:
      "Moses is an avid adventurer and nature enthusiast, passionate about creating unforgettable safari experiences.",
  },
  {
    name: "Ibrahim",
    role: "Co-founder & COO",
    image: "/images/black-businessman.png",
    biography:
      "Ibrahim is a logistics mastermind, ensuring every Loyani safari runs smoothly. His love for the African wilderness is unmatched.",
  },
];

const FoundersSection = () => {
  const { ref: foundersRef, inView: foundersInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className={`${styles.foundersWrapper} ${
        foundersInView ? styles.fadeIn : ""
      }`}
      ref={foundersRef}
    >
      {/* Our Story Section */}
      <section
        className={`${ourStoryStyles["our-story-section"]} py-16 bg-gray-50 dark:bg-gray-900`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Our Story
          </h2>
          <p className="text-lg text-center mb-12">
            At Loyani Safaris, we bring the untamed wilderness of Africa closer
            to you. With years of experience, our dedicated team offers the most
            personalized safari experience, ensuring you leave with memories
            that last a lifetime.
          </p>
        </div>
      </section>

      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">
        Meet the Founders
      </h2>
      <div className={styles.cardsContainer}>
        {foundersData.map((founder, index) => (
          <div key={index} className={`${styles.card} ${styles.fadeUp}`}>
            <div className={styles.imageWrapper}>
              <Image
                src={founder.image}
                alt={`${founder.name} - Founder`}
                width={200}
                height={200}
                layout="responsive"
                className={styles.founderImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.founderName}>{founder.name}</h3>
              <p className={styles.founderRole}>{founder.role}</p>
              <p className={styles.founderBiography}>{founder.biography}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoundersSection;
