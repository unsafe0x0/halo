"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme}>
      {isDark ? <LuSun size={18} /> : <LuMoon size={18} />}
    </button>
  );
};

export default ToggleTheme;
