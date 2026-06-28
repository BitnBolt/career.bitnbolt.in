import { SectionHeading } from "@/components/landing/section-heading";
import { howItWorksSteps } from "@/lib/landing-content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-gray-100 bg-white py-14">
      <div className="section-container">
        <SectionHeading
          eyebrow="Process"
          title="How it works"
          description="From application to onboarding — a clear, transparent path."
          align="center"
        />
        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorksSteps.map((item) => (
            <li key={item.step} className="card-bitnbolt p-5">
              <span className="text-lg font-bold text-blue-600">
                {item.step}
              </span>
              <h3 className="mt-3 text-sm font-bold text-[#0B1C2D]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
