import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-neutral-900 md:h-[680px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        <svg className="h-full w-full object-cover" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 760" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="wallGrad" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#4a3f35" />
              <stop offset="50%" stopColor="#2c2724" />
              <stop offset="100%" stopColor="#191716" />
            </linearGradient>
            <linearGradient id="warmLight" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#ffd599" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#111827" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <rect fill="url(#wallGrad)" height="760" width="1440" />
          <circle cx="850" cy="200" fill="url(#warmLight)" r="450" />
          <path d="M980 320 C1020 300, 1140 330, 1150 420 L1180 580 C1180 620, 1120 640, 960 640 L930 480 Z" fill="#203a27" opacity="0.85" />
          <path d="M120 380 C160 310, 310 320, 340 440 L360 620 L110 610 Z" fill="#78350f" opacity="0.4" />
          <polygon fill="#3f2716" points="380,500 1060,490 1150,680 290,690" />
          <g transform="translate(640, 410)">
            <rect fill="#2d333b" height="150" rx="12" stroke="#444c56" strokeWidth="2" width="160" />
            <rect fill="#1e2228" height="134" rx="8" width="144" x="8" y="8" />
            <rect fill="#121518" height="100" rx="4" stroke="#373e47" strokeWidth="1.5" width="50" x="22" y="24" />
            <line stroke="#22c55e" strokeWidth="2" x1="28" x2="66" y1="36" y2="36" />
            <rect fill="#121518" height="100" rx="4" stroke="#373e47" strokeWidth="1.5" width="50" x="88" y="24" />
            <line stroke="#22c55e" strokeWidth="2" x1="94" x2="132" y1="36" y2="36" />
            <circle cx="80" cy="132" fill="#00cc66" r="3" />
          </g>
        </svg>
      </div>

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-start px-4 pt-24 text-center md:pt-28">
        <span className="mb-4 rounded-full border border-brand-green/30 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-green backdrop-blur-md">
          Official Release
        </span>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
          NASync DH2300
        </h1>
        <p className="mb-8 max-w-xl text-lg font-light text-neutral-200 drop-shadow md:text-xl">
          Smart Cloud Storage Made Simple for Every Home &amp; Studio
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/products/nasync-dh2300"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-xl transition-all duration-200 hover:scale-105 hover:bg-neutral-200"
          >
            Learn More
          </Link>
          <Link
            href="/products/nasync-dh2300"
            className="rounded-full border border-white/20 bg-neutral-800/80 px-8 py-3 text-sm font-medium text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-neutral-800"
          >
            Buy Now
          </Link>
        </div>
        <div className="absolute bottom-8 flex items-center gap-3">
          <div className="h-1.5 w-8 rounded-full bg-white" />
          <div className="h-1.5 w-2.5 cursor-pointer rounded-full bg-white/40 hover:bg-white/70" />
          <div className="h-1.5 w-2.5 cursor-pointer rounded-full bg-white/40 hover:bg-white/70" />
          <div className="h-1.5 w-2.5 cursor-pointer rounded-full bg-white/40 hover:bg-white/70" />
        </div>
      </div>
    </section>
  );
}
