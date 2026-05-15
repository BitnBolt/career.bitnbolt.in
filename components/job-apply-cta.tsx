"use client";

import Link from "next/link";
import { useAuth } from "@/components/providers/auth-provider";

interface JobApplyCtaProps {
  jobId: string;
  className?: string;
}

export function JobApplyCta({ jobId, className = "" }: JobApplyCtaProps) {
  const { user, isLoading } = useAuth();
  const applyHref = `/jobs/${jobId}/apply`;
  const loginHref = `/login?redirect=${encodeURIComponent(applyHref)}`;

  if (isLoading) {
    return (
      <span
        className={`inline-block border border-border bg-surface-muted px-6 py-2.5 text-sm text-muted ${className}`}
      >
        Loading…
      </span>
    );
  }

  if (!user) {
    return (
      <div className={`flex flex-wrap items-center gap-3 ${className}`}>
        <Link
          href={loginHref}
          className="border border-accent bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
        >
          Sign in to apply
        </Link>
        <Link
          href={`/signup?redirect=${encodeURIComponent(applyHref)}`}
          className="border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface-muted"
        >
          Create account
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={applyHref}
      className={`inline-block border border-accent bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover ${className}`}
    >
      Apply for this role
    </Link>
  );
}
