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
    <section className="hero-dark border-b border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -right-16 top-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="animation-delay-2000 animate-blob absolute bottom-8 left-8 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-12 sm:py-14 lg:py-16">
        <SplitSection
          reverse={reverse}
          visual={
            <ContentImage
              image={image}
              aspect="16/9"
              priority
              objectFit="cover"
              showAssetHint={false}
              className="[&_div]:border-white/10 [&_div]:shadow-2xl"
            />
          }
        >
          <div>
            {eyebrow ? (
              <p className="eyebrow text-blue-400">{eyebrow}</p>
            ) : null}
            <h1
              className={`max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl ${eyebrow ? "mt-3" : ""}`}
            >
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </SplitSection>
      </div>
    </section>
  );
}
