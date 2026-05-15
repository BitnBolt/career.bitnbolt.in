"use client";

import { useRouter } from "next/navigation";
import { RequireAuth } from "@/components/auth/require-auth";
import { ProfileForm } from "@/components/auth/profile-form";
import { PageHeader } from "@/components/page-header";
import { useAuth } from "@/components/providers/auth-provider";

function ProfileSetupContent() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <main>
      <PageHeader
        title="Complete your profile"
        description="Add the details recruiters need before you apply. You can update this anytime."
        backHref="/profile"
        backLabel="Profile"
      />
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <ol className="mb-8 flex gap-2 text-xs font-medium uppercase tracking-wider text-muted">
          <li className="bg-accent-muted px-2 py-1 text-accent">1. Account</li>
          <li className="bg-accent-muted px-2 py-1 text-accent">2. Profile</li>
          <li className="px-2 py-1">3. Apply</li>
        </ol>
        <ProfileForm
          submitLabel="Save and continue"
          onSaved={() => {
            if (user?.profileComplete) router.push("/jobs");
          }}
        />
      </div>
    </main>
  );
}

export default function ProfileSetupPage() {
  return (
    <RequireAuth>
      <ProfileSetupContent />
    </RequireAuth>
  );
}
