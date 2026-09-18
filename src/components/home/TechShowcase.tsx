import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Zap, Thermometer, Shrink } from "lucide-react";

const comparisons = [
  { label: "Physical size", celibery: 45, standard: 100, icon: Shrink, unit: "% of standard charger volume" },
  { label: "Peak surface heat", celibery: 38, standard: 100, icon: Thermometer, unit: "% of standard charger heat" },
  { label: "Energy efficiency", celibery: 94, standard: 100, icon: Zap, unit: "% power delivered to device", invert: true },
];

export function TechShowcase() {
  return (
    <section className="bg-brand-50/50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The technology"
          title="Gallium nitride changes what a charger can be"
          description="Traditional chargers use silicon transistors that waste energy as heat, forcing bulky housings to keep cool. GaN III switches faster and runs cooler — so we can build smaller, and push more power through safely."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-3">
          {comparisons.map((item) => (
            <div key={item.label} className="rounded-3xl border border-ink-950/5 bg-white p-6 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white">
                <item.icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-950">{item.label}</h3>

              <div className="mt-5 flex flex-col gap-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-ink-500">
                    <span className="font-medium text-brand-700">Celibery GaN</span>
                    <span>{item.celibery}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${item.celibery}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-ink-500">
                    <span>Standard silicon charger</span>
                    <span>{item.standard}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
                    <div className="h-full rounded-full bg-ink-300" style={{ width: `${item.standard}%` }} />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-ink-500">{item.unit}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
