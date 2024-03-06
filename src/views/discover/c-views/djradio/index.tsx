import { memo } from 'react'

interface DjradioProps {
  children?: React.ReactNode
}

const Djradio: React.FC<DjradioProps> = memo(() => {
  return <div>Djradio</div>
})

Djradio.displayName = 'Djradio'

export default Djradio
