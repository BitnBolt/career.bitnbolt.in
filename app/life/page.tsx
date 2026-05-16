import { PageHeader } from "@/components/page-header";
import { companyValues } from "@/lib/content";

export const metadata = {
  title: "Life as an intern",
  description:
    "What to expect during an engineering internship at BitnBolt — mentorship, lab work, and IoT product development.",
};

export default function LifePage() {
  return (
    <main>
      <PageHeader
        title="Life as an intern"
        description="BitnBolt currently hires for internships only. Our interns join an IoT and electronics engineering company where custom PCB design, embedded firmware, and cloud connectivity come together on real client projects."
        backHref="/"
        backLabel="Home"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted">
          Whether you are a student or a recent graduate, you will work alongside
          engineers who build connected products for industries that depend on
          reliability in the field — not classroom exercises.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2">
          {companyValues.map((item) => (
            <li
              key={item.title}
              className="border border-border bg-surface p-6"
            >
              <h2 className="text-sm font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
