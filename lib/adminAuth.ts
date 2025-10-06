// Admin Authentication Configuration
export interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'editor' | 'viewer';
  permissions: string[];
}

export interface AuthConfig {
  sessionTimeout: number; // in minutes
  maxLoginAttempts: number;
  lockoutDuration: number; // in minutes
}

// Default admin configuration
export const authConfig: AuthConfig = {
  sessionTimeout: 120, // 2 hours
  maxLoginAttempts: 3,
  lockoutDuration: 15 // 15 minutes
};

// Admin users - In production, this should be in a secure database
export const adminUsers: Record<string, { 
  passwordHash: string; 
  role: AdminUser['role']; 
  permissions: string[];
  loginAttempts?: number;
  lastAttempt?: number;
  lockedUntil?: number;
}> = {
  'admin': {
    passwordHash: 'sash2024!', // In production, use proper password hashing
    role: 'admin',
    permissions: ['*'] // Full access
  },
  'editor': {
    passwordHash: 'editor2024!',
    role: 'editor', 
    permissions: ['projects:read', 'projects:write', 'blog:read', 'blog:write']
  },
  'viewer': {
    passwordHash: 'viewer2024!',
    role: 'viewer',
    permissions: ['projects:read', 'analytics:read']
  }
};

// Permission definitions
export const permissions = {
  'projects:read': 'View customer projects',
  'projects:write': 'Create and edit customer projects',
  'blog:read': 'View blog posts',
  'blog:write': 'Create and edit blog posts',
  'testimonials:read': 'View testimonials',
  'testimonials:write': 'Manage testimonials',
  'analytics:read': 'View analytics',
  'settings:read': 'View site settings',
  'settings:write': 'Modify site settings',
  'users:read': 'View user accounts',
  'users:write': 'Manage user accounts'
};

// Role-based access control
export const rolePermissions = {
  admin: ['*'], // All permissions
  editor: [
    'projects:read', 'projects:write',
    'blog:read', 'blog:write',
    'testimonials:read', 'testimonials:write',
    'analytics:read'
  ],
  viewer: [
    'projects:read',
    'analytics:read'
  ]
};

// Check if user has permission
export function hasPermission(userRole: AdminUser['role'], permission: string): boolean {
  const userPermissions = rolePermissions[userRole];
  return userPermissions.includes('*') || userPermissions.includes(permission);
}

// Session management
export interface Session {
  userId: string;
  username: string;
  role: AdminUser['role'];
  loginTime: number;
  lastActivity: number;
  sessionId: string;
}

// Generate session ID
export function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Check if session is valid
export function isSessionValid(session: Session): boolean {
  const now = Date.now();
  const sessionAge = now - session.loginTime;
  const inactivity = now - session.lastActivity;
  
  return sessionAge < (authConfig.sessionTimeout * 60 * 1000) && 
         inactivity < (30 * 60 * 1000); // 30 minutes inactivity timeout
}