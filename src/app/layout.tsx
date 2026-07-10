import type { Metadata, Viewport } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Cuts Tree Service — Tree Removal & Stump Grinding | Watertown, SD",
  description:
    "Owner-operated tree removal, pruning, and stump grinding in Watertown, South Dakota. Same-day turnaround on big jobs, meticulous cleanup, A+ BBB rating. Call (605) 884-6393.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable}`}>
      <body className="bg-bg font-body text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to main content
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
