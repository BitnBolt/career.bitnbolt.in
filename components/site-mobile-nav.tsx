"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActiveNavLink, siteNavLinks } from "@/lib/site-nav";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      {open ? (
        <path d="M5 5l10 10M15 5L5 15" />
      ) : (
        <>
          <path d="M3 6h14M3 10h14M3 14h14" />
        </>
      )}
    </svg>
  );
}

export function SiteMobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-h-11 min-w-11 items-center justify-center border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted"
        aria-expanded={open}
        aria-controls="mobile-main-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <MenuIcon open={open} />
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-14 z-40 bg-foreground/25"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <nav
            id="mobile-main-nav"
            className="fixed left-0 right-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-border bg-surface shadow-lg"
            aria-label="Main"
          >
            <ul>
              {siteNavLinks.map((link) => {
                const isActive = isActiveNavLink(pathname, link.href);

                return (
                  <li key={link.href} className="border-b border-border last:border-b-0">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-12 items-center px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-accent-muted text-foreground"
                          : "text-foreground hover:bg-surface-muted"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="border-b border-border">
                <a
                  href="https://www.bitnbolt.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  bitnbolt.in
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}
