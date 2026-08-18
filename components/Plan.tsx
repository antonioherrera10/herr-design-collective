"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";

export function Plan() {
  const { plan } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="plan"
      aria-labelledby="plan-headline"
      className="w-full bg-ink text-warm-white py-24 sm:py-28 md:py-32 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        {/* Header Block: Centered Display Headline & Subheadline */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-[55ch] mb-16 sm:mb-20 md:mb-24"
        >
          <h2
            id="plan-headline"
            className="text-[clamp(30px,3.5vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] mb-4 sm:mb-5"
          >
            {plan.headline}
          </h2>
          <p className="text-[17px] sm:text-[18px] md:text-[19px] font-light text-warm-white/75 leading-relaxed">
            {plan.subheadline}
          </p>
        </motion.div>

        {/* The Three Steps: Open Layout with Horizontal Connector Line on Desktop */}
        <div className="w-full relative mb-16 sm:mb-20 md:mb-24">
          {/* Desktop Horizontal Connector Line behind numerals */}
          <div
            aria-hidden="true"
            className="hidden min-[900px]:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-warm-white/[0.08] z-0"
          />

          <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-12 min-[900px]:gap-10 relative z-10">
            {plan.steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : idx * 0.12,
                  ease: "easeOut",
                }}
                className="flex flex-col items-start text-left"
              >
                {/* Large Step Numeral: DM Sans 300, clamp(40px, 5vw, 64px), platinum 40%, tabular-nums */}
                <div className="relative inline-block mb-4 sm:mb-6 pr-4 bg-ink">
                  <span className="text-[clamp(40px,5vw,64px)] font-light text-platinum/40 tabular-nums leading-none select-none">
                    {idx + 1}
                  </span>
                </div>

                {/* Step Title: DM Sans 500, 19-21px, warm-white */}
                <h3 className="text-[19px] sm:text-[20px] md:text-[21px] font-medium text-warm-white leading-snug tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Step Description: DM Sans 300/400, 15-16px, warm-white 70%, max-w ~34ch */}
                <p className="text-[15px] sm:text-[16px] font-light text-warm-white/70 leading-relaxed max-w-[34ch]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Centered Filled Primary CTA Button */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.55,
            delay: shouldReduceMotion ? 0 : 0.36,
            ease: "easeOut",
          }}
          className="flex justify-center"
        >
          <a
            href={plan.cta.href}
            className="min-h-[44px] inline-flex items-center justify-center gap-2.5 bg-warm-white hover:bg-white text-ink font-medium text-xs uppercase tracking-[0.18em] px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{plan.cta.label}</span>
            <ArrowUpRight className="w-4 h-4 text-ink" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
