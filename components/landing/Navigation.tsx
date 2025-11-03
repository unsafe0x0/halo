import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Navigation = () => {
  return (
    <nav className="border-b border-border fixed w-full top-0 z-50 bg-background/50 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold tracking-tighter">
          Halo
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="#features"
            className="text-sm hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm hover:text-primary transition-colors"
          >
            How it works
          </Link>
          <Link
            href="#faq"
            className="text-sm hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <ThemeToggle />
          <Button className="bg-primary text-primary-foreground text-xs sm:text-sm py-2 sm:py-3 rounded-md">
            Get Started
          </Button>
        </div>
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <Button className="bg-primary text-primary-foreground text-xs py-2 rounded-md">
            Start
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
