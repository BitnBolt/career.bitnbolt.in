import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import { PageHero } from "@/components/page-hero";
import { SplitSection } from "@/components/split-section";
import { aboutFacts, aboutSections } from "@/lib/about-content";
import { companyValues } from "@/lib/content";
import { pageImages } from "@/lib/page-images";

export const metadata = {
  title: "About",
  description:
    "About BitnBolt careers — engineering internships, the Career Accelerator Program (CAP), and how we build IoT products.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="About BitnBolt careers"
        description="We help early-career engineers build production-grade IoT, embedded, and hardware systems in Bengaluru."
        image={pageImages.aboutBanner}
      />

      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  {"href" in fact && fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors hover:text-accent-hover"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SplitSection
            reverse
            visual={
              <ContentImage
                image={pageImages.about.team}
                aspect="4/3"
                objectFit="cover"
              />
            }
          >
            <ul className="grid gap-6">
              {aboutSections.slice(0, 2).map((item) => (
                <li
                  key={item.title}
                  className="border border-border bg-surface-muted p-6"
                >
                  <h2 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
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
                image={pageImages.about.lab}
                aspect="4/3"
                objectFit="cover"
              />
            }
          >
            <ul className="grid gap-6">
              {aboutSections.slice(2).map((item) => (
                <li
                  key={item.title}
                  className="border border-border bg-surface p-6"
                >
                  <h2 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </SplitSection>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-foreground">
            What we value
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {companyValues.map((item, index) => (
              <li
                key={item.title}
                className="border border-border bg-surface-muted"
              >
                <ContentImage
                  image={
                    [
                      pageImages.why.hardware,
                      pageImages.why.exposure,
                      pageImages.why.guidance,
                      pageImages.why.production,
                    ][index] ?? pageImages.why.hardware
                  }
                  aspect="3/2"
                  objectFit="cover"
                />
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            Explore our programs or visit the main company site.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/internships"
              className="border border-accent bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
            >
              Internships
            </Link>
            <Link
              href="/cap"
              className="border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-surface"
            >
              CAP
            </Link>
            <a
              href="https://www.bitnbolt.in"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-surface"
            >
              bitnbolt.in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
