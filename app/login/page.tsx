import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Sign in",
};

export default function LoginPage() {
  return (
    <main>
      <PageHeader
        title="Sign in"
        description="Access your candidate profile and applications."
        backHref="/"
        backLabel="Home"
      />
      <div className="mx-auto max-w-md px-4 py-10 sm:px-6">
        <Suspense fallback={<p className="text-sm text-muted">Loading…</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
