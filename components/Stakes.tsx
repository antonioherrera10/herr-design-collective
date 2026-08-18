"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CONTENT } from "@/lib/content";
import { StakesArchitecturalGraphic } from "@/components/StakesArchitecturalGraphic";

export function Stakes() {
  const { stakes } = CONTENT;
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="stakes"
      aria-labelledby="stakes-headline"
      className="relative overflow-hidden w-full bg-surface-custom border-y border-warm-white/5 py-24 sm:py-28 md:py-32 px-6 sm:px-8"
    >
      {/* Content Container: 2-Column Grid on Desktop */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Headline & Body copy */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6 sm:gap-8"
        >
          {/* Subtle Category Identifier Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-warm-white/[0.04] border border-warm-white/10 w-fit">
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-platinum">
              The Stakes · Transformation Layer
            </span>
          </div>

          {/* Headline: Display scale clamp(32px, 4.5vw, 52px), DM Sans 600, warm-white */}
          <h2
            id="stakes-headline"
            className="text-[clamp(32px,4.2vw,50px)] font-semibold text-warm-white tracking-tight leading-[1.12]"
          >
            {stakes.headline}
          </h2>

          {/* Body: DM Sans 300/400, 17-19px, warm-white 75%, leading-relaxed */}
          <p className="text-[16px] sm:text-[18px] md:text-[19px] font-light text-warm-white/75 leading-relaxed max-w-[58ch]">
            {stakes.body}
          </p>
        </motion.div>

        {/* Right Column: Stratified Blueprint PRISM Architectural Schematic Graphic */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.15, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <StakesArchitecturalGraphic />
        </motion.div>
      </div>
    </section>
  );
}
