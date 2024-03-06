import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">Discover</Link>
        <Link to="/mine">Mine</Link>
        <Link to="/focus">Focus</Link>
        <Link to="/download">Download</Link>
      </div>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
