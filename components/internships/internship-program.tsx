"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ApplyNowButton } from "@/components/internships/apply-now-button";
import { ApplicationForm } from "@/components/internships/application-form";
import { useInternshipApply } from "@/components/internships/internship-apply-provider";
import {
  defaultInternshipCategoryId,
  internshipCategories,
  type InternshipCategory,
} from "@/lib/internships";
import {
  fetchCareerJobsClient,
  findJobForCategory,
  type CareerJob,
} from "@/lib/career-api";

function RoleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="mt-0.5 shrink-0 text-muted"
      aria-hidden
    >
      <path
        d="M2 2h7l3 3v7H2V2z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9 2v3h3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function CategoryContent({ category }: { category: InternshipCategory }) {
  const midpoint = Math.ceil(category.indicativeRoles.length / 2);
  const leftRoles = category.indicativeRoles.slice(0, midpoint);
  const rightRoles = category.indicativeRoles.slice(midpoint);

  return (
    <div className="pt-8">
      <h2 className="text-xl font-bold text-[#0B1C2D] sm:text-2xl">
        {category.title}
      </h2>

      {category.intro.map((paragraph) => (
        <p
          key={paragraph.slice(0, 40)}
          className="mt-4 text-sm leading-relaxed text-foreground sm:text-base"
        >
          {paragraph}
        </p>
      ))}

      <p className="mt-8 text-sm font-semibold text-foreground">
        What you may work on:
      </p>

      <div className="mt-4 grid gap-x-12 gap-y-3 sm:grid-cols-2">
        <ul className="space-y-3">
          {leftRoles.map((role) => (
            <li key={role} className="flex gap-2 text-sm text-foreground">
              <RoleIcon />
              <span>{role}</span>
            </li>
          ))}
        </ul>
        <ul className="space-y-3">
          {rightRoles.map((role) => (
            <li key={role} className="flex gap-2 text-sm text-foreground">
              <RoleIcon />
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted">
        {category.selectionNote}
      </p>
    </div>
  );
}

interface InternshipProgramProps {
  basePath?: string;
  sectionId?: string;
  showTitle?: boolean;
  applyMode?: "inline" | "modal";
}

function HomeApplyLauncher({
  categoryLabel,
  job,
}: {
  categoryLabel: string;
  job?: CareerJob;
}) {
  const searchParams = useSearchParams();
  const { openApply } = useInternshipApply();

  useEffect(() => {
    if (searchParams.get("apply")) {
      openApply({
        categoryLabel,
        jobId: job?._id,
        jobTitle: job?.title || categoryLabel,
        preferredTrack: job?.category || categoryLabel,
      });
    }
  }, [searchParams, categoryLabel, job, openApply]);

  return null;
}

export function InternshipProgram({
  basePath = "/internships",
  sectionId = "internships",
  showTitle = true,
  applyMode = "inline",
}: InternshipProgramProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeId, setActiveId] = useState(defaultInternshipCategoryId);
  const [jobs, setJobs] = useState<CareerJob[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const items = await fetchCareerJobsClient();
        if (!cancelled) setJobs(items);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setJobsLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const setCategory = useCallback(
    (id: string) => {
      setActiveId(id);
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", id);
      const query = params.toString();
      const href = query ? `${basePath}?${query}` : basePath;
      router.replace(href, { scroll: false });
    },
    [router, searchParams, basePath],
  );

  useEffect(() => {
    if (
      categoryParam &&
      internshipCategories.some((c) => c.id === categoryParam)
    ) {
      setActiveId(categoryParam);
    }
  }, [categoryParam]);

  const active =
    internshipCategories.find((c) => c.id === activeId) ??
    internshipCategories[0];

  const activeJob = findJobForCategory(jobs, active.id);

  return (
    <>
      <div
        id={sectionId}
        className="scroll-mt-16 border-b border-gray-100 bg-white py-10"
      >
        <div className="section-container">
          {showTitle ? (
            <h1 className="heading-section">Internship programs</h1>
          ) : (
            <h2 className="heading-section">Internship programs</h2>
          )}

          <div
            className="scrollbar-hide -mx-4 mt-8 flex snap-x snap-mandatory gap-0 overflow-x-auto border-b border-gray-200 px-4 sm:mx-0 sm:px-0"
            role="tablist"
            aria-label="Internship categories"
          >
            {internshipCategories.map((cat) => {
              const isActive = cat.id === activeId;
              const hasOpenRole = Boolean(findJobForCategory(jobs, cat.id));
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(cat.id)}
                  className={`shrink-0 snap-start border-b-2 px-3 py-3.5 text-xs font-semibold transition-colors min-[360px]:text-sm sm:px-5 ${
                    isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:text-[#0B1C2D]"
                  }`}
                >
                  {cat.tabLabel}
                  {!jobsLoading && hasOpenRole ? (
                    <span className="ml-1.5 hidden text-[10px] font-medium text-green-600 sm:inline">
                      Open
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" aria-labelledby={`tab-${active.id}`}>
            <CategoryContent category={active} />
          </div>

          {applyMode === "modal" ? (
            <>
              <HomeApplyLauncher categoryLabel={active.tabLabel} job={activeJob} />
              <div className="mt-10 rounded-lg border border-gray-100 bg-gray-50 p-6 sm:p-8">
                <p className="text-sm font-bold text-[#0B1C2D]">
                  Ready to apply?
                </p>
                <p className="mt-2 max-w-xl text-sm text-muted">
                  {activeJob
                    ? `Applications are open for the ${active.tabLabel} track.`
                    : `We are not accepting applications for ${active.tabLabel} right now.`}
                </p>
                <ApplyNowButton
                  categoryLabel={active.tabLabel}
                  jobId={activeJob?._id}
                  jobTitle={activeJob?.title}
                  preferredTrack={activeJob?.category || active.tabLabel}
                  className="mt-5"
                />
              </div>
            </>
          ) : null}

          {applyMode === "inline" ? (
            <div id="apply" className="scroll-mt-16 border-t border-gray-100 pt-10">
              <h2 className="text-lg font-bold text-[#0B1C2D]">
                Apply for {active.tabLabel}
              </h2>
              <div className="mt-6 overflow-hidden rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
                {jobsLoading ? (
                  <p className="text-sm text-muted">Loading application…</p>
                ) : activeJob ? (
                  <ApplicationForm
                    key={activeJob._id}
                    jobId={activeJob._id}
                    jobTitle={activeJob.title}
                    preferredTrack={activeJob.category || active.tabLabel}
                  />
                ) : (
                  <div className="py-6 text-center">
                    <p className="text-sm font-medium text-[#0B1C2D]">
                      Applications closed for this track
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Check other tracks or email careers@bitnbolt.com.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
