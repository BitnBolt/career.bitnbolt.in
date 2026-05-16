import Link from "next/link";
import { HeaderApplyLink } from "@/components/header-apply-link";

const navLinks = [
  { href: "/#internships", label: "Programs" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/life", label: "Life as an intern" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-header-bg text-header-fg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 transition-colors hover:text-white"
        >
          <span
            className="flex h-8 w-8 items-center justify-center border border-accent bg-accent text-sm font-bold text-accent-foreground"
            aria-hidden
          >
            B
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-tight">
              BitnBolt
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-header-muted">
              Internships
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-header-muted transition-colors hover:bg-white/5 hover:text-header-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.bitnbolt.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden px-3 py-2 text-sm text-header-muted transition-colors hover:text-header-fg sm:block"
          >
            bitnbolt.in
          </a>
          <HeaderApplyLink />
        </div>
      </div>
    </header>
  );
}
