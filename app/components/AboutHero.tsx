"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-black/40 mb-8 uppercase tracking-widest font-semibold">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">About Us</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Left heading */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-7 shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                <span className="text-[10px] font-bold text-black tracking-widest">
                  SINCE 2020
                </span>
              </span>
              <span className="w-px h-3 bg-black/15"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                Our Story
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
              We build digital
              <br />
              <span className="text-black/30">products that matter.</span>
            </h1>
          </div>

          {/* Right text */}
          <div className="lg:col-span-5 lg:pb-4">
            <p className="text-lg text-black/60 leading-relaxed">
              DellOps Tech is a team of passionate developers, designers, and
              strategists helping ambitious businesses build world-class
              digital products — from idea to launch and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}