import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { fetchCareerJobs, type CareerJob } from "@/lib/career-api";
import { pageImages } from "@/lib/page-images";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Open roles",
  description:
    "Browse open internships, CAP, and trainee roles at BitnBolt and apply online.",
};

function typeLabel(type: string) {
  return type.replace(/_/g, " ");
}

function JobCard({ job }: { job: CareerJob }) {
  return (
    <li className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {typeLabel(job.type)}
            {job.category ? ` · ${job.category}` : ""}
          </p>
          <Link
            href={`/jobs/${job.slug}`}
            className="mt-1 block text-lg font-bold text-[#0B1C2D] hover:text-blue-600"
          >
            {job.title}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm text-muted">
            {job.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            {job.location ? <span>{job.location}</span> : null}
            {job.duration ? <span>{job.duration}</span> : null}
            {job.stipend ? <span>{job.stipend}</span> : null}
          </div>
        </div>
        <Link href={`/jobs/${job.slug}`} className="btn-primary shrink-0 self-start">
          View & apply
        </Link>
      </div>
    </li>
  );
}

export default async function JobsPage() {
  let jobs: CareerJob[] = [];
  let error: string | null = null;
  try {
    jobs = await fetchCareerJobs();
  } catch {
    error = "Unable to load open roles right now.";
  }

  return (
    <main>
      <PageHero
        title="Open roles"
        description="Internships, CAP, and trainee programs currently accepting applications."
        image={pageImages.aboutBanner}
      />

      <section className="bg-white py-10 sm:py-14">
        <div className="section-container">
          {error ? (
            <p className="text-center text-sm text-red-600">{error}</p>
          ) : jobs.length === 0 ? (
            <div className="rounded-lg border border-gray-100 bg-gray-50 p-10 text-center">
              <p className="font-medium text-[#0B1C2D]">No open roles right now</p>
              <p className="mt-2 text-sm text-muted">
                Check back soon, or browse our{" "}
                <Link href="/internships" className="text-blue-600 hover:underline">
                  internship tracks
                </Link>
                .
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
