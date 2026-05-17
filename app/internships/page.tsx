import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { InternshipProgram } from "@/components/internships/internship-program";
import { pageImages } from "@/lib/page-images";

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
      <Suspense fallback={<InternshipFallback />}>
        <InternshipProgram applyMode="inline" showTitle={false} />
      </Suspense>
    </main>
  );
}
