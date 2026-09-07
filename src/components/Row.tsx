import { useRef, type ReactNode } from 'react'
import type { GameMeta } from '../../shared/catalog.ts'
import { GameCard } from './GameCard.tsx'

/** Horizontally scrolling shelf of tiles with edge-fade and desktop arrows. */
export function Row({ title, subtitle, games, action }: { title: string; subtitle?: string; games: GameMeta[]; action?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  if (!games.length) return null
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <section className="group/row relative">
      <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between gap-3 px-4 pb-2 md:px-8">
        <div>
          <h2 className="text-lg font-bold tracking-tight md:text-xl">{title}</h2>
          {subtitle ? <p className="text-xs text-slate-400">{subtitle}</p> : null}
        </div>
        {action}
      </div>
      <div className="relative">
        <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 py-4 md:scroll-px-8 md:px-8 lg:px-[max(2rem,calc((100vw-1600px)/2+2rem))]">
          {games.map((g) => (
            <GameCard key={g.slug} game={g} className="w-[68vw] shrink-0 snap-start sm:w-[44vw] md:w-[30vw] lg:w-[22vw] xl:w-[300px]" />
          ))}
        </div>
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className="absolute inset-y-0 left-0 hidden w-12 items-center justify-center bg-gradient-to-r from-[#0b0b10] to-transparent text-2xl opacity-0 transition group-hover/row:opacity-100 md:flex"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className="absolute inset-y-0 right-0 hidden w-12 items-center justify-center bg-gradient-to-l from-[#0b0b10] to-transparent text-2xl opacity-0 transition group-hover/row:opacity-100 md:flex"
        >
          ›
        </button>
      </div>
    </section>
  )
}
