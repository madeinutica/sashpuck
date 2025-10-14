import { Metadata } from "next";
import WinForm from "./WinForm";

export const metadata: Metadata = {
  title: "Win - New York Sash Contest Entry",
};

export default function WinPage() {
  return (
    <div style={{ padding: "3rem 1rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ 
          background: "white", 
          padding: "2.5rem", 
          borderRadius: "0", 
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e5e7eb"
        }}>
          <h1 style={{ 
            fontSize: "2rem", 
            fontWeight: "bold", 
            marginBottom: "1.5rem", 
            textAlign: "center",
            color: "#1f2937" 
          }}>
            Enter to Win
          </h1>
          
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#4b5563", 
            marginBottom: "2rem", 
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto 2rem"
          }}>
            Fill out the form below for a chance to win! Our winners are selected monthly.
          </p>

          <WinForm />
        </div>
      </div>
    </div>
  );
}
