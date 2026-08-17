import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Imprint (Impressum) · HERR Design Collective",
  description: "Company details and legal imprint for HERR Design Collective GmbH, Zurich.",
};

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-ink text-warm-white pt-32 pb-24 px-6 sm:px-8">
      <div className="w-full max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-custom hover:text-warm-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <header className="mb-12 border-b border-warm-white/10 pb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-stone-custom block mb-3 font-semibold">
            Corporate Disclosure
          </span>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-warm-white mb-4">
            Imprint / Impressum
          </h1>
          <p className="text-sm text-platinum/70">
            Information according to Swiss law
          </p>
        </header>

        <div className="flex flex-col gap-8 text-platinum/80 font-light leading-relaxed text-sm sm:text-base">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              Entity
            </h2>
            <p className="text-warm-white font-normal text-base">
              HERR Design Collective GmbH
            </p>
            <p>
              Hadlaubstrasse 142
              <br />
              8006 Zürich
              <br />
              Switzerland
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              Direct Contact
            </h2>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@herrdesigncollective.com"
                className="text-warm-white hover:underline"
              >
                contact@herrdesigncollective.com
              </a>
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              Representation
            </h2>
            <p>
              Antonio Herrera, Founder &amp; Creative Business Architect
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              Commercial Register
            </h2>
            <p>
              Canton of Zürich, Switzerland
              <br />
              Registration: HERR Design Collective GmbH
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              Disclaimer
            </h2>
            <p>
              The author assumes no liability for the topicality, correctness,
              completeness, or quality of the information provided. Liability
              claims against the author for material or immaterial damage caused
              by the use or non-use of the information provided are excluded.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
