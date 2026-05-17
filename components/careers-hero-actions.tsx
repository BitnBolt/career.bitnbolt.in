"use client";

import Link from "next/link";
import { ApplyNowButton } from "@/components/internships/apply-now-button";

export function CareersHeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href="/internships"
        className="inline-flex min-h-11 w-full items-center justify-center border border-accent bg-accent px-5 py-2.5 text-center text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover sm:w-auto"
      >
        Explore internship tracks
      </Link>
      <ApplyNowButton
        variant="hero"
        className="min-h-11 w-full sm:w-auto"
      />
    </div>
  );
}
