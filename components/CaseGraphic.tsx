"use client";

interface CaseGraphicProps {
  index: number;
  title: string;
}

export function CaseGraphic({ index, title }: CaseGraphicProps) {
  // PRISM Palette
  // Identity: #C16170 (Rose)
  // Relationships: #A98AC4 (Lilac)
  // Work: #E0BB52 (Ochre)
  // Spaces: #8FB694 (Sage)
  // Leadership: #7B9AC4 (Steel Blue)

  return (
    <div
      className="relative w-full aspect-[16/10] rounded-[10px] overflow-hidden bg-[#0D1117] border border-warm-white/[0.08] flex items-center justify-center select-none"
      role="img"
      aria-label={`Geometric PRISM diagram for ${title}`}
    >
      {index === 0 && <CaseGraphic0 />}
      {index === 1 && <CaseGraphic1 />}
      {index === 2 && <CaseGraphic2 />}
      {index === 3 && <CaseGraphic3 />}
      {index === 4 && <CaseGraphic4 />}

      {/* Subtle vignette border overlay */}
      <div className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]" />
    </div>
  );
}

/**
 * Case 0: TEDxZurich Event Brand & Integration Workshop
 * Themes: Stage backdrop, typography system, digital-to-tangible installation, radiant ideas
 * PRISM Hues: Identity (#C16170), Work (#E0BB52), Leadership (#7B9AC4)
 */
function CaseGraphic0() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    >
      <defs>
        <radialGradient id="c0-glow-rose" cx="60%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#C16170" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C16170" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="c0-glow-gold" cx="40%" cy="65%" r="45%">
          <stop offset="0%" stopColor="#E0BB52" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E0BB52" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="c0-beam" x1="0" y1="0" x2="320" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C16170" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#E0BB52" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Atmospheric Background Glows */}
      <rect width="320" height="200" fill="url(#c0-glow-rose)" />
      <rect width="320" height="200" fill="url(#c0-glow-gold)" />

      {/* Isometric Stage Grid Lines */}
      <g opacity="0.18" stroke="#F2EFE9" strokeWidth="0.75" strokeDasharray="3 3">
        <line x1="40" y1="160" x2="280" y2="160" />
        <line x1="60" y1="140" x2="260" y2="140" />
        <line x1="80" y1="120" x2="240" y2="120" />
        <line x1="40" y1="160" x2="100" y2="60" />
        <line x1="160" y1="160" x2="160" y2="60" />
        <line x1="280" y1="160" x2="220" y2="60" />
      </g>

      {/* Concentric Expanding Stage Rings */}
      <circle
        cx="160"
        cy="100"
        r="75"
        stroke="#C16170"
        strokeWidth="1"
        strokeOpacity="0.4"
        strokeDasharray="4 4"
        className="transition-all duration-500 group-hover:stroke-opacity-70"
      />
      <circle
        cx="160"
        cy="100"
        r="52"
        stroke="#E0BB52"
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />
      <circle
        cx="160"
        cy="100"
        r="28"
        stroke="#7B9AC4"
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />

      {/* Radiant Diamond & Perspective Apex */}
      <polygon
        points="160,35 225,100 160,165 95,100"
        stroke="url(#c0-beam)"
        strokeWidth="1.25"
        fill="#C16170"
        fillOpacity="0.04"
      />

      {/* Intersecting Horizon Rays */}
      <line x1="20" y1="100" x2="300" y2="100" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.3" />
      <line x1="160" y1="20" x2="160" y2="180" stroke="#F2EFE9" strokeWidth="0.75" strokeOpacity="0.3" />

      {/* Focal Stage Center Point */}
      <circle cx="160" cy="100" r="4" fill="#E0BB52" className="transition-transform duration-300 group-hover:scale-125 origin-center" />
      <circle cx="160" cy="100" r="8" stroke="#C16170" strokeWidth="1" strokeOpacity="0.8" />

      {/* Coordinate Markings */}
      <g opacity="0.6" fill="#F2EFE9" fontSize="7" fontFamily="sans-serif" letterSpacing="0.1em">
        <text x="24" y="32">AXIS · 01</text>
        <text x="238" y="176">STAGE // 16:10</text>
      </g>
    </svg>
  );
}

