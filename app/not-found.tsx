import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <span className="text-xs uppercase tracking-[0.3em] text-stone-custom mb-4 font-semibold">
        404 · Page Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-light text-warm-white mb-6">
        This space does not exist.
      </h1>
      <p className="text-sm text-platinum/75 max-w-md mb-8 font-light">
        The requested page could not be located. Return to the main overview to
        explore HERR Design Collective.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-warm-white text-ink text-xs uppercase tracking-[0.16em] font-semibold px-6 py-3 rounded-full hover:bg-white transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return Home</span>
      </Link>
    </main>
  );
}
