import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Entry Doors & Patio Doors | New York Sash | Central New York",
    description: "Premium fiberglass and steel entry doors, French doors, and patio door systems. Professional installation with energy efficiency and security features throughout Central New York.",
    keywords: "entry doors Central New York, fiberglass doors Utica NY, steel doors Syracuse, French doors Rome NY, patio doors installation, front door replacement",
    openGraph: {
      title: "Entry Doors & Patio Doors | New York Sash",
      description: "Premium door systems with professional installation. Fiberglass, steel, and French doors designed for Central New York homes since 1988.",
      type: "website",
      url: "https://newyorksash.com/doors",
    },
  };
}

export default function DoorsPage() {
  const data = getPage("/doors");

  if (!data) {
    return <div>Page not found</div>;
  }

  return <Render config={config} data={data} />;
}