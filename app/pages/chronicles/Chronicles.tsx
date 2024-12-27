import { ChroniclesLoader } from 'app/routes'

interface ChroniclesProps {
  chroniclesData: ChroniclesLoader['chroniclesData']
}

export const Chronicles = ({ chroniclesData }: ChroniclesProps) => {
  if (!chroniclesData?.name) return

  return <div>{chroniclesData?.name}</div>
}
