"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import styles from "../../styles/testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback:
        "Loyani Safaris exceeded all of my expectations! The guides were incredibly knowledgeable, and the views were simply breathtaking.",
      image: "/images/tourist2giraffe.jpg",
      location: "United States",
    },
    {
      name: "Liam O'Connor",
      feedback:
        "The entire experience was magical. From the moment we landed, Loyani took care of everything. The wildlife, the culture, the accommodations—it was all top-notch.",
      image: "/images/guideselephant.jpg",
      location: "Ireland",
    },
    {
      name: "Aisha Mwangi",
      feedback:
        "This was my third safari, but Loyani was by far the best. The attention to detail, the stunning scenery, and the personalized service made it unforgettable.",
      image: "/images/lions.jpg",
      location: "Kenya",
    },
  ];

  return (
    <section className={`${styles.testimonials} relative py-16`}>
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-5xl font-bold text-primary">What Our Guests Say</h2>
        <p className="text-xl text-muted mt-4">
          See what past explorers have to say about their adventures with Loyani
          Safaris.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`${styles.card} shadow-lg`}>
            <div className="p-6 text-center">
              <FaQuoteLeft className="text-3xl text-secondary mb-4" />
              <p className="text-lg leading-relaxed text-muted mb-4">
                {testimonial.feedback}
              </p>
              <FaQuoteRight className="text-3xl text-secondary mb-4" />
              <div className="flex justify-center">
                <div className="relative w-20 h-20 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary">
                {testimonial.name}
              </h3>
              <p className="text-secondary">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
