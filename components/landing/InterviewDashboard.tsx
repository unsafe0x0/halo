"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, MessageSquare, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useAnimationVariants,
  defaultViewportSettings,
} from "@/hooks/useAnimationVariants";

const InterviewDashboard = () => {
  const { containerVariants, itemScaleVariants } = useAnimationVariants();

  return (
    <motion.div variants={itemScaleVariants}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            Interview Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewportSettings}
          >
            <motion.div
              className="border border-border p-3 sm:p-4"
              variants={itemScaleVariants}
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                <p className="text-xs text-muted-foreground">Performance</p>
              </div>
              <p className="text-xl sm:text-2xl font-bold">78%</p>
            </motion.div>
            <motion.div
              className="border border-border p-3 sm:p-4"
              variants={itemScaleVariants}
            >
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                <p className="text-xs text-muted-foreground">Interviews</p>
              </div>
              <p className="text-xl sm:text-2xl font-bold">12</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="border border-border p-3 sm:p-4"
            variants={itemScaleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewportSettings}
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
              <p className="text-xs sm:text-sm font-semibold">Last Feedback</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 flex-shrink-0 whitespace-nowrap">
                  Strength
                </span>
                <p className="text-xs text-muted-foreground line-clamp-1 sm:line-clamp-none">
                  Clear communication and technical knowledge
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-2 py-1 flex-shrink-0 whitespace-nowrap">
                  Improve
                </span>
                <p className="text-xs text-muted-foreground line-clamp-1 sm:line-clamp-none">
                  More specific examples in answers
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewportSettings}
          >
            <p className="text-xs sm:text-sm font-semibold">
              Recent Interviews
            </p>
            {["Product Manager", "Software Engineer", "Data Analyst"].map(
              (role, index) => (
                <motion.div
                  key={index}
                  className="border border-border p-2 sm:p-3 flex items-center justify-between gap-2"
                  variants={itemScaleVariants}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-2 h-2 bg-primary flex-shrink-0"></div>
                    <p className="text-xs truncate">{role}</p>
                  </div>
                  <p className="text-xs text-muted-foreground flex-shrink-0">
                    {85 + index * 2}%
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InterviewDashboard;
