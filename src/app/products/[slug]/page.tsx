import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { ProductCard } from "@/components/products/ProductCard";
import { AddToCart } from "@/components/products/AddToCart";
import { formatPrice } from "@/lib/utils";
import { getCategoryBySlug, getProductBySlug, getRelatedProducts, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product);

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <nav className="flex items-center gap-1.5 text-sm text-ink-500">
          <Link href="/products" className="hover:text-ink-950">
            Shop
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          {category && (
            <>
              <Link href={`/products?category=${category.slug}`} className="hover:text-ink-950">
                {category.name}
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
            </>
          )}
          <span className="text-ink-800">{product.name}</span>
        </nav>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-24 lg:max-w-none lg:self-start">
            <ProductVisual icon={product.icon} variant="brand" />
            {product.badge && (
              <Badge tone={product.badge === "New" ? "dark" : "brand"} className="absolute left-4 top-4">
                {product.badge}
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-medium tracking-wide text-brand-600 uppercase">
                {category?.name}
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <Rating value={product.rating} count={product.reviewCount} size="md" />

            <p className="text-lg leading-relaxed text-ink-600">{product.tagline}</p>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl font-bold text-ink-950">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-ink-400 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                  <Badge tone="brand">
                    Save {Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                  </Badge>
                </>
              )}
            </div>

            <div className="h-px w-full bg-ink-100" />

            <AddToCart colorways={product.colorways} />

            <div className="grid grid-cols-1 gap-3 rounded-2xl bg-ink-50 p-4 sm:grid-cols-3 sm:p-5">
              <div className="flex items-center gap-2.5 text-sm text-ink-700">
                <Truck className="h-4 w-4 flex-shrink-0 text-brand-600" />
                Free shipping over $35
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink-700">
                <RotateCcw className="h-4 w-4 flex-shrink-0 text-brand-600" />
                30-day returns
              </div>
              <div className="flex items-center gap-2.5 text-sm text-ink-700">
                <ShieldCheck className="h-4 w-4 flex-shrink-0 text-brand-600" />
                18-month warranty
              </div>
            </div>

            <div className="h-px w-full bg-ink-100" />

            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950">Overview</h2>
              <p className="mt-2 leading-relaxed text-ink-600">{product.description}</p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950">Highlights</h2>
              <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-ink-950">Specifications</h2>
              <dl className="mt-3 divide-y divide-ink-100 rounded-2xl border border-ink-100">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <dt className="text-sm text-ink-500">{spec.label}</dt>
                    <dd className="text-sm font-medium text-ink-950 sm:text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 sm:mt-28">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
              You might also like
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
