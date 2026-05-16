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

interface InternshipApplyContextValue {
  openApply: (categoryLabel?: string) => void;
  closeApply: () => void;
}

const InternshipApplyContext = createContext<InternshipApplyContextValue | null>(
  null,
);

export function InternshipApplyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [categoryLabel, setCategoryLabel] = useState("Internship");

  const openApply = useCallback((label = "Internship") => {
    setCategoryLabel(label);
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
        categoryLabel={categoryLabel}
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
