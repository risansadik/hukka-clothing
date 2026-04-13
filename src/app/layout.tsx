import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUKKA | Premium Men's Clothing",
  description: "Bold, modern clothing for men. Own your style.",
  icons: {
    icon: '/images/hukka-transparent-logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-white">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
