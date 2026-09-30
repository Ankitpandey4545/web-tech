"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    // Initial call
    updateScrollProgress();

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <>
      {/* ============ MAIN PROGRESS BAR ============ */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
        {/* Track (background) */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* Progress fill */}
        <div
          className="absolute top-0 left-0 h-full bg-black transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glow at the tip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/40 rounded-full blur-md"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
        </div>
      </div>

      {/* ============ PERCENTAGE INDICATOR (Optional — shows on scroll) ============ */}
      <div
        className={`fixed top-4 right-4 z-[60] transition-all duration-300 pointer-events-none ${
          scrollProgress > 5 && scrollProgress < 95
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex items-center gap-2 bg-black text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </>
  );
}