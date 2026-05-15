"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  findUserById,
  getSession,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "@/lib/auth/store";
import type { UserAccount, UserProfile } from "@/lib/auth/types";

interface AuthContextValue {
  user: UserAccount | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => Promise<{ error?: string }>;
  logout: () => void;
  updateProfile: (profile: UserProfile) => void;
  refreshUser: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserAccount | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = useCallback(() => {
    const session = getSession();
    if (!session) {
      setUser(null);
      return;
    }
    setUser(findUserById(session.userId) ?? null);
  }, []);

  useEffect(() => {
    refreshUser();
    setIsLoading(false);
  }, [refreshUser]);

  const login = useCallback(async (email: string, password: string) => {
    const result = loginUser(email, password);
    if (result.error) return { error: result.error };
    setUser(result.user ?? null);
    return {};
  }, []);

  const signup = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string,
    ) => {
      const result = registerUser(email, password, firstName, lastName);
      if (result.error) return { error: result.error };
      setUser(result.user ?? null);
      return {};
    },
    [],
  );

  const logout = useCallback(() => {
    logoutUser();
    setUser(null);
  }, []);

  const updateProfile = useCallback(
    (profile: UserProfile) => {
      if (!user) return;
      const updated = updateUserProfile(user.id, profile);
      if (updated) setUser(updated);
    },
    [user],
  );

  const value = useMemo(
    () => ({
      user,
      isLoading,
      login,
      signup,
      logout,
      updateProfile,
      refreshUser,
    }),
    [user, isLoading, login, signup, logout, updateProfile, refreshUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
