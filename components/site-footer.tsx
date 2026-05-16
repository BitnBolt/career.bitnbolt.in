import Link from "next/link";

const footerLinks = [
  { href: "https://www.bitnbolt.in", label: "Company website", external: true },
  { href: "/#internships", label: "Internship programs", external: false },
  { href: "/life", label: "Life as an intern", external: false },
  { href: "/teams", label: "Teams", external: false },
  { href: "mailto:careers@bitnbolt.com", label: "careers@bitnbolt.com", external: true },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-semibold text-foreground">BitnBolt</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Engineering internships in IoT, embedded systems, and hardware. We
              help students and recent graduates build production-grade connected
              products.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1" aria-label="Footer">
            {footerLinks.map((link) =>
              link.external ? (
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
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} BitnBolt. All rights reserved.</p>
          <p>
            Equal opportunity employer. We welcome internship applicants from
            all backgrounds.
          </p>
        </div>
      </div>
    </footer>
  );
}
