import { ChroniclesDetailsLoader } from 'app/routes'

interface ChroniclesDetailsProps {
  chroniclesDetailsData: ChroniclesDetailsLoader['chroniclesDetailsData']
}

export const ChroniclesDetails = ({
  chroniclesDetailsData,
}: ChroniclesDetailsProps) => {
  if (!chroniclesDetailsData?.slug) return

  return <div>{chroniclesDetailsData?.slug}</div>
}
