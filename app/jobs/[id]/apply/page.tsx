import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/apply-form";
import { getJobById, jobs } from "@/lib/jobs";

interface ApplyPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: ApplyPageProps) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) return { title: "Apply" };
  return {
    title: `Apply — ${job.title}`,
  };
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) notFound();

  return (
    <main>
      <div className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href={`/jobs/${job.id}`}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← {job.title}
          </Link>
          <h1 className="mt-4 text-2xl font-semibold text-foreground">
            Apply for this role
          </h1>
          <p className="mt-2 text-sm text-muted">
            {job.team} · {job.location}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <ApplyForm job={job} />
      </div>
    </main>
  );
}
