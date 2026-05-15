"use client";

import { departments, jobTypes, type JobType } from "@/lib/jobs";

interface JobFiltersProps {
  selectedType: JobType | "all";
  selectedDepartment: string;
  onTypeChange: (type: JobType | "all") => void;
  onDepartmentChange: (department: string) => void;
}

export function JobFilters({
  selectedType,
  selectedDepartment,
  onTypeChange,
  onDepartmentChange,
}: JobFiltersProps) {
  return (
    <aside className="space-y-6">
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-wider text-muted">
          Role type
        </legend>
        <ul className="mt-3 space-y-1">
          {jobTypes.map((item) => (
            <li key={item.value}>
              <button
                type="button"
                onClick={() => onTypeChange(item.value)}
                className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                  selectedType === item.value
                    ? "bg-accent-muted font-medium text-accent"
                    : "text-foreground hover:bg-surface-muted"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-wider text-muted">
          Department
        </legend>
        <ul className="mt-3 space-y-1">
          {departments.map((dept) => (
            <li key={dept}>
              <button
                type="button"
                onClick={() => onDepartmentChange(dept)}
                className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                  selectedDepartment === dept
                    ? "bg-accent-muted font-medium text-accent"
                    : "text-foreground hover:bg-surface-muted"
                }`}
              >
                {dept}
              </button>
            </li>
          ))}
        </ul>
      </fieldset>
    </aside>
  );
}
