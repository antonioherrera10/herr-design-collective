import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy · HERR Design Collective",
  description: "Privacy policy and data protection principles for HERR Design Collective GmbH.",
};

export default function PrivacyPage() {
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
            Privacy & Trust
          </span>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-warm-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-platinum/70">
            Compliant with the Swiss Federal Act on Data Protection (FADP) and GDPR
          </p>
        </header>

        <div className="flex flex-col gap-8 text-platinum/80 font-light leading-relaxed text-sm sm:text-base">
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              1. Overview
            </h2>
            <p>
              HERR Design Collective GmbH values the privacy of every individual who visits
              our website or enters into dialogue with us. We adhere to the highest Swiss and
              international data protection standards.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              2. Data We Collect
            </h2>
            <p>
              We do not track you across the web. We only process personal information that you
              explicitly provide to us when contacting us via email, scheduling conversations,
              or entering into an advisory partnership.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              3. Purpose of Processing
            </h2>
            <p>
              Any data collected is used solely to respond to inquiries, facilitate strategic
              consultations, manage contractual deliverables, and maintain professional
              correspondence.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-medium text-warm-white tracking-wide">
              4. Contact for Data Protection
            </h2>
            <p>
              For any questions regarding your personal data or to request deletion, please contact:
              <br />
              <a
                href="mailto:contact@herrdesigncollective.com"
                className="text-warm-white hover:underline mt-1 inline-block"
              >
                contact@herrdesigncollective.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
