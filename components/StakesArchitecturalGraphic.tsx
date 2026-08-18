"use client";

import { motion, useReducedMotion } from "motion/react";

export function StakesArchitecturalGraphic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative w-full max-w-[480px] aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] mx-auto rounded-[16px] overflow-hidden bg-[#0D1117] border border-warm-white/[0.08] flex items-center justify-center select-none shadow-2xl group"
      role="img"
      aria-label="Stratified Blueprint PRISM Architectural Schematic"
    >
      {/* Gentle Breathing & Parallax Motion Wrapper */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : {
                y: [-3, 3, -3],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.6 }
            : {
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="w-full h-full p-4 sm:p-6 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 400 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        >
          <defs>
            {/* PRISM Atmospheric Radial Diffusions */}
            <radialGradient id="stk-glow-rose" cx="30%" cy="20%" r="45%">
              <stop offset="0%" stopColor="#C16170" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#C16170" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="stk-glow-blue" cx="70%" cy="80%" r="50%">
              <stop offset="0%" stopColor="#7B9AC4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="stk-glow-gold" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#E0BB52" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E0BB52" stopOpacity="0" />
            </radialGradient>

            {/* Linear Spectrum Axis Gradient */}
            <linearGradient id="stk-prism-axis" x1="200" y1="40" x2="200" y2="440" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C16170" />
              <stop offset="25%" stopColor="#A98AC4" />
              <stop offset="50%" stopColor="#E0BB52" />
              <stop offset="75%" stopColor="#8FB694" />
              <stop offset="100%" stopColor="#7B9AC4" />
            </linearGradient>

            {/* Background Dot Grid Pattern */}
            <pattern id="stk-dot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.75" fill="#F2EFE9" fillOpacity="0.08" />
            </pattern>
          </defs>

          {/* Background Ambient Glows */}
          <rect width="400" height="480" fill="url(#stk-glow-rose)" />
          <rect width="400" height="480" fill="url(#stk-glow-blue)" />
          <rect width="400" height="480" fill="url(#stk-glow-gold)" />
          <rect width="400" height="480" fill="url(#stk-dot-grid)" />

          {/* Isometric Construction Axis Framework */}
          <g opacity="0.18" stroke="#F2EFE9" strokeWidth="0.75" strokeDasharray="3 3">
            <line x1="200" y1="20" x2="200" y2="460" />
            <line x1="40" y1="240" x2="360" y2="240" />
            <line x1="60" y1="120" x2="340" y2="360" />
            <line x1="60" y1="360" x2="340" y2="120" />
          </g>

          {/* ============================================================ */}
          {/* STRATIFIED 5-TIER PRISM ISOMETRIC PLANES */}
          {/* ============================================================ */}

          {/* Layer 1: Identity (#C16170 - Rose) - Top Layer */}
          <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-4px]">
            <polygon
              points="200,55 310,105 200,155 90,105"
              stroke="#C16170"
              strokeWidth="1.25"
              fill="#C16170"
              fillOpacity="0.08"
            />
            <line x1="90" y1="105" x2="200" y2="155" stroke="#C16170" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="310" y1="105" x2="200" y2="155" stroke="#C16170" strokeWidth="1.5" strokeOpacity="0.8" />
            <circle cx="200" cy="105" r="3.5" fill="#C16170" />
            <circle cx="90" cy="105" r="2.5" fill="#C16170" fillOpacity="0.6" />
            <circle cx="310" cy="105" r="2.5" fill="#C16170" fillOpacity="0.6" />
            <text x="320" y="108" fill="#C16170" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">01 // IDENTITY</text>
          </g>

          {/* Layer 2: Relationships (#A98AC4 - Lilac) */}
          <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
            <polygon
              points="200,120 310,170 200,220 90,170"
              stroke="#A98AC4"
              strokeWidth="1.25"
              fill="#A98AC4"
              fillOpacity="0.07"
            />
            <line x1="90" y1="170" x2="200" y2="220" stroke="#A98AC4" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="310" y1="170" x2="200" y2="220" stroke="#A98AC4" strokeWidth="1.5" strokeOpacity="0.8" />
            <circle cx="200" cy="170" r="3.5" fill="#A98AC4" />
            <circle cx="90" cy="170" r="2.5" fill="#A98AC4" fillOpacity="0.6" />
            <circle cx="310" cy="170" r="2.5" fill="#A98AC4" fillOpacity="0.6" />
            <text x="320" y="173" fill="#A98AC4" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">02 // RELATIONSHIPS</text>
          </g>

          {/* Layer 3: Work (#E0BB52 - Ochre) - Core Transformation Nexus */}
          <g className="transition-transform duration-500 ease-out">
            <polygon
              points="200,185 310,235 200,285 90,235"
              stroke="#E0BB52"
              strokeWidth="1.5"
              fill="#E0BB52"
              fillOpacity="0.1"
            />
            <line x1="90" y1="235" x2="200" y2="285" stroke="#E0BB52" strokeWidth="1.75" strokeOpacity="0.9" />
            <line x1="310" y1="235" x2="200" y2="285" stroke="#E0BB52" strokeWidth="1.75" strokeOpacity="0.9" />
            <circle cx="200" cy="235" r="4.5" fill="#E0BB52" className="transition-all duration-300 group-hover:scale-125 origin-center" />
            <circle cx="90" cy="235" r="2.5" fill="#E0BB52" fillOpacity="0.6" />
            <circle cx="310" cy="235" r="2.5" fill="#E0BB52" fillOpacity="0.6" />
            <text x="320" y="238" fill="#E0BB52" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">03 // WORK [NEXUS]</text>
          </g>

          {/* Layer 4: Spaces (#8FB694 - Sage) */}
          <g className="transition-transform duration-500 ease-out group-hover:translate-y-[2px]">
            <polygon
              points="200,250 310,300 200,350 90,300"
              stroke="#8FB694"
              strokeWidth="1.25"
              fill="#8FB694"
              fillOpacity="0.07"
            />
            <line x1="90" y1="300" x2="200" y2="350" stroke="#8FB694" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="310" y1="300" x2="200" y2="350" stroke="#8FB694" strokeWidth="1.5" strokeOpacity="0.8" />
            <circle cx="200" cy="300" r="3.5" fill="#8FB694" />
            <circle cx="90" cy="300" r="2.5" fill="#8FB694" fillOpacity="0.6" />
            <circle cx="310" cy="300" r="2.5" fill="#8FB694" fillOpacity="0.6" />
            <text x="320" y="303" fill="#8FB694" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">04 // SPACES</text>
          </g>

          {/* Layer 5: Leadership (#7B9AC4 - Steel Blue) - Foundation */}
          <g className="transition-transform duration-500 ease-out group-hover:translate-y-[4px]">
            <polygon
              points="200,315 310,365 200,415 90,365"
              stroke="#7B9AC4"
              strokeWidth="1.25"
              fill="#7B9AC4"
              fillOpacity="0.08"
            />
            <line x1="90" y1="365" x2="200" y2="415" stroke="#7B9AC4" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="310" y1="365" x2="200" y2="415" stroke="#7B9AC4" strokeWidth="1.5" strokeOpacity="0.8" />
            <circle cx="200" cy="365" r="3.5" fill="#7B9AC4" />
            <circle cx="90" cy="365" r="2.5" fill="#7B9AC4" fillOpacity="0.6" />
            <circle cx="310" cy="365" r="2.5" fill="#7B9AC4" fillOpacity="0.6" />
            <text x="320" y="368" fill="#7B9AC4" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">05 // LEADERSHIP</text>
          </g>

          {/* Central Stratification Vector Beams (Connecting Vertices) */}
          <line
            x1="200"
            y1="40"
            x2="200"
            y2="430"
            stroke="url(#stk-prism-axis)"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          <line x1="90" y1="105" x2="90" y2="365" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="3 3" />
          <line x1="310" y1="105" x2="310" y2="365" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.25" strokeDasharray="3 3" />

          {/* Tension Vector Arc: "Where Change is Lived" Tangent */}
          <path
            d="M 50,235 C 120,80 280,80 350,235"
            stroke="#E0BB52"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 50,235 C 120,390 280,390 350,235"
            stroke="#7B9AC4"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Dimension Crosshair & Technical Annotations */}
          <circle cx="200" cy="235" r="32" stroke="#E0BB52" strokeWidth="0.75" strokeOpacity="0.35" strokeDasharray="3 3" />
          <circle cx="200" cy="235" r="54" stroke="#C16170" strokeWidth="0.5" strokeOpacity="0.2" />

          <g opacity="0.45" fill="#F2EFE9" fontSize="7.5" fontFamily="monospace" letterSpacing="0.12em">
            <text x="24" y="32">TENSION // REALITY vs PLAN</text>
            <text x="24" y="456">PRISM SCHEMATIC · 5 STRATA</text>
          </g>
        </svg>

        {/* Subtle vignette border overlay */}
        <div className="absolute inset-0 rounded-[16px] pointer-events-none shadow-[inset_0_0_24px_rgba(0,0,0,0.6)]" />
      </motion.div>
    </div>
  );
}
