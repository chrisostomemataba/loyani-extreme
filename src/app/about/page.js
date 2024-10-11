"use client"; // Ensure the component runs on the client side

import Header from "@/app/components/Header"; // Reuse Header component
import AboutHero from "@/app/components/AboutHero"; // New AboutHero component
import Footer from "@/app/components/Footer"; // Reuse Footer component
import BookingModal from "@/app/components/BookingModal"; // Reuse BookingModal
import FoundersSection from "@/app/components/FoundersSection"; // Founders Section
import StatisticsCounter from "@/app/components/StatisticsCounter"; // Statistics Counter Component
import { useState } from "react";
import styles from "../../styles/ourStory.module.css"; // Our Story styles
import statsStyles from "../../styles/statisticsCounter.module.css"; // Statistics Counter styles
import ContactUs from "@/app/components/ContactUs";

export default function AboutPage() {
  // Define the isBookingModalOpen state to control the modal visibility
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingSubmit = (formData) => {
    // TODO: Send the email and handle form data submission
    console.log("Booking submitted:", formData);
  };

  // Statistics data for the counter
  const stats = [
    { label: "Years in Business", value: 10 },
    { label: "Safaris Organized", value: 320 },
    { label: "Happy Clients", value: 2500 },
    { label: "Destinations Covered", value: 15 },
  ];

  return (
    <div>
      <Header />
      <AboutHero
        title="About Loyani Safaris"
        subtitle="Discover the essence of African adventure with Loyani Safaris."
        buttonText="Book Your Adventure"
        onButtonClick={() => setIsBookingModalOpen(true)}
      />
      <FoundersSection /> {/* Founders Section */}
      <StatisticsCounter stats={stats} /> {/* New Statistics Counter Section */}
      <ContactUs />
      <BookingModal
        open={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleBookingSubmit}
      />
      <Footer /> {/* Footer Component */}
    </div>
  );
}
