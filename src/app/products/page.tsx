import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { categories, products } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shop all products",
  description: "Browse Celibery GaN chargers, cables, power banks, docks, and wireless chargers.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = categories.find((c) => c.slug === category);
  const filtered = activeCategory
    ? products.filter((p) => p.categorySlug === activeCategory.slug)
    : products;

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
            Shop
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            {activeCategory ? activeCategory.name : "All products"}
          </h1>
          <p className="max-w-xl text-ink-600">
            {activeCategory ? activeCategory.description : "Every charger, cable, and power bank we make — one design language, lab-tested for safety."}
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link
              href="/products"
              className={cn(
                "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                !activeCategory ? "bg-ink-950 text-white" : "bg-ink-100 text-ink-700 hover:bg-ink-200",
              )}
            >
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products?category=${c.slug}`}
                className={cn(
                  "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory?.slug === c.slug
                    ? "bg-ink-950 text-white"
                    : "bg-ink-100 text-ink-700 hover:bg-ink-200",
                )}
              >
                {c.name}
              </Link>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:hidden"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2 py-16 text-center">
            <p className="font-display text-lg font-semibold text-ink-950">No products found</p>
            <p className="text-sm text-ink-500">Try a different category.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
