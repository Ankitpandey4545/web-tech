"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const touchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touchDevice);
    if (touchDevice) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let rafId: number;

    // Smooth follow for outer circle
    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.transform = `translate3d(${cursorX - 20}px, ${cursorY - 20}px, 0)`;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      rafId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Hover detection on interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseOver);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Global cursor hide (only when custom cursor active) */}
      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Outer circle */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full border-2 border-black mix-blend-difference transition-[width,height,opacity,background-color] duration-200 ease-out ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${
          isHovering
            ? "w-16 h-16 bg-white border-white"
            : isClicking
            ? "w-8 h-8 bg-black"
            : "bg-transparent"
        }`}
        style={{
          willChange: "transform",
        }}
      ></div>

      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[10000] w-1.5 h-1.5 rounded-full bg-black mix-blend-difference transition-opacity duration-200 ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isHovering ? "opacity-0" : "opacity-100"}`}
        style={{
          willChange: "transform",
        }}
      ></div>
    </>
  );
}