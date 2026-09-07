import { useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

function currentPath(): string {
  const p = window.location.pathname
  const rel = p.startsWith(BASE) ? p.slice(BASE.length) : p
  return rel || '/'
}

export function usePath(): string {
  const [path, setPath] = useState(currentPath)
  useEffect(() => {
    const onPop = () => setPath(currentPath())
    window.addEventListener('popstate', onPop)
    window.addEventListener('bgp:navigate', onPop)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('bgp:navigate', onPop)
    }
  }, [])
  return path
}

export function navigate(to: string, replace = false) {
  const url = BASE + to
  if (replace) window.history.replaceState(null, '', url)
  else {
    window.history.pushState(null, '', url)
    window.scrollTo({ top: 0 })
  }
  window.dispatchEvent(new Event('bgp:navigate'))
}

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const { to, onClick, ...rest } = props
  return (
    <a
      href={BASE + to}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.button !== 0) return
        e.preventDefault()
        navigate(to)
      }}
      {...rest}
    />
  )
}
