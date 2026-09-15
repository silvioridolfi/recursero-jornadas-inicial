import type { RecursoInicial } from '@/lib/inicial/types'

/** Minúsculas y sin tildes/diacríticos, para que "computacion" encuentre "Computación". */
export function normalize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

/** Todo el texto de un recurso relevante para la búsqueda libre. */
export function buildHaystack(r: RecursoInicial): string {
  return normalize(
    [
      r.title,
      r.description,
      r.category,
      r.type,
      r.modality ?? '',
      ...r.levels,
      ...r.areas,
      ...(r.areasCurriculares ?? []),
      ...(r.lenguajesArtisticos ?? []),
      ...(r.approaches ?? []),
      ...(r.computationalConcepts ?? []),
      ...(r.pedagogicalUses ?? []),
      ...(r.devices ?? []),
      ...r.tags,
    ].join(' '),
  )
}

export function matchesQuery(r: RecursoInicial, query: string): boolean {
  const q = normalize(query.trim())
  if (!q) return true
  return buildHaystack(r).includes(q)
}

export type FiltrosRecurso = {
  sala?: string
  tipo?: string
  costo?: string
  origen?: string
  areaCurricular?: string
  enfoque?: string
  modalidad?: string
  conectividad?: string
}

export function matchesFiltros(r: RecursoInicial, f: FiltrosRecurso): boolean {
  if (f.sala && !r.levels.includes(f.sala as RecursoInicial['levels'][number])) return false
  if (f.tipo && r.type !== f.tipo) return false
  if (f.costo && r.pricing !== f.costo) return false
  if (f.origen && r.provider !== f.origen) return false
  if (f.areaCurricular && !(r.areasCurriculares ?? []).includes(f.areaCurricular as never))
    return false
  if (f.enfoque && !(r.approaches ?? []).includes(f.enfoque as never)) return false
  if (f.modalidad && r.modality !== f.modalidad) return false
  if (f.conectividad && r.connectivity !== f.conectividad) return false
  return true
}
