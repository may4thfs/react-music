import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import { useAppSelector } from './store'

function App() {
  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }))

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">Discover</Link>
        <Link to="/mine">Mine</Link>
        <Link to="/focus">Focus</Link>
        <Link to="/download">Download</Link>
      </div>
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
