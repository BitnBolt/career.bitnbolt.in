"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderApplyLink() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <Link
        href="/?apply=1"
        className="border border-accent bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover sm:px-4"
      >
        Apply now
      </Link>
    );
  }

  return (
    <Link
      href="/internships#apply"
      className="border border-accent bg-accent px-3 py-2 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover sm:px-4"
    >
      Apply now
    </Link>
  );
}
