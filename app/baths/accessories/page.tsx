import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Bathroom Accessories | New York Sash | Central New York',
    description: 'Complete your bathroom remodel with premium accessories including grab bars, towel bars, soap dispensers, and storage solutions for Central New York homes.',
    keywords: 'bathroom accessories, grab bars, towel bars, soap dispensers, bathroom storage, safety accessories, Central New York, New York Sash',
  };
}

export default async function AccessoriesPage() {
  const data = getPage('/baths/accessories');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
