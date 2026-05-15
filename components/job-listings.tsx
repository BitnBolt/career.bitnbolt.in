"use client";

import { useMemo, useState } from "react";
import { JobCard } from "@/components/job-card";
import { JobFilters } from "@/components/job-filters";
import { JobSearch } from "@/components/job-search";
import { jobs, type JobType } from "@/lib/jobs";

interface JobListingsProps {
  embedded?: boolean;
}

export function JobListings({ embedded = false }: JobListingsProps) {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState<JobType | "all">("all");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((job) => {
      if (selectedType !== "all" && job.type !== selectedType) return false;
      if (
        selectedDepartment !== "All" &&
        job.department !== selectedDepartment
      ) {
        return false;
      }
      if (!q) return true;
      const haystack = [
        job.title,
        job.team,
        job.location,
        job.department,
        job.description,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, selectedType, selectedDepartment]);

  return (
    <section id={embedded ? undefined : "jobs"} className={embedded ? "" : "scroll-mt-14"}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {!embedded && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-foreground">Open roles</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Full-time positions, internships, contracts, and graduate programs
              across hardware, firmware, software, and delivery.
            </p>
          </div>
        )}

        <JobSearch
          value={query}
          onChange={setQuery}
          resultCount={filtered.length}
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-[220px_1fr]">
          <div className="hidden border border-border bg-surface p-4 lg:block">
            <JobFilters
              selectedType={selectedType}
              selectedDepartment={selectedDepartment}
              onTypeChange={setSelectedType}
              onDepartmentChange={setSelectedDepartment}
            />
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-surface p-4 lg:hidden">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Filters
              </p>
              <JobFilters
                selectedType={selectedType}
                selectedDepartment={selectedDepartment}
                onTypeChange={setSelectedType}
                onDepartmentChange={setSelectedDepartment}
              />
            </div>

            {filtered.length === 0 ? (
              <div className="border border-border bg-surface p-8 text-center">
                <p className="font-medium text-foreground">No roles match</p>
                <p className="mt-2 text-sm text-muted">
                  Try adjusting your search or filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedType("all");
                    setSelectedDepartment("All");
                  }}
                  className="mt-4 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <ul className="space-y-3">
                {filtered.map((job) => (
                  <li key={job.id}>
                    <JobCard job={job} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
