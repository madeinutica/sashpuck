import React from "react";

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Contact Us</h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "2rem" }}>
        We'd love to hear from you! Please fill out the form below or use the contact information provided.
      </p>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ padding: "0.75rem", fontSize: "1rem" }} />
        <input type="email" name="email" placeholder="Your Email" required style={{ padding: "0.75rem", fontSize: "1rem" }} />
        <textarea name="message" placeholder="Your Message" required style={{ padding: "0.75rem", fontSize: "1rem", minHeight: 120 }} />
        <button type="submit" style={{ background: "#dc143c", color: "#fff", padding: "0.75rem", fontSize: "1.1rem", border: "none", borderRadius: 4, cursor: "pointer" }}>
          Send Message
        </button>
      </form>
      <div style={{ marginTop: "2rem", color: "#333" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Contact Information</h2>
        <p>349 Oriskany Blvd, Whitesboro, NY 13492</p>
        <p>Email: <a href="mailto:info@newyorksash.com">info@newyorksash.com</a></p>
        <p>Phone: <a href="tel:3156247344">(315) 624-7344</a></p>
      </div>
    </main>
  );
}
