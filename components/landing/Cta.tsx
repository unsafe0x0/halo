"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";

const Cta = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-accent text-accent-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          <div className="relative p-12 md:p-24 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              Ready to Master Your Next Interview?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-accent-foreground/80 max-w-2xl leading-relaxed"
            >
              Join thousands of professionals who are landing their dream jobs
              with Halo's AI-powered preparation platform.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
            >
              <Link href="/sign-in" className="w-full sm:w-auto">
                <Button
                  size="large"
                  variant="ghost"
                  className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90"
                >
                  Get Started for Free
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
