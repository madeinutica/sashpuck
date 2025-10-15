"use client";

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh',
      padding: '2rem'
    }}>
      <div 
        className="spinner"
        style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #2563eb',
          borderRadius: '50%',
          marginBottom: '1rem'
        }}
      />
      <h2 style={{
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: '0.5rem'
      }}>
        Loading Admin Interface...
      </h2>
      <p style={{
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        Please wait while we prepare your dashboard
      </p>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .spinner {
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `
      }} />
    </div>
  );
}