import { SectionHeading } from "@/components/landing/section-heading";
import { howItWorksSteps } from "@/lib/landing-content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-14 border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="How it works"
          description="From application to onboarding — a clear, transparent path."
          align="center"
        />
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorksSteps.map((item) => (
            <li
              key={item.step}
              className="border border-border bg-surface-muted p-5"
            >
              <span className="text-lg font-semibold text-accent">
                {item.step}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
