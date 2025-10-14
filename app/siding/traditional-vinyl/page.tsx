import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/siding/traditional-vinyl');
  return {
    title: data?.root?.props?.title || 'Traditional Vinyl Siding | New York Sash | Central NY',
    description: 'Classic traditional vinyl siding from New York Sash. Affordable, maintenance-free exterior protection with lifetime warranty. Professional installation for Central New York.',
    keywords: 'traditional vinyl siding, classic vinyl siding, affordable siding, maintenance free siding, Central New York, lifetime warranty',
  };
}

export default async function TraditionalVinylPage() {
  const data = await getPage('/siding/traditional-vinyl');

  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}