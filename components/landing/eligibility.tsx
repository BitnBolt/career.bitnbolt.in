import { ContentImage } from "@/components/content-image";
import { SplitSection } from "@/components/split-section";
import { eligibilityItems } from "@/lib/landing-content";
import { pageImages } from "@/lib/page-images";

export function Eligibility() {
  return (
    <section id="eligibility" className="scroll-mt-14 border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SplitSection
          reverse
          visual={
            <ContentImage
              image={pageImages.eligibility}
              aspect="4/3"
              objectFit="cover"
            />
          }
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Requirements
            </p>
            <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
              Eligibility criteria
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Check that you meet these before applying.
            </p>
            <ul className="mt-8 space-y-4 border border-border bg-surface-muted p-6 sm:p-8">
              {eligibilityItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
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
        </SplitSection>
      </div>
    </section>
  );
}
