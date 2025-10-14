import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Careers & Job Openings | New York Sash | Central New York",
    description: "Join the New York Sash team! Explore career opportunities in home improvement, installation, sales, and customer service. Build your career with Central New York's premier home improvement company.",
    keywords: "New York Sash careers, home improvement jobs Central New York, installation technician jobs, sales careers, customer service positions",
    openGraph: {
      title: "Careers & Job Openings | New York Sash",
      description: "Build your career with Central New York's premier home improvement company. Explore opportunities in installation, sales, and customer service.",
      type: "website",
      url: "https://newyorksash.com/careers",
    },
  };
}

export default async function CareersPage() {
  const data = await getPage("/careers");

  if (!data) {
    return <div>Page not found</div>;
  }

  return <Render config={config} data={data} />;
}