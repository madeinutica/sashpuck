"use client";

import React, { useState } from 'react';
import { useAuth } from './AuthProvider';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [activeSection, setActiveSection] = useState('projects');
  const { user, logout } = useAuth();

  const menuItems = [
    {
      id: 'projects',
      label: 'Customer Projects',
      icon: '🗺️',
      description: 'Manage map projects and testimonials',
      available: true
    },
    {
      id: 'win-entries',
      label: 'Win Contest Entries',
      icon: '🎉',
      description: 'View and manage contest form submissions',
      available: true
    },
    {
      id: 'pages',
      label: 'Page Content',
      icon: '📄',
      description: 'Edit page content via Puck CMS',
      available: true,
      external: true,
      link: '/'
    },
    {
      id: 'blog',
      label: 'Blog Management',
      icon: '📝',
      description: 'Create and manage blog posts',
      available: false,
      comingSoon: true
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      icon: '⭐',
      description: 'Manage customer reviews and ratings',
      available: false,
      comingSoon: true
    },
    {
      id: 'gallery',
      label: 'Photo Gallery',
      icon: '📸',
      description: 'Upload and organize project photos',
      available: false,
      comingSoon: true
    },
    {
      id: 'leads',
      label: 'Lead Management',
      icon: '👥',
      description: 'Track customer inquiries and quotes',
      available: false,
      comingSoon: true
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: '📊',
      description: 'Website traffic and conversion tracking',
      available: false,
      comingSoon: true
    },
    {
      id: 'settings',
      label: 'Site Settings',
      icon: '⚙️',
      description: 'Global site configuration and SEO',
      available: false,
      comingSoon: true
    }
  ];

  const handleMenuClick = (item: any) => {
    if (item.external) {
      window.open(item.link, '_blank');
      return;
    }
    
    if (item.available && !item.comingSoon) {
      if (item.id === 'projects') {
        setActiveSection(item.id);
      } else if (item.id === 'win-entries') {
        window.location.href = '/admin/win-entries';
      } else {
        setActiveSection(item.id);
      }
    } else if (item.comingSoon) {
      // Navigate to the coming soon page
      window.location.href = `/admin/${item.id}`;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: '#f8fafc'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        background: '#1f2937',
        color: 'white',
        padding: '2rem 0',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{ 
          padding: '0 1.5rem 2rem',
          borderBottom: '1px solid #374151',
          marginBottom: '2rem'
        }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: 'bold',
            color: '#ff4444'
          }}>
            SASH Admin
          </h1>
          <p style={{ 
            margin: '0.5rem 0 0', 
            fontSize: '0.875rem',
            color: '#9ca3af'
          }}>
            Welcome, {user?.username} ({user?.role})
          </p>
        </div>

        {/* Navigation */}
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              disabled={!item.available}
              style={{
                width: '100%',
                background: activeSection === item.id ? '#374151' : 'transparent',
                border: 'none',
                color: item.available ? 'white' : '#6b7280',
                padding: '1rem 1.5rem',
                textAlign: 'left',
                cursor: item.available ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s',
                borderLeft: activeSection === item.id ? '3px solid #ff4444' : '3px solid transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.875rem'
              }}
              onMouseEnter={(e) => {
                if (item.available && activeSection !== item.id) {
                  e.currentTarget.style.background = '#2d3748';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              <span style={{ fontSize: '1.125rem' }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ 
                  fontWeight: activeSection === item.id ? '600' : '500',
                  marginBottom: '0.125rem'
                }}>
                  {item.label}
                  {item.comingSoon && (
                    <span style={{
                      marginLeft: '0.5rem',
                      fontSize: '0.75rem',
                      background: '#374151',
                      padding: '0.125rem 0.375rem',
                      borderRadius: '0.25rem',
                      color: '#9ca3af'
                    }}>
                      Coming Soon
                    </span>
                  )}
                  {item.external && (
                    <span style={{
                      marginLeft: '0.5rem',
                      fontSize: '0.75rem',
                      color: '#60a5fa'
                    }}>
                      ↗
                    </span>
                  )}
                </div>
                <div style={{ 
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  lineHeight: '1.2'
                }}>
                  {item.description}
                </div>
              </div>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1.5rem',
          right: '1.5rem'
        }}>
          <button
            onClick={logout}
            style={{
              width: '100%',
              background: '#374151',
              color: 'white',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              marginBottom: '1rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#4b5563'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#374151'}
          >
            🚪 Sign Out
          </button>
          
          <div style={{
            padding: '1rem',
            background: '#111827',
            borderRadius: '0.5rem',
            fontSize: '0.75rem',
            color: '#9ca3af'
          }}>
            <div style={{ marginBottom: '0.5rem', fontWeight: '500', color: 'white' }}>
              Need Help?
            </div>
            <div>
              Contact your developer for new features or technical support.
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ 
        marginLeft: '280px',
        flex: 1,
        padding: '2rem',
        maxWidth: 'calc(100vw - 280px)',
        overflow: 'auto'
      }}>
        {/* Header Bar */}
        <div style={{
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '0.5rem',
          marginBottom: '2rem',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ 
                margin: 0, 
                fontSize: '1.875rem', 
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '0.25rem'
              }}>
                {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
              </h1>
              <p style={{ 
                margin: 0, 
                color: '#6b7280',
                fontSize: '0.875rem'
              }}>
                {menuItems.find(item => item.id === activeSection)?.description || 'Welcome to your admin dashboard'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: '1px solid #d1d5db',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem'
                }}
              >
                View Site ↗
              </a>
              <button
                onClick={() => window.location.reload()}
                style={{
                  background: '#ff4444',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{
          background: 'white',
          borderRadius: '0.5rem',
          border: '1px solid #e5e7eb',
          minHeight: '600px',
          overflow: 'hidden'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}