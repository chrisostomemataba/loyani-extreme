"use client";

import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';  // Importing FontAwesome icons for bullet points

export default function SafariIncludesExcludes({ includes, excludes }) {
  return (
    <section className="py-12 px-6 md:px-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Includes Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-loyani-primary">This Trip Cost Includes:</h3>
          <ul className="space-y-4">
            {includes.map((item, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-green-500 text-xl mr-3" />
                <span className="text-loyani-secondary text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excludes Card */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-6 text-loyani-primary">The Trip Cost Excludes:</h3>
          <ul className="space-y-4">
            {excludes.map((item, index) => (
              <li key={index} className="flex items-center">
                <FaTimesCircle className="text-red-500 text-xl mr-3" />
                <span className="text-loyani-secondary text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
