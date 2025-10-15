import { Metadata } from "next";
import WinForm from "./WinForm";
import Puck from "../../components/Puck";

export const metadata: Metadata = {
  title: "Win - New York Sash Contest Entry",
};

export default function WinPage() {
  return (
    <div style={{ padding: "3rem 1rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
  {/* Puck CMS blocks for win page */}
  <Puck />
        {/* Win contest entry form */}
        <WinForm />
      </div>
    </div>
  );
}
