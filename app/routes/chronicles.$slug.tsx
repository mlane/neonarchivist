import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { Params, useLoaderData } from '@remix-run/react'
import { ChroniclesDetails } from 'app/pages'

export const loader: LoaderFunction = async (
  args: LoaderFunctionArgs
): Promise<ChroniclesDetailsLoader> => {
  const { slug } = args.params as Params

  /** @todo get data from server */
  return {
    chroniclesDetailsData: {
      slug: slug ?? '',
    },
  }
}

/** @todo meta tags */

export type ChroniclesDetailsLoader = {
  chroniclesDetailsData: {
    slug: string
  }
}

export default function ChroniclesDetailsRoute() {
  const { chroniclesDetailsData } = useLoaderData<ChroniclesDetailsLoader>()

  return <ChroniclesDetails chroniclesDetailsData={chroniclesDetailsData} />
}