/**
 * Case 1: Employee Gala for Financial Institution (Lucerne)
 * Themes: Two concept directions (bifurcation), guest journeys across 3 locations, celebratory elevation
 * PRISM Hues: Relationships (#A98AC4), Spaces (#8FB694), Identity (#C16170)
 */
function CaseGraphic1() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    >
      <defs>
        <radialGradient id="c1-glow-lilac" cx="35%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#A98AC4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#A98AC4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="c1-glow-sage" cx="70%" cy="55%" r="50%">
          <stop offset="0%" stopColor="#8FB694" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8FB694" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="c1-grad-journey1" x1="40" y1="160" x2="280" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A98AC4" />
          <stop offset="50%" stopColor="#C16170" />
          <stop offset="100%" stopColor="#8FB694" />
        </linearGradient>
      </defs>

      {/* Atmospheric Background Glows */}
      <rect width="320" height="200" fill="url(#c1-glow-lilac)" />
      <rect width="320" height="200" fill="url(#c1-glow-sage)" />

      {/* Background Harmonograph / Curved Ribbons */}
      <g opacity="0.25" stroke="#A98AC4" strokeWidth="0.8">
        <path d="M 30,170 C 100,170 110,40 290,40" fill="none" />
        <path d="M 30,155 C 110,155 125,55 290,55" fill="none" />
        <path d="M 30,140 C 120,140 140,70 290,70" fill="none" />
      </g>

      {/* Primary Direction Arc 1 (Lucerne North Path) */}
      <path
        d="M 40,160 C 110,150 130,45 280,50"
        stroke="url(#c1-grad-journey1)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Primary Direction Arc 2 (Lucerne South Path - Intersecting) */}
      <path
        d="M 40,60 C 130,55 150,155 280,145"
        stroke="#8FB694"
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeDasharray="5 3"
        fill="none"
      />

      {/* 3 Location Venue Anchors */}
      {/* Location 1 */}
      <circle cx="85" cy="130" r="14" stroke="#A98AC4" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="85" cy="130" r="3.5" fill="#A98AC4" />

      {/* Location 2 (Intersection Apex) */}
      <circle cx="160" cy="100" r="20" stroke="#C16170" strokeWidth="1.2" strokeOpacity="0.7" strokeDasharray="3 3" />
      <circle cx="160" cy="100" r="5" fill="#F2EFE9" className="transition-all duration-300 group-hover:scale-125 origin-center" />

      {/* Location 3 */}
      <circle cx="240" cy="70" r="14" stroke="#8FB694" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="240" cy="70" r="3.5" fill="#8FB694" />

      {/* Architectural Coordinate Grid Lines */}
      <line x1="85" y1="30" x2="85" y2="170" stroke="#F2EFE9" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="160" y1="30" x2="160" y2="170" stroke="#F2EFE9" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="240" y1="30" x2="240" y2="170" stroke="#F2EFE9" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* Labels */}
      <g opacity="0.6" fill="#F2EFE9" fontSize="7" fontFamily="sans-serif" letterSpacing="0.1em">
        <text x="24" y="32">DUAL CONCEPTS</text>
        <text x="214" y="176">3 LOCATIONS // CH</text>
      </g>
    </svg>
  );
}

/**
 * Case 2: Brand and Launch System for a Digital Marketplace
 * Themes: Name and brand identity, high-fidelity funnel website, certification & onboarding systems
 * PRISM Hues: Work (#E0BB52), Leadership (#7B9AC4), Spaces (#8FB694)
 */
