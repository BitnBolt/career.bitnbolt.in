"use client";

import { useInternshipApply } from "@/components/internships/internship-apply-provider";

const variants = {
  primary:
    "border border-accent bg-accent text-accent-foreground hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border border-border bg-surface text-foreground hover:border-border-strong hover:bg-surface-muted",
  hero: "border border-border bg-surface text-foreground hover:border-border-strong hover:bg-surface-muted",
} as const;

interface ApplyNowButtonProps {
  categoryLabel?: string;
  variant?: keyof typeof variants;
  className?: string;
  children?: React.ReactNode;
}

export function ApplyNowButton({
  categoryLabel,
  variant = "primary",
  className = "",
  children = "Apply now",
}: ApplyNowButtonProps) {
  const { openApply } = useInternshipApply();

  return (
    <button
      type="button"
      onClick={() => openApply(categoryLabel)}
      className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
