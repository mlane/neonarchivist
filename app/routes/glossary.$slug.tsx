import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { Params, useLoaderData } from '@remix-run/react'
import { GlossaryDetails } from 'app/pages'

export type GlossaryDetailsLoader = {
  glossaryDetailsData: {
    slug: string
  }
}

export const loader: LoaderFunction = async (
  args: LoaderFunctionArgs
): Promise<GlossaryDetailsLoader> => {
  const { slug } = args.params as Params

  /** @todo get data from server */
  return {
    glossaryDetailsData: {
      slug: slug ?? '',
    },
  }
}

export default function GlossaryDetailsRoute() {
  const { glossaryDetailsData } = useLoaderData<GlossaryDetailsLoader>()

  return <GlossaryDetails glossaryDetailsData={glossaryDetailsData} />
}
