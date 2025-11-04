"use client";

import React from "react";
import Link from "next/link";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "/pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Community", href: "/community" },
        { label: "Status", href: "/status" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    { Icon: TwitterLogoIcon, label: "Twitter", href: "https://twitter.com" },
    { Icon: LinkedInLogoIcon, label: "LinkedIn", href: "https://linkedin.com" },
    { Icon: GitHubLogoIcon, label: "GitHub", href: "https://github.com" },
    {
      Icon: EnvelopeOpenIcon,
      label: "Email",
      href: "mailto:support@halohq.com",
    },
  ];

  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-border">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="inline-flex w-fit">
              <div className="text-2xl font-bold hover:text-accent transition-colors">
                Halo
              </div>
            </Link>
            <p className="text-sm text-foreground-1 leading-relaxed">
              Master your interviews with AI-powered practice and feedback.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  <social.Icon width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="font-semibold text-sm md:text-base">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground-1 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-1">
            © {currentYear} Halo. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm">
            <Link
              href="/privacy"
              className="text-foreground-1 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/terms"
              className="text-foreground-1 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-border">•</span>
            <Link
              href="/cookies"
              className="text-foreground-1 hover:text-accent transition-colors"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
