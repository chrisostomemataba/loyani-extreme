import React, { useState } from "react";
import {
  FaCheckCircle,
  FaMapMarkedAlt,
  FaLeaf,
  FaCalendarCheck,
} from "react-icons/fa";
import CheckAvailabilityModal from "./CheckAvailabilityModal";
import styles from "../../styles/safariAbout.module.css";

export default function SafariAbout({ overview, highlights, priceDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckAvailability = (selectedDate, selectedPackage) => {
    console.log("Selected Date:", selectedDate);
    console.log("Selected Package:", selectedPackage);
    alert(`You selected ${selectedPackage} for ${selectedDate}`);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-6 md:px-20 bg-[#f0e9df] text-[#050403]">
      {/* Left Section - Overview and Highlights */}
      <div className="max-w-lg">
        <h2 className="text-5xl font-extrabold mb-8 text-[#050403]">
          About the Safari
        </h2>
        <p className="text-lg leading-relaxed mb-6">{overview}</p>

        <h3 className="text-4xl font-bold mb-6 text-[#050403]">
          Trip Highlights
        </h3>
        <ul className="space-y-4">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-center">
              <FaCheckCircle className="text-green-500 text-2xl mr-4" />
              <span className="text-lg">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section - Price and Details Card */}
      <div
        className={`${styles.detailsCard} p-6 bg-white shadow-lg rounded-lg max-w-lg`}
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold">From</h3>
          <p className="text-4xl font-extrabold text-[#ce6510]">
            ${priceDetails.price} / Adult
          </p>
        </div>

        <hr className="my-4" />

        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <FaCalendarCheck className="text-[#ce6510] text-xl mr-3" />
            <span className="text-lg">Guaranteed Departure</span>
          </li>
          <li className="flex items-center">
            <FaMapMarkedAlt className="text-[#ce6510] text-xl mr-3" />
            <span className="text-lg">Local Expert Guides</span>
          </li>
          <li className="flex items-center">
            <FaLeaf className="text-[#ce6510] text-xl mr-3" />
            <span className="text-lg">Best Price Offer</span>
          </li>
        </ul>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full bg-[#ce6510] text-white font-semibold py-2 px-4 rounded hover:bg-[#5c564e] transition duration-300 mb-4"
        >
          Check Availability
        </button>

        <p className="text-lg font-semibold mb-2">Need help with booking?</p>
        <a href="/contact" className="text-[#ce6510] hover:underline">
          Send Us A Message
        </a>
      </div>

      <CheckAvailabilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDateSubmit={handleCheckAvailability}
      />
    </section>
  );
}
