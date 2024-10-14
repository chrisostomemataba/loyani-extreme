"use client";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/accomodationHotels.module.css";

export default function AccommodationHotelsSection({ hotels }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHotels = hotels.filter((hotel) =>
    hotel.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={styles.accommodationSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>Accommodation Hotels</h2>
        <p className={styles.sectionSubtitle}>
          Choose from a range of luxurious hotels, each offering a unique
          experience.
        </p>

        <div className={styles.searchBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search for hotels..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.bentoGrid}>
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div key={index} className={styles.bentoCard}>
              <img
                src={hotel.image}
                alt={hotel.title}
                className={styles.hotelImage}
                loading="lazy"
              />

              <div className={styles.overlay}>
                <h3 className={styles.hotelTitle}>{hotel.title}</h3>
                <p className={styles.hotelDescription}>{hotel.description}</p>

                <Button
                  variant="contained"
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  Visit Website
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No hotels found for your search.</p>
        )}
      </div>
    </section>
  );
}
