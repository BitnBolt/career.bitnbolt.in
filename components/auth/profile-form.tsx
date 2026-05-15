"use client";

import { useState, type FormEvent } from "react";
import { FormField } from "@/components/ui/form-field";
import { useAuth } from "@/components/providers/auth-provider";
import type { UserProfile } from "@/lib/auth/types";

interface ProfileFormProps {
  onSaved?: () => void;
  submitLabel?: string;
}

export function ProfileForm({
  onSaved,
  submitLabel = "Save profile",
}: ProfileFormProps) {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState<UserProfile>(user?.profile ?? {
    firstName: "",
    lastName: "",
    phone: "",
    location: "",
    headline: "",
    bio: "",
    linkedin: "",
    github: "",
    portfolio: "",
    skills: "",
    education: "",
    experience: "",
    resumeFileName: "",
  });
  const [saved, setSaved] = useState(false);

  function setField<K extends keyof UserProfile>(key: K, value: UserProfile[K]) {
    setProfile((p) => ({ ...p, [key]: value }));
    setSaved(false);
  }

  function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setField("resumeFileName", file.name);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateProfile(profile);
    setSaved(true);
    onSaved?.();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {saved && (
        <p className="border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800">
          Profile saved successfully.
        </p>
      )}

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Basic information
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FormField
            label="First name"
            name="firstName"
            required
            value={profile.firstName}
            onChange={(v) => setField("firstName", v)}
          />
          <FormField
            label="Last name"
            name="lastName"
            required
            value={profile.lastName}
            onChange={(v) => setField("lastName", v)}
          />
          <FormField
            label="Phone"
            name="phone"
            type="tel"
            required
            value={profile.phone}
            onChange={(v) => setField("phone", v)}
          />
          <FormField
            label="Location"
            name="location"
            required
            value={profile.location}
            onChange={(v) => setField("location", v)}
            placeholder="City, country"
          />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Professional summary
        </h2>
        <div className="mt-4 space-y-5">
          <FormField
            label="Headline"
            name="headline"
            required
            value={profile.headline}
            onChange={(v) => setField("headline", v)}
            placeholder="e.g. Embedded Firmware Engineer"
          />
          <FormField
            label="Bio"
            name="bio"
            as="textarea"
            rows={4}
            value={profile.bio}
            onChange={(v) => setField("bio", v)}
            placeholder="Brief summary of your background and interests"
          />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Links
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FormField
            label="LinkedIn"
            name="linkedin"
            type="url"
            value={profile.linkedin}
            onChange={(v) => setField("linkedin", v)}
          />
          <FormField
            label="GitHub"
            name="github"
            type="url"
            value={profile.github}
            onChange={(v) => setField("github", v)}
          />
          <FormField
            label="Portfolio"
            name="portfolio"
            type="url"
            value={profile.portfolio}
            onChange={(v) => setField("portfolio", v)}
          />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Experience & education
        </h2>
        <div className="mt-4 space-y-5">
          <FormField
            label="Skills"
            name="skills"
            value={profile.skills}
            onChange={(v) => setField("skills", v)}
            placeholder="C, RTOS, PCB design, MQTT…"
            hint="Comma-separated"
          />
          <FormField
            label="Education"
            name="education"
            as="textarea"
            rows={3}
            value={profile.education}
            onChange={(v) => setField("education", v)}
          />
          <FormField
            label="Work experience"
            name="experience"
            as="textarea"
            rows={5}
            value={profile.experience}
            onChange={(v) => setField("experience", v)}
          />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Resume
        </h2>
        <div className="mt-4">
          <label
            htmlFor="profile-resume"
            className="block text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Resume / CV <span className="text-accent">*</span>
          </label>
          <input
            id="profile-resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            className="mt-2 w-full border border-border bg-background px-3 py-2 text-sm file:mr-4 file:border-0 file:bg-chip-bg file:px-3 file:py-1 file:text-sm"
          />
          {profile.resumeFileName && (
            <p className="mt-1 text-xs text-muted">
              Current: {profile.resumeFileName}
            </p>
          )}
        </div>
      </section>

      <button
        type="submit"
        className="border border-accent bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:border-accent-hover hover:bg-accent-hover"
      >
        {submitLabel}
      </button>
    </form>
  );
}
