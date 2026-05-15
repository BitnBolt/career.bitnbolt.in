import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { teams } from "@/lib/content";

export const metadata = {
  title: "Teams",
};

export default function TeamsPage() {
  return (
    <main>
      <PageHeader
        title="Teams"
        description="Explore opportunities across the disciplines that deliver end-to-end IoT solutions."
        backHref="/"
        backLabel="Home"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <li key={team.name} className="bg-surface p-5">
              <h2 className="text-sm font-semibold text-foreground">
                {team.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{team.focus}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted">
          <Link
            href="/jobs"
            className="font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View open roles by team →
          </Link>
        </p>
      </div>
    </main>
  );
}
