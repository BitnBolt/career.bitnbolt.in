import { HeaderApplyLink } from "@/components/header-apply-link";
import { SiteMobileNav } from "@/components/site-mobile-nav";
import { SiteLogo } from "@/components/site-logo";
import { SiteNavDesktop } from "@/components/site-nav-links";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 text-foreground shadow-sm backdrop-blur-md">
      <div className="section-container">
        <div className="flex h-16 min-w-0 items-center justify-between gap-2 sm:gap-4">
          <SiteLogo
            framed
            priority
            heightClass="h-8 max-w-[140px] sm:h-9 sm:max-w-none"
            className="min-w-0"
          />
          <SiteNavDesktop />
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href="https://www.bitnbolt.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center rounded-lg px-3 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 md:flex"
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
