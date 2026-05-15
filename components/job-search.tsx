"use client";

interface JobSearchProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
}

export function JobSearch({ value, onChange, resultCount }: JobSearchProps) {
  return (
    <div className="border border-border bg-surface p-4">
      <label htmlFor="job-search" className="sr-only">
        Search jobs
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          id="job-search"
          type="search"
          placeholder="Search by title, team, or keyword…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <p className="shrink-0 text-sm text-muted">
          <span className="font-medium text-foreground">{resultCount}</span>{" "}
          {resultCount === 1 ? "role" : "roles"} found
        </p>
      </div>
    </div>
  );
}
