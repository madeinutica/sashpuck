import { Render } from "@measured/puck";
import config from "../../puck.config";
import { getPage } from "../../lib/get-page";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Us | New York Sash - Central NY's Home Improvement Experts",
    description: "Learn about New York Sash's 45+ year history serving Central New York. Meet our team, see our values, and discover why we're the region's most trusted home improvement company.",
    keywords: "New York Sash about, Central NY home improvement, company history, team, values, certifications",
    openGraph: {
      title: "About New York Sash - Central NY's Trusted Home Improvement Company",
      description: "Over 45 years of excellence in windows, siding, bathrooms, and entry doors. Learn about our commitment to quality, service, and community.",
      images: [
        {
          url: "https://placehold.co/1200x630/000000/FFFFFF?text=About+New+York+Sash",
          width: 1200,
          height: 630,
          alt: "About New York Sash",
        },
      ],
    },
  };
}

export default async function AboutPage() {
  const data = await getPage("/about");

  if (!data) {
    return notFound();
  }

  return <Render config={config} data={data} />;
}