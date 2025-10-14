"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser, Session, generateSessionId, isSessionValid, adminUsers, hasPermission } from '../../lib/adminAuth';

interface AuthContextType {
  user: AdminUser | null;
  session: Session | null;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch('/api/session');
      const data = await response.json();

      if (data.isLoggedIn && isSessionValid(data.session)) {
        setSession(data.session);
        setUser(data.user);
      }
      setIsLoading(false);
    };

    fetchSession();
  }, []);

  // Update session activity periodically
  useEffect(() => {
    if (session) {
      const interval = setInterval(() => {
        if (isSessionValid(session)) {
          session.lastActivity = Date.now();
          localStorage.setItem('adminSession', JSON.stringify(session));
          setSession({ ...session });
        } else {
          logout();
        }
      }, 60000); // Check every minute

      return () => clearInterval(interval);
    }
  }, [session]);

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
      // The cookie is set by the server, now we just need to update the local state
      const userConfig = adminUsers[username];
      const newUser: AdminUser = {
        id: username,
        username,
        role: userConfig.role,
        permissions: userConfig.permissions
      };
      const newSession: Session = {
        userId: username,
        username,
        role: userConfig.role,
        loginTime: Date.now(),
        lastActivity: Date.now(),
        sessionId: generateSessionId(),
        isLoggedIn: true
      };
      
      setUser(newUser);
      setSession(newSession);
      localStorage.setItem('adminSession', JSON.stringify(newSession));
      return { success: true };
    } else {
      return { success: false, error: data.error };
    }
  };

  const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    setUser(null);
    setSession(null);
    localStorage.removeItem('adminSession');
  };

  const checkPermission = (permission: string): boolean => {
    if (!user) return false;
    return hasPermission(user.role, permission);
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      login,
      logout,
      hasPermission: checkPermission,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}