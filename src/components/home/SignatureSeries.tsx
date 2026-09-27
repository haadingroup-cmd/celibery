"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { CinematicPoster } from "@/components/ui/CinematicPoster";
import { useVideoAvailability } from "@/hooks/useVideoAvailability";
import { webmSrc } from "@/lib/video";

const cards = [
  { slug: "cel-96s-speaker", videoSrc: "/videos/signature-speaker.mp4" },
  { slug: "over-ear-headphones", videoSrc: "/videos/signature-headphones.mp4" },
  { slug: "65w-gan-charger", videoSrc: "/videos/signature-charger.mp4" },
  { slug: "power-bank-live-display", videoSrc: "/videos/signature-powerbank.mp4" },
] as const;

function SignatureCard({ videoSrc, slug, failed }: { videoSrc: string; slug: string; failed: boolean }) {
  const product = getProductBySlug(slug)!;
  const [playing, setPlaying] = useState(true);

  return (
    <div className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-black shadow-md transition-all duration-300 hover:shadow-2xl sm:h-[460px]">
      {failed ? (
        <CinematicPoster kind={product.visual} />
      ) : (
        <>
          <CinematicPoster kind={product.visual} className="opacity-0" />
          <video
            key={playing ? "playing" : "paused"}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            autoPlay={playing}
            muted
            loop
            playsInline
          >
            <source src={webmSrc(videoSrc)} type="video/webm" />
            <source src={videoSrc} type="video/mp4" />
          </video>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <button
        aria-label={playing ? "Pause video" : "Play video"}
        onClick={() => setPlaying((p) => !p)}
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white opacity-0 backdrop-blur transition-all group-hover:opacity-100"
      >
        {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 translate-x-0.5" />}
      </button>

      <div className="relative z-10 px-6 pb-7 text-center">
        <h3 className="text-xl font-extrabold text-white">{product.name.replace("Celibery ", "")}</h3>
        <p className="mt-1 text-xs font-medium text-neutral-300">{product.tagline}</p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-1 rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-neutral-900"
        >
          Learn More <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export function SignatureSeries() {
  const videoFailed = useVideoAvailability(cards.map((c) => [webmSrc(c.videoSrc), c.videoSrc]));

  return (
    <section className="bg-[#fbfbfd] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Discover Our Signature Series</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-500">
            Four essentials, engineered for everyday power and sound.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <SignatureCard key={card.slug} {...card} failed={!!videoFailed[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
