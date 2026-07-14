"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useAuth } from "@/components/providers/auth-provider";
import { AuthPageSkeleton } from "@/components/skeletons/AuthPageSkeleton";

export function RequireProfile({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user && !user.profileComplete) {
      router.replace("/profile/setup");
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) return <AuthPageSkeleton />;
  if (!user.profileComplete) return <AuthPageSkeleton />;

  return <>{children}</>;
}
