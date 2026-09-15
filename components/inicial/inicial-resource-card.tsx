import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/resource-icons'
import { FavoriteButton } from '@/components/inicial/favorite-button'
import type { RecursoInicial } from '@/lib/inicial/types'

const formatFecha = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export function InicialResourceCard({ recurso }: { recurso: RecursoInicial }) {
  const slug = recurso.slug ?? recurso.id

  return (
    <div className="group relative flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-azul/30">
      <div className="flex flex-wrap items-center gap-2">
        {recurso.official && (
          <span className="rounded-full bg-magenta/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-magenta">
            {recurso.provider === 'Provincia de Buenos Aires' ? 'Oficial PBA' : 'Oficial'}
          </span>
        )}
        {recurso.featured && !recurso.official && (
          <span className="rounded-full bg-azul/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-azul">
            Recomendado
          </span>
        )}
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {recurso.type}
        </span>
        <div className="ml-auto flex items-center gap-1">
          <FavoriteButton id={recurso.id} />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Link
          href={`/inicial/recurso/${slug}`}
          className="text-base font-bold leading-snug text-foreground after:absolute after:inset-0 hover:underline"
        >
          {recurso.title}
        </Link>
        <span className="text-sm leading-relaxed text-muted-foreground">
          {recurso.description}
        </span>
      </div>

      {recurso.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {recurso.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-muted-foreground">
        <span>
          {recurso.levels.join(', ')} · {recurso.pricing}
        </span>
        <span>Verificado · {formatFecha(recurso.verifiedAt)}</span>
      </div>

      <a
        href={recurso.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary text-sm font-semibold text-foreground transition-colors hover:border-azul/40 hover:text-azul"
      >
        Abrir recurso
        <ExternalLinkIcon className="text-current" />
      </a>
    </div>
  )
}
