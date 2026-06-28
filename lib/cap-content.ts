export const capOverview = {
  title: "Career Accelerator Program for Full-Stack IoT Technology",
  shortName: "CAP",
  tagline:
    "A high-impact Career Accelerator Program (CAP) for IoT Project Development bridges the gap between academic theory and production-grade engineering.",
  intro: [
    "Because IoT is uniquely multi-disciplinary, a structured program must systematically build competencies across hardware, low-level programming, cloud architecture, and data visualization.",
    "This comprehensive, step-by-step roadmap walks through a professional-grade Career Accelerator Program, moving from raw components to an enterprise-ready, data-driven ecosystem.",
  ],
};

export type CapRoadmapPhase = {
  phase: string;
  title: string;
  modules: { id: string; topic: string }[];
  duration: string;
};

export const capRoadmap: CapRoadmapPhase[] = [
  {
    phase: "1",
    title: "Basic Electronics to excel IoT",
    modules: [
      { id: "1.1", topic: "Orientation to Electronics & IoT" },
      { id: "1.2", topic: "Electrical Fundamentals for Electronic Systems" },
      { id: "1.3", topic: "Foundations of Electronic Circuits & Components" },
      { id: "1.4", topic: "Basic Project and Its Interfacing" },
    ],
    duration: "1–3 Weeks",
  },
  {
    phase: "2",
    title: "Embedded Firmware Engineering",
    modules: [
      {
        id: "2.1",
        topic:
          "Advanced Embedded C & Python Toolchains — learning C & Python with visualization",
      },
      { id: "2.2", topic: "Microcontroller Architectures and its Basics" },
      { id: "2.3", topic: "Interfacing with Sensors & Actuators" },
    ],
    duration: "4–8 Weeks",
  },
  {
    phase: "3",
    title: "Local Networks & Visual Dashboards",
    modules: [
      { id: "3.1", topic: "Industrial Communication Protocols" },
      { id: "3.2", topic: "Dashboard Designing & Development" },
      { id: "3.3", topic: "Database Integration" },
    ],
    duration: "9–12 Weeks",
  },
  {
    phase: "4",
    title: "Cloud Infrastructure",
    modules: [
      {
        id: "4.1",
        topic: "IoT Transport Protocols & Remote Device Management",
      },
      {
        id: "4.2",
        topic: "Enterprise Cloud Integration (AWS IoT Core / Azure IoT Hub)",
      },
    ],
    duration: "14–16 Weeks",
  },
  {
    phase: "5",
    title: "IoT Data Analytics & Edge Intelligence",
    modules: [
      { id: "5.1", topic: "High-Throughput Time-Series Storage" },
      { id: "5.2", topic: "Live Visualizations & Real-Time Alerts" },
      { id: "5.3", topic: "Proactive & Predictive Analytics" },
    ],
    duration: "17–20 Weeks",
  },
  {
    phase: "6",
    title: "Capstone Project (Cohort-based)",
    modules: [
      { id: "6.1", topic: "Realtime Project Implementation with Report" },
      { id: "6.2", topic: "Open-Source Documentation & Version Control" },
      { id: "6.3", topic: "Prototype to Product Journey" },
    ],
    duration: "21–24 Weeks",
  },
];

export const capHighlights = [
  {
    title: "Cohort-based learning",
    description:
      "Join a focused cohort of early-career engineers. Work through a defined curriculum alongside peers, with milestones that mirror how product teams ship in industry.",
  },
  {
    title: "End-to-end product exposure",
    description:
      "Go deeper than a single internship track — firmware, hardware, cloud, and delivery practices connected across one accelerator journey.",
  },
  {
    title: "Senior mentorship",
    description:
      "Dedicated mentors from BitnBolt engineering leads review your work weekly, sharpen your technical judgment, and prepare you for client-facing responsibility.",
  },
  {
    title: "Career outcomes",
    description:
      "High performers may receive continued project engagement or consideration for full-time roles as team capacity allows.",
  },
];

export const capWhoItsFor = [
  "Recent B.Tech/M.Tech graduates in ECE, EEE, CS, IT, or related fields.",
  "Final-year students with strong project portfolios who want an accelerated path into IoT engineering.",
  "Engineers with prior internship experience seeking deeper ownership before a full-time role.",
  "Candidates committed to a full-time, on-site program in Bengaluru for the cohort duration.",
];

export const capSteps = [
  {
    step: "01",
    title: "Apply to CAP",
    description:
      "Submit your application with resume, academic details, and links to projects or repositories.",
  },
  {
    step: "02",
    title: "Technical evaluation",
    description:
      "Shortlisted applicants complete interviews and practical assessments aligned with embedded and IoT engineering.",
  },
  {
    step: "03",
    title: "Cohort onboarding",
    description:
      "Accepted participants join the next CAP cohort with orientation, tooling setup, and team assignments.",
  },
  {
    step: "04",
    title: "Accelerator projects",
    description:
      "Contribute to live engineering work with increasing scope — design reviews, lab validation, and delivery checkpoints.",
  },
  {
    step: "05",
    title: "Graduation & next steps",
    description:
      "Complete the program with a portfolio of shipped contributions and a clear recommendation for your next career move.",
  },
];

export const capVsInternship = [
  {
    label: "Internships",
    description:
      "Track-based programs (3–6 months) for students and recent graduates. Best when you want focused experience in firmware, hardware, IoT platform, or software.",
  },
  {
    label: "CAP",
    description:
      "A longer, cohort-based accelerator for candidates ready for broader ownership, cross-functional exposure, and a faster ramp into production engineering.",
  },
];
