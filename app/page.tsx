import { Suspense } from "react";
import { CareersHero } from "@/components/careers-hero";
import { HomeLandingSections } from "@/components/landing/home-landing-sections";
import { InternshipApplyProvider } from "@/components/internships/internship-apply-provider";
import { InternshipProgram } from "@/components/internships/internship-program";

function InternshipFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center text-sm text-muted">
      Loading internship programs…
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <InternshipApplyProvider>
        <CareersHero />
        <HomeLandingSections variant="before-programs" />
        <Suspense fallback={<InternshipFallback />}>
          <InternshipProgram
            basePath="/"
            showTitle={false}
            applyMode="modal"
          />
        </Suspense>
        <HomeLandingSections variant="after-programs" />
      </InternshipApplyProvider>
    </main>
  );
}
