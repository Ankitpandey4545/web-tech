 "use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

const ROTATING_WORDS = [
  "Websites",
  "Mobile Apps",
  "CRM Systems",
  "ERP Solutions",
  "SEO Growth",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
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
    <section className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="animate-slideUp relative">
          {/* Vertical accent line */}
          <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-black/10 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 mb-7 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[11px] font-semibold text-black/80 tracking-[0.15em] uppercase">
              Available for New Projects
            </span>
          </div>

          {/* ============ HEADLINE — UNIQUE STYLE ============ */}
          <div className="relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
              {/* Line 1 — solid black */}
              <span className="block text-black">We Build</span>

              {/* Line 2 — rotator with typewriter */}
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-br from-black via-black/70 to-black/30 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="animate-blink text-black font-light">|</span>
                  {/* underline stroke */}
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-black via-black/40 to-transparent rounded-full"></span>
                </span>
              </span>

              {/* Line 3 — outlined text */}
              <span
                className="block mt-3 text-transparent"
                style={{
                  WebkitTextStroke: "2px #000000",
                  letterSpacing: "-0.02em",
                }}
              >
                That Convert.
              </span>
            </h1>

            {/* Small floating quote */}
            <div className="hidden sm:flex absolute -top-2 right-0 items-center gap-2 text-[10px] text-black/40 uppercase tracking-widest">
              <span className="w-8 h-px bg-black/20"></span>
              Since 2020
            </div>
          </div>

          {/* Subtext with highlighted keywords */}
          <p className="mt-9 text-lg text-black/60 leading-relaxed max-w-xl">
            We craft{" "}
            <span className="relative inline-block text-black font-semibold">
              high-performance
              <span className="absolute bottom-0 left-0 w-full h-2 bg-black/5 -z-10"></span>
            </span>{" "}
            digital products that help businesses{" "}
            <span className="text-black font-semibold">dominate</span> the
            digital landscape.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 bg-black text-white px-7 py-4 rounded-xl font-medium hover:bg-black/85 hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-black/15 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 relative z-10"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="relative z-10">Talk to Expert</span>
            </a>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 border border-black/15 bg-white text-black px-7 py-4 rounded-xl font-medium hover:border-black hover:bg-black/5 transition-all duration-300"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

          {/* Stats with unique style */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { value: "150", suffix: "+", label: "Projects" },
              { value: "80", suffix: "+", label: "Clients" },
              { value: "5", suffix: "+", label: "Years" },
            ].map((stat, i) => (
              <div key={i} className="relative">
                <p className="text-4xl font-bold text-black tracking-tight">
                  {stat.value}
                  <span className="text-black/30">{stat.suffix}</span>
                </p>
                <p className="text-[10px] text-black/50 mt-1 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative animate-slideUp animation-delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-black/5 aspect-[4/5]">
            <Image
              src="/hero25-image.png"
              alt="DellOps Tech — Building the Future"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/40">
                  <Image
                    src="/logo.jpeg"
                    alt="DellOps"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-semibold tracking-tight">
                  DellOps Tech
                </span>
              </div>
              <p className="text-2xl font-bold leading-tight">
                Building Digital
                <br />
                Products That Matter.
              </p>
              <p className="text-xs text-white/70 mt-3 tracking-wide">
                Web • App • SEO • CRM • ERP
              </p>
            </div>

            <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-black">
                Live & Building
              </span>
            </div>
          </div>

          <div className="hidden sm:flex absolute -top-5 -left-5 bg-white rounded-2xl shadow-2xl border border-black/10 px-5 py-4 items-center gap-3 animate-float">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">✓</span>
            </div>
            <div>
              <p className="text-[10px] text-black/50 uppercase tracking-widest">
                Project
              </p>
              <p className="text-sm font-bold text-black">Deployed</p>
            </div>
          </div>

          <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-2xl border border-black/10 px-5 py-4 items-center gap-3 animate-float animation-delay-500">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">⚡</span>
            </div>
            <div>
              <p className="text-[10px] text-black/50 uppercase tracking-widest">
                Performance
              </p>
              <p className="text-sm font-bold text-black">98 / 100</p>
            </div>
          </div>

          <div className="hidden lg:flex absolute top-1/2 -left-12 bg-white rounded-2xl shadow-2xl border border-black/10 px-4 py-3 items-center gap-2 animate-float animation-delay-200">
            <span className="text-xl">🚀</span>
            <div>
              <p className="text-[10px] text-black/50 uppercase tracking-widest">
                Speed
              </p>
              <p className="text-xs font-bold text-black">0.8s Load</p>
            </div>
          </div>

          <div className="absolute -top-10 -right-10 w-48 h-48 bg-black/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/5 rounded-full blur-3xl -z-10"></div>

          <div
            className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
          ></div>
        </div>
      </div>

      {/* ================= TRUSTED BY STRIP ================= */}
      <div className="relative max-w-7xl mx-auto px-6 mt-28">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-black/10"></div>
            <p className="text-[10px] text-black/40 uppercase tracking-[0.3em] font-medium">
              Trusted by innovative teams
            </p>
            <div className="h-px w-12 bg-black/10"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-6">
            {["ACME", "NOVA", "SKYLINE", "VERTEX", "PULSE", "QUANTUM"].map(
              (name, i) => (
                <span
                  key={i}
                  className="text-xl font-bold text-black/25 hover:text-black/60 tracking-wider transition-colors duration-300 cursor-default"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}