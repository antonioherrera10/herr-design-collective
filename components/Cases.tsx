"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CONTENT, CaseStudy } from "@/lib/content";
import { CaseGraphic } from "@/components/CaseGraphic";

function CaseCard({
  caseItem,
  index,
  shouldReduceMotion,
}: {
  caseItem: CaseStudy;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : (index % 5) * 0.08,
        ease: "easeOut",
      }}
      className="w-full md:w-[420px] md:flex-shrink-0 md:snap-start bg-warm-white/[0.03] border border-warm-white/[0.08] hover:border-warm-white/20 rounded-[16px] p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 group"
    >
      {/* Top Section: Media + Title + Description */}
      <div className="flex flex-col gap-5">
        {/* Media area: Minimalist Architectural SVG in PRISM hues at 16:10 */}
        <div className="w-full">
          <CaseGraphic index={index % 5} title={caseItem.title} />
        </div>

        {/* Title: DM Sans 500, 18-19px, warm-white, up to 3 lines */}
        <h3 className="text-[18px] sm:text-[19px] font-medium text-warm-white leading-snug tracking-tight line-clamp-3 group-hover:text-white transition-colors">
          {caseItem.title}
        </h3>

        {/* Description: DM Sans 300/400, 15px, warm-white 70% */}
        <p className="text-[15px] font-light text-warm-white/70 leading-relaxed">
          {caseItem.description}
        </p>
      </div>

      {/* Bottom Section: Outcome Row + Expertise Chips */}
      <div className="mt-8 flex flex-col gap-5 pt-5 border-t border-warm-white/[0.06]">
        {/* Outcome row */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-2.5">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-platinum flex-shrink-0">
            Outcome
          </span>
          <span className="text-[14px] font-normal text-warm-white/85 leading-normal">
            {caseItem.outcome}
          </span>
        </div>

        {/* Expertise as small chips */}
        <div className="flex flex-wrap gap-2">
          {caseItem.expertise.map((item) => (
            <span
              key={item}
              className="border border-warm-white/15 text-[11px] font-normal uppercase tracking-[0.15em] text-stone-custom px-2.5 py-1 rounded-full whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Cases() {
  const { cases } = CONTENT;
  const shouldReduceMotion = useReducedMotion();
  const sliderRef = useRef<HTMLDivElement>(null);
  const isNormalizingRef = useRef(false);

  // Triple buffer for seamless infinite endless scrolling
  const infiniteEntries = [
    ...cases.entries,
    ...cases.entries,
    ...cases.entries,
  ];

  // Set initial scroll position to the middle buffer
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const initializePosition = () => {
      const oneSetWidth = el.scrollWidth / 3;
      if (oneSetWidth > 0) {
        el.scrollLeft = oneSetWidth;
      }
    };

    // Initialize immediately and on next frame to ensure layout geometry is ready
    initializePosition();
    const timer = setTimeout(initializePosition, 50);

    return () => clearTimeout(timer);
  }, []);

  // Endless loop boundary normalization
  const handleScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el || isNormalizingRef.current) return;

    const singleSetWidth = el.scrollWidth / 3;
    if (singleSetWidth <= 0) return;

    // If near the left edge (first 20% of first set), shift to middle set
    if (el.scrollLeft < singleSetWidth * 0.25) {
      isNormalizingRef.current = true;
      el.style.scrollBehavior = "auto";
      el.style.scrollSnapType = "none";
      el.scrollLeft += singleSetWidth;
      requestAnimationFrame(() => {
        if (el) {
          el.style.scrollBehavior = "";
          el.style.scrollSnapType = "";
        }
        isNormalizingRef.current = false;
      });
    }
    // If near the right edge (past middle set into third set), shift back to middle set
    else if (el.scrollLeft > singleSetWidth * 1.75) {
      isNormalizingRef.current = true;
      el.style.scrollBehavior = "auto";
      el.style.scrollSnapType = "none";
      el.scrollLeft -= singleSetWidth;
      requestAnimationFrame(() => {
        if (el) {
          el.style.scrollBehavior = "";
          el.style.scrollSnapType = "";
        }
        isNormalizingRef.current = false;
      });
    }
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (el) {
      const firstCard = el.querySelector("div");
      const cardWidth = firstCard?.clientWidth || 420;
      const scrollAmount = cardWidth + 24; // card width + gap
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="cases"
      aria-labelledby="cases-headline"
      className="w-full bg-surface-custom border-t border-warm-white/[0.06] py-24 sm:py-28 md:py-32 relative overflow-hidden"
    >
      <div className="w-full flex flex-col gap-12 sm:gap-14">
        {/* Header Block: Left-aligned H2 headline + Right-aligned Slider Controls */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
          <motion.h2
            id="cases-headline"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[clamp(30px,3.5vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15]"
          >
            {cases.headline}
          </motion.h2>

          {/* Endless Slider Controls on md+ */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous case study"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-warm-white/15 flex items-center justify-center text-platinum/70 hover:text-warm-white hover:border-warm-white/40 hover:bg-warm-white/5 active:scale-95 cursor-pointer transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next case study"
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-warm-white/15 flex items-center justify-center text-platinum/70 hover:text-warm-white hover:border-warm-white/40 hover:bg-warm-white/5 active:scale-95 cursor-pointer transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View: Clean, static vertical stack (natural page scroll, 0 horizontal jank) */}
        <div className="flex md:hidden flex-col gap-6 px-6 sm:px-8">
          {cases.entries.map((caseItem, index) => (
            <CaseCard
              key={`mobile-${caseItem.title}-${index}`}
              caseItem={caseItem}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Desktop View (md+): Smooth horizontal endless loop slider */}
        <div
          ref={sliderRef}
          tabIndex={0}
          aria-label="Selected case studies slider"
          className="hidden md:flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 px-6 sm:px-8 xl:px-[calc((100vw-72rem)/2+2rem)] focus:outline-none scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {infiniteEntries.map((caseItem, index) => (
            <CaseCard
              key={`desktop-${caseItem.title}-${index}`}
              caseItem={caseItem}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Footnote Below the Slider (Centered to page) */}
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 flex justify-center">
          <p className="text-[13px] sm:text-[14px] font-normal italic text-stone-custom max-w-[70ch] leading-relaxed text-center">
            {cases.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
