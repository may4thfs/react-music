import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface DiscoverProps {
  children?: React.ReactNode
}

const Discover: React.FC<DiscoverProps> = memo(() => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
})

Discover.displayName = 'Discover'

export default Discover
