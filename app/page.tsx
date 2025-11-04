import React from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import BentooGrid from "@/components/landing/BentooGrid";
import Faq from "@/components/landing/Faq";
import Cta from "@/components/landing/Cta";
import Footer from "@/components/common/Footer";

const LandingPage = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <BentooGrid />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
};

export default LandingPage;
