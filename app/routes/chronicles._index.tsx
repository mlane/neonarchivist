import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Chronicles } from 'app/pages'

export type ChroniclesLoader = {
  chroniclesData: {
    name: string
  }
}

export const loader: LoaderFunction = async (): Promise<ChroniclesLoader> => {
  /** @todo get data from server */
  return {
    chroniclesData: {
      name: 'Chronicles',
    },
  }
}

/** @todo */
export const meta: MetaFunction = () => {
  return [
    {
      title: 'Chronicles',
    },
    /** @todo additional meta tags */
  ]
}

export default function ChroniclesRoute() {
  const { chroniclesData } = useLoaderData<ChroniclesLoader>()

  return <Chronicles chroniclesData={chroniclesData} />
}
