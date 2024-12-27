import { GlossaryDetailsLoader } from 'app/routes'

interface GlossaryDetailsProps {
  glossaryDetailsData: GlossaryDetailsLoader['glossaryDetailsData']
}

export const GlossaryDetails = ({
  glossaryDetailsData,
}: GlossaryDetailsProps) => {
  if (!glossaryDetailsData?.slug) return

  return <div>{glossaryDetailsData?.slug}</div>
}
