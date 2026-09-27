import Image from "next/image";
import { stats } from "@/data/site";

export function DrivenByInnovation() {
  return (
    <section className="bg-white pb-0 pt-16">
      <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">Driven by Innovation</h2>
      </div>

      <div className="mx-auto mb-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-[#f9fafb] p-6 text-center shadow-sm sm:p-8">
              <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-xs font-medium text-gray-500 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
        <Image
          src="/images/banners/innovation-banner.jpg"
          alt="Celibery — smart tech accessories for every moment"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
