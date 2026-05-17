import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import { PageHero } from "@/components/page-hero";
import { SplitSection } from "@/components/split-section";
import {
  capHighlights,
  capOverview,
  capSteps,
  capVsInternship,
  capWhoItsFor,
} from "@/lib/cap-content";
import { pageImages } from "@/lib/page-images";

export const metadata = {
  title: "Career Accelerator Program (CAP)",
  description:
    "BitnBolt CAP — a cohort-based career accelerator for early-career engineers in IoT, embedded systems, and hardware.",
};

const capHighlightImages = [
  pageImages.offer.handsOn,
  pageImages.offer.duration,
  pageImages.offer.mentorship,
  pageImages.offer.path,
];

export default function CapPage() {
  return (
    <main>
      <PageHero
        eyebrow="Career Accelerator Program"
        title={capOverview.title}
        description={capOverview.tagline}
        image={pageImages.capBanner}
        reverse
      />

      {/* <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SplitSection
            visual={
              <ContentImage
                image={pageImages.cap.overview}
                aspect="4/3"
                objectFit="cover"
              />
            }
          >
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              The Career Accelerator Program ({capOverview.shortName}) is
              BitnBolt&apos;s structured path for engineers who are ready to ramp
              faster than a standard internship. Participants join a cohort, work
              on live IoT programs, and graduate with production-grade experience
              across firmware, hardware, and connected systems.
            </p>
          </SplitSection>
        </div>
      </section> */}

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground">
            What CAP offers
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {capHighlights.map((item, index) => (
              <li
                key={item.title}
                className="border border-border bg-surface-muted"
              >
                <ContentImage
                  image={capHighlightImages[index] ?? pageImages.offer.handsOn}
                  aspect="3/2"
                  objectFit="cover"
                />
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SplitSection
            reverse
            visual={
              <ContentImage
                image={pageImages.cap.who}
                aspect="4/3"
                objectFit="cover"
              />
            }
          >
            <h2 className="text-lg font-semibold text-foreground">
              Who should apply
            </h2>
            <ul className="mt-6 space-y-4 border border-border bg-surface p-6 sm:p-8">
              {capWhoItsFor.map((item) => (
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
          </SplitSection>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SplitSection
            visual={
              <ContentImage
                image={pageImages.howItWorks}
                aspect="4/3"
                objectFit="cover"
              />
            }
          >
            <h2 className="text-lg font-semibold text-foreground">How CAP works</h2>
            <ol className="mt-8 space-y-4">
              {capSteps.map((item) => (
                <li
                  key={item.step}
                  className="flex gap-4 border border-border bg-surface-muted p-5"
                >
                  <span className="text-lg font-semibold text-accent">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </SplitSection>
        </div>
      </section>

      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground">
            CAP vs internships
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {capVsInternship.map((item) => (
              <li
                key={item.label}
                className="border border-border bg-surface p-6"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  {item.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            Ready to apply? Use our internship application form and note your
            interest in CAP in your submission, or email{" "}
            <a
              href="mailto:careers@bitnbolt.com"
              className="text-accent transition-colors hover:text-accent-hover"
            >
              careers@bitnbolt.com
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/internships#apply"
              className="border border-accent bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
            >
              Apply now
            </Link>
            <Link
              href="/internships"
              className="border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-surface-muted"
            >
              View internships
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
