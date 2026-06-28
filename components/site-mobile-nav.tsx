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
        className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
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
            className="fixed inset-0 top-16 z-40 bg-[#0B1C2D]/40"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          <nav
            id="mobile-main-nav"
            className="fixed left-0 right-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-gray-100 bg-white shadow-lg"
            aria-label="Main"
          >
            <ul>
              {siteNavLinks.map((link) => {
                const isActive = isActiveNavLink(pathname, link.href);

                return (
                  <li key={link.href} className="border-b border-gray-100 last:border-b-0">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-12 items-center px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="border-b border-gray-100">
                <a
                  href="https://www.bitnbolt.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center px-4 py-3 text-base font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-blue-600"
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
