"use client";

interface AbstractGraphicProps {
  type: "partnership" | "people" | "business";
}

export function AbstractServiceGraphic({ type }: AbstractGraphicProps) {
  if (type === "partnership") {
    // 1:1 Partnership: Two harmonious focal glass ellipses/orbs intersecting in resonance with fine alignment lines
    return (
      <div className="w-full h-36 sm:h-40 relative rounded-xl overflow-hidden bg-gradient-to-b from-warm-white/[0.05] to-warm-white/[0.01] border border-warm-white/[0.08] mb-6 flex items-center justify-center group-hover:border-warm-white/20 transition-all duration-500">
        <svg
          viewBox="0 0 320 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover select-none pointer-events-none"
        >
          <defs>
            {/* Soft Neutral Radial Gradients (Default) */}
            <radialGradient id="p-orb-1" cx="35%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#F5F3EF" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#E5E0D8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#E5E0D8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="p-orb-2" cx="65%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#FAF8F5" stopOpacity="0.26" />
              <stop offset="60%" stopColor="#D8D2C7" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#D8D2C7" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="p-center-glow" cx="50%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="p-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
            </linearGradient>

            {/* Vibrant Full PRISM Spectral Gradients for Hover */}
            <radialGradient id="p-prism-orb-1" cx="35%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#C16170" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#A98AC4" stopOpacity="0.25" />
              <stop offset="85%" stopColor="#E0BB52" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#E0BB52" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="p-prism-orb-2" cx="65%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#8FB694" stopOpacity="0.4" />
              <stop offset="45%" stopColor="#7B9AC4" stopOpacity="0.25" />
              <stop offset="85%" stopColor="#A98AC4" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#A98AC4" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="p-prism-center" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#E0BB52" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#A98AC4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C16170" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="p-prism-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C16170" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#A98AC4" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#E0BB52" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#8FB694" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Precision Architectural Grid Lines */}
          <line x1="40" y1="80" x2="280" y2="80" stroke="#FAF8F5" strokeOpacity="0.12" strokeDasharray="3 3" />
          <line x1="160" y1="20" x2="160" y2="140" stroke="#FAF8F5" strokeOpacity="0.12" strokeDasharray="3 3" />
          
          {/* Tangent guide curves with colorful hover shift */}
          <path
            d="M 60 120 C 110 40, 210 40, 260 120"
            stroke="#FAF8F5"
            strokeOpacity="0.15"
            strokeWidth="1"
            className="group-hover:stroke-[url(#p-prism-sheen)] group-hover:opacity-80 transition-all duration-500"
            fill="none"
          />

          {/* Left Glass Ellipse (Neutral + PRISM Overlay) */}
          <ellipse
            cx="125"
            cy="80"
            rx="52"
            ry="46"
            fill="url(#p-orb-1)"
            stroke="url(#p-sheen)"
            strokeWidth="1"
            strokeOpacity="0.6"
            className="transition-transform duration-500 group-hover:scale-105"
            style={{ transformOrigin: "125px 80px" }}
          />
          <ellipse
            cx="125"
            cy="80"
            rx="52"
            ry="46"
            fill="url(#p-prism-orb-1)"
            stroke="url(#p-prism-sheen)"
            strokeWidth="1.5"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            style={{ transformOrigin: "125px 80px" }}
          />

          {/* Right Glass Ellipse (Neutral + PRISM Overlay) */}
          <ellipse
            cx="195"
            cy="80"
            rx="52"
            ry="46"
            fill="url(#p-orb-2)"
            stroke="url(#p-sheen)"
            strokeWidth="1"
            strokeOpacity="0.6"
            className="transition-transform duration-500 group-hover:scale-105"
            style={{ transformOrigin: "195px 80px" }}
          />
          <ellipse
            cx="195"
            cy="80"
            rx="52"
            ry="46"
            fill="url(#p-prism-orb-2)"
            stroke="url(#p-prism-sheen)"
            strokeWidth="1.5"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            style={{ transformOrigin: "195px 80px" }}
          />

          {/* Center Intersection Glow */}
          <circle cx="160" cy="80" r="28" fill="url(#p-center-glow)" />
          <circle
            cx="160"
            cy="80"
            r="32"
            fill="url(#p-prism-center)"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Focal core nodes */}
          <circle cx="125" cy="80" r="2.5" fill="#FAF8F5" fillOpacity="0.8" className="group-hover:fill-[#C16170] transition-colors duration-300" />
          <circle cx="195" cy="80" r="2.5" fill="#FAF8F5" fillOpacity="0.8" className="group-hover:fill-[#7B9AC4] transition-colors duration-300" />
          <circle cx="160" cy="80" r="3.5" fill="#FFFFFF" fillOpacity="0.95" className="group-hover:fill-[#E0BB52] transition-colors duration-300" />
          <circle
            cx="160"
            cy="80"
            r="8"
            stroke="#FAF8F5"
            strokeOpacity="0.4"
            strokeWidth="1"
            className="group-hover:stroke-[#E0BB52] group-hover:stroke-opacity-80 transition-all duration-300"
          />
        </svg>
      </div>
    );
  }

  if (type === "people") {
    // People Focus: Dynamic constellation of layered concentric glass ripples and aligned strength nodes
    return (
      <div className="w-full h-36 sm:h-40 relative rounded-xl overflow-hidden bg-gradient-to-b from-warm-white/[0.05] to-warm-white/[0.01] border border-warm-white/[0.08] mb-6 flex items-center justify-center group-hover:border-warm-white/20 transition-all duration-500">
        <svg
          viewBox="0 0 320 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover select-none pointer-events-none"
        >
          <defs>
            {/* Concentric glass field */}
            <radialGradient id="peo-field" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="40%" stopColor="#E5E0D8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#E5E0D8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="peo-sheen" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E5E0D8" stopOpacity="0.05" />
            </linearGradient>

            {/* Vibrant Full PRISM Spectral Gradients for People Graphic */}
            <radialGradient id="peo-prism-field" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="#E0BB52" stopOpacity="0.5" />
              <stop offset="35%" stopColor="#A98AC4" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#8FB694" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="peo-prism-spectrum" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C16170" />
              <stop offset="25%" stopColor="#A98AC4" />
              <stop offset="50%" stopColor="#E0BB52" />
              <stop offset="75%" stopColor="#8FB694" />
              <stop offset="100%" stopColor="#7B9AC4" />
            </linearGradient>
          </defs>

          {/* Central Radiating Orbitals / Waveforms */}
          <circle
            cx="160"
            cy="80"
            r="64"
            stroke="#FAF8F5"
            strokeOpacity="0.08"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="group-hover:stroke-[#7B9AC4] group-hover:stroke-opacity-35 transition-colors duration-500"
          />
          <circle
            cx="160"
            cy="80"
            r="48"
            stroke="#FAF8F5"
            strokeOpacity="0.14"
            strokeWidth="1"
            className="group-hover:stroke-[#8FB694] group-hover:stroke-opacity-45 transition-colors duration-500"
          />
          <circle
            cx="160"
            cy="80"
            r="32"
            stroke="url(#peo-sheen)"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            className="group-hover:stroke-[#E0BB52] group-hover:stroke-opacity-65 transition-colors duration-500"
          />

          {/* Central Glass Disc (Neutral + PRISM Overlay) */}
          <circle
            cx="160"
            cy="80"
            r="38"
            fill="url(#peo-field)"
            stroke="url(#peo-sheen)"
            strokeWidth="1"
            className="transition-transform duration-500 group-hover:scale-105"
            style={{ transformOrigin: "160px 80px" }}
          />
          <circle
            cx="160"
            cy="80"
            r="38"
            fill="url(#peo-prism-field)"
            stroke="url(#peo-prism-spectrum)"
            strokeWidth="1.5"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
            style={{ transformOrigin: "160px 80px" }}
          />

          {/* Team / Strengths Harmonic Network Lines with PRISM colors */}
          <line
            x1="160"
            y1="80"
            x2="90"
            y2="55"
            stroke="#FAF8F5"
            strokeOpacity="0.25"
            strokeWidth="1"
            className="group-hover:stroke-[#C16170] group-hover:stroke-opacity-70 transition-colors duration-500"
          />
          <line
            x1="160"
            y1="80"
            x2="230"
            y2="55"
            stroke="#FAF8F5"
            strokeOpacity="0.25"
            strokeWidth="1"
            className="group-hover:stroke-[#7B9AC4] group-hover:stroke-opacity-70 transition-colors duration-500"
          />
          <line
            x1="160"
            y1="80"
            x2="110"
            y2="115"
            stroke="#FAF8F5"
            strokeOpacity="0.2"
            strokeWidth="1"
            className="group-hover:stroke-[#A98AC4] group-hover:stroke-opacity-70 transition-colors duration-500"
          />
          <line
            x1="160"
            y1="80"
            x2="210"
            y2="115"
            stroke="#FAF8F5"
            strokeOpacity="0.2"
            strokeWidth="1"
            className="group-hover:stroke-[#8FB694] group-hover:stroke-opacity-70 transition-colors duration-500"
          />

          {/* Outer Satellite Glass Nodes with PRISM hues */}
          <circle
            cx="90"
            cy="55"
            r="16"
            fill="#FAF8F5"
            fillOpacity="0.07"
            stroke="#FAF8F5"
            strokeOpacity="0.3"
            strokeWidth="1"
            className="group-hover:fill-[#C16170] group-hover:fill-opacity-15 group-hover:stroke-[#C16170] group-hover:stroke-opacity-80 transition-all duration-500"
          />
          <circle
            cx="230"
            cy="55"
            r="16"
            fill="#FAF8F5"
            fillOpacity="0.07"
            stroke="#FAF8F5"
            strokeOpacity="0.3"
            strokeWidth="1"
            className="group-hover:fill-[#7B9AC4] group-hover:fill-opacity-15 group-hover:stroke-[#7B9AC4] group-hover:stroke-opacity-80 transition-all duration-500"
          />
          <circle
            cx="110"
            cy="115"
            r="12"
            fill="#FAF8F5"
            fillOpacity="0.05"
            stroke="#FAF8F5"
            strokeOpacity="0.2"
            strokeWidth="1"
            className="group-hover:fill-[#A98AC4] group-hover:fill-opacity-15 group-hover:stroke-[#A98AC4] group-hover:stroke-opacity-80 transition-all duration-500"
          />
          <circle
            cx="210"
            cy="115"
            r="12"
            fill="#FAF8F5"
            fillOpacity="0.05"
            stroke="#FAF8F5"
            strokeOpacity="0.2"
            strokeWidth="1"
            className="group-hover:fill-[#8FB694] group-hover:fill-opacity-15 group-hover:stroke-[#8FB694] group-hover:stroke-opacity-80 transition-all duration-500"
          />

          {/* Node Bright Centers */}
          <circle cx="90" cy="55" r="2.5" fill="#FFFFFF" fillOpacity="0.9" className="group-hover:fill-[#C16170] transition-colors duration-300" />
          <circle cx="230" cy="55" r="2.5" fill="#FFFFFF" fillOpacity="0.9" className="group-hover:fill-[#7B9AC4] transition-colors duration-300" />
          <circle cx="110" cy="115" r="2" fill="#FAF8F5" fillOpacity="0.8" className="group-hover:fill-[#A98AC4] transition-colors duration-300" />
          <circle cx="210" cy="115" r="2" fill="#FAF8F5" fillOpacity="0.8" className="group-hover:fill-[#8FB694] transition-colors duration-300" />

          {/* Conductor Core */}
          <circle cx="160" cy="80" r="4" fill="#FFFFFF" className="group-hover:fill-[#E0BB52] transition-colors duration-300" />
          <circle
            cx="160"
            cy="80"
            r="9"
            stroke="#FAF8F5"
            strokeOpacity="0.5"
            strokeWidth="1"
            className="group-hover:stroke-[#E0BB52] group-hover:stroke-opacity-80 transition-colors duration-300"
          />
        </svg>
      </div>
    );
  }

  // Business Focus: Multi-axis strategic prism / connected network matrix in soft frosted glass planes
  return (
    <div className="w-full h-36 sm:h-40 relative rounded-xl overflow-hidden bg-gradient-to-b from-warm-white/[0.05] to-warm-white/[0.01] border border-warm-white/[0.08] mb-6 flex items-center justify-center group-hover:border-warm-white/20 transition-all duration-500">
      <svg
        viewBox="0 0 320 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover select-none pointer-events-none"
      >
        <defs>
          {/* Angular frosted glass plane gradient */}
          <linearGradient id="biz-plane-1" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.24" />
            <stop offset="60%" stopColor="#E5E0D8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#D8D2C7" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="biz-plane-2" x1="80%" y1="0%" x2="20%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#E5E0D8" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#D8D2C7" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="biz-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" strokeOpacity="0.5" />
            <stop offset="100%" stopColor="#E5E0D8" strokeOpacity="0.08" />
          </linearGradient>

          {/* Vibrant Full PRISM Spectral Gradients for Business Graphic */}
          <linearGradient id="biz-prism-plane-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C16170" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#E0BB52" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#8FB694" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7B9AC4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="biz-prism-plane-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A98AC4" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#E0BB52" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C16170" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="biz-prism-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C16170" />
            <stop offset="25%" stopColor="#A98AC4" />
            <stop offset="50%" stopColor="#E0BB52" />
            <stop offset="75%" stopColor="#8FB694" />
            <stop offset="100%" stopColor="#7B9AC4" />
          </linearGradient>
        </defs>

        {/* Perspective Grid / Matrix Horizon */}
        <line x1="50" y1="125" x2="270" y2="125" stroke="#FAF8F5" strokeOpacity="0.1" strokeWidth="1" className="group-hover:stroke-[#8FB694] group-hover:stroke-opacity-35 transition-colors duration-500" />
        <line x1="70" y1="135" x2="250" y2="135" stroke="#FAF8F5" strokeOpacity="0.06" strokeWidth="1" className="group-hover:stroke-[#7B9AC4] group-hover:stroke-opacity-25 transition-colors duration-500" />

        {/* Perspective Convergence Rays */}
        <line x1="160" y1="35" x2="60" y2="135" stroke="#FAF8F5" strokeOpacity="0.1" strokeDasharray="3 3" className="group-hover:stroke-[#C16170] group-hover:stroke-opacity-35 transition-colors duration-500" />
        <line x1="160" y1="35" x2="260" y2="135" stroke="#FAF8F5" strokeOpacity="0.1" strokeDasharray="3 3" className="group-hover:stroke-[#7B9AC4] group-hover:stroke-opacity-35 transition-colors duration-500" />
        <line x1="160" y1="35" x2="160" y2="135" stroke="#FAF8F5" strokeOpacity="0.12" strokeDasharray="3 3" className="group-hover:stroke-[#E0BB52] group-hover:stroke-opacity-40 transition-colors duration-500" />

        {/* Strategic Overlapping Glass Polyhedra / Planes (Neutral) */}
        <polygon
          points="160,35 240,75 160,120 80,75"
          fill="url(#biz-plane-1)"
          stroke="url(#biz-sheen)"
          strokeWidth="1"
          className="transition-transform duration-500 group-hover:scale-105"
          style={{ transformOrigin: "160px 75px" }}
        />
        {/* PRISM Spectral Polyhedra Plane Overlay on Hover */}
        <polygon
          points="160,35 240,75 160,120 80,75"
          fill="url(#biz-prism-plane-1)"
          stroke="url(#biz-prism-sheen)"
          strokeWidth="1.5"
          className="opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
          style={{ transformOrigin: "160px 75px" }}
        />

        <polygon
          points="160,50 220,80 160,110 100,80"
          fill="url(#biz-plane-2)"
          stroke="#FAF8F5"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <polygon
          points="160,50 220,80 160,110 100,80"
          fill="url(#biz-prism-plane-2)"
          stroke="url(#biz-prism-sheen)"
          strokeOpacity="0.8"
          strokeWidth="1"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Dynamic Matrix Nodes with PRISM spectral accents */}
        <circle cx="160" cy="35" r="3.5" fill="#FFFFFF" className="group-hover:fill-[#C16170] transition-colors duration-300" />
        <circle cx="80" cy="75" r="2.5" fill="#FAF8F5" fillOpacity="0.8" className="group-hover:fill-[#A98AC4] transition-colors duration-300" />
        <circle cx="240" cy="75" r="2.5" fill="#FAF8F5" fillOpacity="0.8" className="group-hover:fill-[#7B9AC4] transition-colors duration-300" />
        <circle cx="160" cy="120" r="2.5" fill="#FAF8F5" fillOpacity="0.8" className="group-hover:fill-[#8FB694] transition-colors duration-300" />

        {/* Central Strategic Vertex */}
        <circle cx="160" cy="77" r="3" fill="#FFFFFF" className="group-hover:fill-[#E0BB52] transition-colors duration-300" />
        <circle
          cx="160"
          cy="77"
          r="8"
          stroke="#FAF8F5"
          strokeOpacity="0.4"
          strokeWidth="1"
          className="group-hover:stroke-[#E0BB52] group-hover:stroke-opacity-80 transition-colors duration-300"
        />
      </svg>
    </div>
  );
}

