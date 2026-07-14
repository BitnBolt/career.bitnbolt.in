"use client";

import { useState, type FormEvent } from "react";
import { submitCareerApplication } from "@/lib/career-api";

interface ApplicationFormProps {
  jobId: string;
  jobTitle: string;
  preferredTrack?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export function ApplicationForm({
  jobId,
  jobTitle,
  preferredTrack,
  compact = false,
  onSuccess,
}: ApplicationFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const result = await submitCareerApplication({
        jobId,
        fullName,
        email,
        phone,
        college,
        degree,
        graduationYear,
        linkedin,
        github,
        portfolio,
        preferredTrack,
        coverLetter,
        resumeUrl: resumeUrl || undefined,
        resumeFileName: resumeUrl ? "resume-link" : undefined,
      });
      if (!result.success) {
        setError(result.message);
        return;
      }
      setDone(true);
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center sm:p-8">
        <p className="text-base font-semibold text-[#0B1C2D]">
          Application submitted
        </p>
        <p className="mt-2 text-sm text-muted">
          Thanks for applying to <span className="font-medium">{jobTitle}</span>.
          Our team will review your profile and get back to you.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-[#0B1C2D] placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="text-sm text-muted">
        Applying for{" "}
        <span className="font-semibold text-[#0B1C2D]">{jobTitle}</span>
      </p>

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className={compact ? undefined : "sm:col-span-2"}>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Full name *
          </label>
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={field}
            autoComplete="name"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Email *
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={field}
            autoComplete="email"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Phone *
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field}
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            College / university
          </label>
          <input
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className={field}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Degree
          </label>
          <input
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            placeholder="e.g. B.Tech ECE"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Graduation year
          </label>
          <input
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            placeholder="e.g. 2026"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            LinkedIn
          </label>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            GitHub
          </label>
          <input
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Resume / Drive link
          </label>
          <input
            type="url"
            value={resumeUrl}
            onChange={(e) => setResumeUrl(e.target.value)}
            placeholder="https://drive.google.com/..."
            className={field}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Portfolio (optional)
          </label>
          <input
            type="url"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="https://"
            className={field}
          />
        </div>
        <div className={compact ? undefined : "sm:col-span-2"}>
          <label className="mb-1 block text-xs font-medium text-gray-600">
            Cover note
          </label>
          <textarea
            rows={compact ? 3 : 4}
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Tell us why this track fits you…"
            className={field}
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
