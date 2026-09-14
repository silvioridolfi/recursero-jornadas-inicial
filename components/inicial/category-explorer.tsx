'use client'

import { useMemo, useState } from 'react'
import { InicialResourceCard } from '@/components/inicial/inicial-resource-card'
import type { RecursoInicial, Sala, TipoRecurso, Costo, Origen } from '@/lib/inicial/types'

const SALAS: Sala[] = ['Sala 2', 'Sala 3', 'Sala 4', 'Sala 5', 'Docentes']
const TIPOS: TipoRecurso[] = [
  'Sitio web',
  'App',
  'Software',
  'Juego',
  'Video',
  'Documento',
  'Colección',
  'Material docente',
  'Interactivo',
  'Libro electrónico',
]
const COSTOS: Costo[] = ['Gratuito', 'Freemium', 'Pago']
const ORIGENES: Origen[] = [
  'Provincia de Buenos Aires',
  'Nación',
  'Institución educativa',
  'Otro',
]

const selectClass =
  'rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul'

export function CategoryExplorer({ recursos }: { recursos: RecursoInicial[] }) {
  const [query, setQuery] = useState('')
  const [sala, setSala] = useState('')
  const [tipo, setTipo] = useState('')
  const [costo, setCosto] = useState('')
  const [origen, setOrigen] = useState('')

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase()
    return recursos.filter((r) => {
      if (sala && !r.levels.includes(sala as Sala)) return false
      if (tipo && r.type !== tipo) return false
      if (costo && r.pricing !== costo) return false
      if (origen && r.provider !== origen) return false
      if (!q) return true
      const haystack = [r.title, r.description, r.category, ...r.levels, ...r.areas, ...r.tags]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [recursos, query, sala, tipo, costo, origen])

  const hayFiltrosActivos = Boolean(query || sala || tipo || costo || origen)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <label htmlFor="buscador-recursos" className="sr-only">
          ¿Qué recurso estás buscando?
        </label>
        <input
          id="buscador-recursos"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="¿Qué recurso estás buscando?"
          className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
        />

        <div className="flex flex-wrap gap-2">
          <select
            aria-label="Filtrar por sala"
            value={sala}
            onChange={(e) => setSala(e.target.value)}
            className={selectClass}
          >
            <option value="">Todas las salas</option>
            {SALAS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <select
            aria-label="Filtrar por tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className={selectClass}
          >
            <option value="">Todos los tipos</option>
            {TIPOS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            aria-label="Filtrar por costo"
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
            className={selectClass}
          >
            <option value="">Cualquier costo</option>
            {COSTOS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            aria-label="Filtrar por origen"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
            className={selectClass}
          >
            <option value="">Cualquier origen</option>
            {ORIGENES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>

          {hayFiltrosActivos && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setSala('')
                setTipo('')
                setCosto('')
                setOrigen('')
              }}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-azul hover:underline"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {filtrados.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-10 text-center">
          <p className="text-sm font-semibold text-foreground">
            {recursos.length === 0
              ? 'Todavía no hay recursos cargados en esta categoría.'
              : 'Ningún recurso coincide con la búsqueda o los filtros.'}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {recursos.length === 0
              ? 'Estamos validando las URLs oficiales antes de publicarlos.'
              : 'Probá con otros términos o limpiá los filtros.'}
          </p>
        </div>
      ) : (
        <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((r) => (
            <li key={r.id}>
              <InicialResourceCard recurso={r} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
