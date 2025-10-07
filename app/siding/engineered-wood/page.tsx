import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const data = getPage('/siding/engineered-wood');
  return {
    title: data?.root?.props?.title || 'Engineered Wood Siding | New York Sash | Central NY',
    description: 'Premium engineered wood siding from New York Sash. Natural wood beauty with enhanced durability and weather resistance. Professional installation for Central New York homes.',
    keywords: 'engineered wood siding, wood look siding, durable wood siding, weather resistant siding, Central New York, natural wood appearance',
  };
}

export default async function EngineeredWoodPage() {
  const data = getPage('/siding/engineered-wood');
  
  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}