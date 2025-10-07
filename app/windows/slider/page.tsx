import { Metadata } from 'next'
import { getPage } from '../../../lib/get-page'
import { Render } from '@measured/puck'
import config from '../../../puck.config'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/windows/slider')
  return {
    title: data?.root?.props?.title || 'Slider Windows | New York Sash | Central NY',
    description: 'Energy efficient slider windows from New York Sash. Easy operation, maximum ventilation, and sleek design. Perfect for Central New York homes.',
    keywords: 'slider windows, sliding windows, horizontal windows, energy efficient, easy operation, Central New York',
    openGraph: {
      title: data?.root?.props?.title || 'Slider Windows | New York Sash',
      description: 'Smooth operating slider windows with energy efficient features and modern design.',
      type: 'website',
    },
  }
}

export default async function SliderPage() {
  const data = await getPage('/windows/slider')
  
  if (!data) {
    return <div>Page not found</div>
  }

  return <Render config={config} data={data} />
}