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
    const userConfig = adminUsers[username];
    
    if (!userConfig) {
      return { success: false, error: 'Invalid username or password' };
    }

    // Check if user is locked out
    if (userConfig.lockedUntil && Date.now() < userConfig.lockedUntil) {
      const remainingTime = Math.ceil((userConfig.lockedUntil - Date.now()) / 1000 / 60);
      return { success: false, error: `Account locked. Try again in ${remainingTime} minutes.` };
    }

    // Simple password check (in production, use proper password hashing)
    if (password !== userConfig.passwordHash) {
      // Track failed attempts
      userConfig.loginAttempts = (userConfig.loginAttempts || 0) + 1;
      userConfig.lastAttempt = Date.now();
      
      if (userConfig.loginAttempts >= 3) {
        userConfig.lockedUntil = Date.now() + (15 * 60 * 1000); // 15 minutes
        return { success: false, error: 'Too many failed attempts. Account locked for 15 minutes.' };
      }
      
      return { success: false, error: 'Invalid username or password' };
    }

    // Reset failed attempts on successful login
    userConfig.loginAttempts = 0;
    delete userConfig.lockedUntil;

    // Create session
    const newSession: Session = {
      userId: username,
      username,
      role: userConfig.role,
      loginTime: Date.now(),
      lastActivity: Date.now(),
      sessionId: generateSessionId()
    };

    const newUser: AdminUser = {
      id: username,
      username,
      role: userConfig.role,
      permissions: userConfig.permissions
    };

    setSession(newSession);
    setUser(newUser);
    localStorage.setItem('adminSession', JSON.stringify(newSession));

    return { success: true };
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