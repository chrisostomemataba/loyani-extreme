"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';  // Material UI Button
import styles from '../../styles/accomodationHotels.module.css';  // Custom styles for bento grid

export default function AccommodationHotelsSection({ hotels }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter hotels based on the search query
  const filteredHotels = hotels.filter(hotel =>
    hotel.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={`${styles.accommodationSection} py-16`}>
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">Accommodation Hotels</h2>
        <p className="text-white mt-4">Choose from a range of luxurious hotels, each offering a unique experience.</p>

        {/* Search Bar */}
        <div className="mt-6">
          <input
            type="text"
            className="border p-2 rounded-lg"
            placeholder="Search for hotels..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className={`${styles.bentoGrid}`}>
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => (
            <div
              key={index}
              className={`${styles.bentoCard} shadow-lg rounded-lg overflow-hidden ${index % 3 === 0 ? styles.wideCard : styles.tallCard}`}  // Alternating card layout
            >
              {/* Hotel Image */}
              <Image
                src={hotel.image}
                alt={hotel.title}
                width={600}
                height={400}
                className={`${styles.hotelImage} object-cover`}
              />
              
              {/* Overlay Information */}
              <div className={`${styles.overlay} absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                <h3 className="text-2xl font-bold text-primary mb-4">{hotel.title}</h3>
                <p className="text-muted mb-6">{hotel.description}</p>
                
                {/* Material UI Button */}
                <Button
                  variant="contained"
                  color="secondary"
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full"
                  sx={{
                    backgroundColor: '#f50057',
                    ':hover': { backgroundColor: '#ff4081' }
                  }}
                >
                  Visit Website
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No hotels found for your search.</p>
        )}
      </div>
    </section>
  );
}
