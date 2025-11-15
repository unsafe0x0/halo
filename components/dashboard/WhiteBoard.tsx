"use client";
import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "tldraw/tldraw.css";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="flex items-center justify-center h-full w-full">
        Initializing...
      </div>
    );

  return (
    <div className="w-full h-full overflow-hidden">
      <Tldraw autoFocus persistenceKey="halo-whiteboard" />
    </div>
  );
};

export default WhiteBoard;
