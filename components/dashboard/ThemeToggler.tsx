"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { IoDesktop } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeTogglerProps {
  isCollapsed?: boolean;
}

const ThemeToggler = ({ isCollapsed = false }: ThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { value: "light", label: "Light", icon: LuSun },
    { value: "dark", label: "Dark", icon: LuMoon },
    { value: "system", label: "System", icon: IoDesktop },
  ];

  const currentTheme = themes.find((t) => t.value === theme);
  const CurrentIcon = currentTheme?.icon || LuSun;

  const handleCycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  if (isCollapsed) {
    return (
      <button
        onClick={handleCycleTheme}
        className="flex items-center justify-center w-full p-2 rounded-lg text-foreground hover:bg-card"
        title={currentTheme?.label}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CurrentIcon size={20} />
          </motion.div>
        </AnimatePresence>
      </button>
    );
  }

  return (
    <button
      onClick={handleCycleTheme}
      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium text-foreground hover:bg-card justify-start"
    >
      <span className="shrink-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CurrentIcon size={20} />
          </motion.div>
        </AnimatePresence>
      </span>
      <span className="truncate flex-1 text-left text-sm">
        {currentTheme?.label || "Theme"}
      </span>
    </button>
  );
};

export default ThemeToggler;
