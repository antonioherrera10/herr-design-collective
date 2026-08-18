"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";

export function Services() {
  const { services } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-headline"
      className="w-full bg-ink py-24 sm:py-28 md:py-32 px-6 sm:px-8 border-t border-warm-white/5"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Main Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full flex flex-col items-center text-center mb-14 sm:mb-16 md:mb-20"
        >
          {services.sectionName && (
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-stone-custom mb-3 sm:mb-4">
              {services.sectionName}
            </span>
          )}
          <h2
            id="services-headline"
            className="text-[clamp(30px,3.8vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] text-center"
          >
            {services.headline}
          </h2>
        </motion.div>

        {/* Primary Services Grid (3-column on desktop, stacks below 900px) */}
        <div className="w-full grid grid-cols-1 min-[900px]:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-20 sm:mb-24 md:mb-28">
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

        {/* Individual Services Subsection */}
        {services.individualServices && (
          <div className="w-full pt-14 sm:pt-16 border-t border-warm-white/10 flex flex-col items-center">
            {/* Subsection Heading */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-center mb-12 sm:mb-14"
            >
              <h3 className="text-[clamp(24px,2.8vw,32px)] font-semibold text-warm-white tracking-tight">
                {services.individualServices.heading}
              </h3>
            </motion.div>

            {/* 3 Individual Service Cards */}
            <div className="w-full grid grid-cols-1 min-[900px]:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-14">
              {services.individualServices.items.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: shouldReduceMotion ? 0 : idx * 0.08,
                    ease: "easeOut",
                  }}
                  className="group h-full flex flex-col justify-start bg-surface-custom border border-warm-white/[0.08] hover:border-warm-white/20 rounded-[16px] p-8 sm:p-9 md:p-10 transition-all duration-200 hover:bg-warm-white/[0.02]"
                >
                  <h4 className="text-[19px] sm:text-[20px] md:text-[21px] font-medium text-warm-white tracking-tight mb-4">
                    {item.title}
                  </h4>
                  <p className="text-[15px] sm:text-[16px] font-light text-warm-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              <a
                href={services.individualServices.cta.href}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 border border-warm-white/25 hover:border-warm-white/60 hover:bg-warm-white/5 text-warm-white font-medium text-xs uppercase tracking-[0.16em] px-8 py-3.5 rounded-full transition-all duration-200"
              >
                <span>{services.individualServices.cta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-warm-white/80" />
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
