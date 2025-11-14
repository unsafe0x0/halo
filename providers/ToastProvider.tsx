"use client";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        theme={resolvedTheme as "light" | "dark" | "system"}
      />
    </>
  );
}
