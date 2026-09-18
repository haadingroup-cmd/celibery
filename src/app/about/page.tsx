import type { Metadata } from "next";
import { Cpu, Recycle, Scale, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { stats } from "@/data/site";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "About Celibery",
  description: "Why Celibery exists, how we build, and what we stand for.",
};

const values = [
  {
    icon: Cpu,
    title: "Engineering first",
    description:
      "We start every product with the chip, not the color. GaN III internals are the reason our chargers can be small without cutting power.",
  },
  {
    icon: Wrench,
    title: "Built to outlast the box",
    description:
      "Every cable is bend-tested to 100,000 cycles before it ships. If it can't survive a backpack for two years, it doesn't launch.",
  },
  {
    icon: Scale,
    title: "Honest pricing",
    description:
      "No inflated 'compare at' pricing games. We sell direct, keep margins reasonable, and pass the savings on.",
  },
  {
    icon: Recycle,
    title: "Low-waste by default",
    description:
      "Plastic-free packaging, recycled fiber boxes, and cables designed to be repaired, not replaced.",
  },
];

export default function AboutPage() {
  const visual = products[4];

  return (
    <div>
      <section className="bg-brand-50/60 py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
              Our story
            </span>
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
              We build the charger you stop thinking about.
            </h1>
            <p className="text-base leading-relaxed text-ink-600 sm:text-lg">
              Celibery started with a drawer full of dead cables and chargers that ran hot enough
              to worry about. A small team of power electronics engineers set out to build one
              charger that actually held up — then kept going until it became a full lineup.
              Every product still ships from the same principle: fewer parts, better materials,
              tested harder than it needs to be.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <ProductVisual icon={visual.icon} variant="brand" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Four principles behind every product"
            description="Nothing ships because it looks good in a render. It ships because it survived our own testing bench first."
          />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <v.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-950">{v.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-600">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 text-white sm:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-bold sm:text-4xl">{stat.value}</span>
                <span className="mt-1 text-sm text-ink-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
            Ready to clean up your charging drawer?
          </h2>
          <p className="max-w-lg text-ink-600">
            Start with the Nexus 100 or browse the full lineup — every product ships with our
            18-month warranty.
          </p>
          <Button href="/products" variant="primary" size="lg" className="mt-2">
            Shop all products
          </Button>
        </Container>
      </section>
    </div>
  );
}
