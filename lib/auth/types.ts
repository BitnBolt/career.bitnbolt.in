export interface UserProfile {
  firstName: string;
  lastName: string;
  phone: string;
  location: string;
  headline: string;
  bio: string;
  linkedin: string;
  github: string;
  portfolio: string;
  skills: string;
  education: string;
  experience: string;
  resumeFileName: string;
}

export interface UserAccount {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  profile: UserProfile;
  profileComplete: boolean;
}

export interface Session {
  userId: string;
  email: string;
}

export interface JobApplication {
  id: string;
  userId: string;
  jobId: string;
  jobTitle: string;
  coverLetter: string;
  resumeFileName: string;
  status: "submitted" | "under_review" | "interview" | "rejected";
  submittedAt: string;
}

export const emptyProfile = (): UserProfile => ({
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

export function isProfileComplete(profile: UserProfile): boolean {
  return Boolean(
    profile.firstName.trim() &&
      profile.lastName.trim() &&
      profile.phone.trim() &&
      profile.location.trim() &&
      profile.headline.trim() &&
      profile.resumeFileName.trim(),
  );
}

export function displayName(profile: UserProfile, email: string): string {
  const name = `${profile.firstName} ${profile.lastName}`.trim();
  return name || email.split("@")[0];
}
