import type { VisualKind } from "@/data/products";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  headline: [string, string];
  subcopy: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  features: string[];
  visual: VisualKind;
  /** Drop an mp4 at this path in /public/videos/ to go live automatically. */
  videoSrc: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "nas",
    eyebrow: "CELIBERY NAS",
    headline: ["YOUR DATA.", "YOUR CLOUD."],
    subcopy: "Private cloud storage for every home and studio — no monthly fees.",
    primaryCta: { label: "Shop NAS", href: "/products?category=nas" },
    secondaryCta: { label: "Compare Models", href: "/products?category=nas" },
    features: ["AI PHOTO SYNC", "PRIVATE CLOUD", "UP TO 88TB", "4K STREAMING"],
    visual: "nas4bay",
    videoSrc: "/videos/hero-nas.mp4",
  },
  {
    id: "charging",
    eyebrow: "CELIBERY CHARGING",
    headline: ["CHARGE FASTER.", "CARRY LESS."],
    subcopy: "GaN chargers and magnetic power banks built for speed.",
    primaryCta: { label: "Shop Charging", href: "/products?category=chargers" },
    secondaryCta: { label: "Explore Charging", href: "/products?category=power-banks" },
    features: ["GAN III FAST CHARGE", "QI2 WIRELESS", "COMPACT DESIGN", "SAFETY CERTIFIED"],
    visual: "nexodeGan",
    videoSrc: "/videos/hero-charging.mp4",
  },
  {
    id: "accessories",
    eyebrow: "CELIBERY ACCESSORIES",
    headline: ["ONE HUB.", "EVERY PORT."],
    subcopy: "Docks, trackers, and audio for a fully connected setup.",
    primaryCta: { label: "Shop Accessories", href: "/products?category=hubs-docks" },
    secondaryCta: { label: "Explore Lineup", href: "/products" },
    features: ["THUNDERBOLT 4", "MULTI-DISPLAY", "FIND MY COMPATIBLE", "HI-RES AUDIO"],
    visual: "revodokDock",
    videoSrc: "/videos/hero-accessories.mp4",
  },
];
