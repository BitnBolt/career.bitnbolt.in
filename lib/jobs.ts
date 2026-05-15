export type JobType = "full-time" | "internship" | "contract" | "part-time";
export type WorkMode = "onsite" | "hybrid" | "remote";

export interface Job {
  id: string;
  title: string;
  team: string;
  location: string;
  workMode: WorkMode;
  type: JobType;
  department: string;
  experience: string;
  postedAt: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  preferred?: string[];
}

export const departments = [
  "All",
  "Embedded Systems",
  "Hardware Engineering",
  "Firmware",
  "IoT Platform",
  "Cloud & Backend",
  "Software",
  "Operations",
] as const;

export const jobTypes: { value: JobType | "all"; label: string }[] = [
  { value: "all", label: "All roles" },
  { value: "full-time", label: "Full-time" },
  { value: "internship", label: "Internships" },
  { value: "contract", label: "Contract" },
  { value: "part-time", label: "Part-time" },
];

export const jobs: Job[] = [
  {
    id: "embedded-firmware-engineer",
    title: "Embedded Firmware Engineer",
    team: "Firmware & RTOS",
    location: "Bengaluru, India",
    workMode: "hybrid",
    type: "full-time",
    department: "Firmware",
    experience: "2–5 years",
    postedAt: "2026-05-10",
    description:
      "Design, implement, and maintain firmware for ARM-based microcontrollers powering industrial IoT gateways and sensor nodes. You will work closely with hardware engineers to bring prototypes to production-ready devices.",
    responsibilities: [
      "Develop bare-metal and RTOS-based firmware in C/C++ for STM32, ESP32, and Nordic platforms",
      "Implement communication stacks (MQTT, Modbus, BLE, LoRaWAN) and OTA update pipelines",
      "Profile power consumption and optimize for battery-operated and mains-powered devices",
      "Collaborate on PCB bring-up, debugging with logic analyzers and oscilloscopes",
      "Write unit tests and participate in code reviews with the firmware team",
    ],
    qualifications: [
      "B.Tech/M.Tech in Electronics, ECE, or equivalent experience",
      "Strong proficiency in C and embedded systems fundamentals",
      "Hands-on experience with UART, SPI, I2C, ADC, and timer peripherals",
      "Familiarity with Git and CI for embedded projects",
    ],
    preferred: [
      "Experience with FreeRTOS or Zephyr",
      "Knowledge of MISRA-C guidelines",
      "Prior work on industrial or automotive-grade products",
    ],
  },
  {
    id: "pcb-design-engineer",
    title: "PCB Design Engineer",
    team: "Hardware Engineering",
    location: "Bengaluru, India",
    workMode: "onsite",
    type: "full-time",
    department: "Hardware Engineering",
    experience: "3–6 years",
    postedAt: "2026-05-08",
    description:
      "Lead schematic capture and PCB layout for custom IoT hardware—from sensor boards to multi-layer industrial controllers. Ensure designs meet EMI, thermal, and manufacturability requirements.",
    responsibilities: [
      "Create schematics and multi-layer PCB layouts in Altium or KiCad",
      "Perform DFM/DFT reviews and coordinate with fabrication houses",
      "Define stack-ups, impedance control, and high-speed routing where applicable",
      "Support prototype assembly, bring-up, and design iteration",
      "Maintain component libraries and BOM documentation",
    ],
    qualifications: [
      "Degree in Electronics/ECE or proven track record in PCB design",
      "Experience with 4+ layer boards and mixed-signal layouts",
      "Understanding of EMC best practices and grounding strategies",
      "Ability to read datasheets and select appropriate components",
    ],
    preferred: [
      "Altium Designer certification or equivalent",
      "Experience with power electronics and SMPS layouts",
    ],
  },
  {
    id: "iot-platform-intern",
    title: "IoT Platform Engineering Intern",
    team: "Cloud & Platform",
    location: "Bengaluru, India",
    workMode: "hybrid",
    type: "internship",
    department: "IoT Platform",
    experience: "Final-year students",
    postedAt: "2026-05-12",
    description:
      "Join our platform team to help build scalable device management, telemetry ingestion, and alerting for enterprise IoT deployments. Ideal for students passionate about backend systems and connected devices.",
    responsibilities: [
      "Assist in developing REST APIs and webhook integrations for device lifecycle",
      "Work on time-series data pipelines and dashboard prototypes",
      "Write integration tests and documentation for internal tools",
      "Participate in sprint planning and technical design discussions",
    ],
    qualifications: [
      "Pursuing B.Tech/M.Tech in CS, IT, ECE, or related field",
      "Solid programming skills in Python, TypeScript, or Go",
      "Basic understanding of MQTT, HTTP, and JSON APIs",
      "Eagerness to learn cloud platforms (AWS/Azure)",
    ],
    preferred: [
      "Personal projects involving sensors, Arduino, or Raspberry Pi",
      "Familiarity with Docker and basic DevOps concepts",
    ],
  },
  {
    id: "embedded-systems-intern",
    title: "Embedded Systems Intern",
    team: "Firmware & RTOS",
    location: "Bengaluru, India",
    workMode: "onsite",
    type: "internship",
    department: "Embedded Systems",
    experience: "2nd year and above",
    postedAt: "2026-05-11",
    description:
      "Hands-on internship building firmware for real client projects under mentorship. You will contribute to sensor drivers, protocol stacks, and lab validation of hardware prototypes.",
    responsibilities: [
      "Implement and test peripheral drivers on development boards",
      "Assist senior engineers during hardware bring-up and debugging",
      "Document test procedures and bug reports clearly",
      "Present learnings and project updates in weekly team syncs",
    ],
    qualifications: [
      "Currently enrolled in ECE, EEE, or CS with embedded coursework",
      "Programming experience in C; coursework or projects in microcontrollers",
      "Basic electronics knowledge (multimeter, breadboard prototyping)",
    ],
  },
  {
    id: "full-stack-engineer-iot",
    title: "Full-Stack Engineer (IoT Applications)",
    team: "Software",
    location: "Bengaluru, India",
    workMode: "hybrid",
    type: "full-time",
    department: "Software",
    experience: "3–5 years",
    postedAt: "2026-05-07",
    description:
      "Build customer-facing dashboards and internal tools that visualize real-time device telemetry, alerts, and operational KPIs for industrial and smart-building clients.",
    responsibilities: [
      "Develop responsive web applications with React/Next.js and TypeScript",
      "Design REST and WebSocket APIs collaborating with backend engineers",
      "Integrate charting, maps, and real-time data streams into operator UIs",
      "Ensure accessibility, performance, and maintainable component architecture",
    ],
    qualifications: [
      "3+ years building production web applications",
      "Strong React, TypeScript, and CSS skills",
      "Experience consuming REST APIs and real-time data",
      "Understanding of authentication and role-based access",
    ],
    preferred: [
      "Experience with IoT or industrial software",
      "Familiarity with PostgreSQL and time-series databases",
    ],
  },
  {
    id: "cloud-backend-engineer",
    title: "Cloud Backend Engineer",
    team: "Cloud & Platform",
    location: "Remote, India",
    workMode: "remote",
    type: "full-time",
    department: "Cloud & Backend",
    experience: "4–7 years",
    postedAt: "2026-05-05",
    description:
      "Architect and operate cloud infrastructure for millions of device messages per day—ingestion, rules engines, alerting, and integrations with enterprise systems.",
    responsibilities: [
      "Design scalable microservices on AWS or Azure for IoT workloads",
      "Implement secure device provisioning, certificates, and key rotation",
      "Optimize costs and reliability of message brokers and databases",
      "Establish observability with metrics, logs, and distributed tracing",
    ],
    qualifications: [
      "Strong backend experience in Node.js, Python, or Go",
      "Production experience with AWS IoT Core, Lambda, or equivalent",
      "Knowledge of SQL and NoSQL data modeling",
      "Solid grasp of networking, TLS, and security best practices",
    ],
  },
  {
    id: "hardware-validation-engineer",
    title: "Hardware Validation Engineer",
    team: "Quality & Test",
    location: "Bengaluru, India",
    workMode: "onsite",
    type: "full-time",
    department: "Hardware Engineering",
    experience: "2–4 years",
    postedAt: "2026-05-03",
    description:
      "Define and execute validation plans for custom PCBs and assembled products—environmental stress, functional test, and compliance readiness for client deployments.",
    responsibilities: [
      "Develop automated and manual test fixtures for production and R&D",
      "Execute temperature, humidity, and EMI pre-compliance tests",
      "Track defects, root-cause analysis, and design feedback loops",
      "Maintain test documentation and traceability for client audits",
    ],
    qualifications: [
      "Experience in hardware test or QA for electronics products",
      "Familiarity with lab equipment: DMM, scope, spectrum analyzer basics",
      "Methodical approach to test planning and reporting",
    ],
  },
  {
    id: "technical-project-manager",
    title: "Technical Project Manager",
    team: "Delivery",
    location: "Bengaluru, India",
    workMode: "hybrid",
    type: "full-time",
    department: "Operations",
    experience: "5–8 years",
    postedAt: "2026-05-01",
    description:
      "Coordinate cross-functional IoT delivery teams—from prototype to production—ensuring milestones, budgets, and client expectations are met for custom hardware and software engagements.",
    responsibilities: [
      "Own project timelines, RAID logs, and stakeholder communication",
      "Facilitate sprint ceremonies across firmware, hardware, and software teams",
      "Manage vendor relationships for PCB fab, assembly, and certification",
      "Translate client requirements into actionable engineering backlogs",
    ],
    qualifications: [
      "PMP or Agile certification preferred; 5+ years in technical project management",
      "Background in electronics, embedded, or software delivery",
      "Excellent written and verbal communication with clients and engineers",
    ],
  },
  {
    id: "graduate-trainee-embedded",
    title: "Graduate Trainee — Embedded Systems",
    team: "Firmware & RTOS",
    location: "Bengaluru, India",
    workMode: "onsite",
    type: "full-time",
    department: "Embedded Systems",
    experience: "0–1 years",
    postedAt: "2026-05-12",
    description:
      "Structured graduate program for engineers starting their career in embedded IoT. Rotations across firmware, hardware lab, and platform teams over 12 months.",
    responsibilities: [
      "Complete structured training in C, RTOS, and communication protocols",
      "Contribute to internal R&D projects under senior mentorship",
      "Participate in code reviews and engineering best-practice workshops",
    ],
    qualifications: [
      "B.Tech 2025/2026 graduate in ECE, EEE, or CS with embedded focus",
      "Strong academic foundation in digital electronics and programming",
      "Problem-solving mindset and willingness to learn in a lab environment",
    ],
  },
  {
    id: "contract-pcb-layout",
    title: "Contract PCB Layout Specialist",
    team: "Hardware Engineering",
    location: "Remote, India",
    workMode: "remote",
    type: "contract",
    department: "Hardware Engineering",
    experience: "5+ years",
    postedAt: "2026-05-09",
    description:
      "6-month contract to support peak demand on multi-layer IoT controller boards. Work with our hardware leads on layout, review, and release to fabrication.",
    responsibilities: [
      "Deliver high-quality layouts from provided schematics within agreed timelines",
      "Participate in design reviews and implement feedback promptly",
      "Prepare Gerbers, assembly drawings, and fab notes",
    ],
    qualifications: [
      "Demonstrated portfolio of complex PCB layouts",
      "Proficiency in Altium Designer",
      "Availability for overlap hours with IST team",
    ],
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}

export function formatJobType(type: JobType): string {
  const labels: Record<JobType, string> = {
    "full-time": "Full-time",
    internship: "Internship",
    contract: "Contract",
    "part-time": "Part-time",
  };
  return labels[type];
}

export function formatWorkMode(mode: WorkMode): string {
  const labels: Record<WorkMode, string> = {
    onsite: "On-site",
    hybrid: "Hybrid",
    remote: "Remote",
  };
  return labels[mode];
}

export function formatPostedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
