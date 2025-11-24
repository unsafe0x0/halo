"use client";
import React, { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "tldraw/tldraw.css";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

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

  const licenseKey = process.env.NEXT_PUBLIC_TLDRAW_LICENSE_KEY;

  return (
    <motion.div
      className="w-full h-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Tldraw
        licenseKey={licenseKey}
        autoFocus
        persistenceKey="halo-whiteboard"
      />
    </motion.div>
  );
};

export default WhiteBoard;
