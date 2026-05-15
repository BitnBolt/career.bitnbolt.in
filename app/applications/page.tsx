"use client";

import { ApplicationsList } from "@/components/applications-list";
import { RequireAuth } from "@/components/auth/require-auth";
import { PageHeader } from "@/components/page-header";

export default function ApplicationsPage() {
  return (
    <RequireAuth>
      <main>
        <PageHeader
          title="My applications"
          description="Track roles you have applied for."
          backHref="/jobs"
          backLabel="Open roles"
        />
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
          <ApplicationsList />
        </div>
      </main>
    </RequireAuth>
  );
}
