"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ============================================
// DATA
// ============================================

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

const filters = ["All", "Web", "App", "SEO", "CRM", "ERP", "UI/UX"];

const projects = [
  {
    title: "ShopHub E-Commerce",
    category: "Web",
    desc: "Full-featured online store with payment integration & admin dashboard.",
    image: "/hero25-image.png",
    tags: ["Next.js", "Stripe", "MongoDB"],
    year: "2024",
    metric: "+240% Sales",
  },
  {
    title: "HealthTrack App",
    category: "App",
    desc: "iOS & Android app for tracking fitness, nutrition & health metrics.",
    image: "/hero25-image.png",
    tags: ["React Native", "Firebase"],
    year: "2024",
    metric: "50K+ Users",
  },
  {
    title: "RankBoost SEO",
    category: "SEO",
    desc: "Complete SEO overhaul for a SaaS company — 12x organic traffic.",
    image: "/hero25-image.png",
    tags: ["Ahrefs", "Content"],
    year: "2024",
    metric: "12x Traffic",
  },
  {
    title: "SalesForce CRM",
    category: "CRM",
    desc: "Custom CRM for real estate — 500+ agents, 10K+ leads managed.",
    image: "/hero25-image.png",
    tags: ["Next.js", "PostgreSQL"],
    year: "2023",
    metric: "-60% Time",
  },
  {
    title: "ManufactPro ERP",
    category: "ERP",
    desc: "Unified ERP for manufacturing — inventory, HR, finance in one.",
    image: "/hero25-image.png",
    tags: ["Node.js", "AWS"],
    year: "2023",
    metric: "3x Efficiency",
  },
  {
    title: "FinFlow Dashboard",
    category: "UI/UX",
    desc: "Modern fintech dashboard design — 40% boost in user engagement.",
    image: "/hero25-image.png",
    tags: ["Figma", "Design System"],
    year: "2024",
    metric: "+40% Engagement",
  },
  {
    title: "EduLearn Platform",
    category: "Web",
    desc: "LMS platform with video lessons, quizzes & live classes.",
    image: "/hero25-image.png",
    tags: ["Next.js", "Mux"],
    year: "2023",
    metric: "10K Students",
  },
  {
    title: "FoodExpress App",
    category: "App",
    desc: "Food delivery app with real-time tracking & multi-vendor support.",
    image: "/hero25-image.png",
    tags: ["Flutter", "Maps API"],
    year: "2023",
    metric: "100K Orders",
  },
  {
    title: "Proptech CRM",
    category: "CRM",
    desc: "Real estate CRM with property listings, clients & commission tracking.",
    image: "/hero25-image.png",
    tags: ["React", "GraphQL"],
    year: "2024",
    metric: "500+ Agents",
  },
];

// ============================================
// PAGE
// ============================================

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* ============ HERO ============ */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
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
            <span className="text-black">Portfolio</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-7 shadow-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                  <span className="text-[10px] font-bold text-black tracking-widest">
                    09
                  </span>
                </span>
                <span className="w-px h-3 bg-black/15"></span>
                <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                  Our Work
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                Projects that
                <br />
                <span className="text-black/30">made an impact.</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-4">
              <p className="text-lg text-black/60 leading-relaxed">
                A selection of work from the last few years — websites, apps,
                and systems built for ambitious businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FILTERS ============ */}
      <section className="relative bg-white pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-black/10 pb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "text-black/60 hover:bg-black/5 hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}

            <span className="ml-auto text-xs text-black/40 uppercase tracking-widest font-semibold">
              {filtered.length} {filtered.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS GRID ============ */}
      <section className="relative bg-white pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="group relative border border-black/10 bg-white rounded-2xl overflow-hidden hover:border-black hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[10px] font-bold text-white bg-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-bold text-black bg-white px-2.5 py-1 rounded-full tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom metric — appears on hover */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                      <span className="text-xs font-bold text-black">
                        {project.metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight group-hover:text-black transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-black/55 leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-semibold text-black/50 bg-black/5 px-2.5 py-1 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <span className="text-sm font-semibold text-black group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1.5">
                      View Case Study
                      <span>→</span>
                    </span>

                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                      <span className="text-xs text-black group-hover:text-white transition-colors">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-black/50 text-lg">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="relative bg-black text-white py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
              By The Numbers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "80+", label: "Happy Clients" },
              { value: "10+", label: "Countries Served" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] text-white/50 mt-3 uppercase tracking-[0.2em] font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        ></div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[11px] font-semibold text-white/80 tracking-[0.2em] uppercase">
              Let's Work Together
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto">
            Your project could be
            <br />
            <span className="text-white/30">our next case study.</span>
          </h2>

          <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Free 30-minute consultation. No commitment. Just honest advice on
            how to take your business to the next level.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-2xl shadow-white/10"
            >
              Talk to Expert
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              Explore Services
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}