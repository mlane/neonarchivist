import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Glossary } from 'app/pages'

export type GlossaryLoader = {
  glossaryData: {
    name: string
  }
}

export const loader: LoaderFunction = async (): Promise<GlossaryLoader> => {
  /** @todo get data from server */
  return {
    glossaryData: {
      name: 'Glossary',
    },
  }
}

/** @todo */
export const meta: MetaFunction = () => {
  return [
    {
      title: 'Glossary',
    },
    /** @todo additional meta tags */
  ]
}

export default function GlossaryRoute() {
  const { glossaryData } = useLoaderData<GlossaryLoader>()

  return <Glossary glossaryData={glossaryData} />
}
