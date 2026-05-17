import Link from "next/link";
import { siteNavLinks } from "@/lib/site-nav";
import { SiteLogo } from "@/components/site-logo";

const footerLinks = [
  { href: "https://www.bitnbolt.in", label: "Company website", external: true },
  { href: "mailto:careers@bitnbolt.com", label: "careers@bitnbolt.com", external: true },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <SiteLogo linked={false} heightClass="h-12" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Engineering internships and the Career Accelerator Program (CAP)
              at BitnBolt — IoT, embedded systems, and hardware in Bengaluru.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 sm:gap-x-8" aria-label="Footer">
            {siteNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} BitnBolt. All rights reserved.</p>
          <p>
            Equal opportunity employer. We welcome applicants from all
            backgrounds.
          </p>
        </div>
      </div>
    </footer>
  );
}
