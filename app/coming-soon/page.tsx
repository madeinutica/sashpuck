import React from "react";

export default function ComingSoonPage() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Coming Soon</h1>
      <p style={{ fontSize: "1.25rem", color: "#555", marginBottom: "2rem" }}>
        This feature is under development. Please check back soon!
      </p>
    </div>
  );
}
