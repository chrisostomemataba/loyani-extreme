"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal"; // Import the existing BookingModal component
import styles from "../../styles/groupDepartures.module.css";

export default function GroupDepartures() {
  const [currency, setCurrency] = useState("USD");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDeparture, setSelectedDeparture] = useState(null);

  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
  };

  const departures = [
    {
      date: "October 10, 2024",
      destination: "Serengeti National Park",
      price: 3200,
      duration: "7 days",
      availableSpots: 8,
    },
    {
      date: "November 20, 2024",
      destination: "Ngorongoro Crater",
      price: 2500,
      duration: "5 days",
      availableSpots: 12,
    },
    {
      date: "December 5, 2024",
      destination: "Mount Kilimanjaro",
      price: 4500,
      duration: "9 days",
      availableSpots: 6,
    },
  ];

  const formatPrice = (price, currency) => {
    const convertedPrice = (price * currencyRates[currency]).toFixed(2);
    return `${currency} ${convertedPrice}`;
  };

  const openBookingModal = (departure) => {
    setSelectedDeparture(departure);
    setIsBookingModalOpen(true);
  };

  return (
    <section className={styles.groupDepartures}>
      <div className={styles.content}>
        <h2 className={styles.title}>Upcoming Group Departures</h2>
        <p className={styles.subtitle}>
          Join our scheduled adventures and make new friends along the way
        </p>

        <div className={styles.currencySelector}>
          <label htmlFor="currency">Choose your currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.departureTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Destination</th>
                <th>Duration</th>
                <th>Price</th>
                <th>Available Spots</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {departures.map((departure, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <td>{departure.date}</td>
                  <td>{departure.destination}</td>
                  <td>{departure.duration}</td>
                  <td>{formatPrice(departure.price, currency)}</td>
                  <td>{departure.availableSpots}</td>
                  <td>
                    <button
                      className={styles.bookButton}
                      onClick={() => openBookingModal(departure)}
                    >
                      Book Now
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isBookingModalOpen && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}
    </section>
  );
}
