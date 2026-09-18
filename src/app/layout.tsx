import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://celibery.vercel.app"),
  title: {
    default: "Celibery — Power, engineered to disappear.",
    template: "%s — Celibery",
  },
  description:
    "Celibery designs GaN chargers, cables, and power banks built to outlast the devices they charge. Fast, safe, and small enough to forget you're carrying it.",
  openGraph: {
    title: "Celibery — Power, engineered to disappear.",
    description:
      "GaN chargers, cables, and power banks built to outlast the devices they charge.",
    siteName: "Celibery",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
