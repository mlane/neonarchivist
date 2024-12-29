import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Chronicles } from 'app/pages'

export const loader: LoaderFunction = async (): Promise<ChroniclesLoader> => {
  /** @todo get data from server */
  return {
    chroniclesData: {
      name: 'Chronicles',
    },
  }
}

/** @todo meta tags */

export type ChroniclesLoader = {
  chroniclesData: {
    name: string
  }
}

export default function ChroniclesRoute() {
  const { chroniclesData } = useLoaderData<ChroniclesLoader>()

  return <Chronicles chroniclesData={chroniclesData} />
}
