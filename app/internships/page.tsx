import { Suspense } from "react";
import { HomeLandingSections } from "@/components/landing/home-landing-sections";
import { PageHeader } from "@/components/page-header";
import { InternshipProgram } from "@/components/internships/internship-program";

export const metadata = {
  title: "Internship programs",
  description:
    "Browse and apply for engineering internships at BitnBolt — embedded systems, firmware, hardware, IoT platform, and software.",
};

function InternshipFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center text-sm text-muted">
      Loading…
    </div>
  );
}

export default function InternshipsPage() {
  return (
    <main>
      <PageHeader
        title="Internship programs"
        description="BitnBolt currently offers engineering internships only. Select a track, read the details, and apply below."
        backHref="/"
        backLabel="Home"
      />
      <HomeLandingSections variant="before-programs" />
      <Suspense fallback={<InternshipFallback />}>
        <InternshipProgram />
      </Suspense>
      <HomeLandingSections variant="after-programs" />
    </main>
  );
}
