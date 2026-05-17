import { TestimonialsCarousel } from "@/components/landing/testimonials-carousel";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-14 border-b border-border bg-[#f3f4f2]"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="px-2 text-center font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
          What interns say
        </h2>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
