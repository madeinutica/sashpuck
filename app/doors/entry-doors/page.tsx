import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Entry Doors | New York Sash | Central New York',
    description: 'Beautiful, secure entry doors in steel, fiberglass, and wood. Energy-efficient designs with professional installation throughout Central New York.',
    keywords: 'entry doors, front doors, steel doors, fiberglass doors, wood doors, security doors, Central New York, New York Sash',
  };
}

export default async function EntryDoorsPage() {
  const data = await getPage('/doors/entry-doors');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
