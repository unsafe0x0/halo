import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import TanStackQueryProvider from "@/hooks/TanstackQuery";
import { ToastProvider } from "@/providers/ToastProvider";

const primary = Hanken_Grotesk({
  weight: ["400", "500", "600"],
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
            <TanStackQueryProvider>
              <ToastProvider>{children}</ToastProvider>
            </TanStackQueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
