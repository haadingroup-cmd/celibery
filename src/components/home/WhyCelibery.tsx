import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustFeatures } from "@/data/site";

export function WhyCelibery() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Celibery"
          title="Built to be trusted with your devices"
          description="Every product goes through independent lab safety testing before it ships — not just to meet the minimum, but because it's charging things you can't easily replace."
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {trustFeatures.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <feature.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink-950">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
