import { formatPlayers, formatTime, type GameMeta } from '../../shared/catalog.ts'
import { Link, navigate } from '../lib/router.tsx'
import { screenshotFor } from '../lib/screenshots.ts'

/** Netflix-style poster tile: 16:9 screenshot, title strip, hover reveals details + play. */
export function GameCard({ game, className = '' }: { game: GameMeta; className?: string }) {
  const primary = game.links[0]
  const shot = screenshotFor(game.slug)
  const href = `/games/${game.slug}`
  return (
    <article
      className={`group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 transition-[transform,box-shadow] duration-300 ease-out hover:z-10 hover:scale-[1.06] hover:shadow-2xl hover:shadow-black/60 hover:ring-white/40 focus-within:scale-[1.06] focus-within:ring-white/60 ${className}`}
      onClick={() => navigate(href)}
    >
      {shot ? (
        <img src={shot} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
      ) : (
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${game.gradient}`}>
          <span className="text-6xl drop-shadow-lg">{game.emoji}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5 opacity-90 transition group-hover:opacity-100" />

      {game.price !== 'free' ? (
        <span className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur">{game.price}</span>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-3">
        <Link to={href} className="text-base font-bold leading-tight drop-shadow md:text-lg" onClick={(e) => e.stopPropagation()}>
          {game.emoji} {game.name}
        </Link>
        <p className="text-xs text-slate-300/90 drop-shadow">
          👥 {formatPlayers(game)} · ⏱ {formatTime(game)}
          {game.bestPlayers.length ? ` · ★ ${game.bestPlayers.join('/')}` : ''}
        </p>
        <div className="hidden max-h-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:pt-1 group-hover:opacity-100 focus-within:max-h-12 focus-within:opacity-100 md:flex">
          <a
            href={primary.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-primary flex-1 py-1.5 text-xs"
          >
            ▶ Play
          </a>
          <Link to={href} onClick={(e) => e.stopPropagation()} className="btn-ghost px-3 py-1.5 text-xs">
            Info
          </Link>
        </div>
      </div>
    </article>
  )
}
