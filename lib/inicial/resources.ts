import type { RecursoInicial, CategoriaSlug } from '@/lib/inicial/types'

// Todavía sin recursos cargados: se están validando las URLs oficiales
// categoría por categoría antes de publicarlas (ver Fase 4 del plan).
export const recursosIniciales: RecursoInicial[] = []

export function getRecursosPorCategoria(slug: CategoriaSlug) {
  return recursosIniciales.filter((r) => r.category === slug && r.status === 'active')
}

export function getRecursosDestacados() {
  return recursosIniciales.filter((r) => r.featured && r.status === 'active')
}

export function contarRecursosPorCategoria(slug: CategoriaSlug) {
  return recursosIniciales.filter((r) => r.category === slug && r.status === 'active').length
}
