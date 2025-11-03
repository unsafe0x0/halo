import React from "react";
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
