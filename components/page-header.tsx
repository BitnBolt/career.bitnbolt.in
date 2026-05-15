import Link from "next/link";

interface PageHeaderProps {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}

export function PageHeader({
  title,
  description,
  backHref,
  backLabel = "Back",
}: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {backHref && (
          <Link
            href={backHref}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← {backLabel}
          </Link>
        )}
        <h1 className={`text-2xl font-semibold tracking-tight text-foreground sm:text-3xl ${backHref ? "mt-4" : ""}`}>
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
