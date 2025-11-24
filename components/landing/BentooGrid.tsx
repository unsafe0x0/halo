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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pointer-events-none select-none items-stretch">
            <div className="p-6 md:p-8 rounded-xl bg-card border border-border flex flex-col justify-between h-full">
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <BiSolidBarChartAlt2 size={20} className="text-accent" />
                <h3 className="font-bold">Dashboard Overview</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-background border border-border rounded-lg p-4 flex flex-col justify-center">
                  <p className="text-foreground-1 text-xs mb-1 font-medium">
                    Total Interviews
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-foreground">24</p>
                    <span className="text-xs text-green-500 font-medium">
                      +4 this week
                    </span>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4 flex flex-col justify-center">
                  <p className="text-foreground-1 text-xs mb-1 font-medium">
                    Average Score
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-foreground">8.5</p>
                    <span className="text-xs text-green-500 font-medium">
                      +0.5
                    </span>
                  </div>
                </div>
                <div className="bg-background border border-border rounded-lg p-4 flex flex-col justify-center col-span-2 relative overflow-hidden">
                  <div className="flex justify-between items-end relative z-10">
                    <div>
                      <p className="text-foreground-1 text-xs mb-1 font-medium">
                        Performance Trend
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        9.8{" "}
                        <span className="text-sm font-normal text-foreground-1">
                          / 10
                        </span>
                      </p>
                    </div>
                    <div className="flex items-end gap-1.5 h-12">
                      {[40, 60, 45, 70, 85, 60, 75, 65, 80, 95].map((h, i) => (
                        <div
                          key={i}
                          className={`w-3 rounded-t-sm transition-all ${i === 9 ? "bg-accent" : "bg-accent/20"}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-card border border-border h-full">
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <FaVideo size={20} className="text-accent" />
                <h3 className="font-bold">New Interview</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">
                    Select Model
                  </label>
                  <div className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground flex justify-between items-center group">
                    <span className="font-medium">GPT-OSS (Recommended)</span>
                    <span className="text-xs text-foreground-1">▼</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">
                    Target Role
                  </label>
                  <div className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground font-medium">
                    Senior Product Manager
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-foreground mb-1.5">
                    Years of Experience
                  </label>
                  <div className="w-full px-3 py-2.5 bg-background border border-border rounded-lg text-sm text-foreground font-medium">
                    5 years
                  </div>
                </div>

                <div className="w-full mt-2 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-bold text-center text-sm">
                  Start Interview Session
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-card border border-border flex flex-col h-full">
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <AiOutlineClockCircle size={20} className="text-accent" />
                <h3 className="font-bold">Live Session</h3>
              </div>

              <div className="flex-1 flex flex-col gap-4 overflow-hidden relative">
                <div className="flex justify-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold shrink-0">
                    AI
                  </div>
                  <div className="bg-card-1 border border-border text-foreground px-4 py-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm leading-relaxed">
                    Could you describe a time when you had to prioritize
                    conflicting deadlines?
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <div className="bg-accent text-accent-foreground px-4 py-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm leading-relaxed">
                    In my previous role, I had to launch a feature while fixing
                    a critical bug...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold shrink-0">
                    ME
                  </div>
                </div>

                <div className="flex justify-start mt-auto gap-3">
                  <div className="w-8 h-8" />
                  <div className="bg-card-1 border border-border text-foreground px-3 py-2 rounded-xl rounded-tl-none flex items-center gap-2">
                    <div className="flex gap-1 h-3 items-center">
                      <div className="w-0.5 h-2 bg-accent rounded-full animate-[bounce_1s_infinite_0ms]"></div>
                      <div className="w-0.5 h-3 bg-accent rounded-full animate-[bounce_1s_infinite_200ms]"></div>
                      <div className="w-0.5 h-2 bg-accent rounded-full animate-[bounce_1s_infinite_400ms]"></div>
                    </div>
                    <span className="text-xs font-medium text-foreground-1">
                      Listening...
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4 mt-4 flex justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center border border-destructive/20 hover:bg-destructive/20 transition-colors">
                  <FaVideo size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg shadow-accent/20">
                  <FaCheck size={20} />
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-card border border-border h-full">
              <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
                <FaRegCheckCircle size={20} className="text-accent" />
                <h3 className="font-bold">Analysis Report</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between bg-background p-4 rounded-lg border border-border">
                  <div>
                    <p className="text-xs font-medium text-foreground-1 mb-1">
                      Overall Score
                    </p>
                    <span className="text-3xl font-bold text-green-600">
                      9.2
                    </span>
                    <span className="text-sm text-foreground-1 font-medium">
                      {" "}
                      / 10
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-600 border border-green-500/20 font-bold uppercase tracking-wider">
                      Excellent
                    </span>
                    <p className="text-xs text-foreground-1 mt-2">
                      Top 5% of candidates
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    Key Strengths
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="text-sm text-foreground-1 flex gap-3 items-start bg-card-1/50 p-2 rounded-md">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>
                        Clear communication style with structured responses
                      </span>
                    </li>
                    <li className="text-sm text-foreground-1 flex gap-3 items-start bg-card-1/50 p-2 rounded-md">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>Strong problem-solving approach demonstrated</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(var(--accent),0.5)]" />
                    Areas for Improvement
                  </h4>
                  <ul className="space-y-2.5">
                    <li className="text-sm text-foreground-1 flex gap-3 items-start bg-card-1/50 p-2 rounded-md">
                      <span className="text-accent font-bold mt-0.5">→</span>
                      <span>Provide more concrete examples with metrics</span>
                    </li>
                  </ul>
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
