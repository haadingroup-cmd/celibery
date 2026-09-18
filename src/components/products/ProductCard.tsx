import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col rounded-[28px] p-3 transition-colors hover:bg-ink-50 focus-visible:bg-ink-50 focus-visible:outline-none"
    >
      <div className="relative">
        <ProductVisual icon={product.icon} className="transition-transform duration-500 ease-out group-hover:scale-[1.02]" />
        {product.badge && (
          <Badge tone={product.badge === "New" ? "dark" : "brand"} className="absolute left-3 top-3">
            {product.badge}
          </Badge>
        )}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-950 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-1 pt-4">
        <p className="text-xs font-medium tracking-wide text-ink-500 uppercase">
          {product.categorySlug.replace("-", " ")}
        </p>
        <h3 className="font-display text-lg font-semibold text-ink-950">{product.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-ink-600">{product.tagline}</p>
        <Rating value={product.rating} count={product.reviewCount} className="mt-1" />
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold text-ink-950">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-ink-400 line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
