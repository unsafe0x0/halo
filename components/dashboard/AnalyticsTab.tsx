"use client";

import Chart from "./Chart";

interface AnalyticsTabProps {
  scores?: number[];
  dates?: string[];
}

const AnalyticsTab = ({ scores = [], dates = [] }: AnalyticsTabProps) => {
  return (
    <div className="p-4 md:p-6 lg:p-8 flex-1 overflow-auto">
      <div className="flex-1 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-foreground-1 text-base">
            Welcome to your analytics section
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg">
          {scores.length > 0 && dates.length > 0 ? (
            <Chart dates={dates} scoreData={scores} />
          ) : (
            <div className="text-foreground-1 text-center py-8">
              No analytics data available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;
