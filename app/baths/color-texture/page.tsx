import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Color & Texture Options | New York Sash | Central New York',
    description: 'Explore our extensive selection of bathroom colors, textures, and finishes. Customize your bathroom remodel with premium materials and design options in Central New York.',
    keywords: 'bathroom colors, bathroom textures, bathroom finishes, custom bathroom, bathroom design options, Central New York, New York Sash',
  };
}

export default async function ColorTexturePage() {
  const data = await getPage('/baths/color-texture');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
