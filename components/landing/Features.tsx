"use client";
import React from "react";
import { Zap, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  useAnimationVariants,
  defaultViewportSettings,
} from "@/hooks/useAnimationVariants";

const Features = () => {
  const { cardContainerVariants, itemSlideUpVariants } = useAnimationVariants();

  const features = [
    {
      icon: Zap,
      title: "Instant Feedback",
      description:
        "See exactly how you did right after each practice session. Know your strengths and what to work on.",
    },
    {
      icon: Brain,
      title: "Real Questions",
      description:
        "Questions from actual interviews. The AI learns and adapts to make each session more relevant.",
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description:
        "Watch yourself improve. See your scores go up and get confident before the real thing.",
    },
  ];

  return (
    <section id="features" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          variants={itemSlideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-3 sm:mb-4">
            What you get
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Everything to crush your next interview
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemSlideUpVariants}>
                <Card>
                  <CardHeader>
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <CardTitle className="text-lg sm:text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
