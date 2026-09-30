"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "zoom" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number; // 0-1
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Initial transform based on variant
  const getInitialStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      willChange: "opacity, transform",
    };

    switch (variant) {
      case "up":
        return { ...base, transform: "translate3d(0, 40px, 0)" };
      case "down":
        return { ...base, transform: "translate3d(0, -40px, 0)" };
      case "left":
        return { ...base, transform: "translate3d(-40px, 0, 0)" };
      case "right":
        return { ...base, transform: "translate3d(40px, 0, 0)" };
      case "zoom":
        return { ...base, transform: "scale(0.85)" };
      case "fade":
      default:
        return base;
    }
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "translate3d(0, 0, 0) scale(1)",
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? visibleStyle : getInitialStyle()}
    >
      {children}
    </div>
  );
}