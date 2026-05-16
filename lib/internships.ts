export interface InternshipCategory {
  id: string;
  tabLabel: string;
  title: string;
  intro: string[];
  indicativeRoles: string[];
  selectionNote: string;
}

export const internshipCategories: InternshipCategory[] = [
  {
    id: "embedded-systems",
    tabLabel: "Embedded Systems",
    title: "Embedded Systems Interns (ESI)",
    intro: [
      "Our Embedded Systems internship is designed for students and early-career engineers who want hands-on experience with microcontrollers, sensors, and real hardware in the lab. You will work alongside firmware and hardware teams on client IoT projects — from driver development to board bring-up.",
      "Interns are assigned to squads based on skills and project needs. You will receive mentorship, structured reviews, and exposure to production-grade development practices used in industrial and smart-device deployments.",
    ],
    indicativeRoles: [
      "Embedded firmware development",
      "Sensor & peripheral driver engineering",
      "Hardware lab bring-up & validation",
      "RTOS integration (FreeRTOS / Zephyr)",
      "Communication protocol implementation",
      "Prototype testing & documentation",
    ],
    selectionNote:
      "Selection is through an online application form, technical assessment, and interview. Offers are extended based on project fit, academic background, and demonstrated interest in embedded engineering.",
  },
  {
    id: "firmware",
    tabLabel: "Firmware",
    title: "Firmware Engineering Interns (FEI)",
    intro: [
      "Firmware interns at BitnBolt focus on C/C++ development for ARM-based MCUs, protocol stacks, and device lifecycle features such as OTA updates and secure boot paths.",
      "You will contribute to code that ships on real products — not classroom demos — while learning how firmware teams collaborate with PCB design, cloud, and QA.",
    ],
    indicativeRoles: [
      "Bare-metal & RTOS firmware",
      "MQTT / Modbus / BLE stack work",
      "OTA & device provisioning",
      "Power profiling & optimization",
      "Unit testing for embedded modules",
      "Code review & CI for firmware repos",
    ],
    selectionNote:
      "Applicants should be comfortable with C and basic electronics. Shortlisted candidates complete a coding exercise and technical interview with the firmware lead.",
  },
  {
    id: "hardware-pcb",
    tabLabel: "Hardware & PCB",
    title: "Hardware & PCB Design Interns (HPI)",
    intro: [
      "This track is for interns interested in schematic design, PCB layout, DFM, and hardware validation for custom IoT boards and industrial controllers.",
      "You will support senior hardware engineers on multi-layer designs, component selection, fab coordination, and lab validation using standard test equipment.",
    ],
    indicativeRoles: [
      "Schematic capture & library management",
      "Multi-layer PCB layout",
      "DFM / DFT review support",
      "Prototype assembly coordination",
      "EMI-aware layout practices",
      "Hardware test & defect reporting",
    ],
    selectionNote:
      "Portfolio or academic projects involving PCB design are strongly preferred. Selection includes a portfolio review and interview with the hardware engineering team.",
  },
  {
    id: "iot-platform",
    tabLabel: "IoT Platform",
    title: "IoT Platform Engineering Interns (IPI)",
    intro: [
      "Platform interns work on device management, telemetry pipelines, alerting, and integrations that connect edge devices to cloud backends for enterprise clients.",
      "Ideal for CS/IT students who enjoy backend systems, APIs, and data — with curiosity about how physical devices interact with software at scale.",
    ],
    indicativeRoles: [
      "REST API & webhook development",
      "Device lifecycle & provisioning tools",
      "Time-series telemetry pipelines",
      "Dashboard & internal tooling",
      "Integration testing & documentation",
      "Cloud IoT services (AWS / Azure)",
    ],
    selectionNote:
      "Selection includes an application review, practical exercise, and interview. Familiarity with Python or TypeScript and HTTP/MQTT basics is expected.",
  },
  {
    id: "software",
    tabLabel: "Software",
    title: "Software Engineering Interns (SEI)",
    intro: [
      "Software interns build operator dashboards, customer-facing web applications, and tools that visualize real-time device data for industrial and smart-building use cases.",
      "You will work with modern React/Next.js stacks, collaborate with backend engineers, and learn how UX decisions affect field operators and client stakeholders.",
    ],
    indicativeRoles: [
      "React / Next.js UI development",
      "Real-time charts & data visualization",
      "API integration & WebSocket clients",
      "Component design & accessibility",
      "Frontend testing & performance",
      "Internal tools & admin panels",
    ],
    selectionNote:
      "Applicants submit work samples or GitHub links where possible. Shortlisted candidates complete a UI or API exercise followed by a team interview.",
  },
  {
    id: "graduate-trainee",
    tabLabel: "Graduate Trainees",
    title: "Graduate Trainee Internship (GTE)",
    intro: [
      "Our Graduate Trainee internship is a structured 12-month program for recent B.Tech graduates in ECE, EEE, or CS with an embedded or IoT focus. Rotations span firmware, hardware lab, and platform teams.",
      "Trainee interns receive dedicated mentorship, technical workshops, and increasing ownership on R&D and client delivery work throughout the program.",
    ],
    indicativeRoles: [
      "Rotational firmware & hardware exposure",
      "Internal R&D project contribution",
      "Structured C / RTOS training",
      "Lab skills & debugging practice",
      "Cross-team design reviews",
      "Client project support (supervised)",
    ],
    selectionNote:
      "Open to 2025/2026 graduates. Selection involves application screening, aptitude and technical tests, and panel interviews with engineering and HR.",
  },
];

export function getInternshipCategory(id: string): InternshipCategory | undefined {
  return internshipCategories.find((c) => c.id === id);
}

export const defaultInternshipCategoryId = internshipCategories[0].id;
