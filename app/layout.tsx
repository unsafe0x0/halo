import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import TanStackQueryProvider from "@/hooks/TanstackQuery";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halo - Interview with ai and master your skills",
  description:
    "Halo is your AI-powered interview companion, designed to help you master your skills and ace your interviews with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={primary.variable}>
        <ThemeProvider>
          <AuthProvider>
            <TanStackQueryProvider>{children}</TanStackQueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
