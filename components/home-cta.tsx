import Link from "next/link";

export function HomeCta() {
  return (
    <section className="border-t border-border bg-header-bg text-header-fg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="border border-white/10 p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold">Ready to apply?</h2>
            <p className="mt-2 text-sm text-header-muted">
              Create an account, complete your profile, and submit applications
              for roles that match your skills.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/signup"
                className="border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
              >
                Create account
              </Link>
              <Link
                href="/jobs"
                className="border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Browse roles
              </Link>
            </div>
          </div>
          <div className="border border-white/10 p-6">
            <h3 className="text-sm font-semibold">Candidate portal</h3>
            <ul className="mt-4 space-y-2 text-sm text-header-muted">
              <li>· Sign up & sign in</li>
              <li>· Build your profile</li>
              <li>· Track applications</li>
            </ul>
            <Link
              href="/login"
              className="mt-6 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Sign in →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
