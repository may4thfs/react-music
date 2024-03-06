import { memo } from 'react'

interface SongsProps {
  children?: React.ReactNode
}

const Songs: React.FC<SongsProps> = memo(() => {
  return <div>Songs</div>
})

Songs.displayName = 'Songs'

export default Songs
