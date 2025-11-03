"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  useAnimationVariants,
  defaultViewportSettings,
} from "@/hooks/useAnimationVariants";

const FAQ = () => {
  const { fastContainerVariants, itemFastVariants } = useAnimationVariants();

  const faqs = [
    {
      question: "How does this actually work?",
      answer:
        "You pick a role, we ask you real interview questions through our AI. You answer out loud, and we give you feedback on what went well and what to improve.",
    },
    {
      question: "Is this just a chatbot?",
      answer:
        "Nope. Our AI actually listens to how you answer, follows up with harder questions, and grades you like a real interviewer would.",
    },
    {
      question: "Will this really help me get the job?",
      answer:
        "Most of our users see a noticeable difference after 3-4 practice sessions. You'll feel more confident, answer better, and avoid the common mistakes that sink interviews.",
    },
    {
      question: "What companies' questions do you have?",
      answer:
        "We're constantly adding questions from the biggest tech companies, startups, and enterprises. If we don't have your target company yet, tell us and we'll add it.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes. Your interview recordings and feedback stay with you. We never share your data or sell it. Industry standard encryption, the whole deal.",
    },
    {
      question: "Can I use this on my phone?",
      answer:
        "Desktop works best, but yeah, you can do it on mobile if you want. Whatever works for you.",
    },
  ];

  return (
    <section id="faq" className="">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          variants={itemFastVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-3 sm:mb-4">
            Got questions?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We've got answers
          </p>
        </motion.div>

        <motion.div
          variants={fastContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemFastVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
