export function SiteHeader() {
  return (
    <>
      <div
        className="h-2.5 w-full"
        style={{
          background: 'linear-gradient(115deg, #E81F76 0%, #417099 52%, #00AEC3 100%)',
        }}
        role="presentation"
      />
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-2">
            <img
              src="/logo-pba.png"
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] shrink-0 object-contain"
            />
            <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              DTE | Recursero | Jornadas de Pensamiento Computacional, Programación y Robótica
            </span>
          </div>
          <img
            src="/logo-pba.png"
            alt="Gobierno de la Provincia de Buenos Aires"
            className="h-10 w-auto object-contain"
          />
        </div>
      </header>
    </>
  )
}
