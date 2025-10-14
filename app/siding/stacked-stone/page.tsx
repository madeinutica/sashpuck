import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/siding/stacked-stone');
  return {
    title: data?.root?.props?.title || 'Stacked Stone Siding | New York Sash | Central NY',
    description: 'Beautiful stacked stone exterior siding from New York Sash. Natural stone appearance with modern durability. Professional installation throughout Central New York.',
    keywords: 'stacked stone siding, stone veneer siding, natural stone look, stone exterior, Central New York, architectural stone',
  };
}

export default async function StackedStonePage() {
  const data = await getPage('/siding/stacked-stone');

  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}