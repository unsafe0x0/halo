"use client";

import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Role",
      description:
        "Select the job role and company you're interviewing for to customize your practice session.",
    },
    {
      number: "02",
      title: "Get AI Questions",
      description:
        "Receive AI-generated interview questions tailored to your role and experience level.",
    },
    {
      number: "03",
      title: "Practice & Record",
      description:
        "Answer questions in real-time with voice or video recording for authentic practice.",
    },
    {
      number: "04",
      title: "Get Feedback",
      description:
        "Receive detailed AI feedback on your responses, delivery, and areas for improvement.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Four Simple Steps to Success
            </h2>
            <p className="text-lg text-foreground-1 max-w-2xl mx-auto">
              Get started with Halo in minutes and begin your interview
              preparation journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 w-full">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col gap-4 h-full p-6 rounded-xl bg-card border border-border hover:ring-2 hover:ring-accent transition-all duration-300">
                  <div className="relative">
                    <span className="text-accent-foreground font-bold text-xl w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground-1 leading-relaxed">
                      {step.description}
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

export default HowItWorks;
