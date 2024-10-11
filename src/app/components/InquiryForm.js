"use client";

import React, { useState } from 'react';
import styles from '../../styles/inquiryForm.module.css';  // Import custom CSS

export default function InquiryForm({ safariName }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    // Email regex validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Clear error and send the email
    setError('');

    try {
      const res = await fetch('/api/sendInquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, safariName }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess('Your inquiry has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-12 px-6 md:px-20 bg-[#f0e9df]">
      <div
        className={`max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg ${styles.inquiryCard}`}
      >
        <h3 className="text-2xl font-bold mb-6 text-loyani-primary">
          Inquiry Form
        </h3>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2 text-loyani-secondary">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-secondary"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-loyani-secondary">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-secondary"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-loyani-secondary">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-secondary"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>

          {/* Hidden field for Safari name */}
          <input type="hidden" name="safariName" value={safariName} />

          <button
            type="submit"
            className="w-full bg-secondary text-white font-semibold py-3 px-4 rounded hover:bg-muted transition duration-300"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
