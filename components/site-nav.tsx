import Link from 'next/link'

export function SiteNav() {
  return (
    <div className="border-b border-border bg-secondary">
      <nav
        aria-label="Secciones del sitio"
        className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-2.5 text-sm sm:px-8"
      >
        <span className="hidden font-semibold text-muted-foreground sm:inline">
          DTE · Región 1
        </span>
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="font-medium text-foreground transition-colors hover:text-azul hover:underline"
          >
            Jornadas
          </Link>
          <Link
            href="/inicial"
            className="font-medium text-foreground transition-colors hover:text-azul hover:underline"
          >
            Recursero Digital · Inicial
          </Link>
        </div>
      </nav>
    </div>
  )
}
