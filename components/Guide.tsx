"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";
import { InteractiveSpectrumStripe } from "@/components/InteractiveSpectrumStripe";

export function Guide() {
  const { guide } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  const portraitUrl = `https://res.cloudinary.com/df6nnksd2/image/upload/f_auto,q_auto,w_1000/${guide.portraitId}`;

  return (
    <section
      id="guide"
      aria-labelledby="guide-heading"
      className="w-full bg-ink py-24 sm:py-28 md:py-32 px-6 sm:px-8 relative overflow-hidden"
    >
      {/* Top Full-Width Horizontal PRISM Colour Stripe with Interactive Light & Draw-In */}
      <InteractiveSpectrumStripe />

      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col min-[900px]:grid min-[900px]:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Text Column (Desktop ~55% -> col-span-7, Mobile order 2) */}
          <div className="order-2 min-[900px]:order-1 min-[900px]:col-span-7 flex flex-col items-start min-[900px]:border-r min-[900px]:border-platinum/15 min-[900px]:pr-12 lg:min-[900px]:pr-16 w-full">
            {/* SubLabel */}
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-stone-custom mb-6 sm:mb-8">
              {guide.subLabel}
            </span>

            {/* Heading (H2 at Display Scale) */}
            <h2
              id="guide-heading"
              className="text-[clamp(28px,3.2vw,42px)] font-semibold text-warm-white tracking-tight leading-[1.14] max-w-[28ch] mb-6"
            >
              {guide.heading}
            </h2>

            {/* Body */}
            <p className="text-[17px] sm:text-[18px] md:text-[19px] font-light text-warm-white/75 leading-relaxed max-w-[48ch] mb-8 sm:mb-10">
              {guide.body}
            </p>

            {/* CTA Group: Primary + Secondary Text Link */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              <a
                href={guide.cta.href}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 border border-warm-white/25 hover:border-warm-white/60 hover:bg-warm-white/5 text-warm-white font-medium text-xs uppercase tracking-[0.16em] px-7 py-3 rounded-full transition-all duration-200"
              >
                <span>{guide.cta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-warm-white/80" />
              </a>

              {guide.secondaryCta && (
                <a
                  href={guide.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-stone-custom hover:text-warm-white font-normal text-xs uppercase tracking-[0.18em] transition-colors duration-200 group/linkedin underline decoration-stone-custom/40 hover:decoration-warm-white underline-offset-4"
                >
                  <span>{guide.secondaryCta.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-custom/70 group-hover/linkedin:text-warm-white group-hover/linkedin:translate-x-0.5 group-hover/linkedin:-translate-y-0.5 transition-all duration-200" />
                </a>
              )}
            </div>
          </div>

          {/* Portrait Column (Desktop ~45% -> col-span-5, Mobile order 1) */}
          <div className="order-1 min-[900px]:order-2 min-[900px]:col-span-5 w-full max-w-[360px] min-[900px]:max-w-none mx-auto flex justify-center">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl bg-surface-custom border border-warm-white/10">
              <Image
                src={portraitUrl}
                alt="Antonio Herrera"
                fill
                sizes="(max-width: 900px) 360px, 460px"
                className="object-cover"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
