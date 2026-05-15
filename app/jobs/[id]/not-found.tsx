import Link from "next/link";

export default function JobNotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
      <h1 className="text-2xl font-semibold text-foreground">Role not found</h1>
      <p className="mt-3 text-sm text-muted">
        This position may have been filled or removed.
      </p>
      <Link
        href="/jobs"
        className="mt-6 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        View all open roles
      </Link>
    </main>
  );
}
