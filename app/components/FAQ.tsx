"use client";

import { useState } from "react";
import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20have%20a%20question.";

const faqs = [
  {
    q: "What services does DellOps Tech offer?",
    a: "We provide end-to-end digital solutions including Web Development, Mobile App Development, SEO Optimization, CRM & ERP Development, and UI/UX Design. From concept to launch — we handle it all.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on project scope. A simple website takes 2-4 weeks, while complex apps or ERP systems may take 8-16 weeks. We share a detailed timeline during the Discovery phase.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer transparent, project-based pricing with milestone payments. No hidden costs. For ongoing work, we also provide monthly retainer plans tailored to your needs.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. Every project comes with 30 days of free post-launch support. For long-term maintenance, we offer affordable AMC (Annual Maintenance Contract) plans.",
  },
  {
    q: "Which technologies do you work with?",
    a: "Our stack includes Next.js, React, Node.js, TypeScript, Tailwind CSS, React Native, Python, MongoDB, PostgreSQL, AWS, and more. We choose the best tool for your specific needs.",
  },
  {
    q: "Will my website be SEO-friendly?",
    a: "Yes! Every website we build follows SEO best practices — fast loading, mobile-responsive, semantic HTML, meta tags, and clean structure. We also offer dedicated SEO services.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients worldwide — from the US, UK, UAE, Australia, and beyond. We handle time zone differences smoothly via WhatsApp, Email, and video calls.",
  },
  {
    q: "How do we get started?",
    a: "Simple! Just click 'Talk to Expert' on WhatsApp or fill the contact form. We'll schedule a free 30-minute discovery call to understand your needs and share a proposal.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Dotted decoration */}
      <div
        className="absolute top-20 left-10 w-40 h-40 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-black/10 bg-black/5 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
              <span className="text-[11px] font-semibold text-black/70 tracking-[0.15em] uppercase">
                FAQ
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-[1.05] tracking-tight">
              Got questions?
              <br />
              <span className="text-black/30">We've got answers.</span>
            </h2>

            <p className="mt-6 text-black/60 leading-relaxed max-w-md">
              Everything you need to know about working with DellOps Tech.
              Can't find your answer? Reach out anytime.
            </p>

            {/* Help Card */}
            <div className="mt-10 relative bg-black text-white rounded-2xl p-6 overflow-hidden">
              {/* Grid bg */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              ></div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                    Still curious?
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight mb-2">
                  Let's talk directly.
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-5">
                  Get instant answers on WhatsApp — no forms, no waiting.
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Talk on WhatsApp
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3 text-black/60">
                <span className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black">
                  ✉
                </span>
                <span>hello@dellopstech.com</span>
              </div>
              <div className="flex items-center gap-3 text-black/60">
                <span className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black">
                  ☎
                </span>
                <span>+91 87870 54829</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE — FAQ LIST ================= */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`group border rounded-2xl overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "border-black bg-black/[0.02] shadow-xl shadow-black/5"
                        : "border-black/10 bg-white hover:border-black/30"
                    }`}
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {/* Number */}
                        <span
                          className={`text-xs font-bold tracking-widest transition-colors duration-300 ${
                            isOpen ? "text-black" : "text-black/30"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-300 ${
                            isOpen ? "text-black" : "text-black/80"
                          }`}
                        >
                          {faq.q}
                        </span>
                      </div>

                      {/* Plus/Minus Icon */}
                      <span
                        className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? "bg-black border-black rotate-45"
                            : "bg-white border-black/15 group-hover:border-black/40"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className={`w-4 h-4 transition-colors duration-300 ${
                            isOpen ? "text-white" : "text-black"
                          }`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </button>

                    {/* Answer with smooth animation */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pl-[68px]">
                          <div className="h-px bg-black/10 mb-4"></div>
                          <p className="text-sm text-black/65 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom note */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-black/10"></div>
              <p className="text-xs text-black/40 uppercase tracking-[0.2em] font-semibold">
                Still have questions?
              </p>
              <div className="h-px flex-1 bg-black/10"></div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-black/15 text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:border-black hover:bg-black/5 transition-all duration-300"
              >
                Contact us
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-black/10"
              >
                Chat on WhatsApp
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}