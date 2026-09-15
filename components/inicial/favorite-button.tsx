'use client'

import { useEffect, useState } from 'react'
import { isFavorito, toggleFavorito, FAVORITOS_EVENT } from '@/lib/inicial/favorites'

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  </svg>
)

export function FavoriteButton({ id, withLabel = false }: { id: string; withLabel?: boolean }) {
  const [fav, setFav] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setFav(isFavorito(id))
    const onChange = () => setFav(isFavorito(id))
    window.addEventListener(FAVORITOS_EVENT, onChange)
    window.addEventListener('storage', onChange)
    return () => {
      window.removeEventListener(FAVORITOS_EVENT, onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [id])

  if (!mounted) {
    // Evita el flash de "no guardado" durante la hidratación.
    return <span className="inline-block h-9 w-9" aria-hidden="true" />
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setFav(toggleFavorito(id))
      }}
      aria-pressed={fav}
      aria-label={fav ? 'Quitar de guardados' : 'Guardar recurso'}
      className={`relative z-10 flex min-h-[36px] items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold transition-colors ${
        fav ? 'bg-magenta/10 text-magenta' : 'text-muted-foreground hover:text-magenta'
      }`}
      title={fav ? 'Quitar de guardados' : 'Guardar recurso'}
    >
      <HeartIcon filled={fav} />
      {withLabel && <span>{fav ? 'Guardado' : 'Guardar'}</span>}
    </button>
  )
}
