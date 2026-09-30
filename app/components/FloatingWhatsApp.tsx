"use client";

import { useState, useEffect } from "react";

const WHATSAPP_LINK =
  "https://wa.me/918787054829?text=Hello%20DellOps%20Tech%2C%20I%20want%20to%20discuss%20my%20project.";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Hide after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* ================= EXPANDED CHAT CARD ================= */}
      <div
        className={`fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[340px] transition-all duration-500 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
            : "opacity-0 scale-90 pointer-events-none translate-y-4"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden">
          {/* Header */}
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-lg font-bold">D</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-black"></span>
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">DellOps Tech</p>
                <p className="text-[10px] text-white/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Online now
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#FAFAFA]">
            {/* Message bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 shadow-sm border border-black/5 max-w-[85%]">
              <p className="text-sm text-black/80 leading-relaxed">
                Hi there! 👋
                <br />
                How can we help you today?
              </p>
              <p className="text-[10px] text-black/40 mt-1.5">Just now</p>
            </div>

            {/* Quick replies */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {[
                "Website Development",
                "App Development",
                "SEO Services",
                "Get a Quote",
              ].map((tag, i) => (
                <a
                  key={i}
                  href={`https://wa.me/918787054829?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(tag)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium text-black/70 bg-white border border-black/10 px-3 py-1.5 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-black/5 bg-white">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full bg-black text-white py-3 rounded-xl font-semibold text-sm hover:bg-black/85 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Start Chat
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= TOOLTIP ================= */}
      <div
        className={`fixed bottom-24 right-24 sm:bottom-28 sm:right-28 z-40 transition-all duration-500 ${
          showTooltip && !isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="relative bg-black text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl whitespace-nowrap">
          Chat with us 👋
          {/* Arrow */}
          <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-black rotate-45"></span>
        </div>
      </div>

      {/* ================= MAIN FLOATING BUTTON ================= */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="group fixed bottom-6 right-4 sm:bottom-8 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-2xl shadow-black/30 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Open WhatsApp chat"
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-black opacity-75 animate-ping-slow"></span>
        <span className="absolute inset-0 rounded-full bg-black opacity-40 animate-ping-slower"></span>

        {/* Icon — WhatsApp or Close */}
        <span className="relative z-10">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          )}
        </span>
      </button>
    </>
  );
}