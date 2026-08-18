"use client";

import { motion, useReducedMotion } from "motion/react";

export function HumanArchitectureGraphic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center select-none"
    >
      {/* Gentle Breathing Motion Container */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.85, scale: 1 }
            : {
                opacity: [0.75, 0.9, 0.75],
                scale: [0.99, 1.01, 0.99],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.8 }
            : {
                opacity: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="w-full h-full max-w-[1600px] max-h-[1000px] relative flex items-center justify-center"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-80"
        >
          <defs>
            {/* PRISM Atmospheric Diffusion Gradients */}
            <radialGradient id="ha-glow-rose" cx="20%" cy="40%" r="35%">
              <stop offset="0%" stopColor="#C16170" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#C16170" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ha-glow-blue" cx="80%" cy="35%" r="40%">
              <stop offset="0%" stopColor="#7B9AC4" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ha-glow-gold" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#E0BB52" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#E0BB52" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="ha-axis-grad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C16170" stopOpacity="0.3" />
              <stop offset="25%" stopColor="#A98AC4" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#E0BB52" stopOpacity="0.3" />
              <stop offset="75%" stopColor="#8FB694" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0.3" />
            </linearGradient>

            {/* Pattern for Blueprint Grid */}
            <pattern id="ha-blueprint-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#F2EFE9" strokeWidth="0.5" strokeOpacity="0.025" />
              <circle cx="80" cy="80" r="1" fill="#F2EFE9" fillOpacity="0.08" />
            </pattern>
          </defs>

          {/* Background Atmospheric Glows */}
          <rect width="1440" height="900" fill="url(#ha-glow-rose)" />
          <rect width="1440" height="900" fill="url(#ha-glow-blue)" />
          <rect width="1440" height="900" fill="url(#ha-glow-gold)" />
          <rect width="1440" height="900" fill="url(#ha-blueprint-grid)" />

          {/* ============================================================ */}
          {/* LEFT FLANK: Human Scale / Modulor Proportions & Ergonomics Axis */}
          {/* ============================================================ */}
          <g transform="translate(60, 100)">
            {/* Architectural Baseline Axis */}
            <line x1="80" y1="50" x2="80" y2="650" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.18" />
            <line x1="20" y1="580" x2="260" y2="580" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.2" />

            {/* Modulor Golden Ratio Step Tiers (Human Stature Benchmarks) */}
            {/* Level 0: Ground (0.000) */}
            <line x1="65" y1="580" x2="95" y2="580" stroke="#F2EFE9" strokeWidth="1.5" strokeOpacity="0.5" />
            <text x="105" y="583" fill="#F2EFE9" fillOpacity="0.4" fontSize="9" fontFamily="monospace">0.000 BASE</text>

            {/* Level 1: Knee / Sit (0.432m) */}
            <line x1="70" y1="480" x2="160" y2="480" stroke="#8FB694" strokeWidth="0.75" strokeOpacity="0.35" strokeDasharray="3 3" />
            <circle cx="80" cy="480" r="2.5" fill="#8FB694" fillOpacity="0.6" />
            <text x="170" y="483" fill="#8FB694" fillOpacity="0.5" fontSize="8" fontFamily="monospace">0.432 // KNEE</text>

            {/* Level 2: Navel / Solar Plexus (1.130m Golden Ratio) */}
            <line x1="60" y1="360" x2="220" y2="360" stroke="#E0BB52" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="80" cy="360" r="3.5" fill="#E0BB52" fillOpacity="0.8" />
            <text x="230" y="363" fill="#E0BB52" fillOpacity="0.7" fontSize="8" fontFamily="monospace">1.130 // SOLAR PLEXUS [φ]</text>

            {/* Level 3: Stature / Eye Level (1.829m) */}
            <line x1="60" y1="210" x2="200" y2="210" stroke="#C16170" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="80" cy="210" r="3.5" fill="#C16170" fillOpacity="0.8" />
            <text x="210" y="213" fill="#C16170" fillOpacity="0.7" fontSize="8" fontFamily="monospace">1.829 // STATURE</text>

            {/* Level 4: Upraised Hand Apex (2.260m) */}
            <line x1="70" y1="110" x2="180" y2="110" stroke="#7B9AC4" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 3" />
            <circle cx="80" cy="110" r="3" fill="#7B9AC4" fillOpacity="0.6" />
            <text x="190" y="113" fill="#7B9AC4" fillOpacity="0.6" fontSize="8" fontFamily="monospace">2.260 // APEX</text>

            {/* Minimalist Modulor Human Silhouette Schematic Vector */}
            <g opacity="0.4" stroke="#F2EFE9" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* Head Circle */}
              <circle cx="80" cy="170" r="14" stroke="#C16170" strokeWidth="1.2" strokeOpacity="0.6" />
              <circle cx="80" cy="170" r="2" fill="#C16170" fillOpacity="0.8" />

              {/* Spine / Torso Vertical Axis */}
              <line x1="80" y1="184" x2="80" y2="380" stroke="#F2EFE9" strokeWidth="1.2" strokeOpacity="0.5" />

              {/* Upraised Right Arm (Reaching to 2.260 apex) */}
              <path d="M 80,215 L 125,160 L 115,110" stroke="#7B9AC4" strokeWidth="1.2" strokeOpacity="0.6" />
              <circle cx="115" cy="110" r="3" fill="#7B9AC4" fillOpacity="0.5" />

              {/* Left Arm (Relaxed Golden Ratio Angle) */}
              <path d="M 80,215 L 35,270 L 45,340" stroke="#A98AC4" strokeWidth="1" strokeOpacity="0.5" />

              {/* Pelvis & Leg Strata */}
              <path d="M 80,380 L 50,480 L 45,580" stroke="#F2EFE9" strokeWidth="1" strokeOpacity="0.35" />
              <path d="M 80,380 L 110,480 L 115,580" stroke="#F2EFE9" strokeWidth="1" strokeOpacity="0.35" />
            </g>

            {/* Harmonic Golden Arc over Human Figure */}
            <path
              d="M 80,580 A 470 470 0 0 1 550,580"
              stroke="#A98AC4"
              strokeWidth="0.8"
              strokeOpacity="0.2"
              strokeDasharray="4 4"
              fill="none"
            />
            <path
              d="M 80,360 A 250 250 0 0 1 330,580"
              stroke="#E0BB52"
              strokeWidth="0.8"
              strokeOpacity="0.2"
              fill="none"
            />
          </g>

          {/* ============================================================ */}
          {/* RIGHT FLANK: Spatial Architecture / Geometric Framework */}
          {/* ============================================================ */}
          <g transform="translate(1080, 100)">
            {/* Isometric Structural Cube Framework */}
            <g opacity="0.35" stroke="#7B9AC4" strokeWidth="1" fill="none">
              {/* Outer Isometric Box */}
              <polygon points="160,80 260,140 160,200 60,140" stroke="#7B9AC4" strokeWidth="1.2" strokeOpacity="0.6" />
              <polygon points="60,140 160,200 160,320 60,260" stroke="#8FB694" strokeWidth="1" strokeOpacity="0.4" />
              <polygon points="260,140 160,200 160,320 260,260" stroke="#E0BB52" strokeWidth="1" strokeOpacity="0.4" />

              {/* Internal Spatial Projection Lines */}
              <line x1="160" y1="80" x2="160" y2="200" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 3" />
              <line x1="60" y1="140" x2="260" y2="140" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.3" strokeDasharray="3 3" />
            </g>

            {/* Dynamic Planar Section Rings */}
            <ellipse cx="160" cy="200" rx="140" ry="60" stroke="#A98AC4" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="5 3" />
            <ellipse cx="160" cy="200" rx="90" ry="38" stroke="#C16170" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="160" cy="200" r="4" fill="#F2EFE9" fillOpacity="0.7" />

            {/* Spatial Dimension Ray Beams */}
            <line x1="160" y1="40" x2="160" y2="560" stroke="#F2EFE9" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="20" y1="200" x2="300" y2="200" stroke="#F2EFE9" strokeWidth="0.5" strokeOpacity="0.2" />

            {/* Technical Dimensional Annotations */}
            <g opacity="0.45" fill="#F2EFE9" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">
              <text x="60" y="55">SPATIAL ENVELOPE // 3D</text>
              <text x="180" y="340">AXIS: Z-08 · PRISM</text>
              <text x="60" y="520">TANGIBLE TRANSFORMATION</text>
            </g>

            {/* Stepped Scale Ruler */}
            <g opacity="0.3" stroke="#F2EFE9" strokeWidth="0.75">
              <line x1="260" y1="400" x2="260" y2="540" />
              <line x1="255" y1="400" x2="265" y2="400" />
              <line x1="257" y1="435" x2="263" y2="435" />
              <line x1="255" y1="470" x2="265" y2="470" />
              <line x1="257" y1="505" x2="263" y2="505" />
              <line x1="255" y1="540" x2="265" y2="540" />
            </g>
          </g>

          {/* ============================================================ */}
          {/* CENTER: Subtle Horizon Axis & Tangent Curves Connecting Both */}
          {/* ============================================================ */}
          <g opacity="0.25">
            {/* Global Horizontal Datum Line */}
            <line x1="0" y1="450" x2="1440" y2="450" stroke="url(#ha-axis-grad)" strokeWidth="0.75" />

            {/* Transverse Cross-Connection Wave (Human to Space) */}
            <path
              d="M 140,460 C 450,200 990,700 1300,440"
              stroke="url(#ha-axis-grad)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="6 4"
            />
            <path
              d="M 140,210 C 600,400 840,100 1300,200"
              stroke="#E0BB52"
              strokeWidth="0.75"
              fill="none"
              strokeOpacity="0.4"
            />

            {/* Subtle Golden Ratio Spiral Fragment (Center Stage) */}
            <path
              d="M 720,450 A 60 60 0 0 1 780,510 A 100 100 0 0 1 680,610 A 160 160 0 0 1 520,450 A 260 260 0 0 1 780,190"
              stroke="#C16170"
              strokeWidth="0.6"
              strokeOpacity="0.2"
              fill="none"
            />
          </g>

          {/* Cardinal Coordinate Stamps */}
          <g opacity="0.35" fill="#F2EFE9" fontSize="8" fontFamily="monospace" letterSpacing="0.15em">
            <text x="80" y="850">GEO // ZURICH · 47.3769° N, 8.5417° E</text>
            <text x="1100" y="850">HUMAN ARCHITECTURE · 1:1.618</text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
