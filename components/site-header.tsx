export function SiteHeader() {
  return (
    <header className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(115deg, #0B3B63 0%, #6F3976 45%, #D31C6B 78%, #F43F91 100%)',
        }}
        role="presentation"
      />

      {/* Formas decorativas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-12 h-16 w-16 rounded-full bg-celeste/40 blur-[1px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-40 h-5 w-5 rounded-full bg-rosa/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-24 h-14 w-14 rotate-45 rounded-2xl border-[5px] border-magenta/60 sm:right-16 sm:top-16 sm:h-20 sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-24 h-3 w-3 rounded-full bg-violeta/50"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8 sm:px-8 sm:py-12">
        <img
          src="/images/logo-dte-header.png"
          alt="Dirección de Tecnología Educativa | Gobierno de la Provincia de Buenos Aires"
          className="h-8 w-auto object-contain sm:h-9"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Pensamiento Computacional, Programación y Robótica en Nivel Inicial
          </h1>
          <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Recursero · Jornadas de Pensamiento Computacional, Programación y Robótica
          </span>
        </div>
      </div>
    </header>
  )
}
