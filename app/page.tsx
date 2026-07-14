import { Suspense } from "react";
import { CareersHero } from "@/components/careers-hero";
import { HomeLandingSections } from "@/components/landing/home-landing-sections";
import { InternshipApplyProvider } from "@/components/internships/internship-apply-provider";
import { InternshipProgram } from "@/components/internships/internship-program";
import { InternshipProgramSkeleton } from "@/components/skeletons/InternshipProgramSkeleton";

export default function Home() {
  return (
    <main>
      <InternshipApplyProvider>
        <CareersHero />
        <HomeLandingSections variant="before-programs" />
        <Suspense
          fallback={
            <InternshipProgramSkeleton showTitle={false} applyMode="modal" />
          }
        >
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
