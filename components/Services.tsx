"use client";

import { motion, useReducedMotion } from "motion/react";
import { CONTENT } from "@/lib/content";

export function Services() {
  const { services } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-headline"
      className="w-full bg-ink py-24 sm:py-28 md:py-32 px-6 sm:px-8"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Centred Headline at Display Scale */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full flex flex-col items-center text-center mb-14 sm:mb-16 md:mb-20"
        >
          <h2
            id="services-headline"
            className="text-[clamp(30px,3.8vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] text-center"
          >
            {services.headline}
          </h2>
        </motion.div>

        {/* Three Cards Grid (3-column on desktop, stacks below 900px) */}
        <div className="w-full grid grid-cols-1 min-[900px]:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: "easeOut",
              }}
              className="group h-full flex flex-col justify-start bg-surface-custom border border-warm-white/[0.08] hover:border-warm-white/20 rounded-[16px] p-8 sm:p-9 md:p-10 transition-all duration-200 hover:bg-warm-white/[0.02]"
            >
              {/* Title: DM Sans 500, 20-22px, warm-white */}
              <h3 className="text-[20px] sm:text-[21px] md:text-[22px] font-medium text-warm-white tracking-tight">
                {group.title}
              </h3>

              {/* Audience Line: DM Sans 400 italic, 15px, platinum */}
              <p className="mt-2.5 sm:mt-3 mb-5 sm:mb-6 text-[15px] font-normal italic text-platinum leading-snug">
                {group.audience}
              </p>

              {/* Description: DM Sans 300/400, 15-16px, warm-white 70%, relaxed */}
              <p className="text-[15px] sm:text-[16px] font-light text-warm-white/70 leading-relaxed mt-auto">
                {group.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
