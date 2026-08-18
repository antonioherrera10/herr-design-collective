"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CONTENT } from "@/lib/content";
import { InteractiveSpectrumStripe } from "@/components/InteractiveSpectrumStripe";

export function AboutHerr() {
  const { aboutHerr } = CONTENT;
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="w-full bg-ink text-warm-white py-24 sm:py-28 md:py-32 px-6 sm:px-8 relative overflow-hidden"
    >
      {/* Top Full-Width Horizontal PRISM Colour Stripe with Interactive Light & Draw-In */}
      <InteractiveSpectrumStripe />

      <div className="w-full max-w-[68ch] mx-auto flex flex-col items-start">
        {/* Section Headline (H2, standard section display scale, left-aligned) */}
        <motion.h2
          id="about-headline"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[clamp(30px,3.5vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] mb-8 sm:mb-10 text-left"
        >
          {aboutHerr.headline}
        </motion.h2>

        {/* Editorial Text Container (SEO Preservation: All 5 paragraphs remain permanently in DOM) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: "easeOut" }}
          className="w-full relative"
        >
          <div
            ref={contentRef}
            id="about-content"
            className={`w-full overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              shouldReduceMotion ? "transition-none" : ""
            }`}
            style={{
              // Paragraph 1 is visible by default (~150px); full 5 paragraphs when expanded (~1800px)
              maxHeight: isExpanded ? "1800px" : "150px",
            }}
          >
            <div className="flex flex-col gap-[1.25em] text-left text-[16px] sm:text-[17px] font-light text-warm-white/70 leading-[1.7]">
              {aboutHerr.paragraphs.map((para, index) => (
                <p key={index} className="m-0">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Soft Gradient Fade to Ink over the bottom of the visible section when collapsed */}
          {!isExpanded && (
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink via-ink/90 to-transparent pointer-events-none"
            />
          )}
        </motion.div>

        {/* Expand / Collapse Toggle Button (Left-aligned with comfortable vertical space) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.16 }}
          className="mt-4 sm:mt-6 flex justify-start"
        >
          <button
            type="button"
            onClick={toggleExpand}
            aria-expanded={isExpanded}
            aria-controls="about-content"
            className="min-h-[44px] inline-flex items-center gap-2 px-0 py-2 text-[14px] font-medium text-platinum hover:text-warm-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-white/40 rounded-md"
          >
            <span>{isExpanded ? "Show less" : "Continue reading"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-platinum transition-transform duration-200" />
            ) : (
              <ChevronDown className="w-4 h-4 text-platinum transition-transform duration-200" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
