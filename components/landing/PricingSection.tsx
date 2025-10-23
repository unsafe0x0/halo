import React from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import Button from "@/components/common/Button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI-powered development",
    features: [
      "5 AI generations per month",
      "Basic component library access",
      "Community support",
      "Standard deployment",
      "1 project limit",
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For developers who want unlimited access to all features",
    features: [
      "Unlimited AI generations",
      "Full component library access",
      "Priority support",
      "Advanced deployment options",
      "Unlimited projects",
      "Custom themes",
      "Collaboration tools",
      "Analytics dashboard",
    ],
    buttonText: "Start Pro Trial",
    buttonVariant: "primary" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For teams that need advanced security and compliance",
    features: [
      "Everything in Pro",
      "SOC 2 compliance",
      "Custom integrations",
      "Dedicated support",
      "On-premise deployment",
      "Advanced security features",
      "Team management",
      "Custom SLAs",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "secondary" as const,
    popular: false,
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-2 border-x border-border">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-lg p-8 ${
                plan.popular ? "border-accent" : "border-border"
              }`}
              role="region"
              aria-labelledby={`plan-${plan.name}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <FaStar className="text-xs" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  id={`plan-${plan.name}`}
                  className="text-2xl font-bold text-secondary mb-2"
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-secondary">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted">/{plan.period}</span>
                  )}
                </div>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <FaCheck className="text-accent text-sm" aria-hidden />
                    </div>
                    <span className="text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.buttonVariant}
                className="w-full"
                size="large"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
