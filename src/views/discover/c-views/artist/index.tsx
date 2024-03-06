import { memo } from 'react'

interface ArtistProps {
  children?: React.ReactNode
}

const Artist: React.FC<ArtistProps> = memo(() => {
  return <div>Artist</div>
})

Artist.displayName = 'Artist'

export default Artist
