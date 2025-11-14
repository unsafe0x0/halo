"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "tldraw/tldraw.css";
import { useTheme } from "next-themes";

const Tldraw = dynamic(() => import("tldraw").then((mod) => mod.Tldraw), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full w-full">
      Loading whiteboard...
    </div>
  ),
});

const WhiteBoard = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      setIsDark(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  if (!mounted || !resolvedTheme)
    return (
      <div className="flex items-center justify-center h-full w-full">
        Initializing...
      </div>
    );

  return (
    <div
      className={`w-full h-full overflow-hidden ${isDark ? "dark" : "light"}`}
    >
      <Tldraw autoFocus persistenceKey="halo-whiteboard" />
    </div>
  );
};

export default WhiteBoard;
