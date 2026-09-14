export function InicialHeader() {
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-16 h-16 w-16 rounded-full bg-celeste/30 blur-[1px] sm:right-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-1/2 h-12 w-12 -translate-y-1/2 rotate-45 rounded-2xl border-[5px] border-white/20 sm:right-10 sm:h-16 sm:w-16"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:px-8 sm:py-12">
        <img
          src="/images/avatar-r1.jpg"
          alt="Región 1"
          className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-white/25 sm:h-12 sm:w-12"
        />

        <div className="flex flex-col gap-3">
          <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            DTE Región 1 · Provincia de Buenos Aires
          </span>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-magenta text-white shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </span>
            <h1 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Recursero Digital
            </h1>
          </div>
          <p className="text-lg font-semibold text-white/90 sm:text-xl">Educación Inicial</p>
        </div>
      </div>
    </header>
  )
}
