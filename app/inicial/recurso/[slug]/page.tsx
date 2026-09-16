import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { FavoriteButton } from '@/components/inicial/favorite-button'
import { ShareButton } from '@/components/inicial/share-button'
import { ExternalLinkIcon } from '@/components/resource-icons'
import { getCategoria } from '@/lib/inicial/categories'
import { recursosIniciales, getRecursoPorSlug } from '@/lib/inicial/resources'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return recursosIniciales
    .filter((r) => r.status === 'active')
    .map((r) => ({ slug: r.slug ?? r.id }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const recurso = getRecursoPorSlug(slug)
  if (!recurso) return {}
  const title = `${recurso.title} | Recursero Digital · Educación Inicial`
  return {
    title,
    description: recurso.description,
    openGraph: {
      title,
      description: recurso.description,
      url: `/inicial/recurso/${slug}`,
      siteName: 'Recursero Digital DTE',
      locale: 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: recurso.description,
    },
  }
}

function Bloque({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5 border-t border-border py-4 first:border-t-0 first:pt-0">
      <h2 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
        {titulo}
      </h2>
      <div className="text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  )
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-secondary px-2.5 py-1 text-xs text-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default async function RecursoPage({ params }: { params: Params }) {
  const { slug } = await params
  const recurso = getRecursoPorSlug(slug)
  if (!recurso) notFound()

  const categoria = getCategoria(recurso.category)
  const url =
    (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://recurserodigitaldte.vercel.app') +
    `/inicial/recurso/${slug}`

  const requisitos: string[] = []
  if (recurso.connectivity) requisitos.push(recurso.connectivity)
  if (recurso.devices?.length) requisitos.push(recurso.devices.join(', '))
  if (recurso.requiresAccount) requisitos.push(recurso.requiresAccount)
  if (recurso.requiresInstallation !== undefined) {
    requisitos.push(recurso.requiresInstallation ? 'Requiere instalación' : 'No requiere instalación')
  }

  const verificadoTexto = new Date(`${recurso.verifiedAt}T00:00:00`).toLocaleDateString('es-AR', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <SiteNav wide />

      <header
        className="relative isolate overflow-hidden"
        style={{
          background: 'linear-gradient(115deg, #0B3B63 0%, #6F3976 45%, #D31C6B 78%, #F43F91 100%)',
        }}
      >
        <div className="relative mx-auto flex max-w-4xl flex-col gap-4 px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex items-start justify-between gap-4">
            <Link
              href={categoria ? `/inicial/categoria/${categoria.slug}` : '/inicial'}
              className="w-fit text-sm font-semibold text-white/80 hover:text-white hover:underline"
            >
              ← {categoria?.nombre ?? 'Recursero Digital'}
            </Link>
            <div className="flex shrink-0 items-center gap-2">
              {recurso.official && (
                <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  {recurso.provider === 'Provincia de Buenos Aires' ? 'Oficial PBA' : 'Oficial'}
                </span>
              )}
            </div>
          </div>

          <h1 className="text-balance text-2xl font-black leading-tight text-white sm:text-3xl">
            {recurso.title}
          </h1>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-white/90 sm:text-base">
            {recurso.description}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href={recurso.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 text-sm font-bold text-azul shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Abrir recurso
              <ExternalLinkIcon className="text-current" />
            </a>
            <ShareButton title={recurso.title} url={url} />
            <FavoriteButton id={recurso.id} withLabel />
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-8 sm:px-8">
        <Bloque titulo="¿Para quién?">
          <Chips items={recurso.levels} />
        </Bloque>

        {(recurso.areasCurriculares?.length ?? 0) > 0 && (
          <Bloque titulo="Áreas">
            <Chips items={recurso.areasCurriculares!} />
            {recurso.lenguajesArtisticos?.length ? (
              <p className="mt-2 text-xs text-muted-foreground">
                Educación Artística: {recurso.lenguajesArtisticos.join(' · ')}
              </p>
            ) : null}
          </Bloque>
        )}

        {(recurso.approaches?.length ?? 0) > 0 && (
          <Bloque titulo="Enfoques">
            <Chips items={recurso.approaches!} />
          </Bloque>
        )}

        {(recurso.computationalConcepts?.length ?? 0) > 0 && (
          <Bloque titulo="Conceptos de Ciencias de la Computación">
            <Chips items={recurso.computationalConcepts!} />
          </Bloque>
        )}

        {(recurso.pedagogicalUses?.length ?? 0) > 0 && (
          <Bloque titulo="¿Para qué puedo usarlo?">
            <ul className="flex flex-col gap-1.5">
              {recurso.pedagogicalUses!.map((uso) => (
                <li key={uso} className="flex gap-2">
                  <span aria-hidden="true" className="text-magenta">•</span>
                  {uso}
                </li>
              ))}
            </ul>
          </Bloque>
        )}

        {recurso.modality && (
          <Bloque titulo="Modalidad">
            <Chips items={[recurso.modality]} />
          </Bloque>
        )}

        {requisitos.length > 0 && (
          <Bloque titulo="Requisitos">
            <Chips items={requisitos} />
          </Bloque>
        )}

        {(recurso.accessibility?.length ?? 0) > 0 && (
          <Bloque titulo="Accesibilidad">
            <Chips items={recurso.accessibility!} />
          </Bloque>
        )}

        {(recurso.privacyNotes?.length ?? 0) > 0 && (
          <Bloque titulo="Cuidado y privacidad">
            <ul className="flex flex-col gap-1.5">
              {recurso.privacyNotes!.map((nota) => (
                <li key={nota} className="flex gap-2">
                  <span aria-hidden="true" className="text-azul">•</span>
                  {nota}
                </li>
              ))}
            </ul>
          </Bloque>
        )}

        <Bloque titulo="Origen">
          {recurso.provider}
          {recurso.official && ' · Recurso oficial'}
        </Bloque>

        <Bloque titulo="Verificación">
          {recurso.verificationStatus && recurso.verificationStatus !== 'Activo' ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rosa/15 px-2.5 py-1 text-xs font-semibold text-magenta">
              {recurso.verificationStatus === 'Revisar'
                ? '⚠ A revisar'
                : '⚠ Enlace no disponible'}
            </span>
          ) : (
            <span className="text-muted-foreground">Verificado: {verificadoTexto}</span>
          )}
        </Bloque>

        <div className="mt-4">
          <a
            href={recurso.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] w-fit items-center gap-2 rounded-lg bg-azul px-6 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Abrir recurso
            <ExternalLinkIcon className="text-current" />
          </a>
        </div>
      </div>

      <SiteFooter wide />
    </main>
  )
}
