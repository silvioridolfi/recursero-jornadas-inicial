'use client'

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { InicialResourceCard } from '@/components/inicial/inicial-resource-card'
import { getCategoria } from '@/lib/inicial/categories'
import { matchesFiltros, matchesQuery } from '@/lib/inicial/search'
import type {
  RecursoInicial,
  Sala,
  AreaCurricular,
  Enfoque,
  Modalidad,
  Conectividad,
} from '@/lib/inicial/types'

const SALAS: Sala[] = ['Sala 2', 'Sala 3', 'Sala 4', 'Sala 5', 'Docentes']
const AREAS_CURRICULARES: AreaCurricular[] = [
  'Formación personal y social',
  'Prácticas del lenguaje',
  'Matemática',
  'Ambiente social y natural',
  'Juego',
  'Educación Artística',
  'Educación Física',
  'Educación Digital',
]
const ENFOQUES: Enfoque[] = [
  'Educación Digital',
  'Ciencias de la Computación',
  'Pensamiento computacional',
  'Programación',
  'Robótica',
  'Cultura digital',
  'Multialfabetización',
  'Ciudadanía digital',
  'Creación y producción digital',
  'Inclusión y accesibilidad',
  'ESI',
  'Educación Ambiental Integral (EAI)',
  'Interculturalidad',
]
const MODALIDADES: Modalidad[] = ['Digital', 'Analógica', 'Mixta']
const CONECTIVIDADES: Conectividad[] = [
  'Requiere internet',
  'Funciona sin internet',
  'Tiene modalidad offline',
  'Parcialmente offline',
]

const selectClass =
  'min-h-[44px] rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul'

type Props = {
  recursos: RecursoInicial[]
  children: ReactNode
}

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
    const search = params.toString()
    window.history.replaceState(null, '', search ? `?${search}` : window.location.pathname)
  }, [key, value])

  return [value, setValue] as const
}

export function GlobalSearch({ recursos, children }: Props) {
  const [query, setQuery] = useUrlParam('q')
  const [sala, setSala] = useUrlParam('sala')
  const [areaCurricular, setAreaCurricular] = useUrlParam('area')
  const [enfoque, setEnfoque] = useUrlParam('enfoque')
  const [modalidad, setModalidad] = useUrlParam('modalidad')
  const [conectividad, setConectividad] = useUrlParam('conectividad')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtros = { sala, areaCurricular, enfoque, modalidad, conectividad }
  const filtrosSeleccionados = [sala, areaCurricular, enfoque, modalidad, conectividad].filter(
    Boolean,
  ).length
  const hayFiltrosActivos = Boolean(query.trim() || filtrosSeleccionados)

  const resultados = useMemo(() => {
    if (!hayFiltrosActivos) return []
    return recursos.filter((r) => matchesFiltros(r, filtros) && matchesQuery(r, query))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recursos, query, sala, areaCurricular, enfoque, modalidad, conectividad, hayFiltrosActivos])

  return (
    <div className="flex flex-col gap-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 sm:px-8">
        <label htmlFor="buscador-global" className="sr-only">
          ¿Qué recurso estás buscando?
        </label>
        <div className="flex gap-2">
          <input
            id="buscador-global"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="¿Qué recurso estás buscando? Ej: cuentos, programación, sala 5, música…"
            className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
          />
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
            aria-controls="panel-filtros-global"
            className="flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-xl border border-border bg-card px-4 text-sm font-semibold text-foreground shadow-sm sm:hidden"
          >
            Explorar por
            {filtrosSeleccionados > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-magenta text-[11px] font-bold text-white">
                {filtrosSeleccionados}
              </span>
            )}
          </button>
        </div>

        <fieldset
          id="panel-filtros-global"
          className={`${filtersOpen ? 'flex' : 'hidden'} flex-wrap gap-2 sm:flex`}
        >
          <legend className="w-full text-xs font-bold uppercase tracking-wider text-muted-foreground sm:mb-1">
            Explorar por
          </legend>
          <select aria-label="Filtrar por sala" value={sala} onChange={(e) => setSala(e.target.value)} className={selectClass}>
            <option value="">Salas</option>
            {SALAS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            aria-label="Filtrar por área curricular"
            value={areaCurricular}
            onChange={(e) => setAreaCurricular(e.target.value)}
            className={selectClass}
          >
            <option value="">Áreas</option>
            {AREAS_CURRICULARES.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <select
            aria-label="Filtrar por enfoque"
            value={enfoque}
            onChange={(e) => setEnfoque(e.target.value)}
            className={selectClass}
          >
            <option value="">Enfoques</option>
            {ENFOQUES.map((e2) => <option key={e2} value={e2}>{e2}</option>)}
          </select>
          <select
            aria-label="Filtrar por modalidad"
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
            className={selectClass}
          >
            <option value="">Modalidad</option>
            {MODALIDADES.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <select
            aria-label="Filtrar por conectividad"
            value={conectividad}
            onChange={(e) => setConectividad(e.target.value)}
            className={selectClass}
          >
            <option value="">Sin internet</option>
            {CONECTIVIDADES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {hayFiltrosActivos && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setSala('')
                setAreaCurricular('')
                setEnfoque('')
                setModalidad('')
                setConectividad('')
              }}
              className="min-h-[44px] rounded-lg px-3 py-2.5 text-sm font-semibold text-azul hover:underline"
            >
              Limpiar
            </button>
          )}
        </fieldset>
      </div>

      {hayFiltrosActivos ? (
        <section className="mx-auto w-full max-w-6xl px-6 pb-4 sm:px-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {resultados.length === 0
              ? 'Sin resultados'
              : `${resultados.length} resultado${resultados.length === 1 ? '' : 's'}`}
          </h2>

          {resultados.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-10 text-center">
              <p className="text-sm font-semibold text-foreground">
                Ningún recurso coincide con la búsqueda o los filtros.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Probá con otro término, o mirá las categorías más abajo.
              </p>
            </div>
          ) : (
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
