"use client";

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../../styles/accommodationFaq.module.css';

const faqs = [
  {
    question: "What amenities are included in the hotel rooms?",
    answer: "All rooms are equipped with free Wi-Fi, air conditioning, room service, and luxury bedding. Some hotels also offer private balconies with stunning views."
  },
  {
    question: "Are meals included in the stay?",
    answer: "Most of our accommodations include breakfast in the booking package. Some packages also offer full board options, including lunch and dinner."
  },
  {
    question: "Is there transportation to the safari locations?",
    answer: "Yes, we offer complimentary transportation from the hotel to the nearest safari locations as part of the booking package."
  },
  {
    question: "Can I book additional safari activities through the hotel?",
    answer: "Yes, all our hotels have partnerships with local safari operators. You can book game drives, hot air balloon rides, and more directly from the hotel."
  }
];

export default function AccommodationFAQ() {
  return (
    <section className={`${styles.accommodationFaqSection}`}>
      <div className="container mx-auto text-center mb-12">
        <h2 className={`text-4xl font-bold ${styles.faqTitle}`}>Accommodation FAQs</h2>
        <p className={`text-lg mt-4 ${styles.faqDescription}`}>Here are some of the frequently asked questions about our accommodation options.</p>
      </div>

      <div className="grid gap-6 px-6 md:px-20 grid-cols-1 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <Card key={index} className={`${styles.card}`}>
            <CardContent>
              <div className="flex justify-between items-center">
                <Typography variant="h6" className={`text-lg font-semibold ${styles.cardTitle}`}>
                  {faq.question}
                </Typography>
                <ExpandMoreIcon />
              </div>
              <Typography variant="body2" className={`mt-2 ${styles.cardContent}`}>
                {faq.answer}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
