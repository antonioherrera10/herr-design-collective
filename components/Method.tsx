"use client";

import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useReducedMotion,
} from "motion/react";
import { CONTENT, MethodStep } from "@/lib/content";
import { InteractiveSpectrumStripe } from "@/components/InteractiveSpectrumStripe";

// Step color spectrum mapping for the reading guide
const STEP_HUE_COLORS = [
  { color: "#C16170", glow: "rgba(193, 97, 112, 0.6)", label: "Step 1" }, // Rose / Identity
  { color: "#A98AC4", glow: "rgba(169, 138, 196, 0.6)", label: "Step 2" }, // Lilac / Relationships
  { color: "#E0BB52", glow: "rgba(224, 187, 82, 0.6)", label: "Step 3" }, // Amber / Work
  { color: "#8FB694", glow: "rgba(143, 182, 148, 0.6)", label: "Step 4" }, // Sage / Spaces
  { color: "#7B9AC4", glow: "rgba(123, 154, 196, 0.6)", label: "Step 5" }, // Slate Blue / Leadership
  { color: "#C16170", glow: "rgba(193, 97, 112, 0.6)", label: "Step 6" },
];

function StepItem({
  step,
  index,
  total,
  shouldReduceMotion,
}: {
  step: MethodStep;
  index: number;
  total: number;
  shouldReduceMotion: boolean | null;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, {
    once: false,
    margin: "-25% 0px -25% 0px",
  });
  const [hoveredDimension, setHoveredDimension] = useState<number | null>(null);
  const [isNodeHovered, setIsNodeHovered] = useState(false);

  const isPrismStep = Boolean(step.dimensions && step.dimensions.length > 0);
  const isNodeActive = shouldReduceMotion || isInView;
  
  // Pick hue color based on index
  const hue = STEP_HUE_COLORS[index % STEP_HUE_COLORS.length];

  const scrollToStep = () => {
    itemRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <motion.div
      ref={itemRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : 0.05,
        ease: "easeOut",
      }}
      className="relative pl-8 sm:pl-10 md:pl-12 group"
    >
      {/* Interactive Node on Spine */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center">
        <button
          type="button"
          onClick={scrollToStep}
          onMouseEnter={() => setIsNodeHovered(true)}
          onMouseLeave={() => setIsNodeHovered(false)}
          onFocus={() => setIsNodeHovered(true)}
          onBlur={() => setIsNodeHovered(false)}
          aria-label={`Jump to ${step.name}`}
          className="relative flex items-center justify-center p-2 -m-2 cursor-pointer focus:outline-none group/node"
        >
          {/* Subtle Ambient Pulse Ring when Active or Hovered */}
          {(isNodeActive || isNodeHovered) && (
            <span
              className="absolute w-5 h-5 rounded-full animate-ping opacity-30 pointer-events-none"
              style={{ backgroundColor: hue.color }}
            />
          )}

          {/* Core Interactive Hue Dot */}
          <span
            className="w-2.5 h-2.5 rounded-full transition-all duration-300 transform"
            style={{
              backgroundColor: isNodeActive || isNodeHovered ? hue.color : "rgba(235, 230, 224, 0.4)",
              transform: isNodeHovered
                ? "scale(1.5)"
                : isNodeActive
                ? "scale(1.2)"
                : "scale(0.9)",
              boxShadow:
                isNodeActive || isNodeHovered
                  ? `0 0 10px ${hue.glow}, 0 0 3px ${hue.color}`
                  : "none",
            }}
          />
        </button>
      </div>

      {/* Content: Name, Description, PRISM Spectrum Moment */}
      <div className="flex flex-col items-start">
        {/* Name: DM Sans 500, 19-21px, warm-white with trailing period */}
        <h3 className="text-[19px] sm:text-[20px] md:text-[21px] font-medium text-warm-white tracking-tight leading-snug">
          {step.name}
        </h3>

        {/* Description: DM Sans 300/400, 16-17px, warm-white 70%, max-width ~58ch */}
        <p className="mt-2.5 text-[16px] sm:text-[17px] font-light text-warm-white/70 leading-relaxed max-w-[58ch]">
          {step.description}
        </p>

        {/* Domain Badges (e.g. CliftonStrengths: Executing, Influencing, Relationship Building, Strategic Thinking) */}
        {step.domains && step.domains.length > 0 && (
          <ul className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
            {step.domains.map((domain) => (
              <li
                key={domain}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-medium text-warm-white/90 bg-warm-white/[0.04] hover:bg-warm-white/[0.08] hover:border-warm-white/25 transition-all duration-200 border border-warm-white/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-warm-white/50" aria-hidden="true" />
                <span>{domain}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Five Layers list if defined (e.g. KOMPATH Method) */}
        {step.layers && step.layers.length > 0 && (
          <ul className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
            {step.layers.map((layer) => (
              <li
                key={layer}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-medium text-warm-white bg-warm-white/[0.04] border border-warm-white/10 px-3 py-1 rounded-full"
              >
                {layer}
              </li>
            ))}
          </ul>
        )}

        {/* PRISM Dimensions Badges (Identity, Relationships, Work, Spaces, Leadership) */}
        {isPrismStep && step.dimensions && (
          <div className="mt-4 flex flex-col gap-3 w-full">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {step.dimensions.map((dim, dimIdx) => {
                const isHovered = hoveredDimension === dimIdx;
                return (
                  <li key={dim.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredDimension(dimIdx)}
                      onMouseLeave={() => setHoveredDimension(null)}
                      onFocus={() => setHoveredDimension(dimIdx)}
                      onBlur={() => setHoveredDimension(null)}
                      className={`inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-medium px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer focus:outline-none ${
                        isHovered
                          ? "bg-warm-white/10 border-warm-white/40 text-warm-white scale-[1.03]"
                          : "bg-warm-white/[0.04] border-warm-white/10 text-warm-white hover:border-warm-white/25"
                      }`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full transition-transform duration-200"
                        style={{
                          backgroundColor: dim.color,
                          transform: isHovered ? "scale(1.3)" : "scale(1)",
                        }}
                        aria-hidden="true"
                      />
                      <span>{dim.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Method() {
  const { method } = CONTENT;
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the steps list for drawing the vertical spine
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 60%"],
  });

  const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="method"
      aria-labelledby="method-headline"
      className="w-full bg-surface-custom py-24 sm:py-28 md:py-32 px-6 sm:px-8 relative overflow-hidden"
    >
      {/* Top Full-Width Horizontal PRISM Colour Stripe with Interactive Light & Draw-In */}
      <InteractiveSpectrumStripe />

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Header Block Centered: Section Title Eyebrow + Visual Accent + H2 Headline + Intro Subtitle */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Visual Accent + Section Title */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-warm-white/[0.04] border border-warm-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-[#C16170] via-[#E0BB52] to-[#8FB694] animate-pulse" />
            <span className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.22em] text-warm-white/90">
              Our Method
            </span>
          </div>

          {/* H2 Headline: clamp(30-44px), DM Sans 600, warm-white, sentence case, max-w ~26ch */}
          <h2
            id="method-headline"
            className="text-[clamp(30px,3.5vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] max-w-[26ch] text-center"
          >
            {method.headline}
          </h2>

          {/* Intro: DM Sans 300, 17-19px, warm-white 75%, max-w ~60ch */}
          <p className="mt-6 text-[17px] sm:text-[18px] md:text-[19px] font-light text-warm-white/75 leading-relaxed max-w-[60ch] text-center">
            {method.intro}
          </p>
        </motion.div>

        {/* Vertical Process with Spine (Indented cleanly from the left) */}
        <div ref={containerRef} className="relative w-full pl-3 sm:pl-6 md:pl-8">
          {/* Vertical Spine Line */}
          <div className="absolute left-3 sm:left-6 md:left-8 top-3 bottom-6 w-[1px] -translate-x-1/2 pointer-events-none">
            {/* Background 10% line */}
            <div className="w-full h-full bg-warm-white/10" />

            {/* Dynamic Scroll-Drawn Active Line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-warm-white/60 via-warm-white/40 to-warm-white/10 origin-top"
              style={{
                height: shouldReduceMotion ? "100%" : spineHeight,
              }}
            />
          </div>

          {/* Steps List (Spacing: 48-64px) */}
          <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
            {method.steps.map((step, index) => (
              <StepItem
                key={step.name}
                step={step}
                index={index}
                total={method.steps.length}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
