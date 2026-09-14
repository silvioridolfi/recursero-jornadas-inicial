export function SiteFooter({ wide = false }: { wide?: boolean }) {
  return (
    <footer className="border-t border-border bg-secondary">
      <div
        className={`mx-auto flex justify-center px-6 py-10 sm:px-8 sm:py-12 ${wide ? 'max-w-6xl' : 'max-w-4xl'}`}
      >
        <img
          src="/images/logo-dte-footer.png"
          alt="Dirección de Tecnología Educativa | Gobierno de la Provincia de Buenos Aires"
          className="h-auto w-auto max-w-full object-contain max-h-20 sm:max-h-28 md:max-h-36 lg:max-h-44"
        />
      </div>
    </footer>
  )
}
