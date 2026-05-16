import { Eligibility } from "@/components/landing/eligibility";
import { Faqs } from "@/components/landing/faqs";
import { HowItWorks } from "@/components/landing/how-it-works";
import { IntroStory } from "@/components/landing/intro-story";
import { Testimonials } from "@/components/landing/testimonials";
import { WhatWeOffer } from "@/components/landing/what-we-offer";
import { WhyBitnBolt } from "@/components/landing/why-bitnbolt";

interface HomeLandingSectionsProps {
  /** Show sections after internship programs (default: before) */
  variant?: "before-programs" | "after-programs" | "all";
}

export function HomeLandingSections({
  variant = "before-programs",
}: HomeLandingSectionsProps) {
  if (variant === "before-programs") {
    return (
      <>
        <IntroStory />
        <WhatWeOffer />
        <HowItWorks />
        <Eligibility />
      </>
    );
  }

  if (variant === "after-programs") {
    return (
      <>
        <WhyBitnBolt />
        <Testimonials />
        <Faqs />
      </>
    );
  }

  return (
    <>
      <IntroStory />
      <WhatWeOffer />
      <HowItWorks />
      <Eligibility />
      <WhyBitnBolt />
      <Testimonials />
      <Faqs />
    </>
  );
}
