"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import InterviewDashboard from "./InterviewDashboard";
import {
  useAnimationVariants,
  defaultViewportSettings,
} from "@/hooks/useAnimationVariants";

const Hero = () => {
  const { containerVariants, itemLargeSlideVariants: itemVariants } =
    useAnimationVariants();

  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-block mb-4 sm:mb-6 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-normal w-fit border border-primary"
              variants={itemVariants}
            >
              Interview AI
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 sm:mb-6 leading-tight"
              variants={itemVariants}
            >
              Interview like a pro with
              <span className="text-primary"> Halo</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Practice real interviews with AI. Get instant feedback, identify
              your weak spots, and land the job.
            </motion.p>
            <motion.div className="flex gap-4" variants={itemVariants}>
              <Button className="bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded">
                Get Started <ArrowRight size={18} />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div className="lg:block" variants={itemVariants}>
            <InterviewDashboard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
