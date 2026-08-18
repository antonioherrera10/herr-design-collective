import Link from "next/link";
import { CONTENT } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const { footer } = CONTENT;

  return (
    <footer className="w-full bg-surface-custom border-t border-warm-white/10 text-warm-white transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-16 border-b border-warm-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-block mb-4 transition-opacity hover:opacity-85"
                aria-label="HERR Design Collective Home"
              >
                <img
                  src="https://res.cloudinary.com/df6nnksd2/image/upload/v1787004496/HERR_Logo_Lang.svg"
                  alt="HERR Design Collective"
                  className="h-5 sm:h-6 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-platinum/70 max-w-sm leading-relaxed mb-6 font-light">
                Creative business design consultancy working at the intersection
                of strategy, relationships and design in Zurich, Switzerland.
              </p>
            </div>
            <div className="text-xs text-stone-custom tracking-wider">
              {footer.contact.location} · Global Outlook
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

          {/* Pages / Legal Column */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-custom font-semibold mb-5">
              Pages
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-platinum/80">
              {footer.pages.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-warm-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-custom font-semibold mb-5">
              Contact & Social
            </h4>
            <div className="flex flex-col gap-3 text-sm text-platinum/80 mb-6">
              <a
                href={`mailto:${footer.contact.email}`}
                className="hover:text-warm-white transition-colors break-all"
              >
                {footer.contact.email}
              </a>
              <span className="text-stone-custom text-xs">
                {footer.contact.location}
              </span>
            </div>

            <h4 className="text-xs uppercase tracking-[0.2em] text-stone-custom font-semibold mb-3">
              Social
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-platinum/80">
              {footer.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-warm-white transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-stone-custom" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-custom">
          <div>{footer.copyright}</div>
          <div className="flex items-center gap-4">
            <span>{footer.contact.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
