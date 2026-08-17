"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <span className="text-xs uppercase tracking-[0.3em] text-stone-custom mb-4 font-semibold">
        System Notice
      </span>
      <h1 className="text-3xl sm:text-4xl font-light text-warm-white mb-6">
        An unexpected error occurred.
      </h1>
      <p className="text-sm text-platinum/75 max-w-md mb-8 font-light">
        Please try refreshing the page or return to the main overview.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="bg-warm-white text-ink text-xs uppercase tracking-[0.16em] font-semibold px-6 py-3 rounded-full hover:bg-white transition-all cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border border-warm-white/20 text-warm-white text-xs uppercase tracking-[0.16em] font-medium px-6 py-3 rounded-full hover:bg-white/5 transition-all"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
