import { SectionHeading } from "@/components/landing/section-heading";
import { testimonials } from "@/lib/landing-content";

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-14 border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experiences"
          title="What interns say"
          description="Perspectives from engineering interns across tracks at BitnBolt."
          align="center"
        />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex flex-col border border-border bg-surface-muted p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-muted">{item.role}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
