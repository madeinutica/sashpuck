import { Metadata } from 'next'
import { getPage } from '../../../lib/get-page'
import { Render } from '@measured/puck'
import config from '../../../puck.config'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/windows/double-hung')
  return {
    title: data?.root?.props?.title || 'Double Hung Windows | New York Sash | Central NY',
    description: 'Premium double hung windows from New York Sash. Fusion welded frames, energy efficient, tilt-in sashes for easy cleaning. Serving Central New York.',
    keywords: 'double hung windows, replacement windows, fusion welded, energy efficient, Central New York, tilt-in sashes',
    openGraph: {
      title: data?.root?.props?.title || 'Double Hung Windows | New York Sash',
      description: 'Premium double hung windows with fusion welded frames and energy efficient features for Central NY homes.',
      type: 'website',
    },
  }
}

export default async function DoubleHungPage() {
  const data = await getPage('/windows/double-hung')
  
  if (!data) {
    return <div>Page not found</div>
  }

  return <Render config={config} data={data} />
}