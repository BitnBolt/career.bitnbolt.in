import { ContentImage } from "@/components/content-image";
import { SectionHeading } from "@/components/landing/section-heading";
import { whyBitnBolt } from "@/lib/landing-content";

export function WhyBitnBolt() {
  return (
    <section id="why-bitnbolt" className="scroll-mt-16 border-b border-gray-100 bg-gray-50 py-14">
      <div className="section-container">
        <SectionHeading
          eyebrow="Why us"
          title="Why intern at BitnBolt?"
          description="An IoT and electronics engineering company where interns learn by building what ships."
          align="center"
        />
        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyBitnBolt.map((item) => (
            <li key={item.title} className="card-bitnbolt overflow-hidden">
              <ContentImage
                image={item.image}
                aspect="3/2"
                objectFit="cover"
                className="[&_div]:rounded-none [&_div]:border-0 [&_div]:shadow-none [&_figcaption]:px-4"
              />
              <div className="p-5 sm:p-6">
                <h3 className="text-sm font-bold text-[#0B1C2D]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
