import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Rating } from "@/components/ui/Rating";
import { testimonials, stats } from "@/data/site";

export function Testimonials() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-16 sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Customer stories"
          title="Loved by people who hate dead batteries"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink-950/5"
            >
              <div>
                <Quote className="h-6 w-6 text-brand-300" />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 flex flex-col gap-2">
                <Rating value={t.rating} />
                <div>
                  <p className="text-sm font-semibold text-ink-950">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-ink-950/10 pt-10 sm:mt-16 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">{stat.value}</span>
              <span className="mt-1 text-xs text-ink-500 sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
