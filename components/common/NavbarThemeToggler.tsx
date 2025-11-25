"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const NavbarThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-card transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isDark ? <LuSun size={18} /> : <LuMoon size={18} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default NavbarThemeToggler;
