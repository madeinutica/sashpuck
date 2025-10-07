import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Premium Vinyl Siding Installation | New York Sash | Central New York",
    description: "ENERGY STAR rated insulated vinyl siding installation throughout Central New York. Maintenance-free exterior solutions with lifetime warranty. Expert installation in Utica, Syracuse, Rome.",
    keywords: "vinyl siding Central New York, insulated siding Utica NY, siding installation Syracuse, ENERGY STAR siding Rome NY, maintenance-free siding, exterior home improvement",
    openGraph: {
      title: "Premium Vinyl Siding Installation | New York Sash",
      description: "ENERGY STAR rated insulated vinyl siding with lifetime warranty. Professional installation throughout Central New York since 1988.",
      type: "website",
      url: "https://newyorksash.com/siding",
    },
  };
}

export default function SidingPage() {
  const data = getPage("/siding");

  if (!data) {
    return <div>Page not found</div>;
  }

  return <Render config={config} data={data} />;
}