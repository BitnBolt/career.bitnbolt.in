import { Faqs } from "@/components/landing/faqs";
import { PageHero } from "@/components/page-hero";
import { pageImages } from "@/lib/page-images";

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about BitnBolt engineering internships and the Career Accelerator Program (CAP).",
};

export default function FaqPage() {
  return (
    <main>
      <Faqs showHeading={false} />
    </main>
  );
}
