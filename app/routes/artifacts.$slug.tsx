import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node'
import { Params, useLoaderData } from '@remix-run/react'
import { ArtifactsDetails } from 'app/pages'

export const loader: LoaderFunction = async (
  args: LoaderFunctionArgs
): Promise<ArtifactsDetailsLoader> => {
  const { slug } = args.params as Params

  /** @todo get data from server */
  return {
    artifactsDetailsData: {
      slug: slug ?? '',
    },
  }
}

/** @todo meta tags */

export type ArtifactsDetailsLoader = {
  artifactsDetailsData: {
    slug: string
  }
}

export default function ArtifactsDetailsRoute() {
  const { artifactsDetailsData } = useLoaderData<ArtifactsDetailsLoader>()

  return <ArtifactsDetails artifactsDetailsData={artifactsDetailsData} />
}
