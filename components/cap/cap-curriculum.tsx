"use client";

import { useState } from "react";
import type { CapRoadmapPhase } from "@/lib/cap-content";

interface CapCurriculumProps {
  phases: CapRoadmapPhase[];
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
      aria-hidden
    >
      <path d="M7 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ModuleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 shrink-0 text-blue-500"
      aria-hidden
    >
      <path
        d="M3 2.5h7l3 3v8H3v-11z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M10 2.5v3h3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CapCurriculum({ phases }: CapCurriculumProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const totalModules = phases.reduce(
    (sum, phase) => sum + phase.modules.length,
    0,
  );

  const allExpanded = expanded.length === phases.length;

  const togglePhase = (phaseId: string) => {
    setExpanded((current) =>
      current.includes(phaseId)
        ? current.filter((id) => id !== phaseId)
        : [...current, phaseId],
    );
  };

  const toggleAll = () => {
    setExpanded(allExpanded ? [] : phases.map((phase) => phase.phase));
  };

  return (
    <div className="mt-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <dl className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <div>
            <dt className="sr-only">Phases</dt>
            <dd>
              <span className="font-semibold text-[#0B1C2D]">
                {phases.length}
              </span>{" "}
              phases
            </dd>
          </div>
          <div>
            <dt className="sr-only">Modules</dt>
            <dd>
              <span className="font-semibold text-[#0B1C2D]">
                {totalModules}
              </span>{" "}
              modules
            </dd>
          </div>
          <div>
            <dt className="sr-only">Duration</dt>
            <dd>
              <span className="font-semibold text-[#0B1C2D]">24</span> weeks
            </dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={toggleAll}
          className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-3" role="list" aria-label="Program curriculum">
        {phases.map((phase) => {
          const isOpen = expanded.includes(phase.phase);

          return (
            <article
              key={phase.phase}
              className="card-bitnbolt overflow-hidden"
              role="listitem"
            >
              <button
                type="button"
                onClick={() => togglePhase(phase.phase)}
                className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-gray-50/80 sm:gap-5 sm:p-6"
                aria-expanded={isOpen}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm"
                  aria-hidden
                >
                  {phase.phase}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 gap-y-1">
                    <h3 className="text-base font-bold text-[#0B1C2D] sm:text-lg">
                      {phase.title}
                    </h3>
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted sm:text-sm">
                    {phase.modules.length}{" "}
                    {phase.modules.length === 1 ? "module" : "modules"}
                  </p>
                </div>

                <ChevronIcon open={isOpen} />
              </button>

              {isOpen ? (
                <div className="border-t border-gray-100 bg-gray-50/80 px-5 pb-5 sm:px-6 sm:pb-6">
                  <ol className="space-y-2 pt-4">
                    {phase.modules.map((module) => (
                      <li
                        key={module.id}
                        className="flex gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3.5 shadow-sm transition-colors hover:border-blue-100"
                      >
                        <ModuleIcon />
                        <div className="min-w-0">
                          <p className="font-mono text-xs font-semibold text-blue-600">
                            Module {module.id}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-[#0B1C2D]">
                            {module.topic}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
