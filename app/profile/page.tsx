"use client";

import Link from "next/link";
import { RequireAuth } from "@/components/auth/require-auth";
import { ProfileForm } from "@/components/auth/profile-form";
import { PageHeader } from "@/components/page-header";
import { useAuth } from "@/components/providers/auth-provider";
import { displayName } from "@/lib/auth/types";

function ProfilePageContent() {
  const { user } = useAuth();
  if (!user) return null;

  return (
    <main>
      <PageHeader
        title="Your profile"
        description={`Signed in as ${user.email}`}
        backHref="/"
        backLabel="Home"
      />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        {!user.profileComplete && (
          <p className="mb-6 border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Your profile is incomplete.{" "}
            <Link href="/profile/setup" className="font-medium underline">
              Complete setup
            </Link>{" "}
            to apply for roles.
          </p>
        )}
        <div className="mb-8 border border-border bg-surface-muted p-4">
          <p className="text-sm font-medium text-foreground">
            {displayName(user.profile, user.email)}
          </p>
          <p className="text-sm text-muted">{user.email}</p>
        </div>
        <ProfileForm />
      </div>
    </main>
  );
}

export default function ProfilePage() {
  return (
    <RequireAuth>
      <ProfilePageContent />
    </RequireAuth>
  );
}
