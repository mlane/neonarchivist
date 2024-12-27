import type { MetaFunction } from '@remix-run/node'
import { Home } from 'app/pages'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'NeonArchivist',
    },
    /** @todo additional meta tags */
  ]
}

export default function HomeRoute() {
  return <Home />
}