function CaseGraphic2() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    >
      <defs>
        <radialGradient id="c2-glow-gold" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#E0BB52" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E0BB52" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="c2-glow-blue" cx="65%" cy="65%" r="50%">
          <stop offset="0%" stopColor="#7B9AC4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Atmospheric Background Glows */}
      <rect width="320" height="200" fill="url(#c2-glow-gold)" />
      <rect width="320" height="200" fill="url(#c2-glow-blue)" />

      {/* Isometric Modular Grid */}
      <g opacity="0.2" stroke="#E0BB52" strokeWidth="0.8">
        <polygon points="160,30 230,70 160,110 90,70" />
        <polygon points="90,70 160,110 160,180 90,140" />
        <polygon points="230,70 160,110 160,180 230,140" />
      </g>

      {/* Nested Funnel Strata */}
      <path
        d="M 50,45 L 270,45 L 210,105 L 110,105 Z"
        stroke="#E0BB52"
        strokeWidth="1.25"
        strokeOpacity="0.75"
        fill="#E0BB52"
        fillOpacity="0.04"
      />
      <path
        d="M 110,105 L 210,105 L 180,155 L 140,155 Z"
        stroke="#7B9AC4"
        strokeWidth="1.25"
        strokeOpacity="0.8"
        fill="#7B9AC4"
        fillOpacity="0.05"
      />
      <line x1="140" y1="155" x2="140" y2="180" stroke="#8FB694" strokeWidth="1.5" />
      <line x1="180" y1="155" x2="180" y2="180" stroke="#8FB694" strokeWidth="1.5" />

      {/* Onboarding Flow Nodes (Connecting Vertices) */}
      <circle cx="90" cy="70" r="3.5" fill="#E0BB52" />
      <circle cx="230" cy="70" r="3.5" fill="#E0BB52" />
      <circle cx="160" cy="30" r="3.5" fill="#E0BB52" />
      <circle cx="160" cy="110" r="4.5" fill="#7B9AC4" className="transition-all duration-300 group-hover:scale-125 origin-center" />
      <circle cx="160" cy="168" r="3.5" fill="#8FB694" />

      {/* Concentric Signal Rings */}
      <circle cx="160" cy="110" r="28" stroke="#7B9AC4" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.6" />

      {/* Labels */}
      <g opacity="0.6" fill="#F2EFE9" fontSize="7" fontFamily="sans-serif" letterSpacing="0.1em">
        <text x="24" y="32">FUNNEL ARCHITECTURE</text>
        <text x="206" y="176">140+ ONBOARDED</text>
      </g>
    </svg>
  );
}

/**
 * Case 3: Communication Programme for an IT Company
 * Themes: Structural change, stakeholder alignment, Brand Value Pyramid, communication channels
 * PRISM Hues: Sage (#8FB694), Lilac (#A98AC4), Steel Blue (#7B9AC4), Identity (#C16170)
 */
function CaseGraphic3() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    >
      <defs>
        <radialGradient id="c3-glow-sage" cx="50%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#8FB694" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8FB694" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="c3-glow-lilac" cx="50%" cy="75%" r="50%">
          <stop offset="0%" stopColor="#A98AC4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#A98AC4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Atmospheric Background Glows */}
      <rect width="320" height="200" fill="url(#c3-glow-sage)" />
      <rect width="320" height="200" fill="url(#c3-glow-lilac)" />

      {/* Harmonic Wave Channels (Communication Waves) */}
      <g opacity="0.2" stroke="#8FB694" strokeWidth="0.8">
        <circle cx="160" cy="50" r="30" strokeDasharray="3 3" />
        <circle cx="160" cy="50" r="55" strokeDasharray="3 3" />
        <circle cx="160" cy="50" r="80" strokeDasharray="3 3" />
      </g>

      {/* Brand Value Pyramid Framework */}
      {/* Tier 1: Apex (Purpose / Vision) */}
      <polygon
        points="160,40 185,80 135,80"
        stroke="#8FB694"
        strokeWidth="1.5"
        fill="#8FB694"
        fillOpacity="0.1"
      />
      {/* Tier 2: Mid (Values / Pillars) */}
      <polygon
        points="132,86 188,86 215,126 105,126"
        stroke="#7B9AC4"
        strokeWidth="1.25"
        fill="#7B9AC4"
        fillOpacity="0.06"
      />
      {/* Tier 3: Foundation (Behaviors / Execution) */}
      <polygon
        points="102,132 218,132 245,172 75,172"
        stroke="#A98AC4"
        strokeWidth="1.25"
        fill="#A98AC4"
        fillOpacity="0.04"
      />

      {/* Stakeholder Alignment Central Axis */}
      <line x1="160" y1="25" x2="160" y2="180" stroke="#C16170" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="4 2" />

      {/* Key Transformation Vertices */}
      <circle cx="160" cy="40" r="3.5" fill="#F2EFE9" className="transition-all duration-300 group-hover:scale-125 origin-center" />
      <circle cx="160" cy="86" r="3" fill="#8FB694" />
      <circle cx="160" cy="132" r="3" fill="#7B9AC4" />
      <circle cx="160" cy="172" r="3" fill="#A98AC4" />

      {/* Horizontal Alignment Markers */}
      <circle cx="105" cy="126" r="2.5" fill="#7B9AC4" />
      <circle cx="215" cy="126" r="2.5" fill="#7B9AC4" />
      <circle cx="75" cy="172" r="2.5" fill="#A98AC4" />
      <circle cx="245" cy="172" r="2.5" fill="#A98AC4" />

      {/* Labels */}
      <g opacity="0.6" fill="#F2EFE9" fontSize="7" fontFamily="sans-serif" letterSpacing="0.1em">
        <text x="24" y="32">VALUE PYRAMID</text>
        <text x="212" y="176">ALIGNMENT // 360°</text>
      </g>
    </svg>
  );
}

