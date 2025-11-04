"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";

const Cta = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-accent/20 via-transparent to-accent/10 blur-3xl" />

          <div className="relative p-8 md:p-16 bg-card border border-border rounded-2xl flex flex-col gap-8 items-center text-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Ready to Ace Your Interview?
              </h2>

              <p className="text-lg text-foreground-1 max-w-2xl mx-auto">
                Join thousands of professionals who've already improved their
                interview skills with Halo. Start your free trial today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="/sign-up">
                <Button size="large" variant="primary">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
