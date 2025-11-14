"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { HiLightningBolt } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="py-20 md:py-32 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-accent bg-accent/20">
                <HiLightningBolt
                  width={16}
                  height={16}
                  className="text-accent"
                />
                <span className="text-xs md:text-sm font-medium text-accent">
                  AI-Powered Interview Prep
                </span>
              </div>{" "}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Master Your Interview with{" "}
                <span className="text-accent">Halo</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground-1 leading-relaxed max-w-2xl">
                Prepare for your next interview with AI-powered practice
                sessions. Get real-time feedback, improve your answers, and land
                your dream job.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up">
                <Button size="large" variant="primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-3xl h-96">
              <Image
                src="/hero.png"
                alt="Interview Preparation"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Mock UI - Commented out
            <div className="relative w-full max-w-2xl h-96">
              <div className="relative bg-card border border-border rounded-3xl p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <span className="text-sm font-medium text-foreground-1">
                      Live Interview Session
                    </span>
                  </div>
                  <span className="text-sm text-accent font-medium">4:32</span>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="text-sm text-foreground-1 font-medium">
                    Question 2 of 5
                  </div>
                  <div className="p-4 bg-card-1 rounded-lg border border-border">
                    <p className="text-sm leading-relaxed text-foreground">
                      "Tell us about a challenging project you led..."
                    </p>
                  </div>
                </div>
                <div className="space-y-3 pt-2 border-t border-border">
                  <div className="text-sm text-accent font-medium">
                    Real-time Feedback
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-foreground-1">
                        Clarity: Good
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-foreground-1">
                        Pace: Natural
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex-1 px-4 py-2.5 rounded-lg bg-card-1 border border-border text-foreground text-sm font-medium hover:ring-2 hover:ring-accent transition-colors">
                    Pause
                  </button>
                  <button className="flex-1 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
