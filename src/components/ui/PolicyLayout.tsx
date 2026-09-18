import { Container } from "@/components/ui/Container";

export function PolicyLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="bg-brand-50/60 py-14 sm:py-18">
        <Container className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">
            {eyebrow}
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            {title}
          </h1>
          <p className="text-sm text-ink-500">Last updated {updated}</p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-8">{children}</div>
        </Container>
      </section>
    </div>
  );
}

export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-semibold text-ink-950">{title}</h2>
      <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-ink-600">{children}</div>
    </div>
  );
}
