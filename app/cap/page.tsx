import Link from "next/link";
import { CapRoadmap } from "@/components/cap/cap-roadmap";
import { ContentImage } from "@/components/content-image";
import { PageHero } from "@/components/page-hero";
import { SplitSection } from "@/components/split-section";
import {
  capHighlights,
  capOverview,
  capRoadmap,
  capSteps,
  capVsInternship,
  capWhoItsFor,
} from "@/lib/cap-content";
import { pageImages } from "@/lib/page-images";

export const metadata = {
  title: "Career Accelerator Program for Full-Stack IoT Technology",
  description:
    "BitnBolt CAP — a 24-week, cohort-based career accelerator covering electronics, embedded firmware, cloud infrastructure, and IoT data analytics.",
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

      <section className="border-b border-border bg-surface-muted">
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
            {capOverview.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-sm leading-relaxed text-muted sm:text-base [&+&]:mt-4"
              >
                {paragraph}
              </p>
            ))}
          </SplitSection>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground">
            The IoT Career Accelerator Roadmap
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            Six phases from basic electronics through a cohort-based capstone —
            building production-grade IoT skills week by week.
          </p>
          <CapRoadmap phases={capRoadmap} />
        </div>
      </section>

      <section className="border-b border-border bg-surface-muted">
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

      <section className="border-b border-border bg-surface">
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

      <section className="border-b border-border bg-surface-muted">
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

      <section className="border-b border-border bg-surface">
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
