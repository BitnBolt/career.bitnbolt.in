"use client";

import { useEffect, useState } from "react";
import { ApplicationForm } from "@/components/internships/application-form";
import { ApplicationFormSkeleton } from "@/components/skeletons/ApplicationFormSkeleton";
import { fetchCapStatusClient } from "@/lib/career-api";

/**
 * CAP page content is hardcoded. This form only depends on admin toggle + jobId.
 */
export function CapApplyForm() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [title, setTitle] = useState("Career Accelerator Program (CAP)");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const status = await fetchCapStatusClient();
        if (cancelled) return;
        setIsOpen(status.isOpen);
        setJobId(status.jobId);
        setTitle(status.title || "Career Accelerator Program (CAP)");
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setIsOpen(false);
          setJobId(null);
        }
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

  if (!isOpen || !jobId) {
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
      jobId={jobId}
      jobTitle={title}
      preferredTrack="CAP"
    />
  );
}
