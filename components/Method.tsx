"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "motion/react";
import { CONTENT, MethodStep } from "@/lib/content";

function StepItem({
  step,
  index,
  total,
  shouldReduceMotion,
}: {
  step: MethodStep;
  index: number;
  total: number;
  shouldReduceMotion: boolean | null;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });
  const [hoveredDimension, setHoveredDimension] = useState<number | null>(null);

  const isPrismStep = Boolean(step.dimensions && step.dimensions.length > 0);
  const isNodeActive = shouldReduceMotion || isInView;

  return (
    <motion.div
      ref={itemRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : 0.05,
        ease: "easeOut",
      }}
      className="relative pl-8 sm:pl-10 md:pl-12 group"
    >
      {/* Node on Spine (Centered at left-0 on mobile, left-3/left-4 on sm/md) */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center">
        {isPrismStep ? (
          /* PRISM Step Conic Ring Node */
          <div className="relative flex items-center justify-center">
            <div
              className="w-3.5 h-3.5 rounded-full transition-all duration-300 shadow-md"
              style={{
                background:
                  "conic-gradient(#C16170, #A98AC4, #E0BB52, #8FB694, #7B9AC4, #C16170)",
                opacity: isNodeActive ? 1 : 0.4,
                transform: isNodeActive ? "scale(1.2)" : "scale(0.9)",
              }}
            />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-surface-custom" />
          </div>
        ) : (
          /* Standard 8px Platinum Node */
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              isNodeActive
                ? "bg-warm-white scale-110 shadow-[0_0_8px_rgba(242,239,233,0.5)]"
                : "bg-platinum/40 scale-90"
            }`}
          />
        )}
      </div>

      {/* Content: Name, Description, PRISM Spectrum Moment */}
      <div className="flex flex-col items-start">
        {/* Name: DM Sans 500, 19-21px, warm-white with trailing period */}
        <h3 className="text-[19px] sm:text-[20px] md:text-[21px] font-medium text-warm-white tracking-tight leading-snug">
          {step.name}
        </h3>

        {/* Description: DM Sans 300/400, 16-17px, warm-white 70%, max-width ~58ch */}
        <p className="mt-2.5 text-[16px] sm:text-[17px] font-light text-warm-white/70 leading-relaxed max-w-[58ch]">
          {step.description}
        </p>

        {/* PRISM Spectrum Bar */}
        {isPrismStep && step.dimensions && (
          <div className="mt-6 w-full max-w-[320px] flex flex-col gap-2.5">
            {/* 5-segment Spectrum Bar (~240px wide, 4px tall) */}
            <div
              className="w-[240px] max-w-full h-1 flex rounded-full overflow-hidden p-0 gap-[2px] bg-ink/40"
              role="group"
              aria-label="PRISM Method five dimensions"
            >
              {step.dimensions.map((dim, dimIdx) => {
                const isHovered = hoveredDimension === dimIdx;
                return (
                  <button
                    key={dim.name}
                    type="button"
                    onMouseEnter={() => setHoveredDimension(dimIdx)}
                    onMouseLeave={() => setHoveredDimension(null)}
                    onFocus={() => setHoveredDimension(dimIdx)}
                    onBlur={() => setHoveredDimension(null)}
                    className="flex-1 h-full cursor-pointer focus:outline-none transition-all duration-200"
                    style={{
                      backgroundColor: dim.color,
                      transform: isHovered ? "scaleY(1.75)" : "scaleY(1)",
                      transformOrigin: "center",
                    }}
                    aria-label={`${dim.name} dimension`}
                  />
                );
              })}
            </div>

            {/* Dynamic Label beneath the bar (Desktop Hover / Focus) */}
            <div className="hidden sm:block min-h-[18px]">
              {hoveredDimension !== null && step.dimensions[hoveredDimension] ? (
                <motion.span
                  key={hoveredDimension}
                  initial={{ opacity: 0, y: -2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="text-[11px] font-normal tracking-[0.25em] uppercase block"
                  style={{ color: step.dimensions[hoveredDimension].color }}
                >
                  {step.dimensions[hoveredDimension].name}
                </motion.span>
              ) : (
                <span className="text-[11px] font-normal tracking-[0.25em] uppercase text-stone-custom block">
                  five dimensions
                </span>
              )}
            </div>

            {/* Static Dimensions list for Touch/Mobile screens */}
            <div className="sm:hidden flex flex-wrap gap-2 mt-1.5">
              {step.dimensions.map((dim) => (
                <span
                  key={dim.name}
                  className="text-[10px] uppercase tracking-[0.2em] font-medium px-2 py-0.5 rounded-full border border-warm-white/[0.08]"
                  style={{ color: dim.color }}
                >
                  {dim.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Method() {
  const { method } = CONTENT;
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the steps list for drawing the vertical spine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="method"
      aria-labelledby="method-headline"
      className="w-full bg-surface-custom border-t border-warm-white/[0.06] py-24 sm:py-28 md:py-32 px-6 sm:px-8 relative overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Header Block Centered: H2 Headline + Intro Subtitle */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* H2 Headline: clamp(30-44px), DM Sans 600, warm-white, sentence case, max-w ~26ch */}
          <h2
            id="method-headline"
            className="text-[clamp(30px,3.5vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] max-w-[26ch] text-center"
          >
            {method.headline}
          </h2>

          {/* Intro: DM Sans 300, 17-19px, warm-white 75%, max-w ~60ch */}
          <p className="mt-6 text-[17px] sm:text-[18px] md:text-[19px] font-light text-warm-white/75 leading-relaxed max-w-[60ch] text-center">
            {method.intro}
          </p>
        </motion.div>

        {/* Vertical Process with Spine (Indented cleanly from the left) */}
        <div ref={containerRef} className="relative w-full pl-3 sm:pl-6 md:pl-8">
          {/* Vertical Spine Line */}
          <div className="absolute left-3 sm:left-6 md:left-8 top-3 bottom-6 w-[1px] -translate-x-1/2 pointer-events-none">
            {/* Background 10% line */}
            <div className="w-full h-full bg-warm-white/10" />

            {/* Dynamic Scroll-Drawn Active Line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-warm-white/60 via-warm-white/40 to-warm-white/10 origin-top"
              style={{
                height: shouldReduceMotion ? "100%" : spineHeight,
              }}
            />
          </div>

          {/* Steps List (Spacing: 48-64px) */}
          <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
            {method.steps.map((step, index) => (
              <StepItem
                key={step.name}
                step={step}
                index={index}
                total={method.steps.length}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
