"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/landing-content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < rating ? "#f5b301" : "#e2e5ea"}
          aria-hidden
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      {direction === "left" ? (
        <path d="M10 3L5 8l5 5" />
      ) : (
        <path d="M6 3l5 5-5 5" />
      )}
    </svg>
  );
}

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    const first = track.children[0] as HTMLElement;
    const cardWidth = first.offsetWidth;
    const gap = 16;
    const index = Math.round(track.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    const target = Math.min(Math.max(index, 0), testimonials.length - 1);
    const card = track.children[target] as HTMLElement;
    card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(target);
  };

  return (
    <div className="mt-8 sm:mt-10">
      <div
        ref={trackRef}
        className="testimonials-track scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:gap-5 sm:px-6 lg:-mx-8 lg:px-8"
      >
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="w-[calc(100vw-2.5rem)] max-w-[300px] shrink-0 snap-start rounded-lg border border-gray-100 bg-white p-5 shadow-md transition-shadow hover:shadow-lg sm:w-[min(85vw,300px)] sm:p-6"
          >
            <blockquote className="min-h-[6.5rem] text-sm leading-relaxed text-muted sm:min-h-[7.5rem]">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <footer className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4 sm:mt-6 sm:pt-5">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border bg-surface-muted sm:h-12 sm:w-12">
                <Image
                  src={item.image.src}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-[#0B1C2D]">
                  {item.name}
                </p>
                <p className="truncate text-xs text-muted">{item.role}</p>
                <div className="mt-1.5">
                  <StarRating rating={item.rating} />
                </div>
              </div>
            </footer>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-5">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0B1C2D] shadow-sm transition-colors hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous testimonial"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 shrink-0 rounded-full transition-colors ${
                index === activeIndex
                  ? "w-2.5 bg-blue-600"
                  : "w-2.5 bg-border-strong hover:bg-muted"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === testimonials.length - 1}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0B1C2D] shadow-sm transition-colors hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next testimonial"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
