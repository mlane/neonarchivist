import { GlossaryLoader } from 'app/routes'

interface GlossaryProps {
  glossaryData: GlossaryLoader['glossaryData']
}

export const Glossary = ({ glossaryData }: GlossaryProps) => {
  if (!glossaryData?.name) return

  return <div>{glossaryData?.name}</div>
}
