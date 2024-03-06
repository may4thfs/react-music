import { memo } from 'react'

interface MineProps {
  children?: React.ReactNode
}

const Mine: React.FC<MineProps> = memo(() => {
  return <div>Mine</div>
})

Mine.displayName = 'Mine'

export default Mine
