import { HeaderApplyLink } from "@/components/header-apply-link";
import { SiteMobileNav } from "@/components/site-mobile-nav";
import { SiteLogo } from "@/components/site-logo";
import { SiteNavDesktop } from "@/components/site-nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface text-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 min-w-0 items-center justify-between gap-2 sm:gap-4">
          <SiteLogo
            showTagline
            priority
            heightClass="h-8 max-w-[140px] sm:h-10 sm:max-w-none lg:h-11"
            className="min-w-0"
          />
          <SiteNavDesktop />
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href="https://www.bitnbolt.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center px-3 text-sm text-muted transition-colors hover:text-foreground md:flex"
            >
              bitnbolt.in
            </a>
            <HeaderApplyLink />
            <SiteMobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
