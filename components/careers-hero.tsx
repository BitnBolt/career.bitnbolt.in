import Link from "next/link";

export function CareersHero() {
  return (
    <section className="border-b border-border bg-header-bg text-header-fg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-header-muted">
          Careers at BitnBolt
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
          Engineer the connected world — from silicon to cloud
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-header-muted sm:text-lg">
          Join a team building custom IoT hardware, embedded firmware, and
          intelligent platforms for industries that need reliable, intelligent
          products.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/jobs"
            className="border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
          >
            Browse open roles
          </Link>
          <Link
            href="/signup"
            className="border border-white/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Create account
          </Link>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            { value: "10+", label: "Open positions" },
            { value: "6", label: "Engineering teams" },
            { value: "Hybrid", label: "Flexible work" },
            { value: "IoT", label: "End-to-end focus" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-semibold text-header-fg">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-header-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
