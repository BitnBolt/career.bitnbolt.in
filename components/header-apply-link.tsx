"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClass =
  "inline-flex min-h-11 min-w-[5.5rem] items-center justify-center border border-accent bg-accent px-3 text-xs font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover sm:min-w-0 sm:px-4 sm:text-sm";

export function HeaderApplyLink() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <Link href="/?apply=1" className={linkClass}>
        Apply now
      </Link>
    );
  }

  return (
    <Link href="/internships#apply" className={linkClass}>
      Apply now
    </Link>
  );
}
