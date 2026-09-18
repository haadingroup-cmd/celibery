import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const variants = {
  light: "bg-gradient-to-br from-brand-50 via-white to-ink-100",
  dark: "bg-gradient-to-br from-ink-900 via-ink-950 to-brand-950",
  brand: "bg-gradient-to-br from-brand-600 via-brand-700 to-ink-950",
};

export function ProductVisual({
  icon: Icon,
  variant = "light",
  className,
  iconClassName,
}: {
  icon: LucideIcon;
  variant?: keyof typeof variants;
  className?: string;
  iconClassName?: string;
}) {
  const isDark = variant !== "light";

  return (
    <div
      className={cn(
        "relative flex aspect-square items-center justify-center overflow-hidden rounded-[28px]",
        variants[variant],
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 opacity-60",
          isDark ? "bg-grid mix-blend-overlay" : "bg-grid",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl",
          isDark ? "bg-brand-400/30" : "bg-brand-300/40",
        )}
      />
      <div
        aria-hidden
        className={cn(
          "absolute -bottom-14 -left-10 h-44 w-44 rounded-full blur-3xl",
          isDark ? "bg-signal-400/20" : "bg-brand-200/50",
        )}
      />
      <div
        className={cn(
          "relative flex h-[38%] w-[38%] items-center justify-center rounded-full backdrop-blur-sm",
          isDark ? "bg-white/10 ring-1 ring-white/15" : "bg-white/70 ring-1 ring-ink-950/5 shadow-xl shadow-ink-950/5",
        )}
      >
        <Icon
          strokeWidth={1.4}
          className={cn(
            "h-[48%] w-[48%]",
            isDark ? "text-white" : "text-brand-700",
            iconClassName,
          )}
        />
      </div>
    </div>
  );
}
