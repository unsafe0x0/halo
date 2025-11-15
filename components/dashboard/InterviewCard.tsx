"use client";

import React from "react";

interface InterviewCardProps {
  model: string;
  position: string;
  status: string;
  strengths: string[];
  improvements: string[];
  score: number;
  interviewId?: string;
  onViewDetails?: () => void;
  onDownloadReport?: () => void;
}

const InterviewCard: React.FC<InterviewCardProps> = ({
  model,
  position,
  status,
  strengths,
  improvements,
  score,
}) => {
  const statusColor = {
    completed: "bg-green-500/10 text-green-600 border border-green-500/20",
    in_progress: "bg-blue-500/10 text-blue-600 border border-blue-500/20",
    pending: "bg-yellow-500/10 text-yellow-600 border border-yellow-500/20",
    failed: "bg-red-500/10 text-red-600 border border-red-500/20",
  };

  const getStatusColor = (status: string) => {
    return (
      statusColor[status as keyof typeof statusColor] || statusColor.pending
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return "text-green-600";
    if (score >= 6) return "text-blue-600";
    if (score >= 4) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 8) return "bg-green-600";
    if (score >= 6) return "bg-blue-600";
    if (score >= 4) return "bg-yellow-600";
    return "bg-red-600";
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden transition-all hover:ring-2 hover:ring-accent">
      <div className="p-5 pb-3 border-b border-border/50">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground truncate">
              {position}
            </h3>
            <p className="text-xs text-foreground-1 mt-1">{model}</p>
          </div>
          <span
            className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${getStatusColor(
              status,
            )}`}
          >
            {status.replace("_", " ").charAt(0).toUpperCase() +
              status.replace("_", " ").slice(1)}
          </span>
        </div>
      </div>
      <div className={`px-5 py-4 bg-linear-to-r ${getScoreBgColor(score)}/10`}>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium text-foreground-1 mb-1">Score</p>
            <span className={`text-2xl font-semibold ${getScoreColor(score)}`}>
              {score.toFixed(1)}/10
            </span>
          </div>
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Strengths
          </h4>
          <ul className="space-y-1">
            {strengths && strengths.length > 0 ? (
              strengths.map((strength, idx) => (
                <li key={idx} className="text-xs text-foreground-1 flex gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{strength}</span>
                </li>
              ))
            ) : (
              <li className="text-xs text-foreground-1">
                No strengths recorded
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Improvements
          </h4>
          <ul className="space-y-1">
            {improvements && improvements.length > 0 ? (
              improvements.map((improvement, idx) => (
                <li key={idx} className="text-xs text-foreground-1 flex gap-2">
                  <span className="text-accent font-bold">→</span>
                  <span>{improvement}</span>
                </li>
              ))
            ) : (
              <li className="text-xs text-foreground-1">
                No improvements recorded
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
