"use client";

import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const BentooGrid = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              See It In Action
            </h2>
            <p className="text-lg text-foreground-1 max-w-2xl mx-auto">
              Experience the power of AI-driven interview preparation with our
              intuitive interface.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:ring-2 hover:ring-accent transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <BiSolidBarChartAlt2 size={20} className="text-accent" />
                  <h3 className="font-bold">Your Performance</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-1">
                      Communication
                    </span>
                    <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-accent rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-1">
                      Technical Knowledge
                    </span>
                    <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-accent rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-1">
                      Confidence
                    </span>
                    <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-accent rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">8.5</div>
                    <div className="text-xs text-foreground-1">Overall</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">12</div>
                    <div className="text-xs text-foreground-1">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">25%</div>
                    <div className="text-xs text-foreground-1">Improved</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:ring-2 hover:ring-accent transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <FaVideo size={20} className="text-accent" />
                  <h3 className="font-bold">Start Interview</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-foreground-1 block mb-2">
                      Position
                    </label>
                    <div className="px-3 py-2 rounded-md bg-card-1 border border-border text-foreground text-sm">
                      Senior Software Engineer
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-foreground-1 block mb-2">
                      Company
                    </label>
                    <div className="px-3 py-2 rounded-md bg-card-1 border border-border text-foreground text-sm">
                      Google
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-foreground-1 block mb-2">
                      Interview Type
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-card-1 border border-accent text-foreground text-sm">
                        <FaRegCheckCircle size={16} className="text-accent" />
                        Technical
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-3 bg-linear-br from-accent to-accent-hover text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Begin Interview
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:ring-2 hover:ring-accent transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <AiOutlineClockCircle size={20} className="text-accent" />
                  <h3 className="font-bold">Question</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-foreground-1">
                      Question 3 of 5
                    </span>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                      2:30
                    </span>
                  </div>

                  <div className="p-3 bg-card-1 rounded-md border border-border">
                    <p className="text-sm leading-relaxed">
                      "Tell me about a time when you had to debug a complex
                      production issue. What was the problem, and how did you
                      solve it?"
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 rounded-md bg-card-1 border border-border text-foreground text-sm hover:ring-2 hover:ring-accent transition-colors">
                      Skip
                    </button>
                    <button className="flex-1 px-3 py-2 rounded-md bg-accent text-accent-foreground text-sm hover:opacity-90 transition-opacity">
                      Record Answer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:ring-2 hover:ring-accent transition-all">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border">
                  <FaRegCheckCircle size={20} className="text-accent" />
                  <h3 className="font-bold">AI Feedback</h3>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-md border border-accent/30">
                    <p className="text-sm font-medium text-accent mb-1">
                      <FaCheck className="inline mr-1" />
                      Strengths
                    </p>
                    <p className="text-xs text-foreground-1">
                      Clear problem articulation and logical approach
                    </p>
                  </div>

                  <div className="p-3 bg-yellow-500/10 rounded-md border border-yellow-500/30">
                    <p className="text-sm font-medium text-yellow-600 mb-1">
                      <FaArrowRight className="inline mr-1" />
                      Improve
                    </p>
                    <p className="text-xs text-foreground-1">
                      Add more specific metrics and timelines
                    </p>
                  </div>

                  <div className="p-3 bg-card-1 rounded-md border border-border">
                    <p className="text-sm font-medium mb-2">Score Breakdown:</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-foreground-1">Clarity</span>
                        <span className="text-accent">8.5/10</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-foreground-1">Depth</span>
                        <span className="text-accent">7.8/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentooGrid;
