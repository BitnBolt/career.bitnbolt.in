import { CareersHero } from "@/components/careers-hero";
import { HomeCta } from "@/components/home-cta";
import { HomeFeaturedJobs } from "@/components/home-featured-jobs";

export default function Home() {
  return (
    <main>
      <CareersHero />
      <HomeFeaturedJobs />
      <HomeCta />
    </main>
  );
}
