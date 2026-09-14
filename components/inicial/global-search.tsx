'use client'

import { useMemo, useState, type ReactNode } from 'react'
import { InicialResourceCard } from '@/components/inicial/inicial-resource-card'
import { getCategoria } from '@/lib/inicial/categories'
import type { RecursoInicial } from '@/lib/inicial/types'

type Props = {
  recursos: RecursoInicial[]
  children: ReactNode
}

export function GlobalSearch({ recursos, children }: Props) {
  const [query, setQuery] = useState('')

  const resultados = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return recursos.filter((r) => {
      const haystack = [r.title, r.description, r.category, ...r.levels, ...r.areas, ...r.tags]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [recursos, query])

  const buscando = query.trim().length > 0

  return (
    <div className="flex flex-col gap-6">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <label htmlFor="buscador-global" className="sr-only">
          ¿Qué recurso estás buscando?
        </label>
        <input
          id="buscador-global"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="¿Qué recurso estás buscando? Ej: cuentos, programación, sala 5, música…"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
        />
      </div>

      {buscando ? (
        <section className="mx-auto w-full max-w-4xl px-6 pb-4 sm:px-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {resultados.length === 0
              ? 'Sin resultados'
              : `${resultados.length} resultado${resultados.length === 1 ? '' : 's'}`}
          </h2>

          {resultados.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-10 text-center">
              <p className="text-sm font-semibold text-foreground">
                Ningún recurso coincide con &ldquo;{query}&rdquo;.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Probá con otro término, o mirá las categorías más abajo.
              </p>
            </div>
          ) : (
            <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {resultados.map((r) => (
                <li key={r.id} className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {getCategoria(r.category)?.nombre}
                  </span>
                  <InicialResourceCard recurso={r} />
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        children
      )}
    </div>
  )
}
