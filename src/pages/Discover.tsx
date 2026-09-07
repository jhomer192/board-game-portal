import { useMemo, useState } from 'react'
import { ALL_CATEGORIES, CATALOG, CATEGORY_INFO, type Category, type GameMeta } from '../../shared/catalog.ts'
import { GameCard } from '../components/GameCard.tsx'
import { Chip, Layout, Panel } from '../components/ui.tsx'

type Vibe = 'quick' | 'evening' | 'deep'
const VIBES: Record<Vibe, { label: string; hint: string; ok: (g: GameMeta) => boolean }> = {
  quick: { label: '⚡ Quick', hint: 'Under 20 minutes', ok: (g) => g.minMinutes <= 20 },
  evening: { label: '🌙 Game night', hint: '20–60 minutes', ok: (g) => g.maxMinutes >= 20 && g.minMinutes <= 60 },
  deep: { label: '🧠 Deep dive', hint: 'An hour or more', ok: (g) => g.maxMinutes >= 60 },
}

function shuffle<T>(xs: T[], seed: number): T[] {
  const a = [...xs]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) % 4294967296
    const j = s % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function Discover() {
  const [cats, setCats] = useState<Set<Category>>(() => {
    const c = new URLSearchParams(window.location.search).get('cat')
    return new Set(ALL_CATEGORIES.filter((x) => x === c))
  })
  const [players, setPlayers] = useState<number | null>(null)
  const [vibe, setVibe] = useState<Vibe | null>(null)
  const [seed, setSeed] = useState(() => Date.now())

  const toggle = (c: Category) =>
    setCats((s) => {
      const n = new Set(s)
      if (n.has(c)) n.delete(c)
      else n.add(c)
      return n
    })

  const matches = useMemo(
    () =>
      CATALOG.filter((g) => {
        if (cats.size && !g.categories.some((c) => cats.has(c))) return false
        if (players !== null && (players < g.minPlayers || players > g.maxPlayers)) return false
        if (vibe && !VIBES[vibe].ok(g)) return false
        return true
      }),
    [cats, players, vibe],
  )
  const picks = useMemo(() => {
    const ranked = shuffle(matches, seed)
    if (players === null) return ranked.slice(0, 6)
    return [...ranked.filter((g) => g.bestPlayers.includes(players)), ...ranked.filter((g) => !g.bestPlayers.includes(players))].slice(0, 6)
  }, [matches, players, seed])

  return (
    <Layout>
      <section className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Discover something new</h1>
        <p className="mt-2 max-w-2xl text-slate-400">Pick a category or two, tell us how many of you there are, and we'll suggest games you might not have tried.</p>
      </section>

      <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <div className="flex flex-col gap-4">
          <Panel>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">1. What kind of game?</h2>
            <div className="flex flex-col gap-1.5">
              {ALL_CATEGORIES.map((c) => {
                const info = CATEGORY_INFO[c]
                const on = cats.has(c)
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(c)}
                    className={`flex items-start gap-3 rounded-xl px-3 py-2 text-left transition ${on ? 'bg-indigo-500/20 ring-1 ring-indigo-400' : 'hover:bg-slate-800'}`}
                  >
                    <span className="text-xl">{info.emoji}</span>
                    <span>
                      <span className="block font-medium capitalize">{c}</span>
                      <span className="block text-xs text-slate-400">{info.blurb}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </Panel>
          <Panel>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">2. How many players?</h2>
            <div className="flex flex-wrap gap-1.5">
              {[2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                <Chip key={n} active={players === n} onClick={() => setPlayers(players === n ? null : n)}>
                  {n}
                  {n === 12 ? '+' : ''}
                </Chip>
              ))}
            </div>
          </Panel>
          <Panel>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">3. How long have you got?</h2>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(VIBES) as Vibe[]).map((v) => (
                <Chip key={v} active={vibe === v} onClick={() => setVibe(vibe === v ? null : v)}>
                  {VIBES[v].label}
                </Chip>
              ))}
            </div>
            {vibe ? <p className="mt-2 text-xs text-slate-500">{VIBES[vibe].hint}</p> : null}
          </Panel>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm text-slate-400">
              {matches.length === 0 ? 'Nothing fits those picks yet.' : `Showing ${picks.length} of ${matches.length} matching games`}
              {players !== null && matches.length ? ' — best-at-your-count first.' : ''}
            </p>
            <button className="btn-ghost px-3 py-1.5 text-sm" onClick={() => setSeed(Date.now())} disabled={matches.length <= picks.length}>
              🎲 Shuffle
            </button>
          </div>
          {picks.length === 0 ? (
            <p className="py-16 text-center text-slate-400">Try fewer categories or a different player count.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {picks.map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
