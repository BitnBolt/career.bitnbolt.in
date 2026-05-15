"use client";

import Link from "next/link";
import { useAuth } from "@/components/providers/auth-provider";
import { getApplicationsForUser } from "@/lib/auth/store";

const statusLabels = {
  submitted: "Submitted",
  under_review: "Under review",
  interview: "Interview",
  rejected: "Not selected",
} as const;

export function ApplicationsList() {
  const { user } = useAuth();
  if (!user) return null;

  const applications = getApplicationsForUser(user.id).sort(
    (a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime(),
  );

  if (applications.length === 0) {
    return (
      <div className="border border-border bg-surface p-8 text-center">
        <p className="font-medium text-foreground">No applications yet</p>
        <p className="mt-2 text-sm text-muted">
          Browse open roles and submit your first application.
        </p>
        <Link
          href="/jobs"
          className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          View open roles
        </Link>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-border border border-border bg-surface">
      {applications.map((app) => (
        <li
          key={app.id}
          className="flex flex-col gap-3 p-5 transition-colors hover:bg-surface-muted sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <Link
              href={`/jobs/${app.jobId}`}
              className="font-medium text-foreground transition-colors hover:text-accent"
            >
              {app.jobTitle}
            </Link>
            <p className="mt-1 text-xs text-muted">
              Applied{" "}
              {new Date(app.submittedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <span className="bg-chip-bg px-2 py-1 text-xs font-medium text-foreground">
            {statusLabels[app.status]}
          </span>
        </li>
      ))}
    </ul>
  );
}
