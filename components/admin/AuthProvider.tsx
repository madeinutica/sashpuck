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
    const savedSession = localStorage.getItem('adminSession');
    if (savedSession) {
      try {
        const parsedSession: Session = JSON.parse(savedSession);
        if (isSessionValid(parsedSession)) {
          setSession(parsedSession);
          setUser({
            id: parsedSession.userId,
            username: parsedSession.username,
            role: parsedSession.role,
            permissions: [] // Will be loaded based on role
          });
          
          // Update last activity
          parsedSession.lastActivity = Date.now();
          localStorage.setItem('adminSession', JSON.stringify(parsedSession));
        } else {
          localStorage.removeItem('adminSession');
        }
      } catch (error) {
        localStorage.removeItem('adminSession');
      }
    }
    setIsLoading(false);
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
        sessionId: generateSessionId()
      };
      
      setUser(newUser);
      setSession(newSession);
      localStorage.setItem('adminSession', JSON.stringify(newSession));
      return { success: true };
    } else {
      return { success: false, error: data.error };
    }
  };

  const logout = () => {
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