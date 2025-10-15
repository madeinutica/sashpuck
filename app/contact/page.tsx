"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ContactFormManager = dynamic(() => import("../../components/admin/ContactFormManager"), { ssr: false });

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        const data = await res.json();
        setError(data.error || "Submission failed");
      }
    } catch (err: any) {
      setError(err.message || "Submission failed");
    }
    setLoading(false);
  }

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Contact Us</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
        We'd love to hear from you! Please fill out the form below or use the contact information provided.
      </p>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required style={{ padding: "0.75rem", fontSize: "1rem" }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ padding: "0.75rem", fontSize: "1rem" }} />
        <textarea name="message" placeholder="Your Message" required style={{ padding: "0.75rem", fontSize: "1rem", minHeight: 120 }} />
        <button type="submit" style={{ background: "#dc143c", color: "#fff", padding: "0.75rem", fontSize: "1.1rem", border: "none", borderRadius: 4, cursor: "pointer" }} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && (
          <div style={{ color: "green", fontWeight: "bold", marginTop: "1rem" }}>
            Thank you! Your message has been sent.
          </div>
        )}
        {error && (
          <div style={{ color: "red", fontWeight: "bold", marginTop: "1rem" }}>
            {error}
          </div>
        )}
      </form>
      <div style={{ marginTop: "2rem", color: "#333" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Contact Information</h2>
        <p>349 Oriskany Blvd, Whitesboro, NY 13492</p>
        <p>Email: <a href="mailto:info@newyorksash.com">info@newyorksash.com</a></p>
        <p>Phone: <a href="tel:3156247344">(315) 624-7344</a></p>
      </div>
      {/* Admin Contact Form Manager (visible only to admins) */}
      <div style={{ marginTop: "3rem" }}>
        <ContactFormManager />
      </div>
    </main>
  );
}
