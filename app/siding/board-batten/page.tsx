import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/siding/board-batten');
  return {
    title: data?.root?.props?.title || 'Board & Batten Vertical Vinyl Siding | New York Sash | Central NY',
    description: 'Modern board & batten vertical vinyl siding from New York Sash. Contemporary farmhouse style with low maintenance. Expert installation for Central New York homes.',
    keywords: 'board and batten siding, vertical vinyl siding, farmhouse siding, modern siding style, Central New York, contemporary exterior',
  };
}

export default async function BoardBattenPage() {
  const data = await getPage('/siding/board-batten');

  if (!data) {
    return notFound();
  }

  return <Client data={data} />;
}