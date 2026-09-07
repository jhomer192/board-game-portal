import { useEffect, useState } from 'react'

export function usePath(): string {
  const [path, setPath] = useState(() => window.location.pathname)
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
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
  if (replace) window.history.replaceState(null, '', to)
  else window.history.pushState(null, '', to)
  window.dispatchEvent(new Event('bgp:navigate'))
}

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const { to, onClick, ...rest } = props
  return (
    <a
      href={to}
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
