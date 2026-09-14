import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { CategoryExplorer } from '@/components/inicial/category-explorer'
import { categorias, getCategoria } from '@/lib/inicial/categories'
import { getRecursosPorCategoria } from '@/lib/inicial/resources'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return categorias.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const categoria = getCategoria(slug)
  if (!categoria) return {}
  return {
    title: `${categoria.nombre} | Recursero Digital · Educación Inicial`,
    description: categoria.descripcion,
  }
}

export default async function CategoriaPage({ params }: { params: Params }) {
  const { slug } = await params
  const categoria = getCategoria(slug)
  if (!categoria) notFound()

  const recursos = getRecursosPorCategoria(categoria.slug)

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <SiteNav wide />
      <header
        className="relative isolate overflow-hidden"
        style={{
          background: 'linear-gradient(115deg, #0B3B63 0%, #6F3976 45%, #D31C6B 78%, #F43F91 100%)',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 right-10 h-3 w-3 rounded-full bg-celeste/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-24 top-8 h-2.5 w-2.5 rounded-full bg-white/30"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex items-start justify-between gap-4">
            <Link href="/inicial" className="w-fit text-sm font-semibold text-white/80 hover:text-white hover:underline">
              ← Recursero Digital
            </Link>
            <span className="shrink-0 rounded-full bg-magenta px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
              Educación Inicial
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-magenta text-white shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </span>
            <h1 className="text-balance text-2xl font-black leading-tight text-white sm:text-3xl">
              {categoria.nombre}
            </h1>
          </div>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
            {categoria.descripcion}
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:px-8 sm:py-12">
        {categoria.slug === 'pensamiento-computacional' && (
          <Link
            href="/"
            className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-azul/20 bg-azul/5 p-5 transition-colors hover:border-azul/40"
          >
            <span className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-wide text-azul">
                Jornadas de Pensamiento Computacional, Programación y Robótica
              </span>
              <span className="text-sm text-muted-foreground">
                Accedé al recursero específico de las jornadas
              </span>
            </span>
            <span aria-hidden="true" className="shrink-0 font-semibold text-azul">
              Ver jornadas →
            </span>
          </Link>
        )}

        <CategoryExplorer recursos={recursos} />
      </div>

      <SiteFooter wide />
    </main>
  )
}
