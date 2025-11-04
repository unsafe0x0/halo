import React from "react";
import Navbar from "@/components/common/Navbar";
import SignIn from "@/components/auth/SignIn";
import Footer from "@/components/common/Footer";

const LandingPage = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <SignIn />
      <Footer />
    </main>
  );
};

export default LandingPage;
