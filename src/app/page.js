"use client"; // Ensure the component runs on the client side

import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "../styles/globals.css"; // Ensure global styles are loaded
import WhyLoyani from "./components/WhyLoyani";
import SafariExperiences from "./components/SafariExperience";
import WildlifeShowcase from "./components/WildlifeShowcase";
import LoyaniExperience from "./components/LoyaniExperience";
import Testimonials from "./components/Testimonials";
import GroupDepartures from "./components/GroupDepatures";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal"; // Import the BookingModal
import axios from "axios";

export default function HomePage() {
  // State to manage the booking modal
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Handle the booking form submission
  const handleBookingSubmit = async (formData) => {
    try {
      const response = await axios.post("/api/bookings", formData);
      if (response.status === 200) {
        console.log("Booking submitted successfully:", formData);
        // You can also show a success message to the user here
      } else {
        console.error("Error submitting booking:", response.data);
      }
    } catch (error) {
      console.error("Booking submission failed:", error);
      // You can display an error message here
    }
  };

  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Hero Section Component with booking modal trigger */}
      <HeroSection onButtonClick={() => setIsBookingModalOpen(true)} />

      {/* Why Us  Component */}
      <WhyLoyani />

      {/* Safari Experiences  Component */}
      <SafariExperiences />

      {/* WildLife  Component */}
      <WildlifeShowcase />

      {/* Loyani Ecpeiences Component */}
      <LoyaniExperience />

      {/* Testimonials Component */}
      <Testimonials />

      {/* Group Departures Component */}
      <GroupDepartures />

      {/* Footer Component */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal
        open={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}
