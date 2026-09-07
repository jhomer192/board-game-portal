import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { GameMeta } from '../../shared/catalog.ts'
import { GameCard } from './GameCard.tsx'

/** Collapsible, horizontally scrolling shelf of tiles with edge-fade, arrows and a scroll hint. */
export function Row({ title, subtitle, games, action }: { title: string; subtitle?: string; games: GameMeta[]; action?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(true)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el || !open) return
    const update = () => {
      setCanLeft(el.scrollLeft > 4)
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [open, games])

  if (!games.length) return null
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section className="group/row relative">
      <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between gap-3 px-4 pb-2 md:px-8">
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="flex min-w-0 items-center gap-2 text-left">
          <span className={`inline-block text-xs text-slate-500 transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
          <div className="min-w-0">
            <h2 className="text-lg font-bold tracking-tight md:text-xl">
              {title} <span className="ml-1 text-sm font-medium text-slate-500">{games.length}</span>
            </h2>
            {subtitle && open ? <p className="text-xs text-slate-400">{subtitle}</p> : null}
          </div>
        </button>
        <div className="flex shrink-0 items-center gap-3">
          {open && canRight ? (
            <span className="text-xs text-slate-400">
              <span className="md:hidden">swipe →</span>
              <span className="hidden md:inline">scroll for more →</span>
            </span>
          ) : null}
          {action}
        </div>
      </div>
      {open ? (
        <div className="relative">
          <div ref={ref} className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 py-4 md:scroll-px-8 md:px-8 lg:px-[max(2rem,calc((100vw-1600px)/2+2rem))]">
            {games.map((g) => (
              <GameCard key={g.slug} game={g} className="w-[68vw] shrink-0 snap-start sm:w-[44vw] md:w-[30vw] lg:w-[22vw] xl:w-[300px]" />
            ))}
          </div>
          {canLeft ? (
            <>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0b0b10] to-transparent md:hidden" />
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scroll(-1)}
                className="absolute inset-y-0 left-0 hidden w-14 items-center justify-center bg-gradient-to-r from-[#0b0b10] to-transparent text-3xl text-white/70 transition hover:text-white md:flex"
              >
                ‹
              </button>
            </>
          ) : null}
          {canRight ? (
            <>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0b0b10] to-transparent md:hidden" />
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scroll(1)}
                className="absolute inset-y-0 right-0 hidden w-14 items-center justify-center bg-gradient-to-l from-[#0b0b10] to-transparent text-3xl text-white/70 transition hover:text-white md:flex"
              >
                ›
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}
