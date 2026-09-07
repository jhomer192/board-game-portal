import type { ReactNode } from 'react'
import { Link, usePath } from '../lib/router.tsx'

export function Layout({ children, fullBleed = false }: { children: ReactNode; fullBleed?: boolean }) {
  const path = usePath()
  const nav = [
    { to: '/', label: 'Browse' },
    { to: '/discover', label: 'Discover' },
  ]
  return (
    <div className="flex min-h-dvh w-full flex-col pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <header className="sticky top-0 z-40 bg-[#0b0b10]/70 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur-md">
        <div className="mx-auto flex h-14 w-full max-w-[1600px] items-center gap-4 px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-lg font-black tracking-tight">
            <span className="text-2xl">🎲</span>
            <span className="hidden sm:inline">Tabletop</span>
          </Link>
          <nav className="flex gap-4 text-sm">
            {nav.map((n) => {
              const active = n.to === '/' ? path === '/' || path.startsWith('/games') : path.startsWith(n.to)
              return (
                <Link key={n.to} to={n.to} className={`font-medium transition ${active ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                  {n.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>
      <main className={`flex-1 ${fullBleed ? '' : 'mx-auto w-full max-w-[1600px] px-4 md:px-8'}`}>{children}</main>
      <footer className="mt-12 text-center text-xs text-slate-500">
        Links go to third-party sites. Most work best alongside a voice or video call. Built by{' '}
        <a href="https://jackhomer.com/" className="text-slate-300 hover:text-white">Jack Homer</a>.
      </footer>
    </div>
  )
}

export function Badge({ children, tone = 'slate', title }: { children: ReactNode; tone?: 'slate' | 'red' | 'blue' | 'green' | 'amber' | 'violet'; title?: string }) {
  const tones = {
    slate: 'bg-white/10 text-slate-200',
    red: 'bg-rose-500/20 text-rose-300',
    blue: 'bg-sky-500/20 text-sky-300',
    green: 'bg-emerald-500/20 text-emerald-300',
    amber: 'bg-amber-500/20 text-amber-300',
    violet: 'bg-violet-500/20 text-violet-300',
  }
  return (
    <span title={title} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm capitalize transition ${active ? 'border-white bg-white text-black' : 'border-white/15 bg-white/[0.04] text-slate-300 hover:border-white/40 hover:text-white'}`}
    >
      {children}
    </button>
  )
}

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`card p-4 md:p-5 ${className}`}>{children}</section>
}

export function Complexity({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Complexity ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`h-1.5 w-3 rounded-full ${i <= level ? 'bg-white' : 'bg-white/20'}`} />
      ))}
    </span>
  )
}
