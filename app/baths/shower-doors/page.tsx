import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Shower Doors | New York Sash | Central New York',
    description: 'Custom shower doors and enclosures in frameless, semi-frameless, and framed styles. Professional installation of glass shower doors throughout Central New York.',
    keywords: 'shower doors, glass shower doors, frameless shower doors, shower enclosures, bathroom glass, Central New York, New York Sash',
  };
}

export default async function ShowerDoorsPage() {
  const data = getPage('/baths/shower-doors');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
