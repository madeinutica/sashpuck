import { Metadata } from 'next'
import { getPage } from '../../../lib/get-page'
import { Render } from '@measured/puck'
import config from '../../../puck.config'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/siding/cedar-shake-vinyl')
  return {
    title: data?.root?.props?.title || 'Cedar Shake Vinyl Siding | New York Sash | Central NY',
    description: 'Authentic cedar shake vinyl siding from New York Sash. Natural wood texture without maintenance. Durable and beautiful for Central New York homes.',
    keywords: 'cedar shake vinyl siding, wood shake siding, cedar texture siding, maintenance free cedar look, Central New York, authentic wood appearance',
    openGraph: {
      title: data?.root?.props?.title || 'Cedar Shake Vinyl Siding | New York Sash',
      description: 'Beautiful cedar shake appearance with all the benefits of vinyl siding.',
      type: 'website',
    },
  }
}

export default async function CedarShakeVinylPage() {
  const data = await getPage('/siding/cedar-shake-vinyl')
  
  if (!data) {
    return <div>Page not found</div>
  }

  return <Render config={config} data={data} />
}