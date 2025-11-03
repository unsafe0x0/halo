import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import AuthProvider from "@/context/AuthProvider";
import TanStackQueryProvider from "@/context/TanstackQuery";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const secondary = Geist_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Halo - The simplest way to turn ideas into working projects.",
  description:
    "Turn your ideas into working projects with Halo, an ai powered website builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primary.variable} ${secondary.variable} antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <TanStackQueryProvider>{children}</TanStackQueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
