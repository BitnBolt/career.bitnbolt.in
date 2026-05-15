import Link from "next/link";
import { JobCard } from "@/components/job-card";
import { jobs } from "@/lib/jobs";

export function HomeFeaturedJobs() {
  const featured = jobs.slice(0, 4);

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Recent openings
            </h2>
            <p className="mt-2 text-sm text-muted">
              Engineering roles across firmware, hardware, cloud, and more.
            </p>
          </div>
          <Link
            href="/jobs"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View all roles →
          </Link>
        </div>
        <ul className="mt-8 space-y-3">
          {featured.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
