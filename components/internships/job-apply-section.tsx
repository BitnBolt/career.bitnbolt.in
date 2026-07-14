"use client";

import { ApplicationForm } from "@/components/internships/application-form";

export function JobApplySection({
  jobId,
  jobTitle,
  preferredTrack,
}: {
  jobId: string;
  jobTitle: string;
  preferredTrack?: string;
}) {
  return (
    <ApplicationForm
      jobId={jobId}
      jobTitle={jobTitle}
      preferredTrack={preferredTrack}
    />
  );
}
