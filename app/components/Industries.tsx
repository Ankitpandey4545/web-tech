"use client";

import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "E-Commerce",
    desc: "Online stores, marketplaces & D2C brands that sell at scale.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Healthcare",
    desc: "Hospitals, clinics & telemedicine platforms for modern care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Education",
    desc: "EdTech, LMS platforms & e-learning apps shaping the future.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Real Estate",
    desc: "Property portals, listing apps & CRM tools for realtors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Finance",
    desc: "Fintech apps, banking systems & secure payment gateways.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Logistics",
    desc: "Delivery tracking, fleet management & supply chain tools.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    number: "07",
    title: "Travel",
    desc: "Booking platforms, travel apps & hospitality solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
  {
    number: "08",
    title: "Manufacturing",
    desc: "Production tracking, IoT dashboards & automation systems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      ></div>

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span className="text-[10px] font-bold text-white tracking-widest">
                  08
                </span>
              </span>
              <span className="w-px h-3 bg-white/20"></span>
              <span className="text-[11px] font-semibold text-white/70 tracking-[0.15em] uppercase">
                Industries We Serve
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Built for every
              <br />
              <span className="text-white/30">industry.</span>
            </h2>
          </div>

          {/* Right side text */}
          <div className="lg:max-w-sm lg:text-right">
            <p className="text-white/60 leading-relaxed mb-4">
              From startups to enterprises — we've delivered digital solutions
              across diverse sectors, each built to their unique needs.
            </p>
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white border-b-2 border-white pb-1 hover:gap-3 transition-all duration-300"
            >
              See all industries
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* ================= INDUSTRIES GRID ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <Link
              key={i}
              href="/industries"
              className="group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:border-white transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Number badge */}
              <div className="absolute top-5 right-5 text-[10px] font-semibold text-white/30 group-hover:text-black/40 tracking-widest transition-colors duration-500">
                {industry.number}
              </div>

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl border border-white/15 group-hover:border-black/20 group-hover:bg-black flex items-center justify-center mb-5 transition-all duration-500">
                <div className="text-white group-hover:text-white transition-colors duration-500">
                  {industry.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative text-lg font-bold text-white group-hover:text-black mb-2 tracking-tight transition-colors duration-500">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="relative text-xs text-white/50 group-hover:text-black/60 leading-relaxed transition-colors duration-500 mb-4">
                {industry.desc}
              </p>

              {/* Bottom arrow */}
              <div className="relative flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/40 group-hover:text-black transition-colors duration-500">
                Explore
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/[0.03] group-hover:bg-black/[0.03] rounded-full transition-colors duration-500"></div>
            </Link>
          ))}
        </div>

        {/* ================= BOTTOM STATS ================= */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "120+", label: "Active Clients" },
            { value: "15+", label: "Industries Served" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] text-white/40 mt-2 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}