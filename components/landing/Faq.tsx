"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How does Halo's AI interview work?",
    answer:
      "Halo uses advanced AI to generate realistic interview questions and provide instant feedback on your responses, helping you improve your skills and confidence.",
  },
  {
    question: "Is Halo suitable for all job roles?",
    answer:
      "Yes! Halo supports a wide range of roles and industries. You can select your target position and company to get tailored practice sessions.",
  },
  {
    question: "Can I practice with voice and video?",
    answer:
      "Absolutely. Halo lets you record answers using voice or video, simulating real interview conditions for better preparation.",
  },
  {
    question: "How is my performance tracked?",
    answer:
      "Your performance is analyzed across key metrics like communication, technical knowledge, and confidence. You get detailed analytics and improvement suggestions.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is encrypted and never shared. We take privacy and security seriously so you can focus on your preparation.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground-1 max-w-2xl mx-auto">
            Everything you need to know about Halo and AI-powered interview
            prep.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-5 text-left"
            >
              <button
                className="w-full flex items-center justify-between text-lg font-medium text-foreground focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    openIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                  size={18}
                />
              </button>
              {openIndex === idx && (
                <div className="mt-4 text-foreground-1 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
