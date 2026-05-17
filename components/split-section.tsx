import type { ReactNode } from "react";

interface SplitSectionProps {
  children: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function SplitSection({
  children,
  visual,
  reverse = false,
  className = "",
}: SplitSectionProps) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 ${className}`}
    >
      <div className={reverse ? "lg:order-2" : ""}>{children}</div>
      <div className={reverse ? "lg:order-1" : ""}>{visual}</div>
    </div>
  );
}
