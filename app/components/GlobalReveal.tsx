"use client";

import { useEffect } from "react";

export default function GlobalReveal() {
  useEffect(() => {
    // Auto-tag every major section
    const sections = document.querySelectorAll(
      "section, [data-reveal], .reveal-group > *"
    );

    sections.forEach((el) => {
      if (!el.hasAttribute("data-reveal-initialized")) {
        el.setAttribute("data-reveal-initialized", "true");
        el.classList.add("reveal-init");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    sections.forEach((el) => observer.observe(el));

    // Stagger children inside groups
    document.querySelectorAll(".reveal-group").forEach((group) => {
      const children = group.children;
      Array.from(children).forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
      });
    });

    return () => observer.disconnect();
  }, []);

  return null;
}