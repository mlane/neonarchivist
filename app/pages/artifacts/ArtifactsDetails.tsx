import { ArtifactsDetailsLoader } from 'app/routes'

interface ArtifactsDetailsProps {
  artifactsDetailsData: ArtifactsDetailsLoader['artifactsDetailsData']
}

export const ArtifactsDetails = ({
  artifactsDetailsData,
}: ArtifactsDetailsProps) => {
  if (!artifactsDetailsData?.slug) return

  return <div>{artifactsDetailsData?.slug}</div>
}
