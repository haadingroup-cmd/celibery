import Image from "next/image";
import { ProductArt } from "@/components/ui/ProductArt";
import type { Product } from "@/data/products";
import type { VisualKind } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * Drop-in replacement for ProductArt that renders real product photography
 * when available (product.images), falling back to the icon illustration
 * otherwise. Kept as a separate component so untouched (fictional-catalog)
 * products keep working exactly as before.
 */
export function ProductVisual({
  images,
  thumbnail,
  visual,
  name,
  className,
  imageIndex = 0,
  priority,
}: {
  images?: string[];
  thumbnail?: string;
  visual: VisualKind;
  name: string;
  className?: string;
  imageIndex?: number;
  priority?: boolean;
}) {
  const src = thumbnail ?? images?.[imageIndex];
  if (!src) return <ProductArt kind={visual} className={className} />;

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Image
        src={src}
        alt={name}
        width={1800}
        height={1800}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

export function productVisualProps(product: Pick<Product, "images" | "thumbnail" | "visual" | "name">) {
  return { images: product.images, thumbnail: product.thumbnail, visual: product.visual, name: product.name };
}
