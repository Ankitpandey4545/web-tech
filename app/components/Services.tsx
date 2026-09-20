"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    category: "Development",
    title: "Web Development",
    desc: "Custom, blazing-fast websites & web apps built with modern frameworks like Next.js, React, and Node.js.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    number: "02",
    category: "Mobile",
    title: "App Development",
    desc: "iOS & Android apps that deliver seamless user experiences with native performance and beautiful UI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    tags: ["iOS", "Android", "React Native"],
  },
  {
    number: "03",
    category: "Growth",
    title: "SEO Optimization",
    desc: "Rank higher on Google, drive organic traffic, and grow your business with data-driven SEO strategies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    tags: ["On-Page", "Off-Page", "Technical"],
  },
  {
    number: "04",
    category: "Enterprise",
    title: "CRM Development",
    desc: "Manage customers, sales pipelines, and relationships with a tailored CRM built around your workflow.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    tags: ["Sales", "Support", "Analytics"],
  },
  {
    number: "05",
    category: "Enterprise",
    title: "ERP Solutions",
    desc: "Streamline operations with tailored enterprise systems — inventory, HR, finance, and more in one platform.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    tags: ["Inventory", "HR", "Finance"],
  },
  {
    number: "06",
    category: "Design",
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed to convert visitors into customers and boost engagement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    tags: ["Figma", "Prototyping", "Research"],
  },
];

// Marquee tags
const marqueeTags = [
  "Next.js", "React", "Node.js", "TypeScript", "Tailwind",
  "MongoDB", "PostgreSQL", "AWS", "Figma", "React Native",
  "Python", "Docker", "Stripe", "GraphQL", "Firebase",
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <Link
      ref={cardRef}
      href="/services"
      onMouseMove={handleMouseMove}
      className="group relative border border-black/10 bg-white rounded-2xl p-7 hover:border-black/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]"
    >
      {/* Spotlight effect (mouse follow) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0.06), transparent 40%)`,
        }}
      ></div>

      {/* Big background number */}
      <div className="absolute -bottom-8 -right-4 text-[120px] font-bold text-black/[0.03] group-hover:text-black/[0.06] transition-colors duration-500 leading-none select-none">
        {service.number}
      </div>

      {/* Category label with dot */}
      <div className="relative flex items-center gap-2 mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-150 transition-transform duration-300"></span>
        <span className="text-[10px] font-semibold text-black/50 uppercase tracking-[0.2em]">
          {service.category}
        </span>
      </div>

      {/* Icon with animated ring */}
      <div className="relative w-16 h-16 mb-6">
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-2xl border border-black/10 group-hover:border-black/20 transition-colors duration-500"></div>
        <div className="absolute inset-0 rounded-2xl border-t-2 border-black opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow"></div>

        {/* Icon container */}
        <div className="relative w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/10">
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-bold text-black mb-3 tracking-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="relative text-sm text-black/60 leading-relaxed mb-5">
        {service.desc}
      </p>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-1.5 mb-7">
        {service.tags.map((tag, j) => (
          <span
            key={j}
            className="text-[10px] font-medium text-black/60 bg-black/[0.04] border border-black/[0.06] px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:bg-black/10 group-hover:text-black transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom row */}
      <div className="relative flex items-center justify-between pt-5 border-t border-black/5">
        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          <span className="relative">
            Learn more
            <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-500"></span>
          </span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
        <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
          <span className="text-xs text-black group-hover:text-white transition-colors duration-300">
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute top-20 right-10 w-40 h-40 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      ></div>
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-black/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            {/* Badge with count */}
            <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                <span className="text-[10px] font-bold text-black tracking-widest">
                  06
                </span>
              </span>
              <span className="w-px h-3 bg-black/15"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                Core Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight">
              Services that
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-br from-black via-black/60 to-black/20 bg-clip-text text-transparent">
                  drive results
                </span>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 1 298 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.25"
                  />
                </svg>
              </span>
              .
            </h2>
          </div>

          {/* Right side text */}
          <div className="lg:max-w-sm lg:text-right">
            <p className="text-black/60 leading-relaxed mb-4">
              From concept to deployment — we cover every digital need your
              business has. Built fast, built right.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black border-b-2 border-black pb-1 hover:gap-3 transition-all duration-300"
            >
              Explore all services
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* ================= MARQUEE TAGS ================= */}
        <div className="mt-20 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-black/10"></div>
            <p className="text-[10px] text-black/40 uppercase tracking-[0.3em] font-semibold whitespace-nowrap">
              Tech Stack We Master
            </p>
            <div className="h-px flex-1 bg-black/10"></div>
          </div>

          <div className="relative">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            {/* Marquee */}
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...marqueeTags, ...marqueeTags].map((tag, i) => (
                <span
                  key={i}
                  className="text-2xl sm:text-3xl font-bold text-black/20 hover:text-black/60 transition-colors duration-300 cursor-default"
                >
                  {tag}
                  <span className="text-black/10 ml-8">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-black/50 text-sm">
            Need something custom? We build it too.
          </p>
          <a
            href="https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20a%20custom%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/10"
          >
            Talk to an Expert
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}