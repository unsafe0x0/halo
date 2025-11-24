"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import WhiteBoard from "./WhiteBoard";
import DashboardTab from "./DashboardTab";
import InterviewsTab from "./InterviewsTab";
import AnalyticsTab from "./AnalyticsTab";
import SettingsTab from "./SettingsTab";
import HaloAi from "./HaloAi";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/utils/animations";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const { data, error, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const response = await fetch("/api/user/dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return response.json();
    },
  });

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <main className="flex-1 lg:ml-0 overflow-hidden">
        {isLoading && <div>Loading...</div>}
        {error && <div>Error loading data</div>}

        <AnimatePresence mode="wait">
          {activeItem === "Dashboard" && (
            <motion.div
              key="dashboard"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              className="h-full overflow-scroll"
            >
              <DashboardTab
                interviews={data?.user?.interviews || []}
                scores={data?.scores || []}
                dates={data?.dates || []}
              />
            </motion.div>
          )}
          {activeItem === "Interviews" && (
            <motion.div
              key="interviews"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              className="h-full overflow-scroll"
            >
              <InterviewsTab interviews={data?.user?.interviews || []} />
            </motion.div>
          )}
          {activeItem === "Analytics" && (
            <motion.div
              key="analytics"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              className="h-full overflow-scroll"
            >
              <AnalyticsTab
                scores={data?.scores || []}
                dates={data?.dates || []}
              />
            </motion.div>
          )}
          {activeItem === "Halo AI" && (
            <motion.div
              key="halo-ai"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              className="h-full"
            >
              <HaloAi />
            </motion.div>
          )}
          {activeItem === "Whiteboard" && (
            <motion.div
              key="whiteboard"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              className="h-full"
            >
              <WhiteBoard />
            </motion.div>
          )}
          {activeItem === "Settings" && (
            <motion.div
              key="settings"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
              className="h-full"
            >
              <SettingsTab
                userDetails={{
                  name: data?.user?.name,
                  email: data?.user?.email,
                  profileImage: data?.user?.profileImage,
                  githubUsername: data?.user?.githubUsername,
                  apiKey: data?.user?.apiKey,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
