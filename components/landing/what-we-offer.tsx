import { ContentImage } from "@/components/content-image";
import { SectionHeading } from "@/components/landing/section-heading";
import { programOffers } from "@/lib/landing-content";
import { pageImages } from "@/lib/page-images";

export function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="scroll-mt-16 border-b border-gray-100 bg-white py-14">
      <div className="section-container">
        <SectionHeading
          eyebrow="Program benefits"
          title="What does the internship offer?"
          description="A structured path from application to hands-on engineering — with support at every stage."
          align="center"
        />
        <ContentImage
          image={pageImages.whatWeOffer}
          aspect="21/9"
          objectFit="cover"
          className="mt-10"
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {programOffers.map((item) => (
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
