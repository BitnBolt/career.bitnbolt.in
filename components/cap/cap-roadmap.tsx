import type { CapRoadmapPhase } from "@/lib/cap-content";

interface CapRoadmapProps {
  phases: CapRoadmapPhase[];
}

export function CapRoadmap({ phases }: CapRoadmapProps) {
  return (
    <>
      {/* Desktop table */}
      <div className="mt-8 hidden overflow-x-auto rounded-lg border border-gray-100 bg-white shadow-sm lg:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-4 py-3 font-bold text-[#0B1C2D]">Phase</th>
              <th className="px-4 py-3 font-bold text-[#0B1C2D]">Modules</th>
              <th className="px-4 py-3 font-bold text-[#0B1C2D]">
                Topics &amp; Sub-Topics
              </th>
              <th className="px-4 py-3 font-bold text-[#0B1C2D]">Duration</th>
            </tr>
          </thead>
          <tbody>
            {phases.map((phase) =>
              phase.modules.map((module, moduleIndex) => (
                <tr
                  key={module.id}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {moduleIndex === 0 ? (
                    <td
                      rowSpan={phase.modules.length}
                      className="border-r border-gray-100 px-4 py-3 align-top font-semibold text-[#0B1C2D]"
                    >
                      <span className="text-blue-600">{phase.phase}.</span>{" "}
                      {phase.title}
                    </td>
                  ) : null}
                  <td className="border-r border-gray-100 px-4 py-3 align-top text-muted">
                    {module.id}
                  </td>
                  <td className="border-r border-gray-100 px-4 py-3 align-top text-foreground">
                    {module.topic}
                  </td>
                  {moduleIndex === 0 ? (
                    <td
                      rowSpan={phase.modules.length}
                      className="px-4 py-3 align-top font-semibold whitespace-nowrap text-[#0B1C2D]"
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
          <li key={phase.phase} className="card-bitnbolt overflow-hidden">
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                Phase {phase.phase}
              </p>
              <h3 className="mt-1 text-sm font-bold text-[#0B1C2D]">
                {phase.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-muted">
                {phase.duration}
              </p>
            </div>
            <ul className="divide-y divide-gray-100">
              {phase.modules.map((module) => (
                <li key={module.id} className="px-4 py-3">
                  <p className="text-xs font-medium text-blue-600">{module.id}</p>
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
