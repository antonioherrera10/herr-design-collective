"use client";

import { motion } from "motion/react";

interface PillarGraphicProps {
  index: number;
  isHovered: boolean;
  meta: {
    colorHex: string;
    colorRgb: string;
    label: string;
  };
  shouldReduceMotion: boolean | null;
}

export function PillarGraphic({
  index,
  isHovered,
  meta,
  shouldReduceMotion,
}: PillarGraphicProps) {
  const { colorHex, colorRgb } = meta;

  return (
    <div
      className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl border flex items-center justify-center overflow-hidden transition-all duration-500 select-none"
      style={{
        backgroundColor: isHovered
          ? `rgba(${colorRgb}, 0.12)`
          : `rgba(${colorRgb}, 0.04)`,
        borderColor: isHovered
          ? `rgba(${colorRgb}, 0.45)`
          : `rgba(${colorRgb}, 0.15)`,
        boxShadow: isHovered
          ? `0 0 24px -4px rgba(${colorRgb}, 0.3), inset 0 0 16px rgba(${colorRgb}, 0.1)`
          : `inset 0 0 12px rgba(0, 0, 0, 0.2)`,
      }}
      aria-hidden="true"
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, rgba(${colorRgb}, ${
            isHovered ? 0.35 : 0.12
          }) 0%, transparent 70%)`,
        }}
      />

      {/* Pillar 0: Connecting the Dots (Constellation & Dynamic Network) */}
      {index === 0 && (
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full p-2.5 transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
        >
          <defs>
            <linearGradient id={`grad-0-${index}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={colorHex} stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Dynamic connecting lines */}
          <motion.g
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [0, 360],
                  }
            }
            transition={{
              duration: isHovered ? 20 : 35,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "60px 60px" }}
          >
            {/* Outer dotted orbit */}
            <circle
              cx="60"
              cy="60"
              r="44"
              fill="none"
              stroke={colorHex}
              strokeWidth="1"
              strokeDasharray="3 4"
              strokeOpacity={isHovered ? "0.45" : "0.2"}
            />
            <circle
              cx="60"
              cy="60"
              r="26"
              fill="none"
              stroke={colorHex}
              strokeWidth="1"
              strokeDasharray="2 3"
              strokeOpacity={isHovered ? "0.6" : "0.3"}
            />

            {/* Connecting network lines */}
            <line
              x1="60"
              y1="60"
              x2="30"
              y2="34"
              stroke={colorHex}
              strokeWidth={isHovered ? "1.5" : "1"}
              strokeOpacity={isHovered ? "0.7" : "0.35"}
            />
            <line
              x1="60"
              y1="60"
              x2="90"
              y2="38"
              stroke={colorHex}
              strokeWidth={isHovered ? "1.5" : "1"}
              strokeOpacity={isHovered ? "0.7" : "0.35"}
            />
            <line
              x1="60"
              y1="60"
              x2="88"
              y2="84"
              stroke={colorHex}
              strokeWidth={isHovered ? "1.5" : "1"}
              strokeOpacity={isHovered ? "0.7" : "0.35"}
            />
            <line
              x1="60"
              y1="60"
              x2="34"
              y2="86"
              stroke={colorHex}
              strokeWidth={isHovered ? "1.5" : "1"}
              strokeOpacity={isHovered ? "0.7" : "0.35"}
            />
            <line
              x1="30"
              y1="34"
              x2="90"
              y2="38"
              stroke={colorHex}
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity={isHovered ? "0.5" : "0.2"}
            />
            <line
              x1="90"
              y1="38"
              x2="88"
              y2="84"
              stroke={colorHex}
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity={isHovered ? "0.5" : "0.2"}
            />
            <line
              x1="88"
              y1="84"
              x2="34"
              y2="86"
              stroke={colorHex}
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity={isHovered ? "0.5" : "0.2"}
            />
            <line
              x1="34"
              y1="86"
              x2="30"
              y2="34"
              stroke={colorHex}
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity={isHovered ? "0.5" : "0.2"}
            />

            {/* Satellite nodes */}
            <circle cx="30" cy="34" r={isHovered ? "3.5" : "2.5"} fill={colorHex} />
            <circle cx="90" cy="38" r={isHovered ? "3" : "2"} fill="#F2EFE9" />
            <circle cx="88" cy="84" r={isHovered ? "3.5" : "2.5"} fill={colorHex} />
            <circle cx="34" cy="86" r={isHovered ? "3" : "2"} fill="#F2EFE9" />
          </motion.g>

          {/* Central hub with pulsing aura */}
          <motion.circle
            cx="60"
            cy="60"
            r={isHovered ? "9" : "7"}
            fill={`rgba(${colorRgb}, 0.25)`}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: isHovered ? [1, 1.25, 1] : [1, 1.12, 1],
                  }
            }
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />
          <circle cx="60" cy="60" r="4.5" fill={colorHex} />
          <circle cx="60" cy="60" r="2" fill="#FFFFFF" />
        </svg>
      )}

      {/* Pillar 1: Individual Solutions (Relationships & Orbital Focal Rings) */}
      {index === 1 && (
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full p-2.5 transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
        >
          {/* Outer Ring 1 */}
          <motion.ellipse
            cx="60"
            cy="60"
            rx="46"
            ry="20"
            fill="none"
            stroke={colorHex}
            strokeWidth={isHovered ? "1.4" : "1"}
            strokeOpacity={isHovered ? "0.75" : "0.35"}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [25, 385],
                  }
            }
            transition={{
              duration: isHovered ? 14 : 24,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />

          {/* Counter-rotating Ring 2 */}
          <motion.ellipse
            cx="60"
            cy="60"
            rx="46"
            ry="20"
            fill="none"
            stroke={colorHex}
            strokeWidth={isHovered ? "1.4" : "1"}
            strokeOpacity={isHovered ? "0.75" : "0.35"}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [-35, -395],
                  }
            }
            transition={{
              duration: isHovered ? 18 : 28,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />

          {/* Third stabilizing horizontal ellipse */}
          <motion.ellipse
            cx="60"
            cy="60"
            rx="34"
            ry="14"
            fill="none"
            stroke="#F2EFE9"
            strokeWidth="0.9"
            strokeDasharray="3 3"
            strokeOpacity={isHovered ? "0.6" : "0.25"}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [90, 450],
                  }
            }
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />

          {/* Center lens & core */}
          <circle
            cx="60"
            cy="60"
            r={isHovered ? "12" : "9"}
            fill={`rgba(${colorRgb}, 0.2)`}
          />
          <circle
            cx="60"
            cy="60"
            r="5"
            fill="none"
            stroke={colorHex}
            strokeWidth="1.5"
          />
          <circle cx="60" cy="60" r="2.5" fill="#FFFFFF" />
        </svg>
      )}

      {/* Pillar 2: Design Strategy (Cartesian Grid, Vectors & Golden Ratio Spiral) */}
      {index === 2 && (
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full p-2.5 transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
        >
          {/* Isometric matrix lines */}
          <g opacity={isHovered ? "0.6" : "0.25"}>
            <line x1="20" y1="60" x2="100" y2="60" stroke={colorHex} strokeWidth="0.8" />
            <line x1="60" y1="20" x2="60" y2="100" stroke={colorHex} strokeWidth="0.8" />
            <circle cx="60" cy="60" r="38" fill="none" stroke={colorHex} strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="60" cy="60" r="22" fill="none" stroke={colorHex} strokeWidth="0.8" strokeDasharray="2 2" />
          </g>

          {/* Rotating Axis Compass */}
          <motion.g
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [0, 360],
                  }
            }
            transition={{
              duration: isHovered ? 16 : 28,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "60px 60px" }}
          >
            {/* Diamond Frame */}
            <polygon
              points="60,26 94,60 60,94 26,60"
              fill="none"
              stroke={colorHex}
              strokeWidth={isHovered ? "1.6" : "1.2"}
              strokeOpacity={isHovered ? "0.85" : "0.45"}
            />
            {/* Square Inset */}
            <rect
              x="42"
              y="42"
              width="36"
              height="36"
              fill="none"
              stroke="#F2EFE9"
              strokeWidth="0.9"
              strokeOpacity={isHovered ? "0.6" : "0.25"}
            />
            {/* Coordinate Node Points */}
            <circle cx="60" cy="26" r="2.5" fill={colorHex} />
            <circle cx="94" cy="60" r="2.5" fill={colorHex} />
            <circle cx="60" cy="94" r="2.5" fill={colorHex} />
            <circle cx="26" cy="60" r="2.5" fill={colorHex} />
          </motion.g>

          {/* Focal Golden Pivot */}
          <circle cx="60" cy="60" r="4.5" fill={colorHex} />
          <circle cx="60" cy="60" r="1.8" fill="#FFFFFF" />
        </svg>
      )}

      {/* Pillar 3: Spatial Execution (Isometric 3D Facets & Architectural Folding Planes) */}
      {index === 3 && (
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full p-2.5 transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
        >
          <motion.g
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: isHovered ? [-3, 3, -3] : [-1.5, 1.5, -1.5],
                  }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Top Plane */}
            <polygon
              points="60,25 90,42 60,59 30,42"
              fill={`rgba(${colorRgb}, ${isHovered ? 0.35 : 0.18})`}
              stroke={colorHex}
              strokeWidth={isHovered ? "1.6" : "1.1"}
              strokeOpacity={isHovered ? "0.9" : "0.5"}
            />
            {/* Left Plane */}
            <polygon
              points="30,42 60,59 60,95 30,78"
              fill={`rgba(${colorRgb}, ${isHovered ? 0.22 : 0.1})`}
              stroke={colorHex}
              strokeWidth={isHovered ? "1.6" : "1.1"}
              strokeOpacity={isHovered ? "0.8" : "0.4"}
            />
            {/* Right Plane */}
            <polygon
              points="60,59 90,42 90,78 60,95"
              fill={`rgba(${colorRgb}, ${isHovered ? 0.45 : 0.26})`}
              stroke={colorHex}
              strokeWidth={isHovered ? "1.6" : "1.1"}
              strokeOpacity={isHovered ? "0.95" : "0.6"}
            />

            {/* Inner Floating Coordinate Matrix */}
            <line
              x1="60"
              y1="59"
              x2="60"
              y2="25"
              stroke="#F2EFE9"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity={isHovered ? "0.7" : "0.3"}
            />
            <line
              x1="60"
              y1="59"
              x2="30"
              y2="78"
              stroke="#F2EFE9"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity={isHovered ? "0.7" : "0.3"}
            />
            <line
              x1="60"
              y1="59"
              x2="90"
              y2="78"
              stroke="#F2EFE9"
              strokeWidth="0.8"
              strokeDasharray="2 2"
              strokeOpacity={isHovered ? "0.7" : "0.3"}
            />

            {/* Vertices */}
            <circle cx="60" cy="59" r="3" fill="#FFFFFF" />
            <circle cx="60" cy="25" r="2.5" fill={colorHex} />
            <circle cx="90" cy="42" r="2" fill={colorHex} />
            <circle cx="30" cy="42" r="2" fill={colorHex} />
            <circle cx="60" cy="95" r="2.5" fill={colorHex} />
          </motion.g>
        </svg>
      )}

      {/* Pillar 4: Positivity (Radiant Dispersion Waves & Beacon Pulsar) */}
      {index === 4 && (
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full p-2.5 transition-transform duration-500"
          style={{ transform: isHovered ? "scale(1.06)" : "scale(1)" }}
        >
          {/* Expanding Radiant Wave 1 */}
          <motion.circle
            cx="60"
            cy="60"
            r="44"
            fill="none"
            stroke={colorHex}
            strokeWidth={isHovered ? "1.4" : "1"}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [0.85, 1.08, 0.85],
                    opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.5, 0.2],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />

          {/* Radiant Wave 2 */}
          <motion.circle
            cx="60"
            cy="60"
            r="30"
            fill="none"
            stroke={colorHex}
            strokeWidth="1.2"
            strokeDasharray="3 3"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1.08, 0.88, 1.08],
                    opacity: isHovered ? [0.7, 0.35, 0.7] : [0.4, 0.2, 0.4],
                  }
            }
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "60px 60px" }}
          />

          {/* Radiating Beacon Rays */}
          <motion.g
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: [0, 180],
                  }
            }
            transition={{
              duration: isHovered ? 12 : 24,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "60px 60px" }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line
                key={angle}
                x1="60"
                y1="60"
                x2={60 + 38 * Math.cos((angle * Math.PI) / 180)}
                y2={60 + 38 * Math.sin((angle * Math.PI) / 180)}
                stroke={colorHex}
                strokeWidth="0.8"
                strokeOpacity={isHovered ? "0.6" : "0.25"}
              />
            ))}
          </motion.g>

          {/* Central Radiant Star */}
          <circle
            cx="60"
            cy="60"
            r={isHovered ? "14" : "10"}
            fill={`rgba(${colorRgb}, 0.25)`}
          />
          <circle cx="60" cy="60" r="5" fill={colorHex} />
          <circle cx="60" cy="60" r="2.2" fill="#FFFFFF" />
        </svg>
      )}
    </div>
  );
}
