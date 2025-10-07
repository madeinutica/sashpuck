import { Metadata } from "next";
import { getPage } from "../../lib/get-page";
import { Render } from "@measured/puck";
import config from "../../puck.config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Meet Our Team | New York Sash | Central New York",
    description: "Meet the dedicated professionals at New York Sash who bring expertise, passion, and personal attention to every home improvement project throughout Central New York.",
    keywords: "New York Sash team, home improvement experts Central New York, installation professionals, design consultants, customer service team",
    openGraph: {
      title: "Meet Our Team | New York Sash",
      description: "Dedicated professionals who bring expertise and personal attention to every project. Meet the team behind Central New York's premier home improvement company.",
      type: "website",
      url: "https://newyorksash.com/team",
    },
  };
}

export default function TeamPage() {
  const data = getPage("/team");

  if (!data) {
    return <div>Page not found</div>;
  }

  return <Render config={config} data={data} />;
}