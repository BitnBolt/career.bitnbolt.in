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

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="section-container">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {aboutFacts.map((fact) => (
              <div key={fact.label} className="card-bitnbolt p-4 sm:p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-bold text-[#0B1C2D]">
                  {"href" in fact && fact.href ? (
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 transition-colors hover:text-blue-700"
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

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="section-container">
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
                <li key={item.title} className="card-bitnbolt p-6">
                  <h2 className="text-sm font-bold text-[#0B1C2D]">
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

      <section className="border-b border-gray-100 bg-gray-50 py-12">
        <div className="section-container">
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
                <li key={item.title} className="card-bitnbolt p-6">
                  <h2 className="text-sm font-bold text-[#0B1C2D]">
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

      <section className="border-b border-gray-100 bg-white py-12">
        <div className="section-container">
          <h2 className="heading-section">What we value</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {companyValues.map((item, index) => (
              <li key={item.title} className="card-bitnbolt overflow-hidden">
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
                  className="[&_div]:rounded-none [&_div]:border-0 [&_div]:shadow-none"
                />
                <div className="p-6">
                  <h3 className="text-sm font-bold text-[#0B1C2D]">
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

      <section className="bg-gray-50 py-12">
        <div className="section-container">
          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm text-muted">
              Explore our programs or visit the main company site.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/internships" className="btn-primary">
                Internships
              </Link>
              <Link href="/cap" className="btn-secondary">
                CAP
              </Link>
              <a
                href="https://www.bitnbolt.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                bitnbolt.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
