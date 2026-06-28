import type { CapRoadmapPhase } from "@/lib/cap-content";

interface CapRoadmapProps {
  phases: CapRoadmapPhase[];
}

export function CapRoadmap({ phases }: CapRoadmapProps) {
  return (
    <>
      {/* Desktop table */}
      <div className="mt-8 hidden overflow-x-auto border border-border lg:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Phase</th>
              <th className="px-4 py-3 font-semibold text-foreground">Modules</th>
              <th className="px-4 py-3 font-semibold text-foreground">
                Topics &amp; Sub-Topics
              </th>
              <th className="px-4 py-3 font-semibold text-foreground">Duration</th>
            </tr>
          </thead>
          <tbody>
            {phases.map((phase) =>
              phase.modules.map((module, moduleIndex) => (
                <tr
                  key={module.id}
                  className="border-b border-border last:border-b-0"
                >
                  {moduleIndex === 0 ? (
                    <td
                      rowSpan={phase.modules.length}
                      className="border-r border-border px-4 py-3 align-top font-medium text-foreground"
                    >
                      <span className="text-accent">{phase.phase}.</span>{" "}
                      {phase.title}
                    </td>
                  ) : null}
                  <td className="border-r border-border px-4 py-3 align-top text-muted">
                    {module.id}
                  </td>
                  <td className="border-r border-border px-4 py-3 align-top text-foreground">
                    {module.topic}
                  </td>
                  {moduleIndex === 0 ? (
                    <td
                      rowSpan={phase.modules.length}
                      className="px-4 py-3 align-top font-medium text-foreground whitespace-nowrap"
                    >
                      {phase.duration}
                    </td>
                  ) : null}
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="mt-8 space-y-6 lg:hidden">
        {phases.map((phase) => (
          <li
            key={phase.phase}
            className="border border-border bg-surface-muted"
          >
            <div className="border-b border-border bg-surface px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Phase {phase.phase}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-foreground">
                {phase.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-muted">
                {phase.duration}
              </p>
            </div>
            <ul className="divide-y divide-border">
              {phase.modules.map((module) => (
                <li key={module.id} className="px-4 py-3">
                  <p className="text-xs font-medium text-muted">{module.id}</p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {module.topic}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
