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

        {/* Subtle Gradient Overlays for Atmospheric Cohesion */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-surface-custom/90 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none"
        />
      </motion.div>

      {/* 2. Text Content: Quote & Statement */}
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-24 md:py-28">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Quote Block as Centerpiece */}
          <div className="flex flex-col items-center text-center max-w-[32ch]">
            <blockquote className="text-[clamp(24px,3vw,34px)] font-normal italic text-warm-white tracking-tight leading-[1.25]">
              “{empathy.quote}”
            </blockquote>
            <cite className="mt-3 sm:mt-4 text-sm font-normal text-stone-custom not-italic tracking-normal">
              — {empathy.attribution}
            </cite>
          </div>

          {/* Statement Block: Our voice answering the quote */}
          <div className="mt-12 sm:mt-14 md:mt-16 w-full max-w-[62ch] mx-auto text-left">
            <p className="text-[17px] sm:text-[19px] font-light text-warm-white/75 leading-relaxed">
              {empathy.statement}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
