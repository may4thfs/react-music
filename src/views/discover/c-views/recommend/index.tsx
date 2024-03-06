import { memo } from 'react'

interface RecommendProps {
  children?: React.ReactNode
}

const Recommend: React.FC<RecommendProps> = memo(() => {
  return <div>Recommend</div>
})

Recommend.displayName = 'Recommend'

export default Recommend
