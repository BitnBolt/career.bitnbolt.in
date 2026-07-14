"use client";

import Link from "next/link";

export function CareersHeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link href="/jobs" className="btn-primary min-h-11 w-full sm:w-auto">
        View open roles
      </Link>
      <Link
        href="/internships#apply"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0B1C2D] sm:w-auto"
      >
        Apply to internships
      </Link>
    </div>
  );
}
