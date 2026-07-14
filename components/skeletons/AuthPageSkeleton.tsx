import { Skeleton, SkeletonLine } from "@/components/skeletons/Skeleton";

/** Compact auth / applications gate loading state */
export function AuthPageSkeleton() {
  return (
    <div
      className="mx-auto max-w-lg px-4 py-16 sm:py-20"
      role="status"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <Skeleton className="mx-auto h-7 w-40" />
        <SkeletonLine className="mx-auto mt-3 h-4 w-56" />
        <div className="mt-8 space-y-4">
          <div>
            <SkeletonLine className="mb-2 h-3 w-14" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
          <div>
            <SkeletonLine className="mb-2 h-3 w-16" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
          <Skeleton className="mt-2 h-11 w-full rounded-lg" />
        </div>
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  );
}

/** Applications list placeholder */
export function ApplicationsListSkeleton() {
  return (
    <ul
      className="divide-y divide-border border border-border bg-surface"
      role="status"
      aria-busy="true"
      aria-label="Loading applications"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <li
          key={i}
          className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex-1 space-y-2">
            <SkeletonLine className="h-4 w-48 max-w-full" />
            <SkeletonLine className="h-3 w-28" />
          </div>
          <Skeleton className="h-6 w-24 rounded" />
        </li>
      ))}
      <span className="sr-only">Loading applications…</span>
    </ul>
  );
}
