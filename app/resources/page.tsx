"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// ============================================
// DATA
// ============================================

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

const categories = [
  { id: "all", name: "All" },
  { id: "blog", name: "Blog" },
  { id: "guide", name: "Guides" },
  { id: "case-study", name: "Case Studies" },
  { id: "tutorial", name: "Tutorials" },
];

const featured = {
  category: "Case Study",
  categoryId: "case-study",
  title: "How we helped LUXE Fashion boost sales by 240% in 6 months",
  excerpt:
    "A complete digital transformation journey — from a slow, outdated store to a blazing-fast Next.js experience with AI-powered recommendations and one-click checkout.",
  image: "/hero25-image.png",
  author: "Ankit Pandey",
  authorRole: "Founder & CEO",
  date: "Sep 15, 2024",
  readTime: "8 min read",
  href: "/resources/luxe-case-study",
};

const resources = [
  {
    category: "Blog",
    categoryId: "blog",
    title: "Why Next.js is the Future of Web Development in 2025",
    excerpt:
      "Server components, edge functions, and the new App Router — here's why we've gone all-in on Next.js.",
    image: "/hero25-image.png",
    author: "Rahul Sharma",
    date: "Sep 22, 2024",
    readTime: "6 min read",
    href: "/resources/nextjs-future",
  },
  {
    category: "Guide",
    categoryId: "guide",
    title: "The Complete Guide to Custom CRM Development",
    excerpt:
      "Everything you need to know before building a custom CRM — features, costs, timeline, and pitfalls.",
    image: "/hero25-image.png",
    author: "Priya Verma",
    date: "Sep 18, 2024",
    readTime: "12 min read",
    href: "/resources/crm-guide",
  },
  {
    category: "Tutorial",
    categoryId: "tutorial",
    title: "Building a Real-Time Chat App with Supabase",
    excerpt:
      "A step-by-step tutorial on building a production-ready chat app — no Firebase needed.",
    image: "/hero25-image.png",
    author: "Arjun Singh",
    date: "Sep 12, 2024",
    readTime: "15 min read",
    href: "/resources/supabase-chat",
  },
  {
    category: "Blog",
    categoryId: "blog",
    title: "SEO in 2025: What Actually Works (And What Doesn't)",
    excerpt:
      "Google's algorithm has changed. Here's our data-driven breakdown of what still moves the needle.",
    image: "/hero25-image.png",
    author: "Mohit Kumar",
    date: "Sep 8, 2024",
    readTime: "10 min read",
    href: "/resources/seo-2025",
  },
  {
    category: "Case Study",
    categoryId: "case-study",
    title: "From idea to 50K users: How MediTrack scaled",
    excerpt:
      "How a healthcare startup went from zero to 50,000 users with a custom mobile app.",
    image: "/hero25-image.png",
    author: "Sneha Gupta",
    date: "Sep 4, 2024",
    readTime: "7 min read",
    href: "/resources/meditrack-case",
  },
  {
    category: "Guide",
    categoryId: "guide",
    title: "UI/UX Principles Every Founder Should Know",
    excerpt:
      "You don't need to be a designer — but knowing these 10 principles will save you thousands.",
    image: "/hero25-image.png",
    author: "Priya Verma",
    date: "Aug 28, 2024",
    readTime: "9 min read",
    href: "/resources/ux-principles",
  },
  {
    category: "Blog",
    categoryId: "blog",
    title: "Why We Chose Tailwind CSS Over Everything Else",
    excerpt:
      "A deep dive into our decision to standardize on Tailwind across all client projects.",
    image: "/hero25-image.png",
    author: "Rahul Sharma",
    date: "Aug 22, 2024",
    readTime: "5 min read",
    href: "/resources/tailwind-choice",
  },
  {
    category: "Tutorial",
    categoryId: "tutorial",
    title: "Deploying Next.js Apps to Vercel — Full Walkthrough",
    excerpt:
      "From GitHub to production in 5 minutes — a complete deployment tutorial.",
    image: "/hero25-image.png",
    author: "Arjun Singh",
    date: "Aug 15, 2024",
    readTime: "8 min read",
    href: "/resources/vercel-deploy",
  },
  {
    category: "Case Study",
    categoryId: "case-study",
    title: "Building a Hospital ERP for 8 branches",
    excerpt:
      "How we unified patient records, billing, and HR for a hospital chain in 6 months.",
    image: "/hero25-image.png",
    author: "Sneha Gupta",
    date: "Aug 8, 2024",
    readTime: "10 min read",
    href: "/resources/medicare-erp",
  },
];

