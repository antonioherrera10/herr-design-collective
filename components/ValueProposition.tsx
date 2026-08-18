"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CONTENT } from "@/lib/content";

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
            className="text-[clamp(32px,4vw,48px)] font-semibold text-warm-white tracking-tight leading-[1.14] max-w-[26ch] text-center"
          >
            {valueProposition.headline}
          </h2>

          {/* Subheadline: DM Sans 300, 18-20px, warm-white 75%, max-width ~55ch */}
          <p className="mt-6 text-[18px] sm:text-[19px] md:text-[20px] font-light text-warm-white/75 leading-relaxed max-w-[55ch] text-center">
            {valueProposition.subheadline}
          </p>
        </motion.div>

        {/* Split Screen Grid: Option A (Human Architecture Graphic + 5 Pillars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (lg:col-span-5): Sticky Abstract Human Architecture Graphic */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 w-full flex flex-col items-center">
            <div className="w-full relative bg-surface-custom/70 backdrop-blur-md border border-warm-white/[0.09] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between overflow-hidden shadow-2xl transition-all duration-500">
              {/* Dynamic Aura Glow in Graphic Frame */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
                style={{
                  background: activeMeta
                    ? `radial-gradient(circle at 50% 45%, rgba(${activeMeta.colorRgb}, 0.22) 0%, transparent 70%)`
                    : `radial-gradient(circle at 50% 45%, rgba(242, 239, 233, 0.04) 0%, transparent 65%)`,
                }}
                aria-hidden="true"
              />

              {/* Graphic Header Label */}
              <div className="w-full flex items-center justify-between border-b border-warm-white/[0.08] pb-3 mb-4 text-[11px] font-medium tracking-[0.2em] uppercase text-platinum">
                <span>Human Architecture</span>
                <span
                  className="transition-colors duration-300"
                  style={{ color: activeMeta ? activeMeta.colorHex : "#E7E4DF" }}
                >
                  {activeMeta ? activeMeta.label : "5 Core Dimensions"}
                </span>
              </div>

              {/* Architectural Faceted Human Silhouette SVG */}
              <div className="w-full max-w-[340px] aspect-[4/5] relative flex items-center justify-center py-2">
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full overflow-visible select-none pointer-events-none"
                  aria-label="Abstract Faceted Human Architecture Silhouette"
                >
                  <defs>
                    {/* Linear and Radial Gradients for Glass Facets */}
                    <linearGradient id="roseFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C16170" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#C16170" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="lilacFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A98AC4" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#A98AC4" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="goldFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E0BB52" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#E0BB52" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="sageFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8FB694" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#8FB694" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="blueFacet" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7B9AC4" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0.2" />
                    </linearGradient>

                    {/* Filter for glowing nodes */}
                    <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Architectural Grid & Proportion Harmonics */}
                  <g opacity="0.18" stroke="#F2EFE9" strokeWidth="0.75" strokeDasharray="2 3">
                    {/* Vertical Central Spine Axis */}
                    <line x1="200" y1="20" x2="200" y2="480" />
                    {/* Horizontal Alignment Guides */}
                    <line x1="60" y1="80" x2="340" y2="80" />
                    <line x1="50" y1="160" x2="350" y2="160" />
                    <line x1="70" y1="240" x2="330" y2="240" />
                    <line x1="90" y1="320" x2="310" y2="320" />
                    <line x1="100" y1="410" x2="300" y2="410" />

                    {/* Concentric Vitruvian Alignment Circles */}
                    <circle cx="200" cy="240" r="180" fill="none" strokeWidth="0.5" />
                    <circle cx="200" cy="240" r="120" fill="none" strokeWidth="0.5" />
                    <circle cx="200" cy="80" r="50" fill="none" strokeWidth="0.5" />
                  </g>

                  {/* ========================================================
                      FACETED HUMAN ARCHITECTURE BODY LAYERS
                     ======================================================== */}

                  {/* 1. LAYER 1: HEAD & VISION (Rose #C16170 - Connecting the Dots) */}
                  <g
                    className="transition-all duration-500 ease-out cursor-pointer"
                    opacity={hoveredIndex === null ? 0.75 : hoveredIndex === 0 ? 1 : 0.25}
                  >
                    {/* Faceted Cranium Planes */}
                    <polygon
                      points="200,35 230,55 200,80 170,55"
                      fill={hoveredIndex === 0 ? "url(#roseFacet)" : "rgba(193, 97, 112, 0.2)"}
                      stroke="#C16170"
                      strokeWidth={hoveredIndex === 0 ? 1.5 : 0.8}
                    />
                    <polygon
                      points="170,55 200,80 180,105 155,75"
                      fill="rgba(193, 97, 112, 0.15)"
                      stroke="#C16170"
                      strokeWidth="0.75"
                    />
                    <polygon
                      points="230,55 200,80 220,105 245,75"
                      fill="rgba(193, 97, 112, 0.25)"
                      stroke="#C16170"
                      strokeWidth="0.75"
                    />
                    <polygon
                      points="180,105 200,80 220,105 200,120"
                      fill="rgba(193, 97, 112, 0.3)"
                      stroke="#C16170"
                      strokeWidth="0.75"
                    />

                    {/* Eye/Vision Vector Ray */}
                    <line
                      x1="160"
                      y1="75"
                      x2="240"
                      y2="75"
                      stroke="#C16170"
                      strokeWidth={hoveredIndex === 0 ? 2 : 1}
                    />
                    {/* Focal Node */}
                    <circle
                      cx="200"
                      cy="80"
                      r={hoveredIndex === 0 ? 5.5 : 3.5}
                      fill="#C16170"
                      filter={hoveredIndex === 0 ? "url(#nodeGlow)" : undefined}
                    />
                    {hoveredIndex === 0 && (
                      <circle
                        cx="200"
                        cy="80"
                        r="14"
                        fill="none"
                        stroke="#C16170"
                        strokeWidth="1"
                        strokeDasharray="2 3"
                        className="animate-spin"
                        style={{ transformOrigin: "200px 80px" }}
                      />
                    )}
                  </g>

                  {/* 2. LAYER 2: CHEST & HEART (Lilac #A98AC4 - Individual Solutions / Empathy) */}
                  <g
                    className="transition-all duration-500 ease-out"
                    opacity={hoveredIndex === null ? 0.75 : hoveredIndex === 1 ? 1 : 0.25}
                  >
                    {/* Neck / Cervical Facets */}
                    <polygon
                      points="200,120 185,140 215,140"
                      fill="rgba(169, 138, 196, 0.2)"
                      stroke="#A98AC4"
                      strokeWidth="0.75"
                    />
                    {/* Clavicle & Shoulder Prisms */}
                    <polygon
                      points="200,140 135,160 170,195 200,165"
                      fill="rgba(169, 138, 196, 0.18)"
                      stroke="#A98AC4"
                      strokeWidth={hoveredIndex === 1 ? 1.5 : 0.8}
                    />
                    <polygon
                      points="200,140 265,160 230,195 200,165"
                      fill="rgba(169, 138, 196, 0.28)"
                      stroke="#A98AC4"
                      strokeWidth={hoveredIndex === 1 ? 1.5 : 0.8}
                    />
                    {/* Ribcage / Sternum Glass Facets */}
                    <polygon
                      points="200,165 170,195 200,225 230,195"
                      fill={hoveredIndex === 1 ? "url(#lilacFacet)" : "rgba(169, 138, 196, 0.25)"}
                      stroke="#A98AC4"
                      strokeWidth={hoveredIndex === 1 ? 1.8 : 0.9}
                    />
                    <polygon
                      points="135,160 100,210 150,230 170,195"
                      fill="rgba(169, 138, 196, 0.12)"
                      stroke="#A98AC4"
                      strokeWidth="0.75"
                    />
                    <polygon
                      points="265,160 300,210 250,230 230,195"
                      fill="rgba(169, 138, 196, 0.16)"
                      stroke="#A98AC4"
                      strokeWidth="0.75"
                    />

                    {/* Heart Center Node */}
                    <circle
                      cx="200"
                      cy="195"
                      r={hoveredIndex === 1 ? 6 : 4}
                      fill="#A98AC4"
                      filter={hoveredIndex === 1 ? "url(#nodeGlow)" : undefined}
                    />
                    {hoveredIndex === 1 && (
                      <circle
                        cx="200"
                        cy="195"
                        r="18"
                        fill="none"
                        stroke="#A98AC4"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                        className="animate-spin"
                        style={{ transformOrigin: "200px 195px" }}
                      />
                    )}
                  </g>

                  {/* 3. LAYER 3: CORE & STRATEGY (Gold #E0BB52 - Design Strategy) */}
                  <g
                    className="transition-all duration-500 ease-out"
                    opacity={hoveredIndex === null ? 0.75 : hoveredIndex === 2 ? 1 : 0.25}
                  >
                    {/* Solar Plexus Diamond Matrix */}
                    <polygon
                      points="200,225 160,265 200,300 240,265"
                      fill={hoveredIndex === 2 ? "url(#goldFacet)" : "rgba(224, 187, 82, 0.22)"}
                      stroke="#E0BB52"
                      strokeWidth={hoveredIndex === 2 ? 1.8 : 0.9}
                    />
                    {/* Lateral Abdominal Shards */}
                    <polygon
                      points="170,195 150,230 160,265 200,225"
                      fill="rgba(224, 187, 82, 0.15)"
                      stroke="#E0BB52"
                      strokeWidth="0.75"
                    />
                    <polygon
                      points="230,195 250,230 240,265 200,225"
                      fill="rgba(224, 187, 82, 0.2)"
                      stroke="#E0BB52"
                      strokeWidth="0.75"
                    />
                    <polygon
                      points="160,265 145,310 200,325 200,300"
                      fill="rgba(224, 187, 82, 0.18)"
                      stroke="#E0BB52"
                      strokeWidth="0.75"
                    />
                    <polygon
                      points="240,265 255,310 200,325 200,300"
                      fill="rgba(224, 187, 82, 0.25)"
                      stroke="#E0BB52"
                      strokeWidth="0.75"
                    />

                    {/* Strategic Core Node */}
                    <circle
                      cx="200"
                      cy="265"
                      r={hoveredIndex === 2 ? 6 : 4}
                      fill="#E0BB52"
                      filter={hoveredIndex === 2 ? "url(#nodeGlow)" : undefined}
                    />
                    {hoveredIndex === 2 && (
                      <circle
                        cx="200"
                        cy="265"
                        r="20"
                        fill="none"
                        stroke="#E0BB52"
                        strokeWidth="1"
                        strokeDasharray="4 3"
                        className="animate-spin"
                        style={{ transformOrigin: "200px 265px" }}
                      />
                    )}
                  </g>

                  {/* 4. LAYER 4: PELVIS & SPATIAL EXECUTION (Sage #8FB694 - Creative Execution) */}
                  <g
                    className="transition-all duration-500 ease-out"
                    opacity={hoveredIndex === null ? 0.75 : hoveredIndex === 3 ? 1 : 0.25}
                  >
                    {/* Pelvic Facet Keystones */}
                    <polygon
                      points="200,325 145,310 130,370 200,380"
                      fill="rgba(143, 182, 148, 0.16)"
                      stroke="#8FB694"
                      strokeWidth="0.75"
                    />
                    <polygon
                      points="200,325 255,310 270,370 200,380"
                      fill="rgba(143, 182, 148, 0.25)"
                      stroke="#8FB694"
                      strokeWidth="0.75"
                    />
                    {/* Lower Structural Triangle */}
                    <polygon
                      points="200,380 140,460 200,440"
                      fill="rgba(143, 182, 148, 0.18)"
                      stroke="#8FB694"
                      strokeWidth={hoveredIndex === 3 ? 1.5 : 0.75}
                    />
                    <polygon
                      points="200,380 260,460 200,440"
                      fill="rgba(143, 182, 148, 0.22)"
                      stroke="#8FB694"
                      strokeWidth={hoveredIndex === 3 ? 1.5 : 0.75}
                    />
                    {/* Upper Arm Spatial Vectors */}
                    <line
                      x1="100"
                      y1="210"
                      x2="70"
                      y2="300"
                      stroke="#8FB694"
                      strokeWidth={hoveredIndex === 3 ? 1.5 : 0.8}
                    />
                    <line
                      x1="300"
                      y1="210"
                      x2="330"
                      y2="300"
                      stroke="#8FB694"
                      strokeWidth={hoveredIndex === 3 ? 1.5 : 0.8}
                    />

                    {/* Spatial Nodes */}
                    <circle
                      cx="200"
                      cy="380"
                      r={hoveredIndex === 3 ? 6 : 4}
                      fill="#8FB694"
                      filter={hoveredIndex === 3 ? "url(#nodeGlow)" : undefined}
                    />
                    <circle cx="130" cy="370" r="3" fill="#8FB694" opacity="0.7" />
                    <circle cx="270" cy="370" r="3" fill="#8FB694" opacity="0.7" />

                    {hoveredIndex === 3 && (
                      <circle
                        cx="200"
                        cy="380"
                        r="22"
                        fill="none"
                        stroke="#8FB694"
                        strokeWidth="1"
                        strokeDasharray="3 4"
                        className="animate-spin"
                        style={{ transformOrigin: "200px 380px" }}
                      />
                    )}
                  </g>

                  {/* 5. LAYER 5: ALIGNMENT & LEADERSHIP (Steel Blue #7B9AC4 - Positivity) */}
                  <g
                    className="transition-all duration-500 ease-out"
                    opacity={hoveredIndex === null ? 0.75 : hoveredIndex === 4 ? 1 : 0.25}
                  >
                    {/* Crown Radiance Arcs above Head */}
                    <path
                      d="M 130 50 A 90 90 0 0 1 270 50"
                      fill="none"
                      stroke="#7B9AC4"
                      strokeWidth={hoveredIndex === 4 ? 2 : 1}
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 150 30 A 70 70 0 0 1 250 30"
                      fill="none"
                      stroke="#7B9AC4"
                      strokeWidth={hoveredIndex === 4 ? 2.5 : 1}
                    />

                    {/* Full Height Radiant Spine Alignment */}
                    <line
                      x1="200"
                      y1="10"
                      x2="200"
                      y2="475"
                      stroke="#7B9AC4"
                      strokeWidth={hoveredIndex === 4 ? 2.5 : 1.2}
                      strokeDasharray={hoveredIndex === 4 ? "none" : "3 3"}
                    />

                    {/* Radiant Crown Apex Node */}
                    <circle
                      cx="200"
                      cy="20"
                      r={hoveredIndex === 4 ? 6 : 4}
                      fill="#7B9AC4"
                      filter={hoveredIndex === 4 ? "url(#nodeGlow)" : undefined}
                    />
                    {/* Grounding Base Node */}
                    <circle
                      cx="200"
                      cy="450"
                      r={hoveredIndex === 4 ? 5.5 : 3.5}
                      fill="#7B9AC4"
                      filter={hoveredIndex === 4 ? "url(#nodeGlow)" : undefined}
                    />

                    {hoveredIndex === 4 && (
                      <circle
                        cx="200"
                        cy="20"
                        r="16"
                        fill="none"
                        stroke="#7B9AC4"
                        strokeWidth="1"
                        strokeDasharray="2 3"
                        className="animate-spin"
                        style={{ transformOrigin: "200px 20px" }}
                      />
                    )}
                  </g>
                </svg>
              </div>

              {/* Status Bar / Caption */}
              <div className="w-full flex items-center justify-between border-t border-warm-white/[0.08] pt-3 mt-4 text-[12px] text-stone-custom">
                <span className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor: activeMeta ? activeMeta.colorHex : "#7B9AC4",
                    }}
                  />
                  <span>
                    {activeMeta ? `Facet: ${activeMeta.label}` : "Hover pillars to inspect architecture"}
                  </span>
                </span>
                <span className="font-mono text-[11px] text-platinum/60">
                  {activeMeta ? `0${hoveredIndex! + 1} / 05` : "05 Dimensions"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-7): Five Pillars with Interactive Glass Effect */}
          <div className="lg:col-span-7 w-full flex flex-col gap-3">
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
                      : "rgba(26, 24, 21, 0.4)",
                    borderColor: isHovered
                      ? `rgba(${meta.colorRgb}, 0.38)`
                      : "rgba(242, 239, 233, 0.07)",
                    boxShadow: isHovered
                      ? `0 12px 32px -8px rgba(${meta.colorRgb}, 0.16)`
                      : "none",
                  }}
                  className="group relative rounded-xl border backdrop-blur-md transition-all duration-300 p-6 sm:p-7 md:p-8 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-warm-white/40 overflow-hidden"
                >
                  {/* Subtle Colored Glass Sheen Gradient on Hover */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, rgba(${meta.colorRgb}, 0.14) 0%, rgba(${meta.colorRgb}, 0.02) 60%, transparent 100%)`,
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex flex-col gap-4">
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
                        {/* Tiny SVG Abstract Facet Glyph */}
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
                      <p className="mt-1 text-[15px] font-normal italic text-stone-custom tracking-normal">
                        {pillar.tagline}
                      </p>
                    </div>

                    {/* Bottom Row: Description */}
                    <p className="text-[15px] sm:text-[16px] font-light text-warm-white/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
