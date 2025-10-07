import { Metadata } from 'next'
import { getPage } from '../../../lib/get-page'
import { Render } from '@measured/puck'
import config from '../../../puck.config'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/windows/awning')
  return {
    title: data?.root?.props?.title || 'Awning Windows | New York Sash | Central NY',
    description: 'Premium awning windows from New York Sash. Top-hinged design for weather protection and ventilation. Energy efficient for Central New York homes.',
    keywords: 'awning windows, top hinged windows, weather protection, ventilation, energy efficient, Central New York',
    openGraph: {
      title: data?.root?.props?.title || 'Awning Windows | New York Sash',
      description: 'Top-hinged awning windows providing excellent ventilation and weather protection.',
      type: 'website',
    },
  }
}

export default async function AwningPage() {
  const data = await getPage('/windows/awning')
  
  if (!data) {
    return <div>Page not found</div>
  }

  return <Render config={config} data={data} />
}