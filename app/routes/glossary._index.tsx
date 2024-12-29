import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Glossary } from 'app/pages'

export const loader: LoaderFunction = async (): Promise<GlossaryLoader> => {
  /** @todo get data from server */
  return {
    glossaryData: {
      name: 'Glossary',
    },
  }
}

/** @todo meta tags */

export type GlossaryLoader = {
  glossaryData: {
    name: string
  }
}

export default function GlossaryRoute() {
  const { glossaryData } = useLoaderData<GlossaryLoader>()

  return <Glossary glossaryData={glossaryData} />
}
