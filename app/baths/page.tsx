import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bathroom Remodeling & Walk-in Tubs | New York Sash | Central New York",
    description: "Complete bathroom remodeling solutions including acrylic bath liners, walk-in tubs, and tub-to-shower conversions. Professional 2-day installation throughout Central New York.",
    keywords: "bathroom remodeling Central New York, walk-in tubs Utica NY, tub-to-shower conversion Syracuse, acrylic bath liners Rome NY, bathroom renovation, accessibility bathrooms",
    openGraph: {
      title: "Bathroom Remodeling & Walk-in Tubs | New York Sash",
      description: "Complete bathroom renovations with 2-day installation. Acrylic bath liners, walk-in tubs, and accessibility solutions throughout Central New York.",
      type: "website",
      url: "https://newyorksash.com/baths",
    },
  };
}

export default async function BathsPage() {
  const data = await getPage("/baths");

  if (!data) {
    return <div>Page not found</div>;
  }

  return <Render config={config} data={data} />;
}