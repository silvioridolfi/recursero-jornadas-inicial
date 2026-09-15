import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <SiteNav wide />

      <div className="relative isolate flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center sm:px-8">
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
          className="pointer-events-none absolute -bottom-10 left-10 h-20 w-20 rounded-full bg-celeste/30 blur-[1px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-10 top-10 h-16 w-16 rotate-45 rounded-2xl border-[5px] border-white/20 sm:h-20 sm:w-20"
        />

        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-3xl font-black text-white">
          ?
        </span>
        <h1 className="mt-6 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
          Esta página no existe
        </h1>
        <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-white/85 sm:text-base">
          Puede que el enlace esté mal escrito o que el contenido se haya movido. Probá desde
          alguno de estos puntos de partida.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/inicial"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-azul shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Recursero Digital · Inicial
          </Link>
          <Link
            href="/"
            className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5"
          >
            Jornadas
          </Link>
        </div>
      </div>

      <SiteFooter wide />
    </main>
  )
}
