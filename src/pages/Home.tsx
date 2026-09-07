import { useMemo, useState } from 'react'
import { ALL_CATEGORIES, CATALOG, CATEGORY_INFO, EMPTY_FILTERS, searchCatalog, type Filters } from '../../shared/catalog.ts'
import { GameCard } from '../components/GameCard.tsx'
import { Chip, Layout } from '../components/ui.tsx'
import { Link } from '../lib/router.tsx'

export function Home() {
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setFilters((f) => ({ ...f, [k]: v }))
  const results = useMemo(() => searchCatalog(filters), [filters])
  const active = filters.category || filters.players !== null || filters.maxTime !== null || filters.maxComplexity !== null || filters.freeOnly || filters.query

  return (
    <Layout>
      <section className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Every board game you can play online, in one place.</h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          {CATALOG.length} games with player counts, play time and complexity — each linking straight to the best place to play it in your browser.{' '}
          <Link to="/discover" className="text-indigo-300 underline-offset-2 hover:underline">
            Not sure what to play? Try Discover →
          </Link>
        </p>
      </section>

      <section className="mb-5 flex flex-col gap-3">
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
        <div className="flex flex-wrap items-center gap-2">
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
          <label className="flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 ring-1 ring-slate-700">
            <input type="checkbox" checked={filters.freeOnly} onChange={(e) => set('freeOnly', e.target.checked)} className="accent-indigo-500" />
            Free only
          </label>
          {active ? (
            <button className="ml-auto text-xs text-slate-400 hover:text-white" onClick={() => setFilters(EMPTY_FILTERS)}>
              Clear filters
            </button>
          ) : null}
        </div>
      </section>

      <p className="mb-3 text-sm text-slate-500">
        {results.length} {results.length === 1 ? 'game' : 'games'}
      </p>
      {results.length === 0 ? (
        <p className="py-16 text-center text-slate-400">No games match — try loosening a filter.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      )}
    </Layout>
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
