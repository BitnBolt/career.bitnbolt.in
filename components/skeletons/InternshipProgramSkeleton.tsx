import { ApplicationFormSkeleton } from "@/components/skeletons/ApplicationFormSkeleton";
import { Skeleton, SkeletonLine } from "@/components/skeletons/Skeleton";

/**
 * Full internship program block skeleton —
 * heading, category tabs, body copy, roles grid, apply section.
 */
export function InternshipProgramSkeleton({
  showTitle = true,
  applyMode = "inline",
}: {
  showTitle?: boolean;
  applyMode?: "inline" | "modal";
}) {
  return (
    <div
      className="scroll-mt-16 border-b border-gray-100 bg-white py-10"
      role="status"
      aria-busy="true"
      aria-label="Loading internship programs"
    >
      <div className="section-container">
        {showTitle ? (
          <Skeleton className="h-9 w-64 max-w-full sm:h-10 sm:w-80" />
        ) : (
          <Skeleton className="h-8 w-56 max-w-full sm:h-9 sm:w-72" />
        )}

        {/* Tabs */}
        <div className="mt-8 flex gap-1 overflow-hidden border-b border-gray-200 pb-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="mb-[-1px] h-11 w-20 shrink-0 rounded-none sm:w-28"
            />
          ))}
        </div>

        {/* Category body */}
        <div className="pt-8 space-y-4">
          <Skeleton className="h-7 w-3/4 max-w-md sm:h-8" />
          <SkeletonLine className="h-4 w-full max-w-3xl" />
          <SkeletonLine className="h-4 w-full max-w-2xl" />
          <SkeletonLine className="h-4 w-5/6 max-w-xl" />

          <SkeletonLine className="mt-8 h-4 w-40" />

          <div className="mt-4 grid gap-x-12 gap-y-3 sm:grid-cols-2">
            <ul className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <li key={`l-${i}`} className="flex gap-2">
                  <Skeleton className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <SkeletonLine className="h-4 w-full max-w-[220px]" />
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <li key={`r-${i}`} className="flex gap-2">
                  <Skeleton className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <SkeletonLine className="h-4 w-full max-w-[200px]" />
                </li>
              ))}
            </ul>
          </div>

          <SkeletonLine className="mt-8 h-4 w-full max-w-2xl" />
        </div>

        {applyMode === "modal" ? (
          <div className="mt-10 rounded-lg border border-gray-100 bg-gray-50 p-6 sm:p-8">
            <SkeletonLine className="h-4 w-28" />
            <SkeletonLine className="mt-3 h-4 w-full max-w-md" />
            <Skeleton className="mt-5 h-11 w-32 rounded-lg" />
          </div>
        ) : (
          <div className="scroll-mt-16 border-t border-gray-100 pt-10">
            <Skeleton className="h-6 w-48" />
            <div className="mt-6 overflow-hidden rounded-lg border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
              <ApplicationFormSkeleton />
            </div>
          </div>
        )}
      </div>
      <span className="sr-only">Loading internship programs…</span>
    </div>
  );
}
