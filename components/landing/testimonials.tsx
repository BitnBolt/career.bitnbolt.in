import { TestimonialsCarousel } from "@/components/landing/testimonials-carousel";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-16 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-blue-50 py-14 lg:py-16"
    >
      <div className="section-container">
        <h2 className="heading-section px-2 text-center">
          What interns say
        </h2>
        <TestimonialsCarousel />
      </div>
    </section>
  );
}
