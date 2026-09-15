'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
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
  'min-h-[44px] rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul'

// Sincroniza los filtros con la URL (?q=&sala=&tipo=&costo=&origen=) usando
// la API nativa del navegador, sin next/navigation, para no requerir un
// límite de Suspense en páginas generadas estáticamente.
function useUrlParam(key: string) {
  const [value, setValue] = useState('')
  const hydrated = useRef(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setValue(params.get(key) ?? '')
    hydrated.current = true
  }, [key])

  useEffect(() => {
    if (!hydrated.current) return
    const params = new URLSearchParams(window.location.search)
    if (value) params.set(key, value)
    else params.delete(key)
    const query = params.toString()
    window.history.replaceState(null, '', query ? `?${query}` : window.location.pathname)
  }, [key, value])

  return [value, setValue] as const
}

export function CategoryExplorer({ recursos }: { recursos: RecursoInicial[] }) {
  const [query, setQuery] = useUrlParam('q')
  const [sala, setSala] = useUrlParam('sala')
  const [tipo, setTipo] = useUrlParam('tipo')
  const [costo, setCosto] = useUrlParam('costo')
  const [origen, setOrigen] = useUrlParam('origen')
  const [filtersOpen, setFiltersOpen] = useState(false)

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

  const filtrosSeleccionados = [sala, tipo, costo, origen].filter(Boolean).length
  const hayFiltrosActivos = Boolean(query || filtrosSeleccionados)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <label htmlFor="buscador-recursos" className="sr-only">
          ¿Qué recurso estás buscando?
        </label>
        <div className="flex gap-2">
          <input
            id="buscador-recursos"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="¿Qué recurso estás buscando?"
            className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
          />
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
            aria-controls="panel-filtros"
            className="flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-xl border border-border bg-card px-4 text-sm font-semibold text-foreground shadow-sm sm:hidden"
          >
            Filtros
            {filtrosSeleccionados > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-magenta text-[11px] font-bold text-white">
                {filtrosSeleccionados}
              </span>
            )}
          </button>
        </div>

        <fieldset
          id="panel-filtros"
          className={`${filtersOpen ? 'flex' : 'hidden'} flex-wrap gap-2 sm:flex`}
        >
          <legend className="sr-only">Filtros de búsqueda</legend>
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
              className="min-h-[44px] rounded-lg px-3 py-2.5 text-sm font-semibold text-azul hover:underline"
            >
              Limpiar filtros
            </button>
          )}
        </fieldset>
      </div>

      {hayFiltrosActivos && (
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {filtrados.length} de {recursos.length} recurso{recursos.length === 1 ? '' : 's'}
        </p>
      )}

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
        <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
