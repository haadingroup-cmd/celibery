import type { VisualKind } from "@/data/products";

export type ShowcaseVideo = {
  id: string;
  title: string;
  caption: string;
  visual: VisualKind;
  /** Drop an mp4 at this path in /public/videos/ to go live automatically. */
  videoSrc: string;
};

export const videoShowcase: ShowcaseVideo[] = [
  {
    id: "nas-setup",
    title: "NAS Setup in 60 Seconds",
    caption: "From box to backed-up, start to finish.",
    visual: "nas2bay",
    videoSrc: "/videos/showcase-nas-setup.mp4",
  },
  {
    id: "gan-charging",
    title: "100W in Your Pocket",
    caption: "See the Nexode Pro charge a laptop and phone together.",
    visual: "nexodeGan",
    videoSrc: "/videos/showcase-gan-charging.mp4",
  },
  {
    id: "desk-setup",
    title: "One Cable, Full Desk",
    caption: "The Revodok dock powering a real creator workstation.",
    visual: "revodokDock",
    videoSrc: "/videos/showcase-desk-setup.mp4",
  },
];
