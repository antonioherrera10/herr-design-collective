import Link from "next/link";
import { CONTENT } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { footer } = CONTENT;

  return (
    <footer className="w-full bg-[#070707] border-t border-warm-white/[0.06] text-warm-white transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-16 border-b border-warm-white/[0.06]">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <div>
              <Link
                href="/"
                className="inline-block mb-4 transition-opacity hover:opacity-85"
                aria-label="HERR Design Collective Home"
              >
                <img
                  src="https://res.cloudinary.com/df6nnksd2/image/upload/v1787004496/HERR_Logo_Lang.svg"
                  alt="HERR Design Collective"
                  className="h-4 sm:h-4.5 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-platinum/70 max-w-sm leading-relaxed mb-4 font-light">
                Creative business design consultancy working at the intersection
                of strategy, relationships and design.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-custom font-semibold mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-platinum/80">
              {footer.navigation.map((item) => {
                const targetHref = item.href.startsWith("#") ? `/${item.href}` : item.href;
                return (
                  <li key={item.label}>
                    <Link
                      href={targetHref}
                      className="hover:text-warm-white transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="flex flex-col items-start text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-custom font-semibold mb-5">
              Contact
            </h4>
            
            {/* Plain Email Link & Info with uniform font size */}
            <div className="flex flex-col gap-3 mb-6 items-start text-left">
              <a
                href={`mailto:${footer.contact.email}`}
                className="text-sm text-platinum/85 hover:text-warm-white transition-colors break-all text-left"
              >
                {footer.contact.email}
              </a>

              {/* Address and UID */}
              <div className="flex flex-col gap-1.5 text-sm text-platinum/80 font-light items-start text-left">
                <span className="leading-relaxed">
                  <strong className="font-normal text-stone-custom">Address:</strong> {footer.contact.address}
                </span>
                <span>
                  <strong className="font-normal text-stone-custom">UID:</strong> {footer.contact.uid}
                </span>
              </div>
            </div>

            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-custom font-semibold mb-3">
              Social
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-platinum/80 items-start text-left">
              {footer.social.map((item) => (
                <li key={item.label} className="text-left">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-warm-white transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-custom" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright on left, Pages / Legal links on right without title */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-custom">
          <div>{footer.copyright}</div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            {footer.pages.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-warm-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
