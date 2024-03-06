import { memo } from 'react'

interface FocusProps {
  children?: React.ReactNode
}

const Focus: React.FC<FocusProps> = memo(() => {
  return <div>Focus</div>
})

Focus.displayName = 'Focus'

export default Focus
