"use client";

import { useEffect } from "react";
import { GoogleFormEmbed } from "@/components/internships/google-form-embed";
import { SiteLogo } from "@/components/site-logo";

interface ApplyFormModalProps {
  open: boolean;
  onClose: () => void;
  categoryLabel: string;
}

export function ApplyFormModal({
  open,
  onClose,
  categoryLabel,
}: ApplyFormModalProps) {
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0B1C2D]/50"
        aria-label="Close application form"
        onClick={onClose}
      />

      <div className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-2xl sm:max-h-[92vh]">
        <div className="flex items-start justify-between gap-3 border-b border-gray-100 bg-gray-50 px-4 py-3 sm:gap-4 sm:px-5 sm:py-4">
          <div className="min-w-0 flex-1 pr-1">
            <SiteLogo linked={false} framed heightClass="h-8" className="mb-2 sm:mb-3" />
            <h2
              id="apply-modal-title"
              className="text-base font-bold text-[#0B1C2D] sm:text-lg"
            >
              Apply for {categoryLabel}
            </h2>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              BitnBolt is hiring for internships only. Complete the form below.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 px-3 text-sm text-muted transition-colors hover:border-gray-300 hover:bg-white hover:text-[#0B1C2D]"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto overscroll-contain p-3 sm:p-5">
          <GoogleFormEmbed compact />
        </div>
      </div>
    </div>
  );
}
