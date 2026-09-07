import { useEffect } from 'react'
import { usePath } from './lib/router.tsx'
import { Discover } from './pages/Discover.tsx'
import { GameDetail } from './pages/GameDetail.tsx'
import { Home } from './pages/Home.tsx'

export default function App() {
  const path = usePath()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  if (path.startsWith('/discover')) return <Discover key={window.location.search} />
  const game = path.match(/^\/games\/([^/]+)\/?$/)
  if (game) return <GameDetail slug={decodeURIComponent(game[1])} />
  return <Home />
}
