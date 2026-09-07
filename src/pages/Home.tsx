import { useMemo, useState, type ReactNode } from 'react'
import { ALL_CATEGORIES, CATALOG, CATEGORY_INFO, COMPLEXITY_LABEL, EMPTY_FILTERS, formatPlayers, formatTime, searchCatalog, type Filters, type GameMeta } from '../../shared/catalog.ts'
import { Row } from '../components/Row.tsx'
import { Chip, Layout } from '../components/ui.tsx'
import { Link } from '../lib/router.tsx'
import { screenshotFor } from '../lib/screenshots.ts'

/** Game of the day: a different catalog game every local calendar day, same for everyone. */
export function gameOfTheDay(date = new Date()): GameMeta {
  const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  let h = 2166136261
  for (const ch of key) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0
  const pool = CATALOG.filter((g) => !!screenshotFor(g.slug))
  return pool[h % pool.length] ?? CATALOG[0]
}

export function Home() {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setFilters((f) => ({ ...f, [k]: v }))
  const results = useMemo(() => searchCatalog(filters), [filters])
  const active = !!(filters.category || filters.players !== null || filters.maxTime !== null || filters.maxComplexity !== null || filters.freeOnly || filters.query)
  const featured = useMemo(() => gameOfTheDay(), [])

  // Shelves are built from the filtered results so search/chips/selects narrow every list.
  // By category: each game appears once, under its primary (first-listed) category.
  const byCategory = useMemo(
    () =>
      ALL_CATEGORIES.map((c) => ({
        title: `${CATEGORY_INFO[c].emoji} ${c[0].toUpperCase()}${c.slice(1)}`,
        subtitle: CATEGORY_INFO[c].blurb,
        games: results.filter((g) => g.categories[0] === c),
      })),
    [results],
  )
  const byGroupSize = useMemo(() => GROUP_SIZES.map((b) => ({ title: `👥 ${b.title}`, subtitle: b.subtitle, games: results.filter((g) => fitsGroup(g, b)) })), [results])

  return (
    <Layout fullBleed>
      {!active ? <Hero game={featured} /> : null}

      <section className={`mx-auto w-full max-w-[1600px] px-4 md:px-8 ${active ? "pt-6" : "-mt-6 relative z-10"}`}>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
            <input
              className="input pl-11"
              placeholder="Search — try “bluffing”, “two player”, “codenames”…"
              value={filters.query}
              onChange={(e) => set('query', e.target.value)}
              aria-label="Search games"
              type="search"
            />
          </div>
          <div className="no-scrollbar -mx-4 flex items-center gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
            <Chip active={filters.category === null} onClick={() => set('category', null)}>
              All
            </Chip>
            {ALL_CATEGORIES.map((c) => (
              <Chip key={c} active={filters.category === c} onClick={() => set('category', filters.category === c ? null : c)}>
                {CATEGORY_INFO[c].emoji} {c}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Select label="Players" value={filters.players} onChange={(v) => set('players', v)} options={Array.from({ length: 11 }, (_, i) => [i + 2, `${i + 2}`] as const)} />
            <Select
              label="Time"
              value={filters.maxTime}
              onChange={(v) => set('maxTime', v)}
              options={[
                [15, '≤ 15 min'],
                [30, '≤ 30 min'],
                [60, '≤ 1 hour'],
                [120, '≤ 2 hours'],
              ]}
            />
            <Select
              label="Complexity"
              value={filters.maxComplexity}
              onChange={(v) => set('maxComplexity', v)}
              options={[
                [1, 'Light only'],
                [2, 'Up to easy'],
                [3, 'Up to medium'],
                [4, 'Up to heavy'],
              ]}
            />
            <label className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-3 py-2 ring-1 ring-white/10">
              <input type="checkbox" checked={filters.freeOnly} onChange={(e) => set('freeOnly', e.target.checked)} className="accent-white" />
              Free only
            </label>
            {active ? (
              <button className="ml-auto text-xs text-slate-400 hover:text-white" onClick={() => setFilters(EMPTY_FILTERS)}>
                Clear filters
              </button>
            ) : null}
          </div>
        </div>
      </section>

      {results.length === 0 ? (
        <p className="py-16 text-center text-slate-400">No games match — try loosening a filter.</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          <Collapsible title="By category" count={results.length}>
            {byCategory.map((r) => (
              <Row key={r.title} {...r} />
            ))}
          </Collapsible>
          <Collapsible title="By group size" count={results.length}>
            {byGroupSize.map((r) => (
              <Row key={r.title} {...r} />
            ))}
          </Collapsible>
        </div>
      )}
    </Layout>
  )
}

const GROUP_SIZES = [
  { title: 'Just 2', subtitle: 'Head-to-head', min: 2, max: 2 },
  { title: '3–4 players', subtitle: 'A small table', min: 3, max: 4 },
  { title: '5–6 players', subtitle: 'The sweet spot for most games', min: 5, max: 6 },
  { title: '7–8 players', subtitle: 'A full room', min: 7, max: 8 },
  { title: '9+ players', subtitle: 'The whole party', min: 9, max: 99 },
]

/** A game belongs to a bucket if any of its recommended counts fall in it (falling back to its supported range). */
function fitsGroup(g: GameMeta, b: { min: number; max: number }): boolean {
  if (g.bestPlayers.length) return g.bestPlayers.some((n) => n >= b.min && n <= b.max)
  return g.minPlayers <= b.max && g.maxPlayers >= b.min
}

function Collapsible({ title, count, children }: { title: string; count: number; children: ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <section>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mx-auto flex w-full max-w-[1600px] items-center gap-3 px-4 py-3 text-left md:px-8"
      >
        <span className={`inline-block text-slate-400 transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">{title}</h2>
        <span className="text-sm text-slate-500">{count} {count === 1 ? "game" : "games"}</span>
      </button>
      {open ? <div className="flex flex-col gap-6 pt-2">{children}</div> : null}
    </section>
  )
}

function Hero({ game }: { game: GameMeta }) {
  const shot = screenshotFor(game.slug)
  const primary = game.links[0]
  return (
    <section className="relative -mt-[calc(3.5rem+max(0.5rem,env(safe-area-inset-top)))] min-h-[70vh] w-full overflow-hidden md:min-h-[78vh]">
      {shot ? (
        <img src={shot} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b10] via-[#0b0b10]/70 to-[#0b0b10]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/80 to-[#0b0b10]/20 md:via-[#0b0b10]/30 md:to-transparent" />
      <div className="animate-fade-up relative mx-auto flex h-full min-h-[70vh] w-full max-w-[1600px] flex-col justify-end gap-4 px-4 pb-16 pt-32 md:min-h-[78vh] md:px-8 md:pb-24">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">✦ Game of the day · {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })} · {CATALOG.length} games to play online</span>
        <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight drop-shadow-lg md:text-6xl lg:text-7xl">
          {game.emoji} {game.name}
        </h1>
        <p className="max-w-xl text-base text-slate-200 drop-shadow md:text-lg">{game.tagline}</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-300">
          <span>👥 {formatPlayers(game)}</span>
          <span>⏱ {formatTime(game)}</span>
          <span>🧠 {COMPLEXITY_LABEL[game.complexity]}</span>
          <span className="capitalize">{game.categories.join(' · ')}</span>
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <a href={primary.url} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3 text-base">
            ▶ Play on {primary.label}
          </a>
          <Link to={`/games/${game.slug}`} className="btn-ghost px-6 py-3 text-base">
            ⓘ More info
          </Link>
          <Link to="/discover" className="btn-ghost px-6 py-3 text-base">
            🎲 Discover
          </Link>
        </div>
      </div>
    </section>
  )
}

function Select({ label, value, onChange, options }: { label: string; value: number | null; onChange: (v: number | null) => void; options: readonly (readonly [number, string])[] }) {
  return (
    <label className="flex items-center gap-2 text-slate-400">
      {label}
      <select className="input w-auto py-1.5" value={value ?? ''} onChange={(e) => onChange(e.target.value ? Number(e.target.value) : null)} aria-label={label}>
        <option value="">Any</option>
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
    </label>
  )
}
