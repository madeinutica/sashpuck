"use client";

import { useState, FormEvent } from 'react';

export default function WinForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    howDidYouHear: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Send the data to our API endpoint
      const response = await fetch('/api/win-entries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Response Error:', response.status, errorText);
        throw new Error(`Failed to submit entry: ${response.status} - ${errorText}`);
      }
      
      // Success!
      setSubmitStatus('success');
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        howDidYouHear: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Success message */}
      {submitStatus === 'success' && (
        <div style={{
          background: '#ecfdf5',
          border: '1px solid #10b981',
          borderRadius: '0',
          padding: '1rem',
          marginBottom: '2rem',
          color: '#047857',
          textAlign: 'center'
        }}>
          Thank you for your submission! Your entry has been received.
        </div>
      )}
      
      {/* Error message */}
      {submitStatus === 'error' && (
        <div style={{
          background: '#fef2f2',
          border: '1px solid #ef4444',
          borderRadius: '0',
          padding: '1rem',
          marginBottom: '2rem',
          color: '#b91c1c',
          textAlign: 'center'
        }}>
          {errorMessage || 'There was an error submitting your form. Please try again.'}
        </div>
      )}
      
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ 
          display: "block", 
          fontSize: "0.9rem", 
          fontWeight: "500", 
          color: "#374151", 
          marginBottom: "0.5rem" 
        }}>
          Full Name*
        </label>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          style={{ 
            width: "100%", 
            padding: "0.75rem 1rem", 
            border: "1px solid #d1d5db", 
            borderRadius: "0", 
            fontSize: "1rem"
          }} 
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ 
          display: "block", 
          fontSize: "0.9rem", 
          fontWeight: "500", 
          color: "#374151", 
          marginBottom: "0.5rem" 
        }}>
          Email Address*
        </label>
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{ 
            width: "100%", 
            padding: "0.75rem 1rem", 
            border: "1px solid #d1d5db", 
            borderRadius: "0", 
            fontSize: "1rem"
          }} 
        />
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ 
          display: "block", 
          fontSize: "0.9rem", 
          fontWeight: "500", 
          color: "#374151", 
          marginBottom: "0.5rem" 
        }}>
          How did you hear about us?*
        </label>
        <textarea
          name="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={handleInputChange}
          required
          rows={4}
          style={{ 
            width: "100%", 
            padding: "0.75rem 1rem", 
            border: "1px solid #d1d5db", 
            borderRadius: "0", 
            fontSize: "1rem",
            resize: "vertical"
          }}
          placeholder="Please let us know how you heard about New York Sash..."
        ></textarea>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{ 
            background: isSubmitting ? "#cccccc" : "#ff4444", 
            color: "white", 
            padding: "0.875rem 2.5rem", 
            border: "none", 
            borderRadius: "0", 
            fontSize: "1rem", 
            fontWeight: "600",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            transition: "background-color 0.2s ease"
          }}
          onMouseOver={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#cc3333")}
          onMouseOut={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = "#ff4444")}
        >
          {isSubmitting ? "Submitting..." : "Submit Entry"}
        </button>
      </div>
    </form>
  );
}
