"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CONTENT } from "@/lib/content";

interface TestimonialTheme {
  background: string;
  ambientGlow: string;
  accentColor: string;
}

const TESTIMONIAL_THEMES: TestimonialTheme[] = [
  // 01: Investor, Zurich (Leadership / Steel Blue #7B9AC4)
  {
    background: "#121924",
    ambientGlow: "rgba(123, 154, 196, 0.18)",
    accentColor: "#7B9AC4",
  },
  // 02: ZHdK Mentorship (Relationships / Lilac-Violet #A98AC4)
  {
    background: "#1E1424",
    ambientGlow: "rgba(169, 138, 196, 0.18)",
    accentColor: "#A98AC4",
  },
  // 03: Board Member, Zurich (Work / Gold-Amber #E0BB52)
  {
    background: "#221B0F",
    ambientGlow: "rgba(224, 187, 82, 0.16)",
    accentColor: "#E0BB52",
  },
  // 04: Senior Marketing Manager (Spaces / Forest-Sage #8FB694)
  {
    background: "#121F16",
    ambientGlow: "rgba(143, 182, 148, 0.18)",
    accentColor: "#8FB694",
  },
  // 05: Business Owner, Zurich (Identity / Rose-Crimson #C16170)
  {
    background: "#221317",
    ambientGlow: "rgba(193, 97, 112, 0.18)",
    accentColor: "#C16170",
  },
  // 06: Finance Executive (Leadership + Relationships / Indigo Slate)
  {
    background: "#161626",
    ambientGlow: "rgba(146, 146, 210, 0.18)",
    accentColor: "#9292D2",
  },
  // 07: HNW Young Professional (Work + Identity / Warm Amber-Copper)
  {
    background: "#211613",
    ambientGlow: "rgba(209, 142, 92, 0.18)",
    accentColor: "#D18E5C",
  },
];

export function Testimonials() {
  const { testimonials } = CONTENT;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const total = testimonials.length;
  const currentTheme = TESTIMONIAL_THEMES[currentIndex % TESTIMONIAL_THEMES.length];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance every 9 seconds; paused on hover / user interaction; disabled under reduced motion
  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 9000);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, isPaused, handleNext]);

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  const formattedCurrent = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      style={{
        backgroundColor: currentTheme.background,
        transition: "background-color 1000ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className="w-full relative overflow-hidden border-y border-warm-white/5 py-24 sm:py-28 md:py-32 px-6 sm:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Ambient Radial Color Glow that morphs with each testimonial */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, ${currentTheme.ambientGlow} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/30 rounded-2xl p-2"
        role="region"
        aria-roledescription="carousel"
      >
        {/* Quote Container: CSS Grid stack to reserve max height naturally and prevent layout jumps */}
        <div className="w-full grid grid-cols-1 grid-rows-1 items-center justify-items-center mb-10 sm:mb-12">
          {/* Ghost items in the same grid cell to guarantee the container always holds the maximum quote height */}
          {testimonials.map((item, idx) => (
            <div
              key={`ghost-${idx}`}
              aria-hidden="true"
              className="col-start-1 row-start-1 w-full max-w-[58ch] flex flex-col items-center text-center opacity-0 pointer-events-none select-none invisible"
            >
              <blockquote className="text-[clamp(18px,2vw,24px)] font-normal text-warm-white leading-relaxed">
                “{item.quote}”
              </blockquote>
              <cite className="mt-5 sm:mt-6 text-sm font-normal text-stone-custom not-italic">
                — {item.attribution}
              </cite>
            </div>
          ))}

          {/* Active Visible Item with soft crossfade */}
          <div
            className="col-start-1 row-start-1 w-full max-w-[58ch] flex flex-col items-center text-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  ease: "easeInOut",
                }}
                className="w-full flex flex-col items-center text-center"
              >
                <blockquote className="text-[clamp(18px,2vw,24px)] font-normal text-warm-white leading-relaxed tracking-tight">
                  “{testimonials[currentIndex].quote}”
                </blockquote>
                <cite className="mt-5 sm:mt-6 text-sm font-normal text-stone-custom not-italic tracking-normal">
                  — {testimonials[currentIndex].attribution}
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Minimal Controls: Previous / Next & Index */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 text-platinum">
          {/* Prev Button (44px min touch target) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center text-platinum/50 hover:text-warm-white hover:bg-white/[0.06] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/40 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Index Counter */}
          <span className="text-[13px] font-normal tracking-[0.2em] text-platinum tabular-nums select-none">
            {formattedCurrent} / {formattedTotal}
          </span>

          {/* Next Button (44px min touch target) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full flex items-center justify-center text-platinum/50 hover:text-warm-white hover:bg-white/[0.06] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/40 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
