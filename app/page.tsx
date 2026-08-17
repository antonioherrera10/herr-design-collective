import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";

export default function HomePage() {
  const { hero } = CONTENT;

  return (
    <main className="w-full bg-ink text-warm-white relative overflow-hidden flex flex-col justify-center min-h-[90vh] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background Radial Ambient Accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 25%, #1A1815 0%, transparent 70%),
            radial-gradient(circle at 20% 70%, rgba(193, 100, 115, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(123, 154, 196, 0.08) 0%, transparent 40%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Overlay subtle mesh grid effect */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(242,239,233,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(242,239,233,0.015)_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Spectrum Motif Bar */}
        <div
          className="h-[3px] w-24 rounded-full overflow-hidden mb-10"
          style={{
            background:
              "linear-gradient(90deg, #C16170 0%, #C16170 20%, #A98AC4 20%, #A98AC4 40%, #E0BB52 40%, #E0BB52 60%, #8FB694 60%, #8FB694 80%, #7B9AC4 80%, #7B9AC4 100%)",
          }}
          aria-hidden="true"
        />

        {/* Small Tracked Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-platinum opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-platinum" />
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-platinum">
            Zurich · Creative Business Design
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.08] text-warm-white max-w-4xl mb-8">
          Moving people, brands and organisations forward.
        </h1>

        {/* Hero Subline */}
        <p className="text-base sm:text-xl text-platinum/80 font-light leading-relaxed max-w-2xl mb-12">
          {hero.subline}
        </p>

        {/* Hero CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md">
          <a
            href={hero.primaryCta.href}
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-warm-white hover:bg-white text-ink font-semibold text-xs uppercase tracking-[0.18em] px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>{hero.primaryCta.label}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Anchor targets so navigation links resolve cleanly */}
      <div id="method" className="scroll-mt-32" aria-hidden="true" />
      <div id="services" className="scroll-mt-32" aria-hidden="true" />
      <div id="cases" className="scroll-mt-32" aria-hidden="true" />
      <div id="collective" className="scroll-mt-32" aria-hidden="true" />
    </main>
  );
}
