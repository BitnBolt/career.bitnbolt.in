"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ApplyNowButton } from "@/components/internships/apply-now-button";
import { GoogleFormEmbed } from "@/components/internships/google-form-embed";
import { useInternshipApply } from "@/components/internships/internship-apply-provider";
import {
  defaultInternshipCategoryId,
  internshipCategories,
  type InternshipCategory,
} from "@/lib/internships";

function RoleIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="mt-0.5 shrink-0 text-muted"
      aria-hidden
    >
      <path
        d="M2 2h7l3 3v7H2V2z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9 2v3h3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function CategoryContent({ category }: { category: InternshipCategory }) {
  const midpoint = Math.ceil(category.indicativeRoles.length / 2);
  const leftRoles = category.indicativeRoles.slice(0, midpoint);
  const rightRoles = category.indicativeRoles.slice(midpoint);

  return (
    <div className="pt-8">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
        {category.title}
      </h2>

      {category.intro.map((paragraph) => (
        <p
          key={paragraph.slice(0, 40)}
          className="mt-4 text-sm leading-relaxed text-foreground sm:text-base"
        >
          {paragraph}
        </p>
      ))}

      <p className="mt-8 text-sm font-semibold text-foreground">
        What you may work on:
      </p>

      <div className="mt-4 grid gap-x-12 gap-y-3 sm:grid-cols-2">
        <ul className="space-y-3">
          {leftRoles.map((role) => (
            <li key={role} className="flex gap-2 text-sm text-foreground">
              <RoleIcon />
              <span>{role}</span>
            </li>
          ))}
        </ul>
        <ul className="space-y-3">
          {rightRoles.map((role) => (
            <li key={role} className="flex gap-2 text-sm text-foreground">
              <RoleIcon />
              <span>{role}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted">
        {category.selectionNote}
      </p>
    </div>
  );
}

interface InternshipProgramProps {
  /** URL path used when syncing the selected category to the address bar */
  basePath?: string;
  /** Section anchor id for in-page links (e.g. hero CTAs) */
  sectionId?: string;
  /** Show the page-level h1 title (false on home where hero already has a heading) */
  showTitle?: boolean;
  /** Inline form on /internships; modal popup on home */
  applyMode?: "inline" | "modal";
}

function HomeApplyLauncher({ categoryLabel }: { categoryLabel: string }) {
  const searchParams = useSearchParams();
  const { openApply } = useInternshipApply();

  useEffect(() => {
    if (searchParams.get("apply")) {
      openApply(categoryLabel);
    }
  }, [searchParams, categoryLabel, openApply]);

  return null;
}

export function InternshipProgram({
  basePath = "/internships",
  sectionId = "internships",
  showTitle = true,
  applyMode = "inline",
}: InternshipProgramProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeId, setActiveId] = useState(defaultInternshipCategoryId);

  const setCategory = useCallback(
    (id: string) => {
      setActiveId(id);
      const params = new URLSearchParams(searchParams.toString());
      params.set("category", id);
      const query = params.toString();
      const href = query ? `${basePath}?${query}` : basePath;
      router.replace(href, { scroll: false });
    },
    [router, searchParams, basePath],
  );

  useEffect(() => {
    if (
      categoryParam &&
      internshipCategories.some((c) => c.id === categoryParam)
    ) {
      setActiveId(categoryParam);
    }
  }, [categoryParam]);

  const active =
    internshipCategories.find((c) => c.id === activeId) ??
    internshipCategories[0];

  return (
    <>
      <div
        id={sectionId}
        className="scroll-mt-14 border-b border-border bg-surface"
      >
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          {showTitle ? (
            <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Internship programs
            </h1>
          ) : (
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Internship programs
            </h2>
          )}

          <div
            className="scrollbar-hide -mx-4 mt-8 flex snap-x snap-mandatory gap-0 overflow-x-auto border-b border-border px-4 sm:mx-0 sm:px-0"
            role="tablist"
            aria-label="Internship categories"
          >
            {internshipCategories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(cat.id)}
                  className={`shrink-0 snap-start border-b-2 px-3 py-3.5 text-xs font-medium transition-colors min-[360px]:text-sm sm:px-5 ${
                    isActive
                      ? "border-accent text-foreground"
                      : "border-transparent text-muted hover:border-border-strong hover:text-foreground"
                  }`}
                >
                  {cat.tabLabel}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" aria-labelledby={`tab-${active.id}`}>
            <CategoryContent category={active} />
          </div>

          {applyMode === "modal" ? (
            <>
              <HomeApplyLauncher categoryLabel={active.tabLabel} />
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm font-medium text-foreground">
                  Ready to apply?
                </p>
                <p className="mt-2 max-w-xl text-sm text-muted">
                  We are accepting internship applications only. Apply for the{" "}
                  {active.tabLabel} track.
                </p>
                <ApplyNowButton
                  categoryLabel={active.tabLabel}
                  className="mt-5"
                />
              </div>
            </>
          ) : null}

          {applyMode === "inline" ? (
            <div id="apply" className="scroll-mt-14 border-t border-border pt-10">
              <h2 className="text-lg font-semibold text-foreground">
                Apply for {active.tabLabel}
              </h2>
              <div className="mt-6">
                <GoogleFormEmbed />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
