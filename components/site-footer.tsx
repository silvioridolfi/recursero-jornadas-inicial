import { lastVerifiedDate } from '@/lib/resources'

const formattedVerifiedDate = new Date(`${lastVerifiedDate}T00:00:00`).toLocaleDateString(
  'es-AR',
  { day: 'numeric', month: 'long', year: 'numeric' },
)

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-sm font-bold text-foreground">Dirección de Tecnología Educativa</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Región 1 · Dirección General de Cultura y Educación
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Enlaces verificados el {formattedVerifiedDate}
          </p>
        </div>
        <img
          src="/images/logo-dte-footer.png"
          alt="Dirección de Tecnología Educativa | Gobierno de la Provincia de Buenos Aires"
          className="h-[26px] w-auto object-contain"
        />
      </div>
    </footer>
  )
}
