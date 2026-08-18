import { ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";
import { TrustedBy } from "@/components/TrustedBy";
import { Stakes } from "@/components/Stakes";
import { ProofStrip } from "@/components/ProofStrip";
import { Empathy } from "@/components/Empathy";
import { ValueProposition } from "@/components/ValueProposition";
import { Guide } from "@/components/Guide";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Method } from "@/components/Method";
import { Collective } from "@/components/Collective";
import { Cases } from "@/components/Cases";
import { Plan } from "@/components/Plan";
import { AboutHerr } from "@/components/AboutHerr";
import { FinalCta } from "@/components/FinalCta";
import { HumanArchitectureGraphic } from "@/components/HumanArchitectureGraphic";

export default function HomePage() {
  const { hero } = CONTENT;

  return (
    <div className="w-full bg-ink text-warm-white font-sans selection:bg-warm-white selection:text-ink">
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center relative overflow-hidden px-6 sm:px-8 py-24 sm:py-32 md:py-40"
      >
        {/* Human Architecture Vector Blueprint Graphic (Refined Atmospheric Layer) */}
        <HumanArchitectureGraphic />

        {/* Subtle Ambient Radial Gradients */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 30%, #1A1815 0%, transparent 70%),
              radial-gradient(circle at 15% 75%, rgba(193, 100, 115, 0.06) 0%, transparent 45%),
              radial-gradient(circle at 85% 85%, rgba(123, 154, 196, 0.06) 0%, transparent 45%)
            `,
          }}
          aria-hidden="true"
        />

        {/* Subtle Geometric Background Grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(242,239,233,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(242,239,233,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content Container */}
        <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          {/* Five-Color Spectrum Line Motif */}
          <div
            className="h-[3px] w-24 rounded-full overflow-hidden mb-10"
            style={{
              background:
                "linear-gradient(90deg, #C16170 0%, #C16170 20%, #A98AC4 20%, #A98AC4 40%, #E0BB52 40%, #E0BB52 60%, #8FB694 60%, #8FB694 80%, #7B9AC4 80%, #7B9AC4 100%)",
            }}
            aria-hidden="true"
          />

          {/* Location & Practice Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-platinum opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-platinum" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-platinum">
              Zurich · Creative Business Design
            </span>
          </div>

          {/* Headline (H1) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-warm-white max-w-4xl mb-8">
            {hero.headline}
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg md:text-xl text-platinum/85 font-light leading-relaxed max-w-2xl mb-12">
            {hero.subline}
          </p>

          {/* Single CTA Button (Minimum 44px touch target) */}
          <div className="flex items-center justify-center w-full">
            <a
              href={hero.cta.href}
              className="min-h-[48px] w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-warm-white hover:bg-white text-ink font-semibold text-xs uppercase tracking-[0.18em] px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{hero.cta.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Stakes Section */}
      <Stakes />

      {/* Proof Strip Section */}
      <ProofStrip />

      {/* Empathy Section */}
      <Empathy />

      {/* Value Proposition Section */}
      <ValueProposition />

      {/* Guide Section */}
      <Guide />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Section */}
      <Services />

      {/* Method Section */}
      <Method />

      {/* Collective Section */}
      <Collective />

      {/* Cases Section */}
      <Cases />

      {/* Plan Section */}
      <Plan />

      {/* About HERR Section */}
      <AboutHerr />

      {/* Final CTA Section */}
      <FinalCta />
    </div>
  );
}
