"use client";

import { useInternshipApply, type ApplyTarget } from "@/components/internships/internship-apply-provider";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  hero:
    "inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#0B1C2D]",
} as const;

interface ApplyNowButtonProps {
  categoryLabel?: string;
  jobId?: string;
  jobTitle?: string;
  preferredTrack?: string;
  variant?: keyof typeof variants;
  className?: string;
  children?: React.ReactNode;
}

export function ApplyNowButton({
  categoryLabel,
  jobId,
  jobTitle,
  preferredTrack,
  variant = "primary",
  className = "",
  children = "Apply now",
}: ApplyNowButtonProps) {
  const { openApply } = useInternshipApply();

  return (
    <button
      type="button"
      onClick={() => {
        const target: ApplyTarget = {
          categoryLabel,
          jobId,
          jobTitle: jobTitle || categoryLabel,
          preferredTrack: preferredTrack || categoryLabel,
        };
        openApply(target);
      }}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
