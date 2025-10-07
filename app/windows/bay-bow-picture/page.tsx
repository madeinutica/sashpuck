import { Metadata } from 'next'
import { getPage } from '../../../lib/get-page'
import { Render } from '@measured/puck'
import config from '../../../puck.config'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage('/windows/bay-bow-picture')
  return {
    title: data?.root?.props?.title || 'Bay, Bow & Picture Windows | New York Sash | Central NY',
    description: 'Stunning bay, bow and picture windows from New York Sash. Custom designed specialty windows to enhance your home\'s architecture. Serving Central New York.',
    keywords: 'bay windows, bow windows, picture windows, specialty windows, custom windows, Central New York, architectural windows',
    openGraph: {
      title: data?.root?.props?.title || 'Bay, Bow & Picture Windows | New York Sash',
      description: 'Custom bay, bow and picture windows designed to enhance your home\'s beauty and natural light.',
      type: 'website',
    },
  }
}

export default async function BayBowPicturePage() {
  const data = await getPage('/windows/bay-bow-picture')
  
  if (!data) {
    return <div>Page not found</div>
  }

  return <Render config={config} data={data} />
}