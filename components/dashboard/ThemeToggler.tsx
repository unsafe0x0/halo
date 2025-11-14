"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoon } from "react-icons/bs";
import { IoDesktop } from "react-icons/io5";

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
    { value: "light", label: "Light", icon: BsSun },
    { value: "dark", label: "Dark", icon: BsMoon },
    { value: "system", label: "System", icon: IoDesktop },
  ];

  const currentTheme = themes.find((t) => t.value === theme);
  const CurrentIcon = currentTheme?.icon || BsSun;

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
        <CurrentIcon size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={handleCycleTheme}
      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium text-foreground hover:bg-card justify-start"
    >
      <span className="shrink-0">
        <CurrentIcon size={20} />
      </span>
      <span className="truncate flex-1 text-left text-sm">
        {currentTheme?.label || "Theme"}
      </span>
    </button>
  );
};

export default ThemeToggler;
