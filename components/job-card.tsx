import Link from "next/link";
import {
  formatJobType,
  formatPostedDate,
  formatWorkMode,
  type Job,
} from "@/lib/jobs";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="border border-border bg-surface transition-colors hover:border-border-strong hover:bg-surface-muted">
      <Link href={`/jobs/${job.id}`} className="block p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold text-foreground">
              {job.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {job.team} · {job.location}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-chip-bg px-2 py-0.5 text-xs font-medium text-foreground">
                {formatJobType(job.type)}
              </span>
              <span className="bg-chip-bg px-2 py-0.5 text-xs font-medium text-foreground">
                {formatWorkMode(job.workMode)}
              </span>
              <span className="bg-chip-bg px-2 py-0.5 text-xs font-medium text-muted">
                {job.department}
              </span>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <span className="text-xs text-muted">
              Posted {formatPostedDate(job.postedAt)}
            </span>
            <span className="text-sm font-medium text-accent">
              View role →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
