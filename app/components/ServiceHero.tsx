import Link from "next/link";
import { ServiceData } from "@/app/data/servicesData";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

export default function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                {service.category}
              </span>
            </div>

            <div className="text-5xl mb-4">{service.icon}</div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1] tracking-tight mb-6">
              {service.title}
              <br />
              <span className="text-black/30">{service.tagline}</span>
            </h1>

            <p className="text-lg text-black/60 leading-relaxed mb-8 max-w-xl">
              {service.longDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-black text-white px-7 py-4 rounded-xl font-medium hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-black/15"
              >
                Get a Quote
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 border border-black/15 bg-white text-black px-7 py-4 rounded-xl font-medium hover:border-black hover:bg-black/5 transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="border border-black/10 rounded-xl p-4">
                <p className="text-[10px] text-black/50 uppercase tracking-widest mb-1 font-semibold">
                  Starting at
                </p>
                <p className="text-xl font-bold text-black">
                  {service.startingPrice}
                </p>
              </div>
              <div className="border border-black/10 rounded-xl p-4">
                <p className="text-[10px] text-black/50 uppercase tracking-widest mb-1 font-semibold">
                  Duration
                </p>
                <p className="text-xl font-bold text-black">
                  {service.duration}
                </p>
              </div>
            </div>
          </div>

          {/* Right — Visual Card */}
          <div className="relative">
            <div className="relative bg-black text-white rounded-3xl p-8 lg:p-10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>

              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                    What you'll get
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-8 leading-tight">
                  Deliverables.
                </h3>

                <ul className="space-y-3.5">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}