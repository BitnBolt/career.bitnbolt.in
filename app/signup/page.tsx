import { Suspense } from "react";
import { SignupForm } from "@/components/auth/signup-form";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Sign up",
};

export default function SignupPage() {
  return (
    <main>
      <PageHeader
        title="Create account"
        description="Register to apply for roles and manage your candidate profile."
        backHref="/"
        backLabel="Home"
      />
      <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
        <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
          <SignupForm />
        </Suspense>
      </div>
    </main>
  );
}
