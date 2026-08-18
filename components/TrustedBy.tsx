"use client";

import { useState } from "react";
import { CONTENT, type Partner } from "@/lib/content";

function PartnerItem({ partner }: { partner: Partner }) {
  const [hasError, setHasError] = useState(false);
  const scale = partner.scale ?? 1;
  const heightMobile = 20 * scale;
  const heightDesktop = 24 * scale;

  // 2x pixel height for Cloudinary transformation
  const h2x = partner.logoId === "zhdk" ? 96 : Math.round(24 * 2 * scale);
  const txSegment = partner.tx ? `${partner.tx}/` : "";
  const src = `https://res.cloudinary.com/df6nnksd2/image/upload/f_auto,q_auto/${txSegment}h_${h2x}/${partner.logoId}`;

  if (hasError) {
    return (
      <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-custom hover:text-warm-white transition-colors duration-300 select-none whitespace-nowrap">
        {partner.name}
      </span>
    );
  }

  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={
        {
          "--logo-h-mobile": `${heightMobile}px`,
          "--logo-h-desktop": `${heightDesktop}px`,
        } as React.CSSProperties
      }
    >
      <img
        src={src}
        alt={partner.name}
        loading="lazy"
        onError={() => setHasError(true)}
        className="h-[var(--logo-h-mobile)] sm:h-[var(--logo-h-desktop)] w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 select-none"
        style={
          partner.noFilter
            ? undefined
            : {
                filter: "brightness(0) invert(1)",
              }
        }
      />
    </div>
  );
}

export function TrustedBy() {
  const { trustedBy } = CONTENT;

  return (
    <section
      aria-label="Trusted by partners"
      className="w-full bg-ink py-16 sm:py-20 md:py-24 px-6 sm:px-8 border-t border-warm-white/5"
    >
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center text-center">
        {/* Mini-label */}
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-custom font-medium mb-10 sm:mb-12">
          {trustedBy.label}
        </span>

        {/* Logos Container: 1 row at >= 1024px with clamp gap, wrapping below 1024px */}
        <div
          className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center max-w-[1280px]"
          style={{
            columnGap: "clamp(28px, 3vw, 56px)",
            rowGap: "1.75rem",
          }}
        >
          {trustedBy.partners.map((partner) => (
            <PartnerItem key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
