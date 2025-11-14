"use client";

import React from "react";
import Chart from "./Chart";
import InterviewCard from "./InterviewCard";

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
