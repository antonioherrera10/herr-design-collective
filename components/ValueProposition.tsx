"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CONTENT } from "@/lib/content";
import { PillarGraphic } from "@/components/PillarGraphic";

interface PillarMeta {
  colorHex: string;
  colorRgb: string;
  label: string;
  facetId: string;
}

const PILLAR_METAS: PillarMeta[] = [
  {
    colorHex: "#C16170",
    colorRgb: "193, 97, 112",
    label: "Identity & Vision",
    facetId: "identity",
  },
  {
    colorHex: "#A98AC4",
    colorRgb: "169, 138, 196",
    label: "Relationships & Empathy",
    facetId: "relationships",
  },
  {
    colorHex: "#E0BB52",
    colorRgb: "224, 187, 82",
    label: "Strategy & Core Axis",
    facetId: "strategy",
  },
  {
    colorHex: "#8FB694",
    colorRgb: "143, 182, 148",
    label: "Spatial Execution",
    facetId: "execution",
  },
  {
    colorHex: "#7B9AC4",
    colorRgb: "123, 154, 196",
    label: "Leadership & Radiance",
    facetId: "positivity",
  },
];

export function ValueProposition() {
  const { valueProposition } = CONTENT;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeMeta =
    hoveredIndex !== null ? PILLAR_METAS[hoveredIndex] : null;

  return (
    <section
      id="method-intro"
      aria-labelledby="value-prop-headline"
      className="w-full bg-ink py-24 sm:py-28 md:py-32 px-6 sm:px-8 relative overflow-hidden"
    >
      {/* Subtle Background Glow behind Section */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px] transition-colors duration-700"
        style={{
          backgroundColor: activeMeta ? activeMeta.colorHex : "rgba(123, 154, 196, 0.15)",
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 sm:gap-20 relative z-10">
        {/* Header Block Centred */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* H2 Headline: Display Scale clamp(32px, 4vw, 48px), DM Sans 600, warm-white, sentence case */}
          <h2
            id="value-prop-headline"
            className="text-[clamp(32px,4vw,48px)] font-semibold text-warm-white tracking-tight leading-[1.14] max-w-[32ch] text-center"
          >
            {valueProposition.headline}
          </h2>

          {/* Subheadline: DM Sans 300, 18-20px, warm-white 75%, max-width ~55ch */}
          <p className="mt-6 text-[18px] sm:text-[19px] md:text-[20px] font-light text-warm-white/75 leading-relaxed max-w-[55ch] text-center">
            {valueProposition.subheadline}
          </p>
        </motion.div>

        {/* Five Pillars Container */}
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-4">
          {valueProposition.pillars.map((pillar, index) => {
            const indexFormatted = `0${index + 1}`;
            const meta = PILLAR_METAS[index];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={pillar.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                tabIndex={0}
                style={{
                  backgroundColor: isHovered
                    ? `rgba(${meta.colorRgb}, 0.08)`
                    : "rgba(26, 24, 21, 0.45)",
                  borderColor: isHovered
                    ? `rgba(${meta.colorRgb}, 0.42)`
                    : "rgba(242, 239, 233, 0.07)",
                  boxShadow: isHovered
                    ? `0 14px 36px -8px rgba(${meta.colorRgb}, 0.18)`
                    : "none",
                }}
                className="group relative rounded-2xl border backdrop-blur-md transition-all duration-300 p-6 sm:p-7 md:p-8 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/40 overflow-hidden"
              >
                {/* Subtle Colored Glass Sheen Gradient on Hover */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, rgba(${meta.colorRgb}, 0.14) 0%, rgba(${meta.colorRgb}, 0.02) 60%, transparent 100%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Side-by-Side Split: Graphic on the Left, Details on the Right */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                  {/* Left Column: Interactive Abstract Graphic */}
                  <div className="shrink-0">
                    <PillarGraphic
                      index={index}
                      isHovered={isHovered}
                      meta={meta}
                      shouldReduceMotion={shouldReduceMotion}
                    />
                  </div>

                  {/* Right Column: Information & Text */}
                  <div className="flex-1 flex flex-col gap-3 min-w-0">
                    {/* Top Row: Index + Micro-Dash Stripe + Abstract Color Glass Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Expandable Micro-Dash */}
                        <span
                          className="h-[2.5px] rounded-full transition-all duration-300"
                          style={{
                            width: isHovered ? "28px" : "18px",
                            backgroundColor: meta.colorHex,
                          }}
                          aria-hidden="true"
                        />
                        <span className="text-[13px] font-normal text-platinum tabular-nums tracking-wider uppercase group-hover:text-warm-white transition-colors duration-200">
                          {indexFormatted}
                        </span>
                      </div>

                      {/* Abstract Color Glass Badge that lights up on hover */}
                      <div
                        className="flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase transition-all duration-300"
                        style={{
                          backgroundColor: isHovered
                            ? `rgba(${meta.colorRgb}, 0.2)`
                            : "rgba(242, 239, 233, 0.03)",
                          color: isHovered ? meta.colorHex : "#9E9A90",
                          border: `1px solid ${
                            isHovered
                              ? `rgba(${meta.colorRgb}, 0.45)`
                              : "rgba(242, 239, 233, 0.06)"
                          }`,
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className="w-3 h-3"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <polygon points="8,1 15,6 12,15 4,15 1,6" opacity={isHovered ? 0.9 : 0.5} />
                        </svg>
                        <span>{meta.label}</span>
                      </div>
                    </div>

                    {/* Middle Row: Title & Tagline */}
                    <div>
                      <h3 className="text-[20px] sm:text-[21px] md:text-[22px] font-medium text-warm-white tracking-tight group-hover:text-white transition-colors duration-200">
                        {pillar.name}
                      </h3>
                      <p className="mt-1 text-[14.5px] sm:text-[15px] font-normal italic text-stone-custom tracking-normal">
                        {pillar.tagline}
                      </p>
                    </div>

                    {/* Bottom Row: Description */}
                    <p className="text-[14.5px] sm:text-[15.5px] font-light text-warm-white/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
