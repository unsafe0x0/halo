import React from "react";
import Image from "next/image";
import { FaPalette, FaUsers, FaRocket, FaMagic } from "react-icons/fa";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { FaShieldAlt } from "react-icons/fa";

const BentoGrid = () => {
  return (
    <section className="w-full py-20 px-2">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Build with Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 lg:row-span-2 bg-card border border-border rounded-lg p-8 hover:border-accent group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg">
                <FaMagic className="text-2xl text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-1">
                  AI-Powered Generation
                </h3>
                <p className="text-muted">
                  Describe what you want, get production-ready code instantly
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/50 rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm text-secondary font-medium">
                    Build a landing page for a SaaS product
                  </span>
                </div>
                <div className="text-xs text-muted">
                  Generating responsive React components with Tailwind CSS...
                </div>
              </div>
              <div className="bg-primary/50 rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-secondary font-medium">
                    Create a dashboard with charts and analytics
                  </span>
                </div>
                <div className="text-xs text-muted">
                  Building interactive data visualizations with Recharts...
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-md">
                <SiWebcomponentsdotorg className="text-xl text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                Component Library
              </h3>
            </div>
            <p className="text-muted text-sm mb-4">
              Pre-built, customizable components for rapid development
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                Buttons
              </span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                Forms
              </span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                Cards
              </span>
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                +20 more
              </span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-md">
                <FaPalette className="text-xl text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                Design System
              </h3>
            </div>
            <p className="text-muted text-sm mb-4">
              Consistent, beautiful designs with customizable themes
            </p>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-accent rounded-full"></div>
              <div className="w-6 h-6 bg-secondary rounded-full"></div>
              <div className="w-6 h-6 bg-muted rounded-full"></div>
              <div className="w-6 h-6 bg-destructive rounded-full"></div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-md">
                <FaUsers className="text-xl text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                Share with Friends
              </h3>
            </div>
            <p className="text-muted text-sm mb-4">
              Share your creations and collaborate with friends instantly
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-card flex items-center justify-center text-xs font-bold text-white">
                  A
                </div>
                <div className="w-8 h-8 bg-secondary rounded-full border-2 border-card flex items-center justify-center text-xs font-bold text-white">
                  B
                </div>
                <div className="w-8 h-8 bg-muted rounded-full border-2 border-card flex items-center justify-center text-xs font-bold text-white">
                  C
                </div>
              </div>
              <span className="text-xs text-muted">Share link copied!</span>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-accent">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-md">
                <FaRocket className="text-xl text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">
                Instant Deployment
              </h3>
            </div>
            <p className="text-muted text-sm mb-4">
              Deploy to production with one click, globally distributed
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-muted">Deployed successfully</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
