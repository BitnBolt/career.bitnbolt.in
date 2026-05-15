import Link from "next/link";
import { notFound } from "next/navigation";
import { JobApplyCta } from "@/components/job-apply-cta";
import {
  formatJobType,
  formatPostedDate,
  formatWorkMode,
  getJobById,
  jobs,
} from "@/lib/jobs";

interface JobPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: JobPageProps) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) return { title: "Role not found" };
  return {
    title: job.title,
    description: job.description,
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) notFound();

  return (
    <main>
      <div className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/jobs"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← All open roles
          </Link>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {job.title}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {job.team} · {job.location} · {formatWorkMode(job.workMode)}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-chip-bg px-2 py-0.5 text-xs font-medium">
              {formatJobType(job.type)}
            </span>
            <span className="bg-chip-bg px-2 py-0.5 text-xs font-medium text-muted">
              {job.experience}
            </span>
            <span className="bg-chip-bg px-2 py-0.5 text-xs font-medium text-muted">
              Posted {formatPostedDate(job.postedAt)}
            </span>
          </div>
          <JobApplyCta jobId={job.id} className="mt-6" />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            About the role
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            {job.description}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Responsibilities
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Qualifications
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
            {job.qualifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {job.preferred && job.preferred.length > 0 && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Preferred
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
              {job.preferred.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-12 border border-border bg-surface-muted p-6">
          <p className="text-sm font-medium text-foreground">
            Ready to apply?
          </p>
          <p className="mt-1 text-sm text-muted">
            Submit your resume and a short cover letter. We review every
            application carefully.
          </p>
          <JobApplyCta jobId={job.id} className="mt-4" />
        </div>
      </article>
    </main>
  );
}
