"use client";

import Link from "next/link";
import { ApplyNowButton } from "@/components/internships/apply-now-button";

export function CareersHeroActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link
        href="#internships"
        className="border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
      >
        Explore internship tracks
      </Link>
      <ApplyNowButton variant="hero" />
    </div>
  );
}
