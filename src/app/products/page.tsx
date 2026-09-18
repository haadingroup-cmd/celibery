import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { categories, products } from "@/data/products";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shop all products",
  description: "Browse Celibery NAS storage, GaN chargers, power banks, docks, and wireless chargers.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; series?: string }>;
}) {
  const { category, series } = await searchParams;
  const activeCategory = categories.find((c) => c.slug === category);
  const activeSeries = series;

  const filtered = activeSeries
    ? products.filter((p) => p.series === activeSeries)
    : activeCategory
      ? products.filter((p) => p.categorySlug === activeCategory.slug)
      : products;

  const heading = activeSeries
    ? `Celibery ${activeSeries.charAt(0).toUpperCase()}${activeSeries.slice(1)} Series`
    : activeCategory
      ? activeCategory.name
      : "All products";

  return (
    <div className="py-10 sm:py-14">
      <Container>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand-emerald uppercase">Shop</span>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">{heading}</h1>
          <p className="max-w-xl text-neutral-600">
            Every NAS, charger, power bank, and dock we make — one design language, lab-tested for safety.
          </p>
        </div>

        <div className="relative mt-8 sm:mt-10">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Link
              href="/products"
              className={cn(
                "flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                !activeCategory && !activeSeries ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
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
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
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
            <p className="text-lg font-semibold text-neutral-900">No products found</p>
            <p className="text-sm text-neutral-500">Try a different category.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
