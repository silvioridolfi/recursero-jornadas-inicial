'use client'

import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      // Umbral relativo: la mitad de lo que se puede scrollear en esta
      // página puntual, con un techo de 200px. Así funciona igual en
      // páginas cortas vistas en pantallas altas (tablet) que en páginas
      // largas, en vez de depender de un número de píxeles fijo.
      const threshold = Math.min(200, maxScroll * 0.5)
      setVisible(maxScroll > 60 && window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom) + 1rem)' }}
      className="fixed right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-transform hover:-translate-y-0.5 hover:border-azul/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul sm:right-8"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="m6 11 6-6 6 6" />
      </svg>
    </button>
  )
}
