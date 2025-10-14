import React from "react";

export default function AccessibilityPage() {
  return (
    <main className="accessibility-page" style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h1>Accessibility Statement</h1>
      <p>
        New York Sash is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
      </p>
      <h2>Our Commitment</h2>
      <p>
        We strive to make our website as accessible as possible by following best practices and standards as defined by the Web Content Accessibility Guidelines (WCAG).
      </p>
      <h2>Feedback</h2>
      <p>
        If you encounter accessibility barriers or have suggestions for improvement, please contact us at <a href="mailto:info@newyorksash.com">info@newyorksash.com</a>.
      </p>
      <h2>Ongoing Efforts</h2>
      <p>
        We regularly review our site and update content to ensure accessibility for all users.
      </p>
    </main>
  );
}
