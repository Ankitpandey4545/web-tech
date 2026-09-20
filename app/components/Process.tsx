"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "1-2 Weeks",
    desc: "We dive deep into your business, goals, target audience, and competitors to build a solid strategy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    deliverables: ["Requirement Doc", "Wireframes", "Strategy Plan"],
  },
  {
    number: "02",
    title: "Design",
    duration: "2-3 Weeks",
    desc: "Our designers craft stunning, user-focused interfaces that align with your brand and convert visitors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    deliverables: ["UI Mockups", "Prototype", "Design System"],
  },
  {
    number: "03",
    title: "Develop",
    duration: "4-8 Weeks",
    desc: "Our engineers bring designs to life with clean, scalable code — using the latest tech stack and best practices.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    deliverables: ["Clean Code", "Testing", "Documentation"],
  },
  {
    number: "04",
    title: "Deploy",
    duration: "1 Week",
    desc: "We launch, monitor, and optimize. Plus 30 days of free post-launch support to ensure everything runs smooth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    deliverables: ["Launch", "Monitoring", "Support"],
  },
];

export default function Process() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Dotted decoration */}
      <div
        className="absolute top-20 right-10 w-40 h-40 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                <span className="text-[10px] font-bold text-black tracking-widest">
                  04
                </span>
              </span>
              <span className="w-px h-3 bg-black/15"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                Our Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight">
              From idea
              <br />
              <span className="text-black/30">to launch.</span>
            </h2>
          </div>

          {/* Right text */}
          <div className="lg:max-w-sm lg:text-right">
            <p className="text-black/60 leading-relaxed mb-4">
              A proven 4-step process that turns your vision into a
              high-performing digital product — on time, every time.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black border-b-2 border-black pb-1 hover:gap-3 transition-all duration-300"
            >
              Start your project
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                {/* Dot on the line */}
                <div className="hidden lg:flex absolute top-14 left-1/2 -translate-x-1/2 items-center justify-center z-10">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-black group-hover:scale-150 group-hover:bg-black transition-all duration-500"></div>
                </div>

                {/* Card */}
                <div className="relative bg-white border border-black/10 rounded-2xl p-6 pt-20 lg:pt-24 hover:border-black hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-black/5">
                  {/* Big number */}
                  <div className="absolute top-5 left-6 text-[80px] lg:text-[90px] font-bold text-black/[0.06] group-hover:text-black/[0.1] leading-none tracking-tighter transition-colors duration-500 select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="absolute top-5 right-5 w-14 h-14 rounded-xl bg-black text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-black/10">
                    {step.icon}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span className="text-[10px] font-semibold text-black/50 uppercase tracking-[0.15em]">
                      {step.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-black/60 leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Deliverables */}
                  <div className="pt-5 border-t border-black/5">
                    <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-3">
                      Deliverables
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.deliverables.map((item, j) => (
                        <span
                          key={j}
                          className="text-[10px] font-medium text-black/70 bg-black/[0.04] border border-black/[0.06] px-2.5 py-1 rounded-full group-hover:bg-black/10 transition-colors duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-black/10 flex items-center justify-center z-10">
                      <span className="text-black/50 text-xs">↓</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-black/50 text-sm">
            Ready to turn your idea into reality?
          </p>
          <a
            href="https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20start%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/10"
          >
            Start Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}