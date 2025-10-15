"use client";

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // If a custom fallback is provided, use it
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} retry={this.retry} />;
      }

      // Default error UI
      return (
        <div style={{
          padding: '2rem',
          maxWidth: '600px',
          margin: '2rem auto',
          background: '#fef2f2',
          border: '1px solid #ef4444',
          borderRadius: '8px',
          textAlign: 'center' as const
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ 
            color: '#b91c1c', 
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: '600'
          }}>
            Something went wrong
          </h2>
          <p style={{ 
            color: '#7f1d1d', 
            marginBottom: '1.5rem',
            fontSize: '0.875rem'
          }}>
            An error occurred while loading this page. This might be due to a temporary issue or missing components.
          </p>
          
          {this.state.error && (
            <details style={{ 
              marginBottom: '1.5rem', 
              textAlign: 'left' as const,
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
                Error Details (click to expand)
              </summary>
              <pre style={{ 
                fontSize: '0.75rem', 
                color: '#7f1d1d',
                whiteSpace: 'pre-wrap' as const,
                wordBreak: 'break-word' as const,
                margin: 0
              }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <button
              onClick={this.retry}
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
              onMouseOver={(e) => e.currentTarget.style.background = '#dc2626'}
              onMouseOut={(e) => e.currentTarget.style.background = '#ef4444'}
            >
              Try Again
            </button>
            
            <button
              onClick={() => window.location.reload()}
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
              onMouseOver={(e) => e.currentTarget.style.background = '#4b5563'}
              onMouseOut={(e) => e.currentTarget.style.background = '#6b7280'}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Functional wrapper for easier usage
export function AdminErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundary;