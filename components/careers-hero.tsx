import { CareersHeroActions } from "@/components/careers-hero-actions";

export function CareersHero() {
  return (
    <section className="border-b border-border bg-header-bg text-header-fg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-header-muted">
          Internships at BitnBolt
        </p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
          Build real IoT products — starting with your internship
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-header-muted sm:text-lg">
          We currently offer engineering internships only. Work on custom
          hardware, embedded firmware, and connected platforms alongside teams
          who ship for industrial and smart-device clients.
        </p>
        <CareersHeroActions />
        <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            { value: "6", label: "Internship tracks" },
            { value: "Students", label: "& recent graduates" },
            { value: "Hybrid", label: "Work arrangement" },
            { value: "IoT", label: "Hands-on focus" },
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
