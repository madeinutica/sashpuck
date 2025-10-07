import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tub To Shower Conversion | New York Sash | Central New York',
    description: 'Transform your old bathtub into a beautiful, accessible shower. Professional tub to shower conversions in Central New York with custom options and expert installation.',
    keywords: 'tub to shower conversion, bathroom remodel, shower conversion, accessible shower, Central New York, New York Sash',
  };
}

export default async function TubToShowerPage() {
  const data = getPage('/baths/tub-to-shower');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
