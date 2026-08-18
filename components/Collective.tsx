"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { CONTENT, Person } from "@/lib/content";

const HERR_PALETTE = [
  {
    name: "rose",
    hex: "#C16170",
    glow: "rgba(193, 97, 112, 0.35)",
    border: "rgba(193, 97, 112, 0.6)",
    duotone: "rgba(193, 97, 112, 0.18)",
  },
  {
    name: "lilac",
    hex: "#A98AC4",
    glow: "rgba(169, 138, 196, 0.35)",
    border: "rgba(169, 138, 196, 0.6)",
    duotone: "rgba(169, 138, 196, 0.18)",
  },
  {
    name: "gold",
    hex: "#E0BB52",
    glow: "rgba(224, 187, 82, 0.35)",
    border: "rgba(224, 187, 82, 0.6)",
    duotone: "rgba(224, 187, 82, 0.18)",
  },
  {
    name: "sage",
    hex: "#8FB694",
    glow: "rgba(143, 182, 148, 0.35)",
    border: "rgba(143, 182, 148, 0.6)",
    duotone: "rgba(143, 182, 148, 0.18)",
  },
  {
    name: "slate",
    hex: "#7B9AC4",
    glow: "rgba(123, 154, 196, 0.35)",
    border: "rgba(123, 154, 196, 0.6)",
    duotone: "rgba(123, 154, 196, 0.18)",
  },
];

function getInitials(name: string): string {
  const cleanName = name.replace(/^(Dr\.|Prof\.)\s+/i, "");
  const parts = cleanName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function PersonCard({
  person,
  index,
  shouldReduceMotion,
}: {
  person: Person;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const color = HERR_PALETTE[index % HERR_PALETTE.length];
  const imageUrl = person.portraitId
    ? `https://res.cloudinary.com/df6nnksd2/image/upload/f_auto,q_auto,w_600/${person.portraitId}`
    : null;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : (index % 5) * 0.06,
        ease: "easeOut",
      }}
      className="group flex flex-col items-start w-full cursor-pointer"
    >
      {/* 4:5 Rounded-12px Container with dynamic HERR color aura and border shift on hover */}
      <div
        className="w-full aspect-[4/5] rounded-[12px] overflow-hidden relative bg-surface-custom border border-warm-white/[0.08] shadow-md transition-all duration-300 group-hover:scale-[1.02]"
        style={{
          boxShadow: "none",
        }}
      >
        {/* Dynamic colored glow effect on hover */}
        <div
          className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 border"
          style={{
            borderColor: color.border,
            boxShadow: `0 0 20px ${color.glow}, inset 0 0 14px ${color.duotone}`,
          }}
        />

        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt={person.name}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 900px) 30vw, 20vw"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="object-cover grayscale-[35%] group-hover:grayscale-0 transition-all duration-300 ease-out"
            />
            {/* Subtle color wash overlay in person's assigned HERR color */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-color"
              style={{
                backgroundColor: color.hex,
                opacity: 0,
              }}
            />
          </>
        ) : (
          /* Fallback Initials Tile */
          <div className="w-full h-full flex flex-col items-center justify-center bg-surface-custom text-platinum/90 select-none">
            <span
              className="text-xl font-medium tracking-widest transition-colors duration-200"
              style={{ color: color.hex }}
            >
              {getInitials(person.name)}
            </span>
          </div>
        )}
      </div>

      {/* Name: DM Sans 500, 15-16px, warm-white */}
      <h4
        className="text-[15px] sm:text-[16px] font-medium text-warm-white mt-3 leading-snug transition-colors duration-200"
      >
        {person.name}
      </h4>

      {/* Role: DM Sans 400, 13px, stone-custom */}
      <p className="text-[13px] font-normal text-stone-custom mt-1 leading-snug">
        {person.role}
      </p>
    </motion.div>
  );
}

export function Collective() {
  const { collective } = CONTENT;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="collective"
      aria-labelledby="collective-heading"
      className="w-full bg-ink py-24 sm:py-28 md:py-32 px-6 sm:px-8 relative overflow-hidden"
    >
      {/* Top Full-Width Horizontal PRISM Colour Stripe with Smooth Draw-In */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] w-full overflow-hidden pointer-events-none">
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{
            transformOrigin: "left center",
            background:
              "linear-gradient(90deg, #C16170 0%, #A98AC4 25%, #E0BB52 50%, #8FB694 75%, #7B9AC4 100%)",
          }}
          aria-hidden="true"
          className="w-full h-full"
        />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Header Block */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* H2 Heading: clamp(30-44px), DM Sans 600, warm-white, sentence case */}
          <h2
            id="collective-heading"
            className="text-[clamp(30px,3.5vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] mb-4 sm:mb-5 text-center"
          >
            {collective.heading}
          </h2>

          {/* Subline */}
          {collective.subline && (
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-light text-warm-white/80 leading-relaxed max-w-[60ch] text-center">
              {collective.subline}
            </p>
          )}
        </motion.div>

        {/* People Groups Container */}
        <div className="flex flex-col gap-14 sm:gap-16">
          {/* Group 1: Specialists */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5 pb-2">
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.28em] text-warm-white">
                SPECIALISTS
              </span>
              {/* Interactive PRISM Spectrum Line underneath */}
              <div className="w-full h-[2px] rounded-full overflow-hidden bg-warm-white/[0.06]">
                <div
                  className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #C16170 0%, #A98AC4 25%, #E0BB52 50%, #8FB694 75%, #7B9AC4 100%)",
                  }}
                />
              </div>
            </div>

            {/* 5-column grid on desktop, 3 columns at ~900px, 2 columns below 640px */}
            <div className="grid grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {collective.specialists.map((person, index) => (
                <PersonCard
                  key={person.name}
                  person={person}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>

          {/* Group 2: Advisory Board */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2.5 pb-2">
              <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.28em] text-warm-white">
                ADVISORY BOARD
              </span>
              {/* Interactive PRISM Spectrum Line underneath */}
              <div className="w-full h-[2px] rounded-full overflow-hidden bg-warm-white/[0.06]">
                <div
                  className="w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #C16170 0%, #A98AC4 25%, #E0BB52 50%, #8FB694 75%, #7B9AC4 100%)",
                  }}
                />
              </div>
            </div>

            {/* 5-column grid on desktop, 3 columns at ~900px, 2 columns below 640px */}
            <div className="grid grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {collective.advisoryBoard.map((person, index) => (
                <PersonCard
                  key={person.name}
                  person={person}
                  index={index + collective.specialists.length}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

