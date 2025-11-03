import React from "react";
import { CheckCircle2, Users } from "lucide-react";

const Benefits = () => {
  return (
    <section id="benefits" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-5xl font-bold tracking-tighter mb-16">
          Why Choose Halo
        </h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Advanced AI Technology
                </h3>
                <p className="text-muted-foreground">
                  Powered by cutting-edge language models for accurate
                  evaluation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Personalized Learning
                </h3>
                <p className="text-muted-foreground">
                  Tailored feedback and questions based on your background and
                  goals.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-muted-foreground">
                  Access premium interview coaching at a fraction of the cost.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Learn from thousands of successful candidates in our growing
                  community.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  24/7 Availability
                </h3>
                <p className="text-muted-foreground">
                  Practice anytime, anywhere at your own pace without scheduling
                  constraints.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Success Stories</h3>
                <p className="text-muted-foreground">
                  Join 10,000+ professionals who landed their dream jobs with
                  Halo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
