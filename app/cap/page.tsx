import Link from "next/link";
import { CapApplyForm } from "@/components/cap/cap-apply-form";
import { CapCurriculum } from "@/components/cap/cap-curriculum";
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

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="section-container">
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

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="section-container">
          <h2 className="heading-section">Program curriculum</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            Six phases from basic electronics through a cohort-based capstone.
            Expand each phase to see its modules — the same structure you would
            follow week by week in the program.
          </p>
          <CapCurriculum phases={capRoadmap} />
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="section-container">
          <h2 className="heading-section">What CAP offers</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {capHighlights.map((item, index) => (
              <li key={item.title} className="card-bitnbolt overflow-hidden">
                <ContentImage
                  image={capHighlightImages[index] ?? pageImages.offer.handsOn}
                  aspect="3/2"
                  objectFit="cover"
                  className="[&_div]:rounded-none [&_div]:border-0 [&_div]:shadow-none"
                />
                <div className="p-6">
                  <h3 className="text-sm font-bold text-[#0B1C2D]">
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

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="section-container">
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
            <h2 className="heading-section">Who should apply</h2>
            <ul className="mt-6 space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
              {capWhoItsFor.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SplitSection>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="section-container">
          <SplitSection
            visual={
              <ContentImage
                image={pageImages.howItWorks}
                aspect="4/3"
                objectFit="cover"
              />
            }
          >
            <h2 className="heading-section">How CAP works</h2>
            <ol className="mt-8 space-y-4">
              {capSteps.map((item) => (
                <li key={item.step} className="card-bitnbolt flex gap-4 p-5">
                  <span className="text-lg font-bold text-blue-600">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0B1C2D]">
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

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="section-container">
          <h2 className="heading-section">CAP vs internships</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {capVsInternship.map((item) => (
              <li key={item.label} className="card-bitnbolt p-6">
                <h3 className="text-sm font-bold text-[#0B1C2D]">
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

      <section id="apply" className="scroll-mt-16 bg-gray-50 py-12">
        <div className="section-container">
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-[#0B1C2D]">Apply to CAP</p>
            <p className="mt-2 text-sm text-muted">
              Submit your application below, or email{" "}
              <a
                href="mailto:careers@bitnbolt.com"
                className="font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                careers@bitnbolt.com
              </a>
              .
            </p>
            <div className="mt-6">
              <CapApplyForm />
            </div>
            <div className="mt-6">
              <Link href="/internships" className="btn-secondary">
                View internships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
