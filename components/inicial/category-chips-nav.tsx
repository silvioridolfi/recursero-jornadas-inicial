'use client'

import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import type { Categoria } from '@/lib/inicial/types'

const STORAGE_KEY = 'inicial-chips-scroll'

export function CategoryChipsNav({
  categorias,
  activeSlug,
}: {
  categorias: Pick<Categoria, 'slug' | 'nombre'>[]
  activeSlug: string
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  // Restaura la posición horizontal desde donde quedó la última vez, en
  // vez de arrancar siempre desde el principio en cada navegación.
  useLayoutEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) {
      el.scrollLeft = Number(saved)
    }

    const activeChip = el.querySelector<HTMLElement>('[data-active="true"]')
    const rect = activeChip?.getBoundingClientRect()
    const scrollerRect = el.getBoundingClientRect()
    // Si a pesar de restaurar el scroll el chip activo queda tapado
    // (categoría nueva, o el guardado no lo cubre), lo centramos.
    if (activeChip && rect && (rect.left < scrollerRect.left || rect.right > scrollerRect.right)) {
      activeChip.scrollIntoView({ block: 'nearest', inline: 'center' })
    }

    const onScroll = () => sessionStorage.setItem(STORAGE_KEY, String(el.scrollLeft))
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav aria-label="Otras categorías" className="border-b border-border bg-secondary">
      <div
        ref={scrollerRef}
        className="mx-auto flex max-w-6xl flex-nowrap gap-2 overflow-x-auto px-6 py-3 sm:flex-wrap sm:overflow-visible sm:px-8"
      >
        {categorias.map((c) => (
          <Link
            key={c.slug}
            href={`/inicial/categoria/${c.slug}`}
            aria-current={c.slug === activeSlug ? 'page' : undefined}
            data-active={c.slug === activeSlug}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
              c.slug === activeSlug
                ? 'bg-azul text-white'
                : 'bg-card text-muted-foreground hover:text-foreground'
            }`}
          >
            {c.nombre}
          </Link>
        ))}
      </div>
    </nav>
  )
}
