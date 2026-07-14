"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ApplyFormModal } from "@/components/internships/apply-form-modal";

export type ApplyTarget = {
  jobId?: string;
  jobTitle?: string;
  categoryLabel?: string;
  preferredTrack?: string;
};

interface InternshipApplyContextValue {
  openApply: (target?: ApplyTarget | string) => void;
  closeApply: () => void;
}

const InternshipApplyContext = createContext<InternshipApplyContextValue | null>(
  null,
);

export function InternshipApplyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState<ApplyTarget>({
    categoryLabel: "Internship",
    jobTitle: "Internship",
  });

  const openApply = useCallback((arg: ApplyTarget | string = "Internship") => {
    if (typeof arg === "string") {
      setTarget({
        categoryLabel: arg,
        jobTitle: arg,
      });
    } else {
      setTarget({
        categoryLabel: arg.categoryLabel || arg.jobTitle || "Internship",
        jobTitle: arg.jobTitle || arg.categoryLabel || "Internship",
        jobId: arg.jobId,
        preferredTrack: arg.preferredTrack || arg.categoryLabel,
      });
    }
    setOpen(true);
  }, []);

  const closeApply = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openApply, closeApply }),
    [openApply, closeApply],
  );

  return (
    <InternshipApplyContext.Provider value={value}>
      {children}
      <ApplyFormModal
        open={open}
        onClose={closeApply}
        jobId={target.jobId}
        jobTitle={target.jobTitle || "Role"}
        categoryLabel={target.categoryLabel || "Internship"}
        preferredTrack={target.preferredTrack}
      />
    </InternshipApplyContext.Provider>
  );
}

export function useInternshipApply() {
  const ctx = useContext(InternshipApplyContext);
  if (!ctx) {
    throw new Error(
      "useInternshipApply must be used within InternshipApplyProvider",
    );
  }
  return ctx;
}
