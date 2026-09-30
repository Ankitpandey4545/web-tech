import Link from "next/link";
import { servicesData } from "@/app/data/servicesData";

export default function RelatedServices({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const related = servicesData
    .filter((s) => s.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="relative bg-white py-20 lg:py-28 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 border border-black/10 bg-black/5 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                Related Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              You might also
              <br />
              <span className="text-black/30">need these.</span>
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-black border-b-2 border-black pb-1 hover:gap-3 transition-all duration-300"
          >
            View all services
            <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative border border-black/10 rounded-2xl p-6 hover:border-black hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-black/55 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-black">
                Learn more
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}