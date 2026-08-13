export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-sm font-bold text-foreground">Dirección de Tecnología Educativa</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Región 1 · Dirección General de Cultura y Educación
          </p>
        </div>
        <img
          src="/logo-pba.png"
          alt="Gobierno de la Provincia de Buenos Aires"
          className="h-[26px] w-auto object-contain"
        />
      </div>
    </footer>
  )
}
