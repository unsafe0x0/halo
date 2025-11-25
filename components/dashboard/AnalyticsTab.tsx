"use client";

import Chart from "./Chart";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

interface AnalyticsTabProps {
  scores?: number[];
  dates?: string[];
}

const AnalyticsTab = ({ scores = [], dates = [] }: AnalyticsTabProps) => {
  return (
    <motion.div
      className="p-4 md:p-6 lg:p-8 flex-1 overflow-auto"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="flex-1 mx-auto">
        <motion.div variants={fadeInUp} className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-foreground-1 text-base">
            Welcome to your analytics section
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-card border border-border rounded-lg"
        >
          {scores.length > 0 && dates.length > 0 ? (
            <Chart dates={dates} scoreData={scores} />
          ) : (
            <div className="text-foreground-1 text-center py-8">
              No analytics data available yet.
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalyticsTab;
