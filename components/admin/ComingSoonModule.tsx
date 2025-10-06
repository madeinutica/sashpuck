"use client";

import React from 'react';

interface ComingSoonModuleProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  estimatedCompletion?: string;
  priority?: 'High' | 'Medium' | 'Low';
}

export default function ComingSoonModule({
  title,
  description,
  features,
  icon,
  estimatedCompletion = "TBD",
  priority = "Medium"
}: ComingSoonModuleProps) {
  const priorityColors = {
    High: { bg: '#fef2f2', border: '#fecaca', text: '#dc2626' },
    Medium: { bg: '#fffbeb', border: '#fed7aa', text: '#d97706' },
    Low: { bg: '#f0f9ff', border: '#bae6fd', text: '#0284c7' }
  };

  const priorityColor = priorityColors[priority];

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{
        background: '#f8fafc',
        border: '2px dashed #cbd5e1',
        borderRadius: '1rem',
        padding: '3rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          {icon}
        </div>
        
        <h2 style={{ 
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>
          {title}
        </h2>
        
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          {description}
        </p>

        {/* Priority Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: priorityColor.bg,
          border: `1px solid ${priorityColor.border}`,
          color: priorityColor.text,
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '600',
          marginBottom: '2rem'
        }}>
          <span>🎯</span>
          {priority} Priority • Est. {estimatedCompletion}
        </div>

        {/* Planned Features */}
        <div style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          marginTop: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#374151',
            marginBottom: '1rem'
          }}>
            Planned Features:
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '0.75rem'
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem',
                background: '#f9fafb',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                color: '#374151'
              }}>
                <span style={{ color: '#10b981' }}>✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Developer */}
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#1f2937',
          color: 'white',
          borderRadius: '0.5rem'
        }}>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            <strong>Want this feature prioritized?</strong> Contact your developer to discuss implementation timeline and requirements.
          </p>
        </div>
      </div>
    </div>
  );
}