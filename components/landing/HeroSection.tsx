"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
import { HiLightningBolt } from "react-icons/hi";
import MockDashboard from "./MockDashboard";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-accent">
              AI-Powered Interview Prep
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl">
            Master Your Interview with <span className="text-accent">Halo</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground-1 leading-relaxed max-w-2xl mx-auto">
            Prepare for your next interview with AI-powered practice sessions.
            Get real-time feedback, improve your answers, and land your dream
            job.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/sign-in" className="w-full sm:w-auto">
              <Button size="large" variant="primary" className="">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-hover rounded-2xl blur opacity-20" />

          <div className="relative rounded-xl border border-border/50 bg-background/50 backdrop-blur-xl overflow-hidden">
            <div className="aspect-[16/10] md:aspect-[16/9] w-full relative">
              <div className="absolute inset-0 p-2 md:p-4 bg-card/50">
                <MockDashboard />
              </div>
            </div>
          </div>

          <div className="absolute -left-4 md:-left-12 top-1/4 p-3 bg-card border border-border rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow hidden md:flex">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <div className="text-xs text-foreground-1">Success Rate</div>
              <div className="text-sm font-bold">98%</div>
            </div>
          </div>

          <div className="absolute -right-4 md:-right-12 bottom-1/4 p-3 bg-card border border-border rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow delay-700 hidden md:flex">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <HiLightningBolt size={20} />
            </div>
            <div>
              <div className="text-xs text-foreground-1">AI Feedback</div>
              <div className="text-sm font-bold">Instant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
