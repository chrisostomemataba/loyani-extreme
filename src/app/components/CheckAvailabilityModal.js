"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';  // Import the calendar library
import "react-datepicker/dist/react-datepicker.css";  // Import default calendar styles
import styles from '../../styles/safariAbout.module.css';  // Import CSS for styling

export default function CheckAvailabilityModal({ isOpen, onClose, onDateSubmit }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    if (!selectedDate || !selectedPackage) {
      alert("Please select both a date and a package.");
      return;
    }
    onDateSubmit(selectedDate, selectedPackage);
    onClose();  // Close the modal after submitting
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}>
      <div className={`${styles.modalContent} bg-white p-8 rounded-lg shadow-lg`}>
        <h2 className="text-2xl font-bold mb-4">Check Availability</h2>
        
        {/* DatePicker for selecting the date */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Select a Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            className="border border-gray-300 p-2 rounded w-full"
            placeholderText="Choose a date"
          />
        </div>

        {/* Package Selection Dropdown */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Choose Package:</label>
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">Select a package</option>
            <option value="Standard">Standard Package</option>
            <option value="Deluxe">Deluxe Package</option>
            <option value="Luxury">Luxury Package</option>
          </select>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-secondary text-white py-2 px-4 rounded hover:bg-muted transition duration-300"
        >
          Continue
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
