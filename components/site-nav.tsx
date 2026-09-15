import Link from 'next/link'

export function SiteNav({ wide = false }: { wide?: boolean }) {
  return (
    <div className="border-b border-border bg-secondary">
      <nav
        aria-label="Secciones del sitio"
        className={`mx-auto flex items-center justify-between gap-4 px-6 py-2.5 text-sm sm:px-8 ${wide ? 'max-w-6xl' : 'max-w-4xl'}`}
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
          {wide && (
            <Link
              href="/inicial/favoritos"
              className="font-medium text-foreground transition-colors hover:text-azul hover:underline"
            >
              Mis recursos
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
