import { ContentImage } from "@/components/content-image";
import { SplitSection } from "@/components/split-section";
import { eligibilityItems } from "@/lib/landing-content";
import { pageImages } from "@/lib/page-images";

export function Eligibility() {
  return (
    <section id="eligibility" className="scroll-mt-16 border-b border-gray-100 bg-gray-50 py-14">
      <div className="section-container">
        <SplitSection
          reverse
          visual={
            <ContentImage
              image={pageImages.eligibility}
              aspect="4/3"
              objectFit="cover"
            />
          }
        >
          <div>
            <p className="eyebrow">Requirements</p>
            <h2 className="heading-section mt-2">Eligibility criteria</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Check that you meet these before applying.
            </p>
            <ul className="mt-8 space-y-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              {eligibilityItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SplitSection>
      </div>
    </section>
  );
}
