import { memo } from 'react'

interface AlbumProps {
  children?: React.ReactNode
}

const Album: React.FC<AlbumProps> = memo(() => {
  return <div>Album</div>
})

Album.displayName = 'Album'

export default Album
