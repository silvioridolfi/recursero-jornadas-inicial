export function SiteFooter({ wide = false }: { wide?: boolean }) {
  return (
    <footer
      className="w-full py-3"
      style={{
        background: 'linear-gradient(115deg, #0B3B63 0%, #6F3976 45%, #D31C6B 78%, #F43F91 100%)',
      }}
    >
      <div
        className={`mx-auto flex flex-col items-center gap-1 px-4 ${wide ? 'max-w-6xl' : 'max-w-4xl'}`}
      >
        <img
          src="/images/logo-dte-header.svg"
          alt="Dirección de Tecnología Educativa | Gobierno de la Provincia de Buenos Aires"
          className="h-auto w-full max-w-[504px] object-contain sm:max-w-[672px]"
        />
        <p className="text-center text-[11px] text-white/80">
          © {new Date().getFullYear()} Dirección de Tecnología Educativa (DTE), Región 1 ·
          Desarrollado por Silvio Ridolfi, Facilitador de Educación Digital
        </p>
      </div>
    </footer>
  )
}
