import { memo } from 'react'

interface RankingProps {
  children?: React.ReactNode
}

const Ranking: React.FC<RankingProps> = memo(() => {
  return <div>Ranking</div>
})

Ranking.displayName = 'Ranking'

export default Ranking
