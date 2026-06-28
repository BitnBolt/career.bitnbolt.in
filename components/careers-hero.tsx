import { CareersHeroActions } from "@/components/careers-hero-actions";
import { ContentImage } from "@/components/content-image";
import { SplitSection } from "@/components/split-section";
import { pageImages } from "@/lib/page-images";

export function CareersHero() {
  return (
    <section className="hero-dark border-b border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -right-20 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="animation-delay-2000 animate-blob absolute bottom-10 left-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="animation-delay-4000 animate-blob absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-12 sm:py-16 lg:py-20">
        <SplitSection
          className="gap-8 lg:gap-14"
          visual={
            <ContentImage
              image={pageImages.hero}
              aspect="4/3"
              priority
              objectFit="cover"
              showAssetHint={false}
              className="[&_div]:border-white/10 [&_div]:shadow-2xl"
            />
          }
        >
          <div className="min-w-0">
            <p className="eyebrow text-blue-400">Internships at BitnBolt</p>
            <h1 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:mt-4 sm:text-3xl lg:text-[2.5rem]">
              Build real IoT products — starting with your internship
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:mt-5 sm:text-base lg:text-lg">
              We currently offer engineering internships only. Work on custom
              hardware, embedded firmware, and connected platforms alongside teams
              who ship for industrial and smart-device clients.
            </p>
            <CareersHeroActions />
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:gap-6 sm:pt-8 lg:grid-cols-4">
              {[
                { value: "6", label: "Internship tracks" },
                { value: "Students", label: "& recent graduates" },
                { value: "Hybrid", label: "Work arrangement" },
                { value: "IoT", label: "Hands-on focus" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[11px] leading-snug text-gray-400 sm:text-xs">
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
