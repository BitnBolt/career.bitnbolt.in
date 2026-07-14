"use client";

import { useEffect, useState } from "react";
import { ApplicationForm } from "@/components/internships/application-form";
import { ApplicationFormSkeleton } from "@/components/skeletons/ApplicationFormSkeleton";
import { fetchCareerJobsClient, findCapJob, type CareerJob } from "@/lib/career-api";

/** CAP page apply block — same form as internships, wired to the CAP job. */
export function CapApplyForm() {
  const [job, setJob] = useState<CareerJob | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const jobs = await fetchCareerJobsClient();
        const cap = findCapJob(jobs) || null;
        if (!cancelled) setJob(cap);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <ApplicationFormSkeleton />;
  }

  if (!job) {
    return (
      <p className="text-sm text-muted">
        CAP applications are not open right now. Email{" "}
        <a href="mailto:careers@bitnbolt.com" className="text-blue-600">
          careers@bitnbolt.com
        </a>
        .
      </p>
    );
  }

  return (
    <ApplicationForm
      jobId={job._id}
      jobTitle={job.title}
      preferredTrack={job.category || "CAP"}
    />
  );
}
