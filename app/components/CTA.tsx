"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20start%20a%20project.";

const ROTATING_WORDS = [
  "Website",
  "Mobile App",
  "CRM System",
  "ERP Platform",
  "Brand Identity",
];

export default function CTA() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROTATING_WORDS[wordIndex];
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative bg-black text-white py-24 lg:py-32 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      ></div>

      {/* Radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="text-[11px] font-semibold text-white/80 tracking-[0.2em] uppercase">
            Available for New Projects
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto">
          Let's build your
          <br />
          <span className="inline-flex items-baseline gap-3 justify-center flex-wrap">
            <span className="text-white/30">next</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-white via-white/70 to-white/30 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-blink text-white/60 font-light">|</span>
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-white via-white/30 to-transparent rounded-full"></span>
            </span>
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          Free 30-minute consultation. No commitment. Just honest advice on how
          to take your business to the next level.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-2xl shadow-white/10 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 relative z-10"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="relative z-10">Talk to Expert</span>
          </a>

          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            View Portfolio
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="uppercase tracking-widest font-semibold">
              Free Consultation
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="uppercase tracking-widest font-semibold">
              No Commitment
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="uppercase tracking-widest font-semibold">
              Response in 2hrs
            </span>
          </div>
        </div>

        {/* Avatar strip */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {["A", "R", "S", "M", "K"].map((initial, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border-2 border-black flex items-center justify-center text-xs font-bold text-white hover:scale-110 hover:z-10 transition-transform duration-300"
              >
                {initial}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-white text-black border-2 border-black flex items-center justify-center text-[10px] font-bold">
              80+
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-white text-sm">
                  ★
                </span>
              ))}
            </div>
            <p className="text-xs text-white/50 mt-1">
              Trusted by 80+ happy clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}