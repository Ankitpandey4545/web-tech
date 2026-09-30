"use client";

import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-black/10">
              <Image
                src="/hero25-image.png"
                alt="DellOps Tech Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Floating stat card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl border border-black/10 p-5 items-center gap-4 animate-float">
              <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">150+</p>
                <p className="text-[10px] text-black/50 uppercase tracking-widest">
                  Projects Shipped
                </p>
              </div>
            </div>

            {/* Decorative dots */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 opacity-[0.08] -z-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            ></div>
          </div>

          {/* Right — Story */}
          <div>
            <div className="inline-flex items-center gap-2 border border-black/10 bg-black/5 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-[1.05] tracking-tight mb-6">
              From a small idea
              <br />
              <span className="text-black/30">to a global team.</span>
            </h2>

            <div className="space-y-4 text-black/60 leading-relaxed">
              <p>
                DellOps Tech started in 2020 with a simple belief — that
                great technology should be accessible to every business, not
                just enterprises with big budgets.
              </p>
              <p>
                What began as a two-person team in a small room has grown
                into a full-service digital studio — 20+ passionate
                professionals shipping websites, apps, and enterprise systems
                for clients across 10+ countries.
              </p>
              <p>
                Today, we've delivered <span className="text-black font-semibold">150+ projects</span> for
                startups, agencies, and enterprises — each one built with the
                same obsession: quality, speed, and results.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 pl-5 border-l-2 border-black">
              <p className="text-lg italic text-black/80 leading-relaxed">
                "We don't just deliver projects. We build partnerships that
                last."
              </p>
              <p className="text-xs text-black/50 uppercase tracking-widest mt-3 font-semibold">
                — Ankit Pandey, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}