import { Suspense } from "react";
import { InternshipProgram } from "@/components/internships/internship-program";
import { InternshipProgramSkeleton } from "@/components/skeletons/InternshipProgramSkeleton";

export const metadata = {
  title: "Internship programs",
  description:
    "Browse and apply for engineering internships at BitnBolt — embedded systems, firmware, hardware, IoT platform, and software.",
};

export default function InternshipsPage() {
  return (
    <main>
      <Suspense
        fallback={
          <InternshipProgramSkeleton showTitle={false} applyMode="inline" />
        }
      >
        <InternshipProgram applyMode="inline" showTitle={false} />
      </Suspense>
    </main>
  );
}
