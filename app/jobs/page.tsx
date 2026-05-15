import { JobListings } from "@/components/job-listings";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Open roles",
};

export default function JobsPage() {
  return (
    <main>
      <PageHeader
        title="Open roles"
        description="Full-time positions, internships, contracts, and graduate programs across hardware, firmware, software, and delivery."
      />
      <JobListings embedded />
    </main>
  );
}
