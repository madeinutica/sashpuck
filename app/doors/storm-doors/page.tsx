import { Metadata } from 'next';
import { Client } from '../../[...puckPath]/client';
import { getPage } from '../../../lib/get-page';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Storm Doors | New York Sash | Central New York',
    description: 'Protect your entry door with durable storm doors. Enhanced security, energy efficiency, and weather protection for Central New York homes.',
    keywords: 'storm doors, screen doors, security storm doors, weather protection, entry door protection, Central New York, New York Sash',
  };
}

export default async function StormDoorsPage() {
  const data = getPage('/doors/storm-doors');
  
  if (!data) {
    return notFound();
  }
  
  return <Client data={data} />;
}
