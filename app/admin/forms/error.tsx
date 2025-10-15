'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Forms page error caught:', error);
  }, [error]);

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      background: '#fef2f2',
      border: '1px solid #ef4444',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
      <h2 style={{ 
        color: '#b91c1c', 
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>
        Forms Management Error
      </h2>
      <p style={{ 
        color: '#7f1d1d', 
        marginBottom: '1.5rem',
        fontSize: '0.875rem'
      }}>
        Unable to load the forms management interface. This might be due to missing components or a temporary issue.
      </p>
      
      <details style={{ 
        marginBottom: '1.5rem', 
        textAlign: 'left',
        background: '#fee2e2',
        padding: '1rem',
        borderRadius: '4px',
        border: '1px solid #fca5a5'
      }}>
        <summary style={{ 
          cursor: 'pointer', 
          fontWeight: '500',
          color: '#991b1b',
          marginBottom: '0.5rem'
        }}>
          Error Details
        </summary>
        <pre style={{ 
          fontSize: '0.75rem', 
          color: '#7f1d1d',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          margin: 0
        }}>
          {error.message}
          {error.digest && `\nError ID: ${error.digest}`}
        </pre>
      </details>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={reset}
          style={{
            background: '#ef4444',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}
        >
          Try Again
        </button>
        
        <button
          onClick={() => window.location.href = '/admin'}
          style={{
            background: '#6b7280',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}
        >
          Return to Admin
        </button>
      </div>
    </div>
  );
}