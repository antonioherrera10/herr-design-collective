"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CONTENT } from "@/lib/content";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for subtle header border/bg enhancement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = CONTENT.footer.navigation;
  const heroCta = CONTENT.hero.cta;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-ink/90 backdrop-blur-md border-b border-warm-white/10 py-4"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-85 focus:outline-none"
            aria-label="HERR Design Collective Home"
          >
            <img
              src="https://res.cloudinary.com/df6nnksd2/image/upload/v1787004496/HERR_Logo_Lang.svg"
              alt="HERR Design Collective"
              className="h-4 sm:h-4.5 md:h-5 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-platinum/75"
          >
            {navLinks.map((link) => {
              const targetHref = link.href.startsWith("#") ? `/${link.href}` : link.href;
              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  className="hover:text-warm-white transition-colors duration-200 py-1 relative group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-warm-white transition-all duration-200 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={heroCta.href}
              className="inline-flex items-center justify-center gap-2 bg-warm-white hover:bg-white text-ink text-xs uppercase tracking-[0.16em] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{heroCta.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button (Min 44px Touch Target) */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full text-warm-white hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-ink flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between w-full border-b border-warm-white/10 pb-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
              aria-label="HERR Design Collective Home"
            >
              <img
                src="https://res.cloudinary.com/df6nnksd2/image/upload/v1787004496/HERR_Logo_Lang.svg"
                alt="HERR Design Collective"
                className="h-4 sm:h-4.5 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-11 h-11 rounded-full text-warm-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 my-auto py-8">
            {navLinks.map((link, index) => {
              const targetHref = link.href.startsWith("#") ? `/${link.href}` : link.href;
              return (
                <Link
                  key={link.label}
                  href={targetHref}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl sm:text-3xl font-light text-warm-white hover:text-platinum transition-colors py-2 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs uppercase tracking-widest text-stone-custom tabular-nums">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Footer & CTA */}
          <div className="flex flex-col gap-4 pt-6 border-t border-warm-white/10">
            <a
              href={heroCta.href}
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-warm-white text-ink text-sm uppercase tracking-[0.16em] font-semibold py-4 rounded-full transition-all text-center"
            >
              <span>{heroCta.label}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="text-center text-xs text-stone-custom tracking-wider pt-2">
              Zurich, Switzerland · contact@herrdesigncollective.com
            </div>
          </div>
        </div>
      )}
    </>
  );
}
