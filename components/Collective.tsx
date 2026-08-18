"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { CONTENT, Person } from "@/lib/content";

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
      className="group flex flex-col items-start w-full"
    >
      {/* 4:5 Rounded-12px Container */}
      <div className="w-full aspect-[4/5] rounded-[12px] overflow-hidden relative bg-surface-custom border border-warm-white/[0.08] shadow-md transition-all duration-300">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={person.name}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 900px) 30vw, 20vw"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-[250ms] ease-out"
          />
        ) : (
          /* Fallback Initials Tile */
          <div className="w-full h-full flex flex-col items-center justify-center bg-surface-custom text-platinum/90 select-none">
            <span className="text-xl font-medium tracking-widest">
              {getInitials(person.name)}
            </span>
          </div>
        )}
      </div>

      {/* Name: DM Sans 500, 15-16px, warm-white */}
      <h4 className="text-[15px] sm:text-[16px] font-medium text-warm-white mt-3 leading-snug group-hover:text-white transition-colors duration-200">
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
      className="w-full bg-ink py-24 sm:py-28 md:py-32 px-6 sm:px-8 border-t border-warm-white/[0.06] relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16 sm:gap-20">
        {/* Header Block */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-start max-w-3xl"
        >
          {/* H2 Heading: clamp(30-44px), DM Sans 600, warm-white, sentence case */}
          <h2
            id="collective-heading"
            className="text-[clamp(30px,3.5vw,44px)] font-semibold text-warm-white tracking-tight leading-[1.15] mb-4 sm:mb-5"
          >
            {collective.heading}
          </h2>

          {/* Subline */}
          {collective.subline && (
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-light text-warm-white/80 leading-relaxed max-w-[60ch]">
              {collective.subline}
            </p>
          )}
        </motion.div>

        {/* People Groups Container */}
        <div className="flex flex-col gap-14 sm:gap-16">
          {/* Group 1: Specialists */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-warm-white/[0.08] pb-3">
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-stone-custom">
                Specialists
              </span>
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
            <div className="flex items-center gap-3 border-b border-warm-white/[0.08] pb-3">
              <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] text-stone-custom">
                Advisory Board
              </span>
            </div>

            {/* 5-column grid on desktop, 3 columns at ~900px, 2 columns below 640px */}
            <div className="grid grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
              {collective.advisoryBoard.map((person, index) => (
                <PersonCard
                  key={person.name}
                  person={person}
                  index={index}
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
