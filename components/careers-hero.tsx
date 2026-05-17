import { CareersHeroActions } from "@/components/careers-hero-actions";
import { ContentImage } from "@/components/content-image";
import { SplitSection } from "@/components/split-section";
import { pageImages } from "@/lib/page-images";

export function CareersHero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <SplitSection
          className="gap-8 lg:gap-14"
          visual={
            <ContentImage
              image={pageImages.hero}
              aspect="4/3"
              priority
              objectFit="cover"
              showAssetHint={false}
            />
          }
        >
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Internships at BitnBolt
            </p>
            <h1 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-tight text-foreground sm:mt-4 sm:text-3xl lg:text-[2.5rem]">
              Build real IoT products — starting with your internship
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base lg:text-lg">
              We currently offer engineering internships only. Work on custom
              hardware, embedded firmware, and connected platforms alongside teams
              who ship for industrial and smart-device clients.
            </p>
            <CareersHeroActions />
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:mt-10 sm:gap-6 sm:pt-8 lg:grid-cols-4">
              {[
                { value: "6", label: "Internship tracks" },
                { value: "Students", label: "& recent graduates" },
                { value: "Hybrid", label: "Work arrangement" },
                { value: "IoT", label: "Hands-on focus" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xl font-semibold text-foreground sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-muted sm:text-xs">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </SplitSection>
      </div>
    </section>
  );
}
