import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Toilets | New York Sash | Central New York',
    description: 'High-efficiency toilets, comfort height models, and dual-flush options. Professional toilet installation and replacement services throughout Central New York.',
    keywords: 'toilets, high efficiency toilets, comfort height toilets, dual flush toilets, toilet installation, Central New York, New York Sash',
  };
}

export default async function ToiletsPage() {
  const data = getPage('/baths/toilets');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
