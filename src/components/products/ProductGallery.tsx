"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductArt } from "@/components/ui/ProductArt";
import type { VisualKind } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  visual,
  name,
}: {
  images?: string[];
  visual: VisualKind;
  name: string;
}) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return <ProductArt kind={visual} className="h-64 w-64" />;
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full items-center justify-center">
        <Image
          src={images[active]}
          alt={name}
          width={1800}
          height={1800}
          priority
          className="h-64 w-64 object-contain sm:h-80 sm:w-80"
        />
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`View image ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border-2 bg-white transition-colors sm:h-16 sm:w-16",
                active === i ? "border-brand-emerald" : "border-gray-200 hover:border-gray-300",
              )}
            >
              <Image src={src} alt="" width={200} height={200} className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
