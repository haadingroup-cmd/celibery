import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MadeToMatchWorld() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">Made to Match Your World</h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          <div className="relative h-[380px] w-full overflow-hidden bg-neutral-800 sm:h-[480px] md:h-[540px]">
            <svg className="h-full w-full object-cover" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="warmStudio" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b322a" />
                  <stop offset="60%" stopColor="#1f1d1c" />
                  <stop offset="100%" stopColor="#111827" />
                </linearGradient>
              </defs>
              <rect fill="url(#warmStudio)" height="600" width="1200" />
              <polygon fill="#fde047" opacity="0.06" points="100,0 450,0 250,600 0,600" />
              <rect fill="#523e32" height="260" opacity="0.4" rx="8" width="220" x="250" y="40" />
              <polygon fill="#713f12" opacity="0.8" points="0,380 1200,380 1200,600 0,600" />
              <rect fill="#0f172a" height="170" rx="6" stroke="#475569" strokeWidth="4" width="280" x="420" y="160" />
              <rect fill="#0284c7" height="150" opacity="0.2" width="260" x="430" y="170" />
              <rect fill="#334155" height="60" width="30" x="545" y="330" />
              <polygon fill="#1e293b" points="510,390 610,390 630,400 490,400" />
              <polygon fill="#64748b" points="340,320 420,320 400,380 320,380" />
              <rect fill="#1e293b" height="60" rx="4" stroke="#00cc66" strokeWidth="1.5" width="40" x="260" y="320" />
              <line stroke="#0f172a" strokeLinecap="round" strokeWidth="8" x1="160" x2="160" y1="280" y2="410" />
              <circle cx="160" cy="275" fill="#334155" r="14" />
              <ellipse cx="880" cy="310" fill="#f97316" opacity="0.3" rx="45" ry="50" />
              <path d="M780 430 C780 360, 940 360, 960 480 L800 480 Z" fill="#ea580c" opacity="0.25" />
              <path d="M890 310 C960 300, 970 470, 970 540" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="14" />
            </svg>
          </div>

          <div className="bg-white p-8 text-center sm:p-10">
            <span className="mb-3 inline-block rounded-full bg-gray-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-gray-800">
              Home
            </span>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              From kitchen counter to bedside table, Celibery gives every corner of your home the power and order it
              needs, so you can focus on what matters most.
            </p>
            <div className="mt-6">
              <Link href="/products" className="group inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 transition-colors hover:text-brand-emerald">
                <span>Discover Everyday Essentials</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
