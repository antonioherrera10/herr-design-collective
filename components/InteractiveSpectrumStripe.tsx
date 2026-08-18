"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface SpectrumStripeProps {
  className?: string;
}

export function InteractiveSpectrumStripe({ className = "" }: SpectrumStripeProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mouseRatio, setMouseRatio] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width > 0) {
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      setMouseRatio(ratio);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseRatio(null);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute top-0 left-0 right-0 h-[6px] sm:h-[8px] w-full z-20 cursor-crosshair group ${className}`}
      aria-label="Interactive PRISM spectrum stripe"
    >
      {/* Visual Stripe Line */}
      <div className="relative w-full h-[2.5px] sm:h-[3px] overflow-visible">
        {/* Base Multi-Color Gradient Stripe */}
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{
            transformOrigin: "left center",
            background:
              "linear-gradient(90deg, #C16170 0%, #A98AC4 25%, #E0BB52 50%, #8FB694 75%, #7B9AC4 100%)",
          }}
          className="w-full h-full shadow-[0_0_8px_rgba(224,187,82,0.15)] group-hover:h-[4px] transition-all duration-300"
        />

        {/* Dynamic Glow Cursor Light Following Mouse */}
        {isHovered && mouseRatio !== null && !shouldReduceMotion && (
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none transition-transform duration-75 ease-out"
            style={{ left: `${mouseRatio * 100}%` }}
          >
            {/* Core Spectrum Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-warm-white shadow-[0_0_12px_#FAF4E1,0_0_24px_rgba(224,187,82,0.8)] border border-white" />
            {/* Extended Aura */}
            <div className="absolute -inset-2 rounded-full bg-white/20 blur-sm animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
