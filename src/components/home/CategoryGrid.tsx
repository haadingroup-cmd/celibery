import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/products";

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Shop by category"
          title="Everything your devices need to stay charged"
          description="Six categories, one design language — matte finishes, GaN internals, and cables that don't fray."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-ink-950/5 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white sm:h-12 sm:w-12">
                  <category.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-950" />
              </div>

              <div className="mt-8 sm:mt-12">
                <h3 className="font-display text-base font-semibold text-ink-950 sm:text-lg">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
