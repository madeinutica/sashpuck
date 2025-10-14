import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Showroom & Design Center | New York Sash | Central New York",
    description: "Visit our Idea and Design Center in Whitesboro, NY to see full displays of windows, siding, doors, and bathroom solutions. Experience our products firsthand before making your decision.",
    keywords: "New York Sash showroom, design center Whitesboro NY, home improvement displays, windows siding doors bathroom showroom Central New York",
    openGraph: {
      title: "Showroom & Design Center | New York Sash",
      description: "Experience our complete product displays at our Whitesboro showroom. See windows, siding, doors, and bathroom solutions up close.",
      type: "website",
      url: "https://newyorksash.com/showroom",
    },
  };
}

export default async function ShowroomPage() {
  const data = await getPage("/showroom");

  if (!data) {
    return <div>Page not found</div>;
  }

  return <Render config={config} data={data} />;
}