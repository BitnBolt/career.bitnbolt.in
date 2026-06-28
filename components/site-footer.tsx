import Link from "next/link";
import { siteNavLinks } from "@/lib/site-nav";
import { SiteLogo } from "@/components/site-logo";

const footerLinks = [
  { href: "https://www.bitnbolt.in", label: "Company website", external: true },
  { href: "mailto:careers@bitnbolt.com", label: "careers@bitnbolt.com", external: true },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0B1C2D] text-white">
      <div className="section-container py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <SiteLogo linked={false} framed heightClass="h-10" />
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Engineering internships and the Career Accelerator Program (CAP)
              at BitnBolt — IoT, embedded systems, and hardware in Bengaluru.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3" aria-label="Footer">
            {siteNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
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
                className="text-sm text-gray-400 transition-colors hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
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
