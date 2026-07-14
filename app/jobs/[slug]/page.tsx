import Link from "next/link";
import { notFound } from "next/navigation";
import { JobApplySection } from "@/components/internships/job-apply-section";
import { fetchCareerJob } from "@/lib/career-api";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await fetchCareerJob(slug);
  if (!job) return { title: "Role not found" };
  return {
    title: job.title,
    description: job.description.slice(0, 160),
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await fetchCareerJob(slug);
  if (!job) notFound();

  return (
    <main>
      <section className="border-b border-gray-100 bg-white py-10 sm:py-14">
        <div className="section-container">
          <Link
            href="/jobs"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← All open roles
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-600">
            {job.type.replace(/_/g, " ")}
            {job.category ? ` · ${job.category}` : ""}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#0B1C2D] sm:text-4xl">
            {job.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            {job.location ? <span>{job.location}</span> : null}
            {job.duration ? <span>{job.duration}</span> : null}
            {job.department ? <span>{job.department}</span> : null}
            {job.stipend ? <span>{job.stipend}</span> : null}
          </div>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground sm:text-base">
            {job.description.split(/\n\n+/).map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          {job.responsibilities && job.responsibilities.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-lg font-bold text-[#0B1C2D]">
                What you may work on
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {job.responsibilities.map((item) => (
                  <li key={item} className="text-sm text-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {job.requirements && job.requirements.length > 0 ? (
            <div className="mt-10">
              <h2 className="text-lg font-bold text-[#0B1C2D]">Requirements</h2>
              <ul className="mt-4 space-y-2">
                {job.requirements.map((item) => (
                  <li key={item} className="text-sm text-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section id="apply" className="scroll-mt-16 bg-gray-50 py-10 sm:py-14">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl font-bold text-[#0B1C2D]">Apply for this role</h2>
          <div className="mt-6 rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
            <JobApplySection
              jobId={job._id}
              jobTitle={job.title}
              preferredTrack={job.category}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
