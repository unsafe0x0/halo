"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

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
        <motion.div
          className="flex flex-col gap-8 text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-foreground-1 max-w-2xl mx-auto"
          >
            Everything you need to know about Halo and AI-powered interview
            prep.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-card border border-border rounded-lg p-5 text-left overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between text-lg font-medium text-foreground focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="ml-2" size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-foreground-1 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
