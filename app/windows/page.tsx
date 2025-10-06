import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Premium Replacement Windows | New York Sash | Central New York",
    description: "Premium vinyl replacement windows with fusion welded frames, LowE glass, and Argon insulation. ENERGY STAR certified windows custom manufactured for Central New York homes. Expert installation in Utica, Syracuse, Rome.",
    keywords: "replacement windows Central New York, vinyl windows Utica NY, energy efficient windows Syracuse, bay windows Rome NY, fusion welded window frames, ENERGY STAR windows",
    openGraph: {
      title: "Premium Replacement Windows | New York Sash",
      description: "Custom manufactured vinyl replacement windows with fusion welded frames and ENERGY STAR certification. Expert installation throughout Central New York.",
      type: "website",
      url: "https://newyorksash.com/windows",
    },
  };
}

export default function WindowsPage() {
  const data = getPage("/windows");

  if (!data) {
    return <div>Page not found</div>;
  }

  return <Render config={config} data={data} />;
}