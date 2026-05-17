import { ContentImage } from "@/components/content-image";
import { SplitSection } from "@/components/split-section";
import type { PageImage } from "@/lib/page-images";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: PageImage;
  /** Image on the left on large screens */
  reverse?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  reverse = false,
}: PageHeroProps) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <SplitSection
          reverse={reverse}
          visual={
            <ContentImage
              image={image}
              aspect="16/9"
              priority
              objectFit="cover"
            />
          }
        >
          <div>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h1
              className={`max-w-xl text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl ${eyebrow ? "mt-3" : ""}`}
            >
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </SplitSection>
      </div>
    </section>
  );
}
