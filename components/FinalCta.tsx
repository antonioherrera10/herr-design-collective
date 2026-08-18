"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";

export function FinalCta() {
  const { finalCta } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="final-cta-headline"
      className="w-full bg-surface-custom text-warm-white border-t border-warm-white/[0.06] py-32 sm:py-36 md:py-40 px-6 sm:px-8 relative overflow-hidden"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Five-Segment PRISM Spectrum Bar Echo (Static, 4px tall, ~140px wide, rounded) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-hidden="true"
          className="h-[4px] w-[140px] rounded-full overflow-hidden mb-8 sm:mb-10 flex"
        >
          <div className="h-full w-1/5 bg-[#C16170]" />
          <div className="h-full w-1/5 bg-[#A98AC4]" />
          <div className="h-full w-1/5 bg-[#E0BB52]" />
          <div className="h-full w-1/5 bg-[#8FB694]" />
          <div className="h-full w-1/5 bg-[#7B9AC4]" />
        </motion.div>

        {/* Display Headline (H2, Largest section scale clamp 34-56px, max-w ~18ch) */}
        <motion.h2
          id="final-cta-headline"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: "easeOut" }}
          className="text-[clamp(34px,5vw,56px)] font-semibold text-warm-white tracking-tight leading-[1.12] max-w-[18ch] mb-6 sm:mb-8"
        >
          {finalCta.headline}
        </motion.h2>

        {/* Body Text (DM Sans 300, 18-20px, warm-white 75%, max-w ~48ch) */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.16, ease: "easeOut" }}
          className="text-[18px] sm:text-[19px] md:text-[20px] font-light text-warm-white/75 leading-relaxed max-w-[48ch] mb-10 sm:mb-12"
        >
          {finalCta.body}
        </motion.p>

        {/* Filled Primary CTA Button (48px min height, warm-white bg, ink text) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.24, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href={finalCta.cta.href}
            className="min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-warm-white hover:bg-white text-ink font-semibold text-xs uppercase tracking-[0.18em] px-9 sm:px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{finalCta.cta.label}</span>
            <ArrowUpRight className="w-4 h-4 text-ink" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
