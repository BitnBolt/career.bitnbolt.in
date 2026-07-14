"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useAuth } from "@/components/providers/auth-provider";
import { AuthPageSkeleton } from "@/components/skeletons/AuthPageSkeleton";

interface RequireAuthProps {
  children: ReactNode;
  redirectTo?: string;
}

export function RequireAuth({ children, redirectTo }: RequireAuthProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const loginHref = `/login?redirect=${encodeURIComponent(redirectTo ?? pathname)}`;

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace(loginHref);
    }
  }, [isLoading, user, router, loginHref]);

  if (isLoading) {
    return <AuthPageSkeleton />;
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <p className="text-sm text-muted">Redirecting to sign in…</p>
        <Link
          href={loginHref}
          className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
