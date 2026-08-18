"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";

const STEP_COLORS = [
  {
    ring: "#C16170",
    bg: "rgba(193, 97, 112, 0.14)",
    glow: "rgba(193, 97, 112, 0.25)",
    activeBorder: "#C16170",
  },
  {
    ring: "#E0BB52",
    bg: "rgba(224, 187, 82, 0.14)",
    glow: "rgba(224, 187, 82, 0.25)",
    activeBorder: "#E0BB52",
  },
  {
    ring: "#8FB694",
    bg: "rgba(143, 182, 148, 0.14)",
    glow: "rgba(143, 182, 148, 0.25)",
    activeBorder: "#8FB694",
  },
];

export function Plan() {
  const { plan } = CONTENT;
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);

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
          className="flex flex-col items-center text-center max-w-[55ch] mb-12 sm:mb-16"
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

        {/* The Three Steps with Progress Bar on top of the cards */}
        <div className="w-full relative mb-16 sm:mb-20 md:mb-24">
          {/* Progress Bar between text above and the cards */}
          <div className="w-full max-w-4xl mx-auto mb-10 sm:mb-12 px-4 sm:px-6">
            <div className="relative w-full h-[3px] rounded-full bg-warm-white/[0.08] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#C16170] via-[#E0BB52] to-[#8FB694]"
                initial={false}
                animate={{
                  width:
                    activeStep === 0 ? "33.33%" : activeStep === 1 ? "66.66%" : "100%",
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              />
            </div>
            {/* Step numbers preview indicators on top */}
            <div className="flex justify-between items-center mt-2.5 px-1 text-[11px] font-medium tracking-[0.16em] uppercase text-warm-white/50">
              <span className={activeStep >= 0 ? "text-[#C16170] font-semibold" : ""}>01 — Connect</span>
              <span className={activeStep >= 1 ? "text-[#E0BB52] font-semibold" : ""}>02 — Shape</span>
              <span className={activeStep >= 2 ? "text-[#8FB694] font-semibold" : ""}>03 — Create</span>
            </div>
          </div>

          <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-8 min-[900px]:gap-8 relative z-10">
            {plan.steps.map((step, idx) => {
              const colors = STEP_COLORS[idx % STEP_COLORS.length];
              const isSelected = activeStep === idx;
              const isPast = activeStep > idx;

              return (
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
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-start text-left cursor-pointer p-5 sm:p-6 rounded-[20px] transition-all duration-300 ${
                    isSelected
                      ? "bg-warm-white/[0.04] border border-warm-white/20 shadow-xl backdrop-blur-xs"
                      : "bg-transparent border border-transparent hover:bg-warm-white/[0.02]"
                  }`}
                >
                  {/* Interactive Colour Circle with Step Numeral */}
                  <div className="relative inline-flex items-center justify-center mb-5">
                    {/* Pulsing ring on active */}
                    {isSelected && (
                      <motion.div
                        layoutId="activePlanRing"
                        className="absolute inset-[-6px] rounded-full border border-dashed opacity-60"
                        style={{ borderColor: colors.ring }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}

                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                      style={{
                        borderColor: isSelected || isPast ? colors.ring : "rgba(245, 243, 238, 0.16)",
                        backgroundColor: isSelected ? colors.bg : isPast ? "rgba(245, 243, 238, 0.04)" : "rgba(10, 10, 10, 0.8)",
                        boxShadow: isSelected ? `0 0 24px ${colors.glow}` : "none",
                      }}
                    >
                      <span
                        className="text-[20px] sm:text-[22px] font-semibold tabular-nums leading-none transition-colors duration-200"
                        style={{
                          color: isSelected || isPast ? colors.ring : "rgba(245, 243, 238, 0.5)",
                        }}
                      >
                        {idx + 1}
                      </span>
                    </div>

                    {/* Step indicator badge */}
                    <span className="sr-only">Step {idx + 1}</span>
                  </div>

                  {/* Step Title: DM Sans 500, 19-21px, warm-white */}
                  <h3
                    className={`text-[19px] sm:text-[20px] md:text-[21px] font-medium leading-snug tracking-tight mb-2.5 transition-colors duration-200 ${
                      isSelected ? "text-warm-white" : "text-warm-white/90"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[15px] sm:text-[16px] font-light text-warm-white/70 leading-relaxed max-w-[34ch]">
                    {step.description}
                  </p>

                  {/* Active Step Progress Pill indicator */}
                  <div className="mt-4 flex items-center gap-1.5 min-h-[18px]">
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-opacity duration-200 ${
                        isSelected ? "opacity-100" : "opacity-40"
                      }`}
                      style={{ color: colors.ring }}
                    >
                      {idx === 0 ? "Initial Contact" : idx === 1 ? "Custom Scope" : "Co-Creation"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
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
