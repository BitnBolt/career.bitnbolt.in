import type { HTMLAttributes } from "react";

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Base pulse block — match career surface colors */
export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={cx(
        "animate-pulse rounded-md bg-gray-200/80",
        className,
      )}
      {...props}
    />
  );
}

export function SkeletonLine({ className, ...props }: SkeletonProps) {
  return <Skeleton className={cx("h-4 w-full", className)} {...props} />;
}

export function SkeletonCircle({ className, ...props }: SkeletonProps) {
  return <Skeleton className={cx("rounded-full", className)} {...props} />;
}
