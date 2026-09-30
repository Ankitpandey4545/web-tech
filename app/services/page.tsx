import Link from "next/link";
import { servicesData } from "@/app/data/servicesData";

export const metadata = {
  title: "Services — DellOps Tech",
  description:
    "Explore DellOps Tech services — Web Development, App Development, SEO, CRM, ERP & UI/UX Design.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* ============ HERO ============ */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs text-black/40 mb-8 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-black">Services</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-7 shadow-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                  <span className="text-[10px] font-bold text-black tracking-widest">
                    06
                  </span>
                </span>
                <span className="w-px h-3 bg-black/15"></span>
                <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                  Our Services
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                Everything you
                <br />
                <span className="text-black/30">need to scale.</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-4">
              <p className="text-lg text-black/60 leading-relaxed">
                From concept to launch — we deliver end-to-end digital
                solutions that help ambitious businesses win online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="relative bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative border border-black/10 bg-white rounded-2xl p-7 hover:border-black hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 overflow-hidden"
              >
                {/* Big number */}
                <div className="absolute -bottom-6 -right-2 text-[100px] font-bold text-black/[0.03] group-hover:text-black/[0.06] leading-none select-none transition-colors duration-500">
                  {service.icon}
                </div>

                {/* Category */}
                <div className="relative flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-150 transition-transform"></span>
                  <span className="text-[10px] font-semibold text-black/50 uppercase tracking-[0.2em]">
                    {service.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="relative text-4xl mb-5 grayscale group-hover:grayscale-0 transition-all duration-500">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="relative text-2xl font-bold text-black mb-2 tracking-tight">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="relative text-sm text-black/50 italic mb-4">
                  {service.tagline}
                </p>

                {/* Desc */}
                <p className="relative text-sm text-black/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Meta */}
                <div className="relative flex items-center justify-between pt-5 border-t border-black/5">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-black/40 font-semibold">
                      Starting at
                    </p>
                    <p className="text-sm font-bold text-black">
                      {service.startingPrice}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-black">
                    Explore
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}