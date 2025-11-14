"use client";

import React from "react";
import Chart from "./Chart";
import InterviewCard from "./InterviewCard";
import { LuTarget } from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import { TiStar } from "react-icons/ti";

interface DashboardTabProps {
  interviews?: Array<{
    id: string;
    interviewId: string;
    model: string;
    position: string;
    status: string;
    strengths: string[];
    improvements: string[];
    score: number;
    createdAt: string;
  }>;
  scores?: number[];
  dates?: string[];
}

const DashboardTab = ({
  interviews = [],
  scores = [],
  dates = [],
}: DashboardTabProps) => {
  const recentInterviews = interviews.slice(0, 5);
  const recentScores = scores.slice(0, 5);
  const recentDates = dates.slice(0, 5);

  return (
    <div className="p-4 md:p-6 lg:p-8 flex-1 overflow-y-auto">
      <div className="flex-1 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-foreground-1 text-base">
            Welcome to your dashboard section
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground-1 text-sm mb-1">
                    Total Interviews
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {recentInterviews.length}
                  </p>
                </div>
                <LuTarget className="w-10 h-10 text-accent" />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground-1 text-sm mb-1">
                    Average Score
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {recentScores.length > 0
                      ? (
                          recentScores.reduce((a, b) => a + b, 0) /
                          recentScores.length
                        ).toFixed(1)
                      : "0"}
                  </p>
                </div>
                <AiOutlineLineChart className="w-10 h-10 text-accent" />
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground-1 text-sm mb-1">Best Score</p>
                  <p className="text-3xl font-bold text-foreground">
                    {recentScores.length > 0 ? Math.max(...recentScores) : "0"}
                  </p>
                </div>
                <TiStar className="w-10 h-10 text-accent" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">
              Recent Interviews
            </h2>
            {recentInterviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentInterviews.map((interview) => (
                  <InterviewCard
                    key={interview.interviewId}
                    model={interview.model}
                    position={interview.position}
                    status={interview.status}
                    strengths={interview.strengths}
                    improvements={interview.improvements}
                    score={interview.score}
                    interviewId={interview.interviewId}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <p className="text-foreground-1">No interviews yet.</p>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">
              Recent Score Trends
            </h2>
            {recentScores.length > 0 && recentDates.length > 0 ? (
              <div className="bg-card border border-border">
                <Chart dates={recentDates} scoreData={recentScores} />
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <p className="text-foreground-1">
                  No score data available yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTab;
