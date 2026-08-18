"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { CONTENT } from "@/lib/content";

export function Empathy() {
  const { empathy } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Empathy and perspective"
      className="w-full bg-surface-custom border-y border-warm-white/5 relative overflow-hidden"
    >
      {/* 1. Edge-to-Edge Full-Bleed Image at the Top */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] overflow-hidden"
      >
        <Image
          src="https://res.cloudinary.com/df6nnksd2/image/upload/v1787012238/empathy-transformation.jpg"
          alt="Empathy in transformation"
          fill
          priority={false}
          referrerPolicy="no-referrer"
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Subtle Gradient Overlays for Atmospheric Cohesion & Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-surface-custom/90 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none"
        />

        {/* Centered Headline & Subline Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold sm:font-bold text-warm-white tracking-tight leading-tight max-w-2xl drop-shadow-lg">
            Build what resonates with your people.
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-base sm:text-lg md:text-xl font-light text-warm-white/85 tracking-normal leading-relaxed max-w-lg drop-shadow">
            Start with the man in the mirror.
          </p>
        </div>
      </motion.div>

      {/* 2. Text Content: Statement then Quote */}
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-24 md:py-28">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Statement Block */}
          <div className="w-full max-w-[65ch] mx-auto text-left">
            <p className="text-[17px] sm:text-[19px] font-light text-warm-white/75 leading-relaxed">
              {empathy.statement}
            </p>
          </div>

          {/* Quote Block positioned after the paragraph, in one line */}
          <div className="mt-12 sm:mt-14 w-full flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
            <blockquote className="text-[clamp(18px,2.2vw,24px)] font-normal italic text-warm-white tracking-tight leading-snug whitespace-normal sm:whitespace-nowrap">
              “{empathy.quote}”
            </blockquote>
            <cite className="text-sm font-normal text-stone-custom not-italic tracking-normal whitespace-nowrap">
              — {empathy.attribution}
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
