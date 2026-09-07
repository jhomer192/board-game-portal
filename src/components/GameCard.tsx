import { COMPLEXITY_LABEL, formatPlayers, formatTime, type GameMeta } from '../../shared/catalog.ts'
import { Link } from '../lib/router.tsx'
import { Badge, Complexity } from './ui.tsx'

export function GameCard({ game }: { game: GameMeta }) {
  const primary = game.links[0]
  return (
    <article className="card group flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:ring-indigo-500/60">
      <Link to={`/games/${game.slug}`} className={`relative flex h-28 items-center justify-center bg-gradient-to-br ${game.gradient} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400`}>
        <span className="text-6xl drop-shadow-lg transition group-hover:scale-110">{game.emoji}</span>
        <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">
          👥 {formatPlayers(game)}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-xs font-medium text-white backdrop-blur">⏱ {formatTime(game)}</span>
        {game.price !== 'free' ? (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
            {game.price}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/games/${game.slug}`} className="text-lg font-bold leading-tight hover:text-indigo-200">
            {game.name}
          </Link>
          <span className="mt-1 shrink-0" title={`${COMPLEXITY_LABEL[game.complexity]} complexity`}>
            <Complexity level={game.complexity} />
          </span>
        </div>
        <p className="text-sm text-slate-300">{game.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {game.categories.map((c) => (
            <Badge key={c} tone="violet">
              {c}
            </Badge>
          ))}
          {game.bestPlayers.length ? <Badge title="Best player count">★ best at {game.bestPlayers.join(', ')}</Badge> : null}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <a href={primary.url} target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 py-2 text-sm">
            Play on {primary.label} ↗
          </a>
          {game.links.length > 1 ? (
            <Link to={`/games/${game.slug}`} className="btn-ghost px-3 py-2 text-sm" title="More ways to play">
              +{game.links.length - 1}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
