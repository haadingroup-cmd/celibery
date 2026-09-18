import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: React.ReactNode;
  tone?: "brand" | "dark" | "light";
  className?: string;
}) {
  const tones = {
    brand: "bg-brand-500 text-white",
    dark: "bg-ink-950 text-white",
    light: "bg-white text-ink-950 ring-1 ring-ink-950/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