/**
 * Case 4: An Award Event, Designed to Scale
 * Themes: Multi-year scalability, structured work packages, partner network frameworks, award elevation
 * PRISM Hues: Full PRISM Synthesis (#C16170, #A98AC4, #E0BB52, #8FB694, #7B9AC4)
 */
function CaseGraphic4() {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    >
      <defs>
        <radialGradient id="c4-glow-prism" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#C16170" stopOpacity="0.25" />
          <stop offset="35%" stopColor="#E0BB52" stopOpacity="0.2" />
          <stop offset="70%" stopColor="#7B9AC4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8FB694" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="c4-prism-spectrum" x1="40" y1="160" x2="280" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C16170" />
          <stop offset="25%" stopColor="#A98AC4" />
          <stop offset="50%" stopColor="#E0BB52" />
          <stop offset="75%" stopColor="#8FB694" />
          <stop offset="100%" stopColor="#7B9AC4" />
        </linearGradient>
      </defs>

      {/* Atmospheric Background Glow */}
      <rect width="320" height="200" fill="url(#c4-glow-prism)" />

      {/* Scaling Architectural Frameworks (Perspective Frames) */}
      {/* Frame 1: Foundation */}
      <rect
        x="60"
        y="125"
        width="200"
        height="45"
        rx="6"
        stroke="#7B9AC4"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="#7B9AC4"
        fillOpacity="0.03"
      />
      {/* Frame 2: Year 2 Growth */}
      <rect
        x="80"
        y="85"
        width="160"
        height="40"
        rx="5"
        stroke="#8FB694"
        strokeWidth="1.1"
        strokeOpacity="0.6"
        fill="#8FB694"
        fillOpacity="0.04"
      />
      {/* Frame 3: Scaled Summit */}
      <rect
        x="105"
        y="45"
        width="110"
        height="35"
        rx="4"
        stroke="#E0BB52"
        strokeWidth="1.3"
        strokeOpacity="0.8"
        fill="#E0BB52"
        fillOpacity="0.06"
      />

      {/* Ascending Golden Logarithmic Arc */}
      <path
        d="M 60,165 C 100,165 105,45 220,45"
        stroke="url(#c4-prism-spectrum)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Work Package Grid Nodes */}
      <circle cx="60" cy="147" r="3" fill="#C16170" />
      <circle cx="160" cy="147" r="3" fill="#A98AC4" />
      <circle cx="260" cy="147" r="3" fill="#7B9AC4" />

      <circle cx="80" cy="105" r="3" fill="#A98AC4" />
      <circle cx="160" cy="105" r="3.5" fill="#E0BB52" />
      <circle cx="240" cy="105" r="3" fill="#8FB694" />

      <circle cx="105" cy="62" r="3.5" fill="#E0BB52" />
      <circle cx="160" cy="62" r="4.5" fill="#F2EFE9" className="transition-all duration-300 group-hover:scale-125 origin-center" />
      <circle cx="215" cy="62" r="3.5" fill="#7B9AC4" />

      {/* Dimension Crosshair */}
      <line x1="160" y1="30" x2="160" y2="180" stroke="#F2EFE9" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 3" />

      {/* Labels */}
      <g opacity="0.6" fill="#F2EFE9" fontSize="7" fontFamily="sans-serif" letterSpacing="0.1em">
        <text x="24" y="32">MULTI-YEAR SCALING</text>
        <text x="200" y="176">NETWORK FRAMEWORK</text>
      </g>
    </svg>
  );
}
