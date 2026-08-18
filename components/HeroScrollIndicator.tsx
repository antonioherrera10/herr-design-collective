"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function HeroScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = () => {
    const nextSection = document.getElementById("trusted-by") || document.getElementById("stakes");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      className="mt-14 sm:mt-16 flex flex-col items-center justify-center select-none"
    >
      <button
        onClick={handleScroll}
        aria-label="Scroll down to explore"
        className="group relative flex flex-col items-center gap-2 p-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-warm-white/40 cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        {/* Subtle glowing halo on hover */}
        <div
          className="w-10 h-10 rounded-full border border-warm-white/15 bg-warm-white/[0.03] backdrop-blur-sm flex items-center justify-center group-hover:border-warm-white/40 group-hover:bg-warm-white/[0.08] transition-all duration-300 shadow-sm"
          style={{
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
          }}
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 4, 0],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-4 h-4 text-warm-white/70 group-hover:text-warm-white transition-colors duration-200" />
          </motion.div>
        </div>

        {/* Micro-label */}
        <span className="text-[10px] uppercase tracking-[0.25em] text-stone-custom group-hover:text-warm-white/90 transition-colors duration-200 font-medium">
          Explore
        </span>
      </button>
    </motion.div>
  );
}
