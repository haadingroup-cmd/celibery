import { ShieldCheck, Leaf, Truck, Headset, BadgeCheck, Zap } from "lucide-react";

export const site = {
  name: "Celibery",
  tagline: "Power, engineered to disappear.",
  description:
    "Celibery designs GaN chargers, cables, and power banks built to outlast the devices they charge.",
  email: "support@celibery.com",
  phone: "+1 (800) 555-0142",
  address: "1 Innovation Way, Austin, TX 78701",
  social: {
    instagram: "https://instagram.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
};

export const mainNav = [
  { label: "Chargers", href: "/products?category=chargers" },
  { label: "Cables", href: "/products?category=cables" },
  { label: "Power Banks", href: "/products?category=power-banks" },
  { label: "Docks & Hubs", href: "/products?category=docks-hubs" },
  { label: "About", href: "/about" },
];

export const footerLinks = {
  Shop: [
    { label: "Chargers & Adapters", href: "/products?category=chargers" },
    { label: "Cables", href: "/products?category=cables" },
    { label: "Power Banks", href: "/products?category=power-banks" },
    { label: "Docks & Hubs", href: "/products?category=docks-hubs" },
    { label: "Car & Travel", href: "/products?category=car-travel" },
    { label: "Wireless Charging", href: "/products?category=wireless" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Warranty", href: "/warranty" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "FAQs", href: "/contact#faq" },
  ],
  Company: [
    { label: "About Celibery", href: "/about" },
    { label: "Sustainability", href: "/about" },
    { label: "Press", href: "/contact" },
    { label: "Careers", href: "/contact" },
  ],
};

export const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "18-month warranty",
    description: "Every product is covered, no questions asked.",
  },
  {
    icon: Zap,
    title: "GaN III technology",
    description: "Smaller, cooler, and more efficient than silicon.",
  },
  {
    icon: Truck,
    title: "Free shipping over $35",
    description: "Delivered in 2–4 business days, tracked door to door.",
  },
  {
    icon: Headset,
    title: "Real human support",
    description: "Average first response time under 2 hours.",
  },
  {
    icon: Leaf,
    title: "Low-waste packaging",
    description: "Plastic-free boxes made from recycled fiber.",
  },
  {
    icon: BadgeCheck,
    title: "Lab safety tested",
    description: "Independently certified for overcurrent and thermal safety.",
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Verified buyer",
    quote:
      "The Nexus 100 replaced four separate chargers on my desk. It genuinely runs cool even charging my laptop and phone at once.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    role: "Verified buyer",
    quote:
      "FlowLink cables are the first I haven't had to replace after six months of daily bag abuse. Braided jacket actually holds up.",
    rating: 5,
  },
  {
    name: "Priya R.",
    role: "Verified buyer",
    quote:
      "VoltCell's display is such a small thing but I use it constantly — no more guessing how much charge is left before a flight.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Verified buyer",
    quote:
      "Ordered the HubLink for my home office. One cable, everything just works — monitor, ethernet, and my laptop stays charged.",
    rating: 4,
  },
];

export const stats = [
  { value: "2.4M+", label: "Devices powered daily" },
  { value: "4.8/5", label: "Average rating across 12k+ reviews" },
  { value: "120+", label: "Countries shipped to" },
  { value: "18mo", label: "Standard warranty coverage" },
];
