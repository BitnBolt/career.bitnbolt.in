import { eligibilityItems } from "@/lib/landing-content";

export function Eligibility() {
  return (
    <section id="eligibility" className="scroll-mt-14 border-b border-border bg-header-bg text-header-fg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-header-muted">
            Requirements
          </p>
          <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
            Eligibility criteria
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-header-muted sm:text-base">
            Check that you meet these before applying.
          </p>
        </div>
        <ul className="mt-8 space-y-4 border border-white/10 bg-white/5 p-6 sm:p-8">
          {eligibilityItems.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-header-muted"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
