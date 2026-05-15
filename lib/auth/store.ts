import {
  emptyProfile,
  isProfileComplete,
  type JobApplication,
  type Session,
  type UserAccount,
  type UserProfile,
} from "./types";

const USERS_KEY = "bitnbolt_careers_users";
const SESSION_KEY = "bitnbolt_careers_session";
const APPLICATIONS_KEY = "bitnbolt_careers_applications";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function hashPassword(password: string): string {
  return btoa(`bitnbolt:${password}`);
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

export function getUsers(): UserAccount[] {
  return readJson<UserAccount[]>(USERS_KEY, []);
}

function saveUsers(users: UserAccount[]): void {
  writeJson(USERS_KEY, users);
}

export function getSession(): Session | null {
  return readJson<Session | null>(SESSION_KEY, null);
}

export function setSession(session: Session | null): void {
  if (session) writeJson(SESSION_KEY, session);
  else localStorage.removeItem(SESSION_KEY);
}

export function findUserByEmail(email: string): UserAccount | undefined {
  const normalized = email.trim().toLowerCase();
  return getUsers().find((u) => u.email === normalized);
}

export function findUserById(id: string): UserAccount | undefined {
  return getUsers().find((u) => u.id === id);
}

export function registerUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
): { user?: UserAccount; error?: string } {
  const normalized = email.trim().toLowerCase();
  if (!normalized || !password) {
    return { error: "Email and password are required." };
  }
  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }
  if (findUserByEmail(normalized)) {
    return { error: "An account with this email already exists." };
  }

  const user: UserAccount = {
    id: crypto.randomUUID(),
    email: normalized,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
    profile: {
      ...emptyProfile(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
    },
    profileComplete: false,
  };

  const users = getUsers();
  users.push(user);
  saveUsers(users);
  setSession({ userId: user.id, email: user.email });
  return { user };
}

export function loginUser(
  email: string,
  password: string,
): { user?: UserAccount; error?: string } {
  const user = findUserByEmail(email);
  if (!user || !verifyPassword(password, user.passwordHash)) {
    return { error: "Invalid email or password." };
  }
  setSession({ userId: user.id, email: user.email });
  return { user };
}

export function logoutUser(): void {
  setSession(null);
}

export function updateUserProfile(
  userId: string,
  profile: UserProfile,
): UserAccount | undefined {
  const users = getUsers();
  const index = users.findIndex((u) => u.id === userId);
  if (index === -1) return undefined;

  const complete = isProfileComplete(profile);
  users[index] = {
    ...users[index],
    profile,
    profileComplete: complete,
  };
  saveUsers(users);
  return users[index];
}

export function getApplications(): JobApplication[] {
  return readJson<JobApplication[]>(APPLICATIONS_KEY, []);
}

export function getApplicationsForUser(userId: string): JobApplication[] {
  return getApplications().filter((a) => a.userId === userId);
}

export function hasApplied(userId: string, jobId: string): boolean {
  return getApplicationsForUser(userId).some((a) => a.jobId === jobId);
}

export function submitApplication(
  userId: string,
  jobId: string,
  jobTitle: string,
  coverLetter: string,
  resumeFileName: string,
): JobApplication {
  const application: JobApplication = {
    id: crypto.randomUUID(),
    userId,
    jobId,
    jobTitle,
    coverLetter,
    resumeFileName,
    status: "submitted",
    submittedAt: new Date().toISOString(),
  };
  const apps = getApplications();
  apps.push(application);
  writeJson(APPLICATIONS_KEY, apps);
  return application;
}
