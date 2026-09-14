import Link from 'next/link'
import type { Categoria } from '@/lib/inicial/types'

type Props = {
  categoria: Categoria
  count: number
}

export function CategoryCard({ categoria, count }: Props) {
  const Icon = categoria.icon

  return (
    <Link
      href={`/inicial/categoria/${categoria.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-azul/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-azul/10 text-azul">
        <Icon />
      </span>
      <span className="flex flex-col gap-1">
        <span className="text-base font-bold leading-snug text-foreground">
          {categoria.nombre}
        </span>
        <span className="text-sm leading-relaxed text-muted-foreground">
          {categoria.descripcion}
        </span>
      </span>
      <span className="mt-1 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {count === 0 ? 'Próximamente' : `${count} recurso${count === 1 ? '' : 's'}`}
        </span>
        <span
          aria-hidden="true"
          className="font-semibold text-azul transition-transform duration-200 group-hover:translate-x-1"
        >
          Explorar →
        </span>
      </span>
    </Link>
  )
}
