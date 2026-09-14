import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { InicialHeader } from '@/components/inicial/inicial-header'
import { CategoryCard } from '@/components/inicial/category-card'
import { InicialResourceCard } from '@/components/inicial/inicial-resource-card'
import { SiteFooter } from '@/components/site-footer'
import { categorias } from '@/lib/inicial/categories'
import { contarRecursosPorCategoria, getRecursosDestacados } from '@/lib/inicial/resources'

export const metadata: Metadata = {
  title: 'Recursero Digital · Educación Inicial | DTE Región 1',
  description:
    'Una selección de sitios, aplicaciones, materiales y propuestas para acompañar la enseñanza en el Nivel Inicial. Dirección de Tecnología Educativa, Región 1.',
}

export default function InicialPage() {
  const destacados = getRecursosDestacados()

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <InicialHeader />

      <div className="mx-auto max-w-4xl px-6 pb-2 pt-10 sm:px-8 sm:pt-12">
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Una selección de sitios, aplicaciones, materiales y propuestas para acompañar la
          enseñanza en el Nivel Inicial.
        </p>
      </div>

      {destacados.length > 0 && (
        <section className="mx-auto w-full max-w-4xl px-6 pt-10 sm:px-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Recursos destacados
          </h2>
          <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((r) => (
              <li key={r.id}>
                <InicialResourceCard recurso={r} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section id="categorias" className="mx-auto w-full max-w-4xl px-6 py-10 sm:px-8 sm:py-12">
        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Categorías
        </h2>
        <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categorias.map((categoria) => (
            <li key={categoria.slug}>
              <CategoryCard categoria={categoria} count={contarRecursosPorCategoria(categoria.slug)} />
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  )
}
