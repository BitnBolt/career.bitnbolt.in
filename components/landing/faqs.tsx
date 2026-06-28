"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/landing/section-heading";
import { faqs } from "@/lib/landing-content";

interface FaqsProps {
  showHeading?: boolean;
}

export function Faqs({ showHeading = true }: FaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-16 border-b border-gray-100 bg-gray-50 py-14">
      <div className="section-container">
        {showHeading ? (
          <SectionHeading
            eyebrow="Support"
            title="Frequently asked questions"
            align="center"
          />
        ) : null}
        <div className={showHeading ? "mt-10" : ""}>
          <ul className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <li
                  key={item.question}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-medium text-[#0B1C2D]">
                      <span className="mr-3 font-bold text-blue-600">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      {item.question}
                    </span>
                    <span className="shrink-0 text-blue-600" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="border-t border-gray-100 bg-gray-50 px-5 py-4 text-sm leading-relaxed text-muted">
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
