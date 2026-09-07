import { CATALOG, CATALOG_BY_SLUG, COMPLEXITY_LABEL, formatPlayers, formatTime, type GameMeta } from '../../shared/catalog.ts'
import { GameCard } from '../components/GameCard.tsx'
import { Badge, Complexity, Layout, Panel } from '../components/ui.tsx'
import { Link } from '../lib/router.tsx'

export function GameDetail({ slug }: { slug: string }) {
  const game = CATALOG_BY_SLUG[slug]
  if (!game) {
    return (
      <Layout>
        <p className="py-16 text-center text-slate-400">
          That game isn't in the catalog.{' '}
          <Link to="/" className="text-indigo-300 underline">
            Back to browse
          </Link>
        </p>
      </Layout>
    )
  }
  const similar = similarTo(game)
  return (
    <Layout>
      <Link to="/" className="mb-4 inline-block text-sm text-slate-400 hover:text-white">
        ← All games
      </Link>
      <div className={`card mb-4 flex flex-col gap-4 overflow-hidden bg-gradient-to-br ${game.gradient} p-6 md:flex-row md:items-center`}>
        <span className="text-7xl drop-shadow-lg">{game.emoji}</span>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{game.name}</h1>
          <p className="mt-1 text-lg text-white/85">{game.tagline}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {game.categories.map((c) => (
              <Link key={c} to={`/discover?cat=${encodeURIComponent(c)}`}>
                <Badge tone="slate">{c}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-4">
          <Panel>
            <h2 className="mb-2 font-semibold">About</h2>
            <p className="text-slate-300">{game.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {game.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Panel>
          <Panel>
            <h2 className="mb-3 font-semibold">Where to play</h2>
            <ul className="flex flex-col gap-2">
              {game.links.map((l, i) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className={`${i === 0 ? 'btn-primary' : 'btn-ghost'} w-full justify-between py-3`}>
                    <span>{l.label} ↗</span>
                    {l.note ? <span className="text-xs font-normal opacity-80">{l.note}</span> : null}
                  </a>
                </li>
              ))}
            </ul>
            {game.needsCall ? <p className="mt-3 text-xs text-slate-500">🎙 This game is much better with a voice or video call running alongside it.</p> : null}
          </Panel>
        </div>
        <Panel>
          <h2 className="mb-3 font-semibold">At a glance</h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
            <dt className="text-slate-400">Players</dt>
            <dd>{formatPlayers(game)}</dd>
            <dt className="text-slate-400">Best with</dt>
            <dd>{game.bestPlayers.length ? game.bestPlayers.join(', ') : '—'}</dd>
            <dt className="text-slate-400">Play time</dt>
            <dd>{formatTime(game)}</dd>
            <dt className="text-slate-400">Complexity</dt>
            <dd className="flex items-center gap-2">
              <Complexity level={game.complexity} /> {COMPLEXITY_LABEL[game.complexity]}
            </dd>
            <dt className="text-slate-400">Cost</dt>
            <dd className="capitalize">{game.price}</dd>
          </dl>
        </Panel>
      </div>

      {similar.length ? (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-bold">If you like this, try</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((g) => (
              <GameCard key={g.slug} game={g} />
            ))}
          </div>
        </section>
      ) : null}
    </Layout>
  )
}

function similarTo(game: GameMeta): GameMeta[] {
  return CATALOG.filter((g) => g.slug !== game.slug)
    .map((g) => {
      const shared = g.categories.filter((c) => game.categories.includes(c)).length * 2 + g.tags.filter((t) => game.tags.includes(t)).length
      return { g, score: shared - Math.abs(g.complexity - game.complexity) * 0.5 }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.g)
}
