import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { products } from "@/data/products";

const hero = products[0];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-50/60">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-[0.4]" />
      <div
        aria-hidden
        className="absolute -top-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="flex animate-fade-up flex-col items-start gap-6">
          <Link
            href={`/products/${hero.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-medium text-ink-700 shadow-sm ring-1 ring-ink-950/5"
          >
            <Star className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
            Rated 4.8 across 12,000+ reviews
          </Link>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            Power, engineered
            <br />
            to disappear.
          </h1>

          <p className="max-w-md text-base leading-relaxed text-ink-600 sm:text-lg">
            GaN chargers, braided cables, and power banks built to outlast the devices
            they charge — small enough to forget you&apos;re carrying them.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/products" variant="primary" size="lg" className="w-full sm:w-auto">
              Shop all products <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={`/products/${hero.slug}`} variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Nexus 100
            </Button>
          </div>

          <dl className="mt-4 grid w-full grid-cols-3 gap-4 border-t border-ink-950/10 pt-6 sm:max-w-md">
            {[
              ["100W", "Peak output"],
              ["45%", "Smaller than silicon"],
              ["18mo", "Warranty"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col">
                <dt className="font-display text-xl font-bold text-ink-950 sm:text-2xl">{value}</dt>
                <dd className="text-xs text-ink-500 sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:150ms] lg:max-w-none">
          <ProductVisual icon={hero.icon} variant="brand" className="shadow-2xl shadow-brand-900/20" />
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-ink-950/10 ring-1 ring-ink-950/5 sm:-bottom-6 sm:-left-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
              <hero.icon className="h-5 w-5" strokeWidth={1.6} />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-950">{hero.name}</p>
              <p className="text-xs text-ink-500">${hero.price} · Bestseller</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