// ============================================
// PAGE
// ============================================

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeFilter === "all"
      ? resources
      : resources.filter((r) => r.categoryId === activeFilter);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

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
            <span className="text-black">Resources</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 border border-black/10 bg-white rounded-full px-4 py-1.5 mb-7 shadow-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                  <span className="text-[10px] font-bold text-black tracking-widest">
                    {String(resources.length + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="w-px h-3 bg-black/15"></span>
                <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                  Insights & Resources
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
                Learn. Build.
                <br />
                <span className="text-black/30">Grow faster.</span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-4">
              <p className="text-lg text-black/60 leading-relaxed">
                Practical insights, in-depth guides, and real case studies
                from the DellOps Tech team — for founders, developers, and
                marketers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED ARTICLE ============ */}
      <section className="relative bg-white pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href={featured.href}
            className="group grid lg:grid-cols-12 gap-8 bg-black text-white rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20"
          >
            {/* Image */}
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] overflow-hidden bg-black/5">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/40"></div>

              {/* Featured badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white text-black rounded-full px-3.5 py-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-white/10 px-3 py-1.5 rounded-full">
                  {featured.category}
                </span>
                <span className="text-xs text-white/50">
                  {featured.readTime}
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-5 group-hover:text-white/90 transition-colors">
                {featured.title}
              </h2>

              <p className="text-white/60 leading-relaxed mb-8">
                {featured.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mb-8 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                  {featured.author[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {featured.author}
                  </p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">
                    {featured.date}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                Read Full Story
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============ FILTERS ============ */}
      <section className="relative bg-white pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-black/10 pb-6">
            {categories.map((cat) => {
              const count =
                cat.id === "all"
                  ? resources.length
                  : resources.filter((r) => r.categoryId === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                    activeFilter === cat.id
                      ? "bg-black text-white"
                      : "text-black/60 hover:bg-black/5 hover:text-black"
                  }`}
                >
                  {cat.name}
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      activeFilter === cat.id
                        ? "bg-white/20"
                        : "bg-black/5 text-black/50"
                    }`}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ARTICLES GRID ============ */}
      <section className="relative bg-white pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="group relative bg-white border border-black/10 rounded-2xl overflow-hidden hover:border-black hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold text-white bg-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {resource.category}
                    </span>
                  </div>

                  {/* Read time */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-2.5 py-1">
                    <span className="text-[10px] font-bold text-black">
                      {resource.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-black mb-2 tracking-tight leading-tight group-hover:text-black transition-colors">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-black/55 leading-relaxed mb-5">
                    {resource.excerpt}
                  </p>

                  {/* Author + date */}
                  <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                        {resource.author[0]}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-black">
                          {resource.author}
                        </p>
                        <p className="text-[9px] text-black/40 uppercase tracking-widest">
                          {resource.date}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                      <span className="text-xs text-black group-hover:text-white transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-black/50 text-lg">
                No resources in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="relative bg-black text-white py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        ></div>

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-[11px] font-semibold text-white/80 tracking-[0.2em] uppercase">
              Newsletter
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            New insights,
            <br />
            <span className="text-white/30">straight to your inbox.</span>
          </h2>

          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Once a week. No spam, no fluff — just actionable insights on
            tech, design, and growth.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all duration-300"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-white/10 whitespace-nowrap"
            >
              {subscribed ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-[1.05] tracking-tight mb-6">
            Need help with
            <br />
            <span className="text-black/30">your next project?</span>
          </h2>

          <p className="text-black/60 mb-10 max-w-xl mx-auto">
            Talk to our experts — get a free 30-minute consultation with no
            strings attached.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-black/10"
            >
              Talk to Expert
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 border border-black/15 text-black px-8 py-4 rounded-xl font-medium hover:border-black hover:bg-black/5 transition-all duration-300"
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