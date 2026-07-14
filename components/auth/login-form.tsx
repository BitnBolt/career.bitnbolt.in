"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useAuth } from "@/components/providers/auth-provider";

export function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/internships";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    router.push(redirect);
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-border bg-surface"
      noValidate
    >
      <div className="border-b border-border bg-surface-muted px-6 py-4">
        <h2 className="text-lg font-semibold text-foreground">Sign in</h2>
        <p className="mt-1 text-sm text-muted">
          Access your profile and job applications.
        </p>
      </div>

      <div className="space-y-5 p-6">
        {error && (
          <p className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            {error}
          </p>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full border border-accent bg-accent py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </div>

      <p className="border-t border-border px-6 py-4 text-center text-sm text-muted">
        No account?{" "}
        <Link
          href={`/signup${redirect !== "/internships" ? `?redirect=${encodeURIComponent(redirect)}` : ""}`}
          className="font-medium text-accent transition-colors hover:text-accent-hover"
        >
          Create one
        </Link>
      </p>
    </form>
  );
}
