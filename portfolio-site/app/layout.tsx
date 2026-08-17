import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollReveal } from "./scroll-reveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanyong — Software Engineering / Data Science Portfolio",
  description:
    "Software engineering and data science portfolio featuring full-stack, AI and data projects.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
