export type CareerJob = {
  _id: string;
  title: string;
  slug: string;
  type: string;
  category: string;
  department?: string;
  location?: string;
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  duration?: string;
  stipend?: string;
  openings?: number;
  applicationDeadline?: string;
  updatedAt?: string;
};

export type ApplicationPayload = {
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  college?: string;
  degree?: string;
  graduationYear?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  preferredTrack?: string;
  coverLetter?: string;
  resumeUrl?: string;
  resumeFileName?: string;
  source?: string;
};

function backendUrl() {
  return (
    process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, "") ||
    "https://bitnbolt.in"
  );
}

export async function fetchCareerJobs(params?: {
  type?: string;
  category?: string;
}): Promise<CareerJob[]> {
  const search = new URLSearchParams();
  if (params?.type) search.set("type", params.type);
  if (params?.category) search.set("category", params.category);
  search.set("pageSize", "50");

  const res = await fetch(`${backendUrl()}/api/career/jobs?${search}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to load jobs");
  const data = (await res.json()) as { items?: CareerJob[] };
  return data.items || [];
}

export async function fetchCareerJob(idOrSlug: string): Promise<CareerJob | null> {
  const res = await fetch(`${backendUrl()}/api/career/jobs/${idOrSlug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to load job");
  return (await res.json()) as CareerJob;
}

/** Client-side fetch (no cache). */
export async function fetchCareerJobsClient(): Promise<CareerJob[]> {
  const res = await fetch(`${backendUrl()}/api/career/jobs?pageSize=50`);
  if (!res.ok) throw new Error("Failed to load jobs");
  const data = (await res.json()) as { items?: CareerJob[] };
  return data.items || [];
}

export async function fetchCareerJobClient(
  idOrSlug: string,
): Promise<CareerJob | null> {
  const res = await fetch(`${backendUrl()}/api/career/jobs/${idOrSlug}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to load job");
  return (await res.json()) as CareerJob;
}

export async function submitCareerApplication(
  payload: ApplicationPayload,
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${backendUrl()}/api/career/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      source: payload.source || "career.bitnbolt.in",
    }),
  });
  const data = (await res.json()) as { success?: boolean; message?: string };
  if (!res.ok) {
    return {
      success: false,
      message: data.message || "Failed to submit application",
    };
  }
  return {
    success: true,
    message: data.message || "Application submitted",
  };
}

export function findJobForCategory(
  jobs: CareerJob[],
  categoryId: string,
): CareerJob | undefined {
  return (
    jobs.find((j) => j.slug === categoryId) ||
    jobs.find(
      (j) =>
        j.category.toLowerCase().replace(/[^a-z0-9]+/g, "-") === categoryId,
    )
  );
}
