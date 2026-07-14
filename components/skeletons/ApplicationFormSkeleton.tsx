import { Skeleton, SkeletonLine } from "@/components/skeletons/Skeleton";

/** Mirrors ApplicationForm field layout */
export function ApplicationFormSkeleton({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className="space-y-4"
      role="status"
      aria-busy="true"
      aria-label="Loading application form"
    >
      <SkeletonLine className="h-4 w-2/3 max-w-xs" />

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className={compact ? undefined : "sm:col-span-2"}>
          <SkeletonLine className="mb-2 h-3 w-20" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div>
          <SkeletonLine className="mb-2 h-3 w-14" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div>
          <SkeletonLine className="mb-2 h-3 w-14" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div>
          <SkeletonLine className="mb-2 h-3 w-28" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        <div>
          <SkeletonLine className="mb-2 h-3 w-16" />
          <Skeleton className="h-10 w-full rounded-lg" />
        </div>
        {!compact ? (
          <>
            <div>
              <SkeletonLine className="mb-2 h-3 w-24" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <div>
              <SkeletonLine className="mb-2 h-3 w-20" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <div className="sm:col-span-2">
              <SkeletonLine className="mb-2 h-3 w-32" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <div>
              <SkeletonLine className="mb-2 h-3 w-24" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <div>
              <SkeletonLine className="mb-2 h-3 w-20" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <div className="sm:col-span-2">
              <SkeletonLine className="mb-2 h-3 w-20" />
              <Skeleton className="h-24 w-full rounded-lg" />
            </div>
          </>
        ) : (
          <div className="sm:col-span-2">
            <SkeletonLine className="mb-2 h-3 w-20" />
            <Skeleton className="h-20 w-full rounded-lg" />
          </div>
        )}
      </div>

      <Skeleton className="h-11 w-40 rounded-lg" />
      <span className="sr-only">Loading application form…</span>
    </div>
  );
}
