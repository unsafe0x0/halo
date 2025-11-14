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

        {activeItem === "Dashboard" && (
          <div className="h-full overflow-scroll">
            <DashboardTab
              interviews={data?.user?.interviews || []}
              scores={data?.scores || []}
              dates={data?.dates || []}
            />
          </div>
        )}
        {activeItem === "Interviews" && (
          <div className="h-full overflow-scroll">
            <InterviewsTab interviews={data?.user?.interviews || []} />
          </div>
        )}
        {activeItem === "Analytics" && (
          <div className="h-full overflow-scroll">
            <AnalyticsTab
              scores={data?.scores || []}
              dates={data?.dates || []}
            />
          </div>
        )}
        {activeItem === "Halo AI" && (
          <div className="h-full">
            <HaloAi />
          </div>
        )}
        {activeItem === "Whiteboard" && (
          <div className="h-full">
            <WhiteBoard />
          </div>
        )}
        {activeItem === "Settings" && (
          <div className="h-full">
            <SettingsTab
              userDetails={{
                name: data?.user?.name,
                email: data?.user?.email,
                profileImage: data?.user?.profileImage,
                githubUsername: data?.user?.githubUsername,
              }}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
