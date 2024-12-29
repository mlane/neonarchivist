import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Artifacts } from 'app/pages'

export const loader: LoaderFunction = async (): Promise<ArtifactsLoader> => {
  /** @todo get data from server */
  return {
    artifactsData: {
      name: 'Artifacts',
    },
  }
}

/** @todo meta tags */

export type ArtifactsLoader = {
  artifactsData: {
    name: string
  }
}

export default function ArtifactsRoute() {
  const { artifactsData } = useLoaderData<ArtifactsLoader>()

  return <Artifacts artifactsData={artifactsData} />
}
