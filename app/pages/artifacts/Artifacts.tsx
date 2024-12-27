import { ArtifactsLoader } from 'app/routes'

interface ArtifactsProps {
  artifactsData: ArtifactsLoader['artifactsData']
}

export const Artifacts = ({ artifactsData }: ArtifactsProps) => {
  if (!artifactsData?.name) return

  return <div>{artifactsData?.name}</div>
}
