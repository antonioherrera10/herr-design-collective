"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { CONTENT } from "@/lib/content";

export function ProofStrip() {
  const { proofStrip } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Proof and transition"
      className="w-full bg-ink py-20 sm:py-22 md:py-24 px-6 sm:px-8"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-8 sm:gap-10"
        >
          {/* Body paragraph: DM Sans 300, 19-21px, warm-white 85%, max-width ~55ch */}
          <p className="text-[19px] sm:text-[20px] md:text-[21px] font-light text-warm-white/85 leading-relaxed max-w-[55ch] text-center">
            {proofStrip.body}
          </p>

          {/* Transition line and drifting chevron */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-normal italic text-[15px] sm:text-[16px] text-platinum tracking-normal">
              {proofStrip.transition}
            </span>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center pt-0.5 select-none"
              aria-hidden="true"
            >
              <ChevronDown className="w-4 h-4 text-platinum/60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
