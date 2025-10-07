import { Metadata } from 'next'
import { getPage } from '../../../lib/get-page'
import { Render } from '@measured/puck'
import config from '../../../puck.config'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/windows/hopper')
  return {
    title: data?.root?.props?.title || 'Hopper Windows | New York Sash | Central NY',
    description: 'Space-saving hopper windows from New York Sash. Bottom-hinged design perfect for basements and small spaces. Energy efficient for Central New York.',
    keywords: 'hopper windows, bottom hinged windows, basement windows, small space windows, energy efficient, Central New York',
    openGraph: {
      title: data?.root?.props?.title || 'Hopper Windows | New York Sash',
      description: 'Bottom-hinged hopper windows ideal for basements and tight spaces with excellent energy efficiency.',
      type: 'website',
    },
  }
}

export default async function HopperPage() {
  const data = await getPage('/windows/hopper')
  
  if (!data) {
    return <div>Page not found</div>
  }

  return <Render config={config} data={data} />
}