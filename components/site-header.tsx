"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/providers/auth-provider";
import { displayName } from "@/lib/auth/types";

const navLinks = [
  { href: "/jobs", label: "Open roles" },
  { href: "/life", label: "Life at BitnBolt" },
  { href: "/teams", label: "Teams" },
];

export function SiteHeader() {
  const { user, logout, isLoading } = useAuth();
  const pathname = usePathname();

  function linkClass(href: string) {
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return `px-3 py-2 text-sm transition-colors ${
      active
        ? "bg-white/10 text-header-fg"
        : "text-header-muted hover:bg-white/5 hover:text-header-fg"
    }`;
  }

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
              Careers
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {!isLoading && user ? (
            <>
              <Link
                href="/applications"
                className="hidden px-3 py-2 text-sm text-header-muted transition-colors hover:text-header-fg sm:block"
              >
                Applications
              </Link>
              <Link
                href="/profile"
                className="hidden px-3 py-2 text-sm text-header-muted transition-colors hover:text-header-fg sm:block"
              >
                {displayName(user.profile, user.email)}
              </Link>
              <button
                type="button"
                onClick={logout}
                className="px-3 py-2 text-sm text-header-muted transition-colors hover:text-header-fg"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-3 py-2 text-sm text-header-muted transition-colors hover:text-header-fg"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="hidden border border-white/20 px-3 py-2 text-sm transition-colors hover:border-white/40 hover:bg-white/5 sm:block"
              >
                Sign up
              </Link>
            </>
          )}
          <Link
            href="/jobs"
            className="border border-accent bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover sm:px-4"
          >
            View openings
          </Link>
        </div>
      </div>
    </header>
  );
}
