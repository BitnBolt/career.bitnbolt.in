import { pageImages } from "@/lib/page-images";

export const programOffers = [
  {
    title: "Hands-on engineering work",
    description:
      "Contribute to real IoT projects — firmware on MCUs, PCB bring-up, cloud pipelines, and operator dashboards — not simulated coursework.",
    image: pageImages.offer.handsOn,
  },
  {
    title: "Structured internship duration",
    description:
      "Programs typically run 3–6 months, with scope aligned to your track and academic calendar. Extension or pre-placement offer depends on performance and team needs.",
    image: pageImages.offer.duration,
  },
  {
    title: "Mentorship & reviews",
    description:
      "Work with senior engineers who review your code and designs, answer questions, and help you grow into a production-minded engineer.",
    image: pageImages.offer.mentorship,
  },
  {
    title: "Path to full-time",
    description:
      "Strong performers may be considered for continued engagement or full-time roles as business requirements allow.",
    image: pageImages.offer.path,
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Apply online",
    description: "Submit your application through our form with your resume and preferred internship track.",
  },
  {
    step: "02",
    title: "Application review",
    description: "Our team screens applications for academic fit, skills, and alignment with open tracks.",
  },
  {
    step: "03",
    title: "Interview & assessment",
    description: "Shortlisted candidates complete a technical discussion or exercise relevant to their track.",
  },
  {
    step: "04",
    title: "Offer",
    description: "Selected interns receive an offer with duration, team, and start date details.",
  },
  {
    step: "05",
    title: "Onboarding at BitnBolt",
    description: "Join your team, meet your mentor, and begin contributing to live engineering work.",
  },
];

export const eligibilityItems = [
  "Currently pursuing or recently completed B.Tech/M.Tech in ECE, EEE, CS, IT, or related engineering fields.",
  "Strong interest in embedded systems, IoT, hardware, firmware, or software for connected products.",
  "Ability to commit to a full-time or agreed hybrid internship for the program duration.",
  "Prior projects, internships, or lab work in electronics or programming is a plus — not always required.",
];

export const whyBitnBolt = [
  {
    title: "Real hardware culture",
    description:
      "BitnBolt is built around custom PCB design, embedded firmware, and IoT delivery. Interns work where hardware and software meet — not in isolation.",
    image: pageImages.why.hardware,
  },
  {
    title: "Cross-functional exposure",
    description:
      "Depending on your track, you collaborate with firmware, hardware, cloud, and application teams on client-facing programs.",
    image: pageImages.why.exposure,
  },
  {
    title: "Guidance you can use",
    description:
      "Managers and mentors invest time in feedback, lab skills, and career direction — especially for interns early in their engineering journey.",
    image: pageImages.why.guidance,
  },
  {
    title: "Production mindset",
    description:
      "You learn practices used in industrial and smart-device deployments — reliability, testing, and documentation matter here.",
    image: pageImages.why.production,
  },
];

export const testimonials = [
  {
    name: "Intern — Firmware track",
    role: "Embedded Systems Intern",
    rating: 5,
    quote:
      "I worked on UART drivers and MQTT integration on real hardware, not just dev boards at home. My mentor reviewed every PR and explained trade-offs I would not have learned in class.",
    image: pageImages.testimonialAvatars[0],
  },
  {
    name: "Intern — IoT Platform track",
    role: "Platform Engineering Intern",
    rating: 5,
    quote:
      "The team treated me as a contributor, not an observer. I built API integrations and sat in client demos. The experience made my final-year project much stronger.",
    image: pageImages.testimonialAvatars[1],
  },
  {
    name: "Intern — Hardware track",
    role: "PCB & Validation Intern",
    rating: 5,
    quote:
      "From schematic reviews to lab testing, I saw the full hardware cycle. Flexible hours helped me balance college commitments while still delivering on milestones.",
    image: pageImages.testimonialAvatars[2],
  },
];

export const faqs = [
  {
    question: "Who can apply for BitnBolt internships?",
    answer:
      "Engineering students and recent graduates interested in embedded systems, IoT, firmware, hardware, or related software. We currently hire for internships only — not full-time roles through this portal.",
  },
  {
    question: "What is CAP (Career Accelerator Program)?",
    answer:
      "CAP is BitnBolt’s cohort-based career accelerator for early-career engineers ready for deeper, cross-functional ownership on IoT products. See the CAP page for eligibility and how it differs from internships.",
  },
  {
    question: "What is the typical duration of an internship?",
    answer:
      "Most internships run 3–6 months depending on the track, project scope, and your academic schedule. Duration is confirmed in your offer letter.",
  },
  {
    question: "Is the internship paid?",
    answer:
      "Compensation details are shared with shortlisted candidates during the offer stage, in line with our internship policy and role requirements.",
  },
  {
    question: "Can I apply for more than one track?",
    answer:
      "Yes. Indicate your preferred track in the application and mention secondary interests in your cover note. We will consider the best fit during review.",
  },
  {
    question: "What does the selection process involve?",
    answer:
      "Online application, resume screening, and a technical interview or exercise for shortlisted candidates. We aim to respond within a few weeks of the application deadline where one is listed.",
  },
  {
    question: "Do you offer remote internships?",
    answer:
      "Some tracks support hybrid work; hardware and lab-heavy roles are primarily on-site in Bengaluru. Work mode is specified per track and confirmed in your offer.",
  },
];
