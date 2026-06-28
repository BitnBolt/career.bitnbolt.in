/**
 * Image placeholders — replace `asset` paths under /public when you have final art.
 * Until then, `src` uses /hero.png so layouts render correctly.
 */
const placeholder = "/hero.png";

export type PageImage = {
  src: string;
  alt: string;
  asset: string;
  width: number;
  height: number;
};

function img(
  asset: string,
  alt: string,
  width: number,
  height: number,
  src?: string,
): PageImage {
  return { src: src ?? asset, alt, asset, width, height };
}

export const pageImages = {
  hero: img(
    "/hero.jpg",
    "Students building engineering careers at BitnBolt",
    1200,
    675,
  ),
  intro: img("/images/sections/intro.jpg", "Engineering student starting an internship", 800, 600),
  whatWeOffer: img(
    "/images/sections/what-we-offer.jpg",
    "Internship program benefits",
    960,
    540,
  ),
  howItWorks: img(
    "/images/sections/how-it-works.jpg",
    "Application and onboarding process",
    800,
    600,
  ),
  eligibility: img(
    "/images/sections/eligibility.jpg",
    "Eligibility for internship applicants",
    800,
    600,
  ),
  whyBitnbolt: img(
    "/images/sections/why-bitnbolt.jpg",
    "Engineering team at BitnBolt",
    960,
    540,
  ),
  testimonials: img(
    "/images/sections/testimonials.jpg",
    "Intern experiences at BitnBolt",
    960,
    540,
  ),
  faq: img("/images/sections/faq.jpg", "Frequently asked questions", 720, 600),
  internshipsBanner: img(
    "/images/sections/internships.jpg",
    "Internship programs at BitnBolt",
    1200,
    500,
  ),
  capBanner: img(
    "/images/sections/cap.jpg",
    "Career Accelerator Program",
    1200,
    500,
  ),
  aboutBanner: img("/images/sections/about.jpg", "About BitnBolt careers", 1200, 500),
  faqBanner: img("/images/sections/faq-banner.jpg", "FAQ and support", 1200, 500),
  offer: {
    handsOn: img("/images/sections/offer-hands-on.jpg", "Hands-on work", 400, 300),
    duration: img("/images/sections/offer-duration.jpg", "Program duration", 400, 300),
    mentorship: img("/images/sections/offer-mentorship.jpg", "Mentorship", 400, 300),
    path: img("/images/sections/offer-path.jpg", "Career path", 400, 300),
  },
  why: {
    hardware: img("/images/sections/why-hardware.jpg", "Hardware engineering", 400, 300),
    exposure: img("/images/sections/why-exposure.jpg", "Cross-team collaboration", 400, 300),
    guidance: img("/images/sections/why-guidance.jpg", "Mentor guidance", 400, 300),
    production: img("/images/sections/why-production.jpg", "Production mindset", 400, 300),
  },
  testimonialAvatars: [
    img("/images/sections/avatar-1.jpg", "Intern testimonial", 160, 160),
    img("/images/sections/avatar-2.jpg", "Intern testimonial", 160, 160),
    img("/images/sections/avatar-3.jpg", "Intern testimonial", 160, 160),
  ],
  cap: {
    overview: img("/images/sections/cap-overview.jpg", "CAP cohort learning", 800, 600),
    who: img("/images/sections/cap-who.jpg", "Who should apply to CAP", 800, 600),
  },
  about: {
    team: img("/images/sections/about-team.jpg", "BitnBolt engineering team", 800, 600),
    lab: img("/images/sections/about-lab.jpg", "Hardware and IoT lab", 800, 600),
  },
} as const;
