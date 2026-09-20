"use client";

import Link from "next/link";

const features = [
  {
    title: "Fast Delivery",
    desc: "We ship projects in weeks, not months. Agile sprints keep you ahead.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs. Clear quotes, milestone-based payments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Direct access to our team. No tickets, no waiting, no bots.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    desc: "Senior developers, designers & strategists with 5+ years experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: "Scalable Solutions",
    desc: "Built to grow with you. From MVP to enterprise-grade systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Post-Launch Care",
    desc: "Free 30-day support after delivery. We don't just ship, we stay.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

const expertise = [
  { name: "Web Development", level: 95 },
  { name: "App Development", level: 90 },
  { name: "UI/UX Design", level: 88 },
  { name: "SEO & Marketing", level: 85 },
  { name: "CRM / ERP", level: 92 },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative dotted pattern */}
      <div
        className="absolute bottom-10 left-10 w-40 h-40 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-black/10 bg-black/5 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
            <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
              Why DellOps Tech
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight">
            More than an agency.
            <br />
            <span className="text-black/30">A true partner.</span>
          </h2>

          <p className="mt-6 text-lg text-black/60 leading-relaxed max-w-2xl">
            We don't just deliver projects — we build long-term relationships.
            Here's what sets us apart from the rest.
          </p>
        </div>

        {/* ================= SPLIT LAYOUT ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — Feature List */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group relative border border-black/10 bg-white rounded-2xl p-6 hover:border-black hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-black/5"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-black mb-2 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black/55 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Small accent line */}
                <div className="absolute bottom-6 left-6 w-0 h-px bg-black group-hover:w-8 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* RIGHT — Expertise Bars + Highlight Card */}
          <div className="relative">
            {/* Highlight Card */}
            <div className="relative bg-black text-white rounded-3xl p-8 lg:p-10 overflow-hidden">
              {/* Grid background */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative">
                {/* Label */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                    Our Expertise
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-8">
                  Depth in every
                  <br />
                  <span className="text-white/40">domain we serve.</span>
                </h3>

                {/* Expertise Bars */}
                <div className="space-y-5">
                  {expertise.map((skill, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white/80">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-white/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom note */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white">5+</p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">
                      Years Experience
                    </p>
                  </div>
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-white border-b border-white pb-1 hover:gap-3 transition-all duration-300"
                  >
                    About us
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating "Certified" badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white rounded-xl shadow-2xl border border-black/10 px-4 py-3 items-center gap-2 animate-float">
              <span className="text-lg">🏆</span>
              <div>
                <p className="text-[10px] text-black/50 uppercase tracking-widest">
                  Certified
                </p>
                <p className="text-xs font-bold text-black">Top Rated</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TRUST STRIP ================= */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-black/10 pt-12">
          {[
            { value: "98%", label: "Client Retention" },
            { value: "<2hr", label: "Response Time" },
            { value: "100%", label: "On-Time Delivery" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] text-black/50 mt-2 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}