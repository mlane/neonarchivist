import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Artifacts } from 'app/pages'

export type ArtifactsLoader = {
  artifactsData: {
    name: string
  }
}

export const loader: LoaderFunction = async (): Promise<ArtifactsLoader> => {
  /** @todo get data from server */
  return {
    artifactsData: {
      name: 'Artifacts',
    },
  }
}

/** @todo */
export const meta: MetaFunction = () => {
  return [
    {
      title: 'Artifacts',
    },
    /** @todo additional meta tags */
  ]
}

export default function ArtifactsRoute() {
  const { artifactsData } = useLoaderData<ArtifactsLoader>()

  return <Artifacts artifactsData={artifactsData} />
}
