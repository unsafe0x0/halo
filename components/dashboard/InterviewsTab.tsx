"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import NewInterview, { InterviewDetails } from "./NewInterview";
import CallingAi from "./CallingAi";
import InterviewCard from "./InterviewCard";

interface InterviewData {
  id: string;
  model: string;
  position: string;
  status: string;
  strengths: string[];
  improvements: string[];
  score: number;
}

interface InterviewsTabProps {
  interviews: InterviewData[];
}

const InterviewsTab: React.FC<InterviewsTabProps> = ({ interviews }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentInterview, setCurrentInterview] =
    useState<InterviewDetails | null>(null);

  const handleStartInterview = (details: InterviewDetails) => {
    console.log("Starting interview with details:", details);
    setCurrentInterview(details);
    setIsCallActive(true);
    setIsDialogOpen(false);
  };

  const handleEndCall = async (messages: any[]) => {
    setIsCallActive(false);

    if (!currentInterview || messages.length === 0) {
      setCurrentInterview(null);
      return;
    }

    const reviewMessages = messages.map((msg) => ({
      role: msg.role === "assistant" ? "ai" : "user",
      content: msg.content,
    }));

    try {
      const response = await fetch("/api/interview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          interviewId: currentInterview.role,
          candidate: currentInterview.name,
          messages: reviewMessages,
        }),
      });

      if (!response.ok) {
        console.error("Failed to send interview data");
      } else {
        const result = await response.json();
        console.log("Interview outcome:", result);
        const storeResponse = await fetch("/api/user/interview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: currentInterview.model,
            position: currentInterview.role,
            outcome: result.outcome || result,
            status: "completed",
          }),
        });

        if (!storeResponse.ok) {
          console.error("Failed to store interview in database");
        } else {
          const storedData = await storeResponse.json();
          console.log("Interview stored successfully:", storedData);
        }
      }
    } catch (error) {
      console.error("Error sending interview data:", error);
    }

    setCurrentInterview(null);
  };

  return (
    <>
      <div className="p-4 md:p-6 lg:p-8 flex-1 overflow-auto">
        <div className="flex-1 mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Interviews
            </h1>
            <p className="text-foreground-1 text-base">
              Welcome to your interviews section
            </p>
            <Button onClick={() => setIsDialogOpen(true)} className="mt-5">
              New Interview
            </Button>
          </div>
          <div className="w-full">
            {interviews && interviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interviews.map((interview: InterviewData) => (
                  <InterviewCard
                    key={interview.id}
                    model={interview.model}
                    position={interview.position}
                    status={interview.status}
                    strengths={interview.strengths}
                    improvements={interview.improvements}
                    score={interview.score}
                    interviewId={interview.id}
                    onViewDetails={() =>
                      console.log("View details for:", interview.id)
                    }
                    onDownloadReport={() =>
                      console.log("Download report for:", interview.id)
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No interviews yet
                </h3>
                <p className="text-foreground-1 mb-6">
                  Start your first interview to see it here
                </p>
                <Button onClick={() => setIsDialogOpen(true)}>
                  Start Interview
                </Button>
              </div>
            )}
          </div>
        </div>

        <NewInterview
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onStart={handleStartInterview}
        />
      </div>

      <CallingAi
        isActive={isCallActive}
        interviewDetails={currentInterview}
        onCallEnd={handleEndCall}
      />
    </>
  );
};

export default InterviewsTab;
