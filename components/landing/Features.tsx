"use client";

import React from "react";
import { IoBookmark } from "react-icons/io5";
import { PiSpeakerHighBold } from "react-icons/pi";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuTarget } from "react-icons/lu";
import { FiZap } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: FaRegCheckCircle,
      title: "AI-Powered Feedback",
      description:
        "Get instant, detailed feedback on your interview responses with AI-driven analysis.",
    },
    {
      icon: LuTarget,
      title: "Realistic Practice",
      description:
        "Practice with questions from real interviews at top companies and industries.",
    },
    {
      icon: BiSolidBarChartAlt2,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed metrics and improvement suggestions.",
    },
    {
      icon: PiSpeakerHighBold,
      title: "Voice Mode",
      description: "Practice with voice to prepare for actual interviews.",
    },
    {
      icon: IoBookmark,
      title: "Curated Content",
      description:
        "Access to a library of interview questions, tips, and best practices.",
    },
    {
      icon: FiZap,
      title: "Real-Time Scoring",
      description:
        "Get scored on communication, technical knowledge, and confidence.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Everything You Need to Succeed
            </h2>

            <p className="text-lg text-foreground-1 max-w-2xl mx-auto">
              Comprehensive tools and features designed to help you ace your
              interviews and land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-xl bg-card border border-border hover:ring-2 hover:ring-accent hover:bg-card-1 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <feature.icon
                    size={38}
                    className="text-accent-foreground font-bold text-xl p-1.5 rounded-lg bg-accent flex items-center justify-center"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-foreground-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
