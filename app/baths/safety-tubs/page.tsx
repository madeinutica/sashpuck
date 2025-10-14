import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Safety Tubs | New York Sash | Central New York',
    description: 'Walk-in safety tubs with low thresholds, grab bars, and slip-resistant surfaces. Safe, accessible bathing solutions for Central New York seniors and mobility-limited individuals.',
    keywords: 'safety tubs, walk-in tubs, accessible bathtubs, senior bathing, mobility bathtub, Central New York, New York Sash',
  };
}

export default async function SafetyTubsPage() {
  const data = await getPage('/baths/safety-tubs');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
