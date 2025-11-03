"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  useAnimationVariants,
  defaultViewportSettings,
} from "@/hooks/useAnimationVariants";

const HowItWorks = () => {
  const { cardContainerVariants, itemSlideUpVariants } = useAnimationVariants();

  const steps = [
    {
      number: "01",
      title: "Pick a role",
      description:
        "Search for the job you're going after. We've got questions from hundreds of companies and roles.",
    },
    {
      number: "02",
      title: "Practice",
      description:
        "Talk to our AI interviewer. It listens, follows up, and challenges you just like a real interview.",
    },
    {
      number: "03",
      title: "Get smarter",
      description:
        "See what you did well and what you need to work on. Practice again. Keep getting better.",
    },
  ];

  return (
    <section id="how-it-works" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          variants={itemSlideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-3 sm:mb-4">
            Just three steps
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            From signup to your next job offer
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemSlideUpVariants}>
              <Card>
                <CardHeader>
                  <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 py-1 w-fit mb-3">
                    Step {step.number}
                  </span>
                  <CardTitle className="text-lg sm:text-2xl">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
