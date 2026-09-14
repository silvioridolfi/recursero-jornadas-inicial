export function SiteHeader() {
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, #0B3B63 0%, #6F3976 45%, #D31C6B 78%, #F43F91 100%)',
        }}
        role="presentation"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-10 h-10 w-10 rounded-full bg-celeste/40 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-28 h-4 w-4 rounded-full bg-rosa/60"
      />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-3 px-6 py-6 sm:px-8 sm:py-7">
        <img
          src="/images/logo-dte-header.png"
          alt="Dirección de Tecnología Educativa | Gobierno de la Provincia de Buenos Aires"
          className="h-8 w-auto object-contain sm:h-9"
        />
        <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          Recursero · Jornadas de Pensamiento Computacional, Programación y Robótica
        </span>
      </div>
    </header>
  )
}
