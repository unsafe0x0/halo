import React from "react";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BentoGrid from "@/components/landing/BentoGrid";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/common/Footer";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full">
        <Navbar />
        <HeroSection />
        <BentoGrid />
        <PricingSection />
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
