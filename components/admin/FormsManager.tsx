"use client";

import { useState } from 'react';
import WinEntriesManager from './WinEntriesManager';

// Form configuration - easily extensible for new forms
const FORM_TYPES = {
  'win-contest': {
    id: 'win-contest',
    name: 'Win Contest Entries',
    description: 'Contest form submissions from the win page',
    icon: '🎉',
    tableName: 'win_entries',
    color: '#059669',
    fields: ['name', 'email', 'how_did_hear'],
    component: WinEntriesManager
  },
  // Future forms can be added here:
  // 'contact': {
  //   id: 'contact',
  //   name: 'Contact Form',
  //   description: 'General contact inquiries',
  //   icon: '📧',
  //   tableName: 'contact_submissions',
  //   color: '#2563eb',
  //   fields: ['name', 'email', 'message'],
  //   component: ContactFormManager
  // },
  // 'quote-request': {
  //   id: 'quote-request',
  //   name: 'Quote Requests',
  //   description: 'Project quote requests',
  //   icon: '💰',
  //   tableName: 'quote_requests',
  //   color: '#dc2626',
  //   fields: ['name', 'email', 'phone', 'project_type', 'description'],
  //   component: QuoteRequestManager
  // }
};

export default function FormsManager() {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  // If a specific form is selected, render its component
  if (activeForm && FORM_TYPES[activeForm as keyof typeof FORM_TYPES]) {
    const formConfig = FORM_TYPES[activeForm as keyof typeof FORM_TYPES];
    const FormComponent = formConfig.component;
    
    return (
      <div>
        {/* Back button */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => setActiveForm(null)}
            style={{
              background: '#6b7280',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            ← Back to Forms Overview
          </button>
        </div>
        
        {/* Render the specific form manager */}
        <FormComponent />
      </div>
    );
  }

  // Main forms overview dashboard
  return (
    <div style={{ padding: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
          📋 Forms Management
        </h1>
        <p style={{ color: '#6b7280', fontSize: '1rem' }}>
          Manage all website form submissions and inquiries
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: '0 0 0.5rem 0' }}>
            Total Forms
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937' }}>
            {Object.keys(FORM_TYPES).length}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
            Active form types
          </div>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: '0 0 0.5rem 0' }}>
            Latest Activity
          </h3>
          <div style={{ fontSize: '1rem', fontWeight: '500', color: '#1f2937' }}>
            Today
          </div>
          <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
            Check individual forms for details
          </div>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', margin: '0 0 0.5rem 0' }}>
            Most Popular
          </h3>
          <div style={{ fontSize: '1rem', fontWeight: '500', color: '#1f2937' }}>
            Win Contest
          </div>
          <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
            Most submissions
          </div>
        </div>
      </div>

      {/* Forms Grid */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
          Available Forms
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1rem'
        }}>
          {Object.values(FORM_TYPES).map((form) => (
            <div
              key={form.id}
              onClick={() => setActiveForm(form.id)}
              style={{
                background: 'white',
                border: `2px solid ${form.color}20`,
                borderRadius: '8px',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = form.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = `${form.color}20`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem', marginRight: '0.75rem' }}>
                  {form.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600', 
                    margin: '0 0 0.25rem 0', 
                    color: '#1f2937' 
                  }}>
                    {form.name}
                  </h3>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: '#6b7280',
                    margin: 0 
                  }}>
                    {form.description}
                  </div>
                </div>
              </div>
              
              <div style={{ 
                fontSize: '0.75rem', 
                color: form.color, 
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Click to manage →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Future Forms Section */}
      <div style={{ 
        background: '#f8fafc', 
        border: '1px dashed #cbd5e0', 
        borderRadius: '8px', 
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#4a5568' }}>
          🚀 Coming Soon
        </h3>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0 0 1rem 0' }}>
          Additional form types will be added here as your website grows
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          fontSize: '0.75rem',
          color: '#9ca3af'
        }}>
          <span>📧 Contact Forms</span>
          <span>💰 Quote Requests</span>
          <span>📅 Appointment Booking</span>
          <span>📝 Service Requests</span>
          <span>⭐ Review Forms</span>
        </div>
      </div>

      {/* Help Section */}
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#eff6ff', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
        <h4 style={{ fontSize: '0.875rem', fontWeight: '600', margin: '0 0 0.5rem 0', color: '#1e40af' }}>
          💡 Forms Management Help
        </h4>
        <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.75rem', color: '#1e3a8a' }}>
          <li>Click any form card to view and manage submissions</li>
          <li>Export data to CSV for external analysis</li>
          <li>Search and filter entries by any field</li>
          <li>Delete spam or test entries as needed</li>
        </ul>
      </div>
    </div>
  );
}