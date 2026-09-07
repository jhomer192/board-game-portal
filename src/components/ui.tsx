import type { ReactNode } from 'react'
import { Link, usePath } from '../lib/router.tsx'

export function Layout({ children }: { children: ReactNode }) {
  const path = usePath()
  const nav = [
    { to: '/', label: 'Browse' },
    { to: '/discover', label: 'Discover' },
  ]
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))]">
      <header className="mb-5 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="text-2xl">🎲</span>
          <span>Tabletop Portal</span>
        </Link>
        <nav className="ml-auto flex gap-1 rounded-xl bg-slate-900 p-1 ring-1 ring-slate-800">
          {nav.map((n) => {
            const active = n.to === '/' ? path === '/' || path.startsWith('/games') : path.startsWith(n.to)
            return (
              <Link key={n.to} to={n.to} className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${active ? 'bg-indigo-500 text-white' : 'text-slate-300 hover:text-white'}`}>
                {n.label}
              </Link>
            )
          })}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-10 text-center text-xs text-slate-500">
        Links go to third-party sites. Most work best alongside a voice or video call.
      </footer>
    </div>
  )
}

export function Badge({ children, tone = 'slate', title }: { children: ReactNode; tone?: 'slate' | 'red' | 'blue' | 'green' | 'amber' | 'violet'; title?: string }) {
  const tones = {
    slate: 'bg-slate-800 text-slate-300',
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
      className={`rounded-full px-3 py-1.5 text-sm capitalize transition ${active ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
    >
      {children}
    </button>
  )
}

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`card p-4 ${className}`}>{children}</section>
}

export function Complexity({ level }: { level: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Complexity ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`h-2 w-2 rounded-full ${i <= level ? 'bg-indigo-400' : 'bg-slate-700'}`} />
      ))}
    </span>
  )
}
