import { PageHeader } from "@/components/page-header";
import { companyValues } from "@/lib/content";

export const metadata = {
  title: "Life at BitnBolt",
};

export default function LifePage() {
  return (
    <main>
      <PageHeader
        title="Life at BitnBolt"
        description="We are an IoT and electronics engineering company — custom PCB design, embedded systems, sensor integration, and cloud connectivity for industries that need reliable, intelligent products."
        backHref="/"
        backLabel="Home"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
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
