import React from "react";
import {
  HiHome,
  HiUsers,
  HiDocumentText,
  HiCog,
  HiSearch,
  HiBell,
} from "react-icons/hi";

const MockDashboard = () => {
  return (
    <div className="w-full h-full bg-card border border-border rounded-xl overflow-hidden flex select-none pointer-events-none">
      <div className="w-16 md:w-48 bg-card-1 border-r border-border flex flex-col justify-between p-4 hidden md:flex">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <span className="font-bold text-lg hidden md:block">Halo</span>
          </div>
          <div className="space-y-1">
            {[
              { icon: HiHome, label: "Dashboard", active: true },
              { icon: HiUsers, label: "Interviews", active: false },
              { icon: HiDocumentText, label: "Reports", active: false },
              { icon: HiCog, label: "Settings", active: false },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  item.active ? "bg-accent/10 text-accent" : "text-foreground-1"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium hidden md:block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 bg-background rounded-xl border border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-accent-hover" />
            <div className="hidden md:block">
              <div className="text-sm font-medium">Priyanshu</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-background">
        <div className="h-16 border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4 text-foreground-1">
            <span className="font-medium text-foreground">Dashboard</span>
            <span className="text-border">/</span>
            <span>Overview</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-1" />
              <input
                type="text"
                placeholder="Search..."
                readOnly
                className="pl-9 pr-4 py-1.5 bg-card-1 border border-border rounded-lg text-sm focus:outline-none w-64"
              />
            </div>
            <div className="p-2 text-foreground-1 relative">
              <HiBell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6 overflow-hidden">
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Total Interviews", value: "24", change: "+12%" },
              { label: "Avg. Score", value: "8.5", change: "+0.4" },
              { label: "Hours Practiced", value: "12h", change: "+2h" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 bg-card border border-border rounded-xl space-y-2"
              >
                <div className="text-sm text-foreground-1">{stat.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-green-500 font-medium bg-green-500/10 px-2 py-1 rounded-full">
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Recent Activity</h3>
              <div className="text-sm text-accent">View All</div>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg border border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <HiDocumentText size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-sm">
                        System Design Interview
                      </div>
                      <div className="text-xs text-foreground-1">
                        2 hours ago
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground-1">
                    Score: 9/10
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockDashboard;
