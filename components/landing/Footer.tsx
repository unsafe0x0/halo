"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  useAnimationVariants,
  defaultViewportSettings,
} from "@/hooks/useAnimationVariants";

const Footer = () => {
  const { fastContainerVariants, itemFastVariants } = useAnimationVariants();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 pb-8 border-b border-border"
          variants={fastContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <motion.div variants={itemFastVariants}>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemFastVariants}>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemFastVariants}>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">
              Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemFastVariants}>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground"
          variants={fastContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewportSettings}
        >
          <motion.p variants={itemFastVariants}>
            &copy; 2025 Halo. All rights reserved.
          </motion.p>
          <motion.div
            className="flex gap-4 sm:gap-6"
            variants={fastContainerVariants}
          >
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              variants={itemFastVariants}
            >
              Twitter
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              variants={itemFastVariants}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              variants={itemFastVariants}
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
