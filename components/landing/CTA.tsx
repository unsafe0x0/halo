"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  useAnimationVariants,
  defaultViewportSettings,
} from "@/hooks/useAnimationVariants";

const CTA = () => {
  const { containerVariants, itemLargeSlideVariants } = useAnimationVariants();

  return (
    <section className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 sm:mb-6"
            variants={itemLargeSlideVariants}
          >
            Stop cramming. Start practicing.
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
            variants={itemLargeSlideVariants}
          >
            Your next interview is in a week. Get comfortable now. Free to try.
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            variants={itemLargeSlideVariants}
          >
            <Button className="bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base">
              Try for free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
