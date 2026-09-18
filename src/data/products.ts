import {
  Zap,
  Cable,
  BatteryCharging,
  Magnet,
  LayoutGrid,
  Car,
  CircleDot,
  Plug,
  type LucideIcon,
} from "lucide-react";

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  {
    slug: "chargers",
    name: "Chargers & Adapters",
    description: "GaN wall chargers from 20W to 140W.",
    icon: Plug,
  },
  {
    slug: "cables",
    name: "Cables",
    description: "Braided, bend-tested, built to outlast the box.",
    icon: Cable,
  },
  {
    slug: "power-banks",
    name: "Power Banks",
    description: "Pocket-sized to weekend-trip capacity.",
    icon: BatteryCharging,
  },
  {
    slug: "docks-hubs",
    name: "Docks & Hubs",
    description: "One cable, every port you actually use.",
    icon: LayoutGrid,
  },
  {
    slug: "car-travel",
    name: "Car & Travel",
    description: "Fast charging built for the road.",
    icon: Car,
  },
  {
    slug: "wireless",
    name: "Wireless Charging",
    description: "Drop it on, walk away, it's charging.",
    icon: CircleDot,
  },
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  tagline: string;
  description: string;
  badge?: "Bestseller" | "New" | "Limited";
  icon: LucideIcon;
  rating: number;
  reviewCount: number;
  colorways: string[];
  features: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "nexus-100-gan-charger",
    name: "Nexus 100 GaN Charger",
    categorySlug: "chargers",
    price: 49.99,
    compareAtPrice: 64.99,
    tagline: "100W of desktop-class power, small enough to disappear in your bag.",
    description:
      "Nexus 100 packs three GaN III chips into a housing smaller than a matchbox, delivering 100W across two USB-C ports and one USB-A — enough to fast-charge a laptop, a tablet, and a phone at the same time, from a single wall socket.",
    badge: "Bestseller",
    icon: Zap,
    rating: 4.8,
    reviewCount: 1243,
    colorways: ["Graphite", "Chalk White"],
    features: [
      "3-port simultaneous 100W total output",
      "GaN III chipset — 45% smaller than silicon chargers",
      "Smart power allocation across all ports",
      "Foldable prongs, travel-ready",
    ],
    specs: [
      { label: "Max output", value: "100W (USB-C1 + USB-C2 + USB-A)" },
      { label: "Input", value: "100–240V, 50/60Hz" },
      { label: "Dimensions", value: "48 × 48 × 29mm" },
      { label: "Weight", value: "128g" },
      { label: "Safety", value: "Over-current, over-voltage, thermal protection" },
    ],
  },
  {
    id: "p2",
    slug: "flowlink-100w-cable",
    name: "FlowLink 100W USB-C Cable",
    categorySlug: "cables",
    price: 16.99,
    tagline: "Braided nylon core rated for 100,000+ bends.",
    description:
      "FlowLink is built from the inside out for daily abuse: an 8-strand braided nylon jacket, reinforced strain-relief joints, and a tinned-copper core that carries a full 100W and 480Mbps data without heating up.",
    badge: "New",
    icon: Cable,
    rating: 4.9,
    reviewCount: 2765,
    colorways: ["Graphite", "Sand", "Sage"],
    features: [
      "100W / 5A power delivery",
      "480Mbps USB 2.0 data speed",
      "8-strand braided nylon jacket",
      "Lab-tested to 100,000 bends",
    ],
    specs: [
      { label: "Length", value: "2m (6.6ft)" },
      { label: "Connector", value: "USB-C to USB-C" },
      { label: "Power delivery", value: "Up to 100W (20V/5A)" },
      { label: "Data speed", value: "480Mbps" },
    ],
  },
  {
    id: "p3",
    slug: "voltcell-20k-power-bank",
    name: "VoltCell 20K Power Bank",
    categorySlug: "power-banks",
    price: 59.99,
    compareAtPrice: 74.99,
    tagline: "20,000mAh with a live display, three full phone charges.",
    description:
      "A high-density cell stack in a rounded aluminum shell — VoltCell holds enough charge for a long weekend off the grid, shows exactly how much power is left down to the percentage, and passes through 65W so it can charge your laptop too.",
    icon: BatteryCharging,
    rating: 4.7,
    reviewCount: 894,
    colorways: ["Graphite", "Chalk White"],
    features: [
      "20,000mAh high-density cell",
      "65W USB-C bidirectional fast charging",
      "Live percentage display",
      "Charges 3 phones or 1 laptop + 1 phone",
    ],
    specs: [
      { label: "Capacity", value: "20,000mAh / 74Wh" },
      { label: "Output", value: "65W max (USB-C)" },
      { label: "Ports", value: "2× USB-C, 1× USB-A" },
      { label: "Weight", value: "398g" },
    ],
  },
  {
    id: "p4",
    slug: "magsnap-mini-5k",
    name: "MagSnap Mini 5K",
    categorySlug: "power-banks",
    price: 39.99,
    tagline: "Magnetic wireless power bank that snaps on and disappears.",
    description:
      "MagSnap aligns itself the moment it gets close, holds a firm magnetic grip through a case, and quietly tops up your phone at 7.5W while it sits in your pocket — no cable, no fumbling, no bulk.",
    icon: Magnet,
    rating: 4.6,
    reviewCount: 511,
    colorways: ["Graphite", "Lavender", "Sage"],
    features: [
      "5,000mAh in a coin-flat profile",
      "7.5W magnetic wireless charging",
      "Built-in kickstand",
      "USB-C input/output for wired backup",
    ],
    specs: [
      { label: "Capacity", value: "5,000mAh" },
      { label: "Wireless output", value: "7.5W" },
      { label: "Wired output", value: "20W USB-C" },
      { label: "Weight", value: "112g" },
    ],
  },
  {
    id: "p5",
    slug: "hublink-8-in-1",
    name: "HubLink 8-in-1 Dock",
    categorySlug: "docks-hubs",
    price: 44.99,
    tagline: "HDMI, USB-A, SD, and 100W pass-through — one cable, everything connected.",
    description:
      "Turn one USB-C port into a full desk setup: 4K HDMI out, gigabit ethernet, a card reader, two USB-A ports, and 100W pass-through charging so your laptop never runs low while it's docked.",
    icon: LayoutGrid,
    rating: 4.8,
    reviewCount: 662,
    colorways: ["Graphite"],
    features: [
      "4K@60Hz HDMI output",
      "Gigabit ethernet port",
      "SD + microSD card reader",
      "100W USB-C power delivery pass-through",
    ],
    specs: [
      { label: "Ports", value: "HDMI, RJ45, SD, microSD, 2× USB-A, USB-C PD" },
      { label: "Video output", value: "4K @ 60Hz" },
      { label: "Pass-through power", value: "100W" },
      { label: "Cable length", value: "15cm" },
    ],
  },
  {
    id: "p6",
    slug: "driveport-45w-car-charger",
    name: "DrivePort 45W Car Charger",
    categorySlug: "car-travel",
    price: 22.99,
    tagline: "Dual-port fast charging for the road, engineered to stay cool.",
    description:
      "A low-profile car charger that stays flush with your dash, sends 45W to two devices at once, and uses a ceramic heat-dissipating shell so output never throttles on a hot afternoon.",
    icon: Car,
    rating: 4.7,
    reviewCount: 378,
    colorways: ["Graphite"],
    features: [
      "45W total across 2 ports",
      "Ceramic shell for thermal stability",
      "Flush, low-profile design",
      "LED port indicator ring",
    ],
    specs: [
      { label: "Max output", value: "45W (USB-C 30W + USB-A 18W)" },
      { label: "Input", value: "12–24V (car socket)" },
      { label: "Length", value: "38mm" },
    ],
  },
  {
    id: "p7",
    slug: "orbit-15w-wireless-stand",
    name: "Orbit 15W Wireless Stand",
    categorySlug: "wireless",
    price: 34.99,
    tagline: "Charge and prop up your phone at the perfect viewing angle.",
    description:
      "Orbit tilts to a 60° landscape angle for video calls and media, charges at a full 15W, and includes a small pad on the side for your earbuds case — one dock for everything on your nightstand.",
    icon: CircleDot,
    rating: 4.5,
    reviewCount: 289,
    colorways: ["Graphite", "Chalk White"],
    features: [
      "15W fast wireless charging",
      "60° adjustable viewing angle",
      "Secondary 5W pad for earbuds",
      "Case-friendly charging (up to 5mm)",
    ],
    specs: [
      { label: "Phone output", value: "15W / 10W / 7.5W (device dependent)" },
      { label: "Accessory pad", value: "5W" },
      { label: "Input", value: "USB-C, 20W adapter required" },
    ],
  },
  {
    id: "p8",
    slug: "dualport-65w-wall-charger",
    name: "DualPort 65W Wall Charger",
    categorySlug: "chargers",
    price: 29.99,
    compareAtPrice: 36.99,
    tagline: "Two ports, full 65W — enough to charge a laptop and phone together.",
    description:
      "The everyday charger for a bag that already has enough in it: one compact GaN block, two ports, 65W total so a laptop and a phone can charge side by side without either one slowing down.",
    badge: "Bestseller",
    icon: Plug,
    rating: 4.8,
    reviewCount: 1502,
    colorways: ["Graphite", "Chalk White", "Sage"],
    features: [
      "65W total shared across 2 ports",
      "GaN III chipset, 40% smaller than stock chargers",
      "Foldable prongs",
      "Compatible with laptops, tablets, phones",
    ],
    specs: [
      { label: "Max output", value: "65W (single port) / 45W+20W (dual)" },
      { label: "Input", value: "100–240V, 50/60Hz" },
      { label: "Dimensions", value: "44 × 44 × 27mm" },
      { label: "Weight", value: "102g" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .concat(products.filter((p) => p.id !== product.id && p.categorySlug !== product.categorySlug))
    .slice(0, count);
}
