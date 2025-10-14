import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Patio Doors | New York Sash | Central New York',
    description: 'Sliding and French patio doors that connect your indoor and outdoor spaces. Energy-efficient designs with professional installation in Central New York.',
    keywords: 'patio doors, sliding doors, French doors, deck doors, outdoor access, energy efficient doors, Central New York, New York Sash',
  };
}

export default async function PatioDoorsPage() {
  const data = await getPage('/doors/patio-doors');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
