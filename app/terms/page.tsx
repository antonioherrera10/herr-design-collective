import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service · HERR Design Collective",
  description: "Terms of service and engagement conditions for HERR Design Collective GmbH, Zurich.",
};

export default function TermsPage() {
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
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-warm-white mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-platinum/70">
            Last updated: February 2026 · Zurich, Switzerland
          </p>
        </header>

        <div className="flex flex-col gap-8 text-platinum/80 font-light leading-relaxed text-sm sm:text-base">
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              1. Scope & Application
            </h2>
            <p>
              These Terms of Service govern the advisory, architectural, and design
              consultancy services provided by HERR Design Collective GmbH (hereinafter
              &quot;HERR&quot;) to our clients and partners.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              2. Engagements & Proposals
            </h2>
            <p>
              Every client engagement is defined through a bespoke scope proposal detailing
              deliverables, specialist collective assembly, timelines, and commercial
              arrangements. Work begins upon formal written approval or mutual agreement.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              3. Intellectual Property & Deliverables
            </h2>
            <p>
              Unless otherwise agreed in a specific client statement of work, all final
              commissioned deliverables transfer to the client upon full settlement of
              invoices, while foundational methodologies, proprietary frameworks, and tools
              remain the intellectual property of HERR Design Collective GmbH.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              4. Confidentiality & Trust
            </h2>
            <p>
              HERR operates under strict Swiss confidentiality principles. We treat all client
              strategic data, organizational frameworks, and non-public business information
              with rigorous discretion and security.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms and all related agreements shall be governed by and construed in
              accordance with substantive Swiss law. The exclusive place of jurisdiction is
              Zürich, Switzerland.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
