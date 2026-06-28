"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClass = "btn-primary min-h-11 min-w-[5.5rem] px-4 text-xs sm:min-w-0 sm:text-sm";

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
