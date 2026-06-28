"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  isActiveNavLink,
  siteNavLinks,
  type SiteNavLink,
} from "@/lib/site-nav";

function NavLink({
  href,
  label,
  pathname,
}: {
  href: SiteNavLink["href"];
  label: string;
  pathname: string;
}) {
  const isActive = isActiveNavLink(pathname, href);

  return (
    <Link
      href={href}
      className={`shrink-0 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-blue-50 text-blue-600"
          : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function SiteNavDesktop() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
      {siteNavLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          pathname={pathname}
        />
      ))}
    </nav>
  );
}
