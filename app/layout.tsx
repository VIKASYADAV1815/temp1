import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeInit from "@/components/theme/ThemeInit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agenforce - AI Agents that do the work",
  description: "Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeInit />
        <main className="min-h-screen bg-background text-foreground">
          {children}
        </main>
      </body>
    </html>
  );
}
