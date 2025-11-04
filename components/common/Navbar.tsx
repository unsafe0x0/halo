"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-border bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 w-full">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold cursor-pointer hover:text-accent transition-opacity">
              Halo
            </div>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground hover:text-accent transition-colors font-medium p-1.5 hover:bg-card rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <SunIcon width={18} height={18} />
              ) : (
                <MoonIcon width={18} height={18} />
              )}
            </button>

            <Link href="/sign-in" className="hidden md:inline-flex">
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-md cursor-pointer hover:opacity-90 transition-opacity">
                Sign in
              </button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
              aria-label="Toggle mobile menu"
            >
              <HamburgerMenuIcon width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="block md:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-foreground hover:text-accent p-1.5 transition-colors font-medium hover:bg-card rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link href="/sign-in" className="w-full mt-4 block">
              <button className="w-full px-4 py-2 bg-accent text-accent-foreground rounded-md cursor-pointer hover:opacity-90 transition-opacity">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
