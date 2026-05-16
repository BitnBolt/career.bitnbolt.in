import { SectionHeading } from "@/components/landing/section-heading";
import { programOffers } from "@/lib/landing-content";

export function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="scroll-mt-14 border-b border-border bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Program benefits"
          title="What does the internship offer?"
          description="A structured path from application to hands-on engineering — with support at every stage."
          align="center"
        />
        <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          {programOffers.map((item) => (
            <li key={item.title} className="bg-surface p-6 sm:p-8">
              <h3 className="text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
