import React, { useState } from "react";
import {
  FaClock,
  FaUtensils,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import styles from "../../styles/safariItinerary.module.css";

export default function SafariItinerary({ itinerary }) {
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-[#f0e9df] text-[#050403]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-10 text-[#050403]">
          Itinerary
        </h2>
        <div className="space-y-6">
          {itinerary.map((day, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDay(index)}
              >
                <div>
                  <h3 className="text-3xl font-semibold text-[#ce6510]">
                    Day {day.day}: {day.title}
                  </h3>
                  {expandedDay !== index && (
                    <p className="text-[#5c564e] text-lg mt-2">
                      {day.subtitle}
                    </p>
                  )}
                </div>
                <div className="text-[#5c564e]">
                  {expandedDay === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {expandedDay === index && (
                <div className="mt-4 text-lg text-[#050403]">
                  <p className="leading-relaxed">{day.details}</p>
                  <div className="flex items-center mt-6 space-x-6">
                    {day.time && (
                      <div className="flex items-center">
                        <FaClock className="text-[#5c564e] mr-2" />
                        <span>{day.time}</span>
                      </div>
                    )}
                    {day.meal && (
                      <div className="flex items-center">
                        <FaUtensils className="text-[#5c564e] mr-2" />
                        <span>{day.meal}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
