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
        className="pointer-events-none absolute -bottom-8 right-16 h-16 w-16 rounded-full bg-celeste/30 blur-[1px] sm:right-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-48 h-4 w-4 rounded-full bg-rosa/50 sm:right-64"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 h-12 w-12 -translate-y-1/2 rotate-45 rounded-2xl border-[5px] border-white/20 sm:right-10 sm:h-16 sm:w-16"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-6 h-3 w-3 rounded-full bg-violeta/50"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8 sm:px-8 sm:py-12">
        <div className="flex items-center justify-between gap-4">
          <img
            src="/images/logo-dte-header.svg"
            alt="Dirección de Tecnología Educativa | Gobierno de la Provincia de Buenos Aires"
            className="h-8 w-auto object-contain sm:h-9"
          />
          <img
            src="/images/avatar-r1.jpg"
            alt="Región 1"
            className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-white/25 sm:h-12 sm:w-12"
          />
        </div>

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
