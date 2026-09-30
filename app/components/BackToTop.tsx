"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      // Show button after scrolling 400px
      setVisible(scrollTop > 400);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-6 left-4 sm:bottom-8 sm:left-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Progress Ring SVG */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Track */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="3"
        />
        {/* Progress */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 46}
          strokeDashoffset={2 * Math.PI * 46 * (1 - scrollProgress / 100)}
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>

      {/* Button background */}
      <div className="absolute inset-[6px] sm:inset-[7px] rounded-full bg-white border border-black/10 shadow-lg group-hover:bg-black group-hover:border-black transition-all duration-300 flex items-center justify-center">
        {/* Arrow icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 text-black group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </button>
  );
}