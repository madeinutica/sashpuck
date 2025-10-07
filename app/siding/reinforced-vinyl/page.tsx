import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const data = getPage('/siding/reinforced-vinyl');
  return {
    title: data?.root?.props?.title || 'Reinforced Vinyl Siding | New York Sash | Central NY',
    description: 'Heavy-duty reinforced vinyl siding from New York Sash. Superior impact resistance and insulation for maximum protection. Expert installation throughout Central New York.',
    keywords: 'reinforced vinyl siding, heavy duty siding, impact resistant siding, insulated vinyl siding, Central New York, premium siding',
  };
}

export default async function ReinforcedVinylPage() {
  const data = getPage('/siding/reinforced-vinyl');
  
  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}