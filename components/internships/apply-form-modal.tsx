"use client";

import { useEffect } from "react";
import { GoogleFormEmbed } from "@/components/internships/google-form-embed";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/50"
        aria-label="Close application form"
        onClick={onClose}
      />

      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col border border-border bg-surface shadow-lg">
        <div className="flex items-start justify-between gap-4 border-b border-border bg-surface-muted px-5 py-4">
          <div>
            <h2
              id="apply-modal-title"
              className="text-lg font-semibold text-foreground"
            >
              Apply for {categoryLabel}
            </h2>
            <p className="mt-1 text-sm text-muted">
              BitnBolt is hiring for internships only. Complete the form below —
              we will review your submission and contact shortlisted candidates.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:border-border-strong hover:bg-background hover:text-foreground"
            aria-label="Close"
          >
            Close
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-5">
          <GoogleFormEmbed compact />
        </div>
      </div>
    </div>
  );
}
