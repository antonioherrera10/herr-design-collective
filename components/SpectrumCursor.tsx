"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export function SpectrumCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isFinePointerActive, setIsFinePointerActive] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for fine pointer devices and no prefers-reduced-motion
    const mediaQueryFine = window.matchMedia("(pointer: fine)");
    const mediaQueryReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateCursorState = () => {
      const isFine = mediaQueryFine.matches;
      const isReduced = mediaQueryReducedMotion.matches;
      const active = isFine && !isReduced;

      setIsFinePointerActive(active);

      if (active) {
        document.documentElement.classList.add("custom-cursor-active");
      } else {
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    updateCursorState();
    mediaQueryFine.addEventListener("change", updateCursorState);
    mediaQueryReducedMotion.addEventListener("change", updateCursorState);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      mediaQueryFine.removeEventListener("change", updateCursorState);
      mediaQueryReducedMotion.removeEventListener("change", updateCursorState);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!mounted || !isFinePointerActive || !isVisible) {
    return null;
  }

  const trianglePath = "M 4 4 L 20 12 L 12 20 L 4 4 Z";
  const squarePath = "M 4 4 L 20 4 L 20 20 L 4 20 Z";

  return (
    <motion.div
      className="fixed pointer-events-none z-50 select-none"
      style={{
        left: 0,
        top: 0,
        x: mousePos.x - 4,
        y: mousePos.y - 4,
      }}
      animate={{
        scale: isClicked ? 0.8 : 1.1,
        rotate: isClicked ? 45 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      }}
      aria-hidden="true"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="spectrum-cursor-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#C16170" />
            <stop offset="25%" stopColor="#A98AC4" />
            <stop offset="50%" stopColor="#E0BB52" />
            <stop offset="75%" stopColor="#8FB694" />
            <stop offset="100%" stopColor="#7B9AC4" />
          </linearGradient>
          <filter
            id="spectrum-cursor-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <motion.path
          d={isClicked ? squarePath : trianglePath}
          fill="url(#spectrum-cursor-gradient)"
          stroke="rgba(242,239,233,0.3)"
          strokeWidth="1"
          strokeLinejoin="round"
          filter="url(#spectrum-cursor-glow)"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      </svg>
    </motion.div>
  );
}
