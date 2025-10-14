import React from "react";

export default function ComingSoonPage() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Coming Soon</h1>
      <p style={{ fontSize: "1.25rem", color: "#666", marginBottom: "2rem" }}>
        This feature is under development and will be available soon. Please check back later!
      </p>
      <img src="/images/misc/logo.png" alt="New York Sash Logo" style={{ maxWidth: 200, marginBottom: "2rem" }} />
    </main>
  );
}
