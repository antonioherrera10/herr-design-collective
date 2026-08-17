"use client";

import { useState } from "react";
import { CONTENT, type Partner } from "@/lib/content";

function PartnerItem({ partner }: { partner: Partner }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-custom hover:text-warm-white transition-colors duration-300 select-none whitespace-nowrap">
        {partner.name}
      </span>
    );
  }

  return (
    <img
      src={`https://res.cloudinary.com/df6nnksd2/image/upload/f_auto,q_auto,h_48/${partner.logoId}`}
      alt={partner.name}
      loading="lazy"
      onError={() => setHasError(true)}
      className="h-5 sm:h-6 w-auto object-contain opacity-50 hover:opacity-90 transition-opacity duration-300 select-none"
      style={{
        filter: "brightness(0) invert(1)",
      }}
    />
  );
}

export function TrustedBy() {
  const { trustedBy } = CONTENT;

  return (
    <section
      aria-label="Trusted by partners"
      className="w-full bg-ink py-16 sm:py-20 md:py-24 px-6 sm:px-8 border-t border-warm-white/5"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Mini-label */}
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-custom font-medium mb-10 sm:mb-12">
          {trustedBy.label}
        </span>

        {/* Logos Container */}
        <div className="w-full flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-12 md:gap-x-16 gap-y-7 sm:gap-y-8 max-w-5xl">
          {trustedBy.partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <PartnerItem partner={partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
