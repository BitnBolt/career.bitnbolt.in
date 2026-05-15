"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { RequireAuth } from "@/components/auth/require-auth";
import { useAuth } from "@/components/providers/auth-provider";
import { hasApplied, submitApplication } from "@/lib/auth/store";
import type { Job } from "@/lib/jobs";

interface ApplyFormProps {
  job: Job;
}

function ApplyFormInner({ job }: ApplyFormProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [coverLetter, setCoverLetter] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!user) return null;

  const alreadyApplied = hasApplied(user.id, job.id);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user) return;
    setError("");

    if (!user.profile.resumeFileName) {
      setError("Please upload a resume on your profile before applying.");
      return;
    }

    if (alreadyApplied) {
      setError("You have already applied for this role.");
      return;
    }

    submitApplication(
      user.id,
      job.id,
      job.title,
      coverLetter,
      user.profile.resumeFileName,
    );
    setSubmitted(true);
    router.refresh();
  }

  if (submitted || alreadyApplied) {
    return (
      <div className="border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold text-foreground">
          Application submitted
        </p>
        <p className="mt-2 text-sm text-muted">
          Your application for {job.title} has been recorded. Track status in
          your applications dashboard.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/applications"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View applications
          </Link>
          <Link
            href="/jobs"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Browse more roles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-surface"
      noValidate
    >
      <div className="border-b border-border bg-surface-muted px-6 py-4">
        <p className="text-sm text-muted">
          Applying as{" "}
          <span className="font-medium text-foreground">
            {user.profile.firstName} {user.profile.lastName}
          </span>{" "}
          · {user.email}
        </p>
        {!user.profileComplete && (
          <p className="mt-2 text-sm text-amber-800">
            <Link href="/profile/setup" className="font-medium underline">
              Complete your profile
            </Link>{" "}
            for the best chance with recruiters.
          </p>
        )}
      </div>

      <div className="space-y-6 p-6">
        {error && (
          <p className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            {error}
          </p>
        )}

        <div className="border border-border bg-surface-muted p-4 text-sm">
          <p className="font-medium text-foreground">Using profile resume</p>
          <p className="mt-1 text-muted">
            {user.profile.resumeFileName || (
              <>
                No resume on file.{" "}
                <Link href="/profile" className="text-accent">
                  Add one in your profile
                </Link>
              </>
            )}
          </p>
        </div>

        <div>
          <label
            htmlFor="coverLetter"
            className="block text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Cover letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows={6}
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Why BitnBolt, and what you would bring to this role…"
            className="mt-2 w-full resize-y border border-border bg-background px-3 py-2.5 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-muted">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 h-4 w-4 accent-accent"
          />
          <span>
            I agree to BitnBolt processing my application data for recruitment
            purposes.
          </span>
        </label>
      </div>

      <div className="flex flex-col gap-3 border-t border-border bg-surface-muted px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={`/jobs/${job.id}`}
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Back to job details
        </Link>
        <button
          type="submit"
          className="border border-accent bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
        >
          Submit application
        </button>
      </div>
    </form>
  );
}

export function ApplyForm({ job }: ApplyFormProps) {
  return (
    <RequireAuth redirectTo={`/jobs/${job.id}/apply`}>
      <ApplyFormInner job={job} />
    </RequireAuth>
  );
}
