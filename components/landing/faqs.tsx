"use client";

import { useState } from "react";

import { ContentImage } from "@/components/content-image";
import { SectionHeading } from "@/components/landing/section-heading";
import { SplitSection } from "@/components/split-section";
import { faqs } from "@/lib/landing-content";
import { pageImages } from "@/lib/page-images";

interface FaqsProps {
  showHeading?: boolean;
}

export function Faqs({ showHeading = true }: FaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-14 border-b border-border bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        {showHeading ? (
          <SectionHeading
            eyebrow="Support"
            title="Frequently asked questions"
            align="center"
          />
        ) : null}
        <div className={showHeading ? "mt-10" : ""}>
            <ul className="border border-border bg-surface">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <li
                    key={item.question}
                    className="border-b border-border last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-muted"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-medium text-foreground">
                        <span className="mr-3 text-muted">
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        {item.question}
                      </span>
                      <span className="shrink-0 text-muted" aria-hidden>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="border-t border-border bg-surface-muted px-5 py-4 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
        </div>
      </div>
    </section>
  );
}
