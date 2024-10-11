"use client";  // Client-side component

import React, { useState } from 'react';
import styles from '../../styles/groupDepartures.module.css';  // Custom CSS for group departures

export default function GroupDepartures() {
  // Currency conversion logic
  const [currency, setCurrency] = useState('USD'); // Default to USD
  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75
  };

  const departures = [
    {
      date: "October 10, 2024",
      destination: "Serengeti National Park",
      price: 3200, // Price in USD
    },
    {
      date: "November 20, 2024",
      destination: "Ngorongoro Crater",
      price: 2500, // Price in USD
    },
    {
      date: "December 5, 2024",
      destination: "Mount Kilimanjaro",
      price: 4500, // Price in USD
    },
  ];

  // Function to format price according to the selected currency
  const formatPrice = (price, currency) => {
    const convertedPrice = (price * currencyRates[currency]).toFixed(2);
    return `${currency} ${convertedPrice}`;
  };

  return (
    <section className={`${styles.groupDepartures} relative py-16`}>
      {/* Title and Currency Selector */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-bold text-primary">Upcoming Group Departures</h2>
        <p className="text-xl text-muted mt-4">Plan your next adventure with our scheduled group departures.</p>
        <div className="mt-4 flex justify-center">
          <label htmlFor="currency" className="text-white mr-4">Choose your currency:</label>
          <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className="p-2 rounded bg-white text-primary">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>

      {/* Translucent Card Table */}
      <div className="relative z-10 px-6 md:px-20">
        <div className={`${styles.tableCard} shadow-lg`}>
          <table className={`${styles.customTable} w-full`}>
            <thead>
              <tr className="text-secondary">
                <th className="p-4">Date</th>
                <th className="p-4">Destination</th>
                <th className="p-4">Price</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {departures.map((departure, index) => (
                <tr key={index} className="text-primary bg-transparent hover:bg-white/30 transition duration-300">
                  <td className="p-4">{departure.date}</td>
                  <td className="p-4">{departure.destination}</td>
                  <td className="p-4">{formatPrice(departure.price, currency)}</td>
                  <td className="p-4">
                    <a href="#" className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-muted transition duration-300">
                      Book Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
