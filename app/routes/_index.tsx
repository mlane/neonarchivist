import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    {
      title: 'NeonArchivist',
    },
    /** @todo additional meta tags */
  ]
}

export default function Index() {
  return <div>Home</div>
}
