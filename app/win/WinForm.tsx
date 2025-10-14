"use client";

export default function WinForm() {
  return (
    <form>
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
          Phone Number*
        </label>
        <input 
          type="tel" 
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
          Address
        </label>
        <input 
          type="text"
          style={{ 
            width: "100%", 
            padding: "0.75rem 1rem", 
            border: "1px solid #d1d5db", 
            borderRadius: "0", 
            fontSize: "1rem",
            marginBottom: "0.75rem"
          }} 
          placeholder="Street Address"
        />
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr 1fr", 
          gap: "0.75rem" 
        }}>
          <input 
            type="text" 
            placeholder="City"
            style={{ 
              width: "100%", 
              padding: "0.75rem 1rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "0", 
              fontSize: "1rem"
            }}
          />
          <input 
            type="text" 
            placeholder="State"
            style={{ 
              width: "100%", 
              padding: "0.75rem 1rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "0", 
              fontSize: "1rem"
            }}
          />
          <input 
            type="text" 
            placeholder="ZIP"
            style={{ 
              width: "100%", 
              padding: "0.75rem 1rem", 
              border: "1px solid #d1d5db", 
              borderRadius: "0", 
              fontSize: "1rem"
            }}
          />
        </div>
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

      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ 
          display: "block", 
          fontSize: "0.9rem", 
          fontWeight: "500", 
          color: "#374151", 
          marginBottom: "0.5rem" 
        }}>
          Are you interested in any of our products or services?
        </label>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "0.75rem" 
        }}>
          <label style={{ 
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            color: "#4b5563"
          }}>
            <input type="checkbox" /> Windows
          </label>
          <label style={{ 
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            color: "#4b5563"
          }}>
            <input type="checkbox" /> Doors
          </label>
          <label style={{ 
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            color: "#4b5563"
          }}>
            <input type="checkbox" /> Siding
          </label>
          <label style={{ 
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            color: "#4b5563"
          }}>
            <input type="checkbox" /> Bathrooms
          </label>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <label style={{ 
          display: "flex",
          alignItems: "flex-start",
          gap: "0.5rem",
          fontSize: "0.9rem",
          color: "#4b5563"
        }}>
          <input 
            type="checkbox" 
            style={{ marginTop: "0.25rem" }}
            required
          />
          <span>
            I agree to receive communications from New York Sash. I understand I can unsubscribe at any time. View our <a href="/privacy" style={{ color: "#ff4444", textDecoration: "underline" }}>Privacy Policy</a>.
          </span>
        </label>
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          style={{ 
            background: "#ff4444", 
            color: "white", 
            padding: "0.875rem 2.5rem", 
            border: "none", 
            borderRadius: "0", 
            fontSize: "1rem", 
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s ease"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#cc3333"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#ff4444"}
        >
          Submit Entry
        </button>
      </div>
    </form>
  );
}