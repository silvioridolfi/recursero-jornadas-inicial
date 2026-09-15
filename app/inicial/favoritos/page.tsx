'use client'

import { useEffect, useState } from 'react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { InicialResourceCard } from '@/components/inicial/inicial-resource-card'
import { getFavoritos, FAVORITOS_EVENT } from '@/lib/inicial/favorites'
import { recursosIniciales } from '@/lib/inicial/resources'

export default function FavoritosPage() {
  const [ids, setIds] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIds(getFavoritos())
    const onChange = () => setIds(getFavoritos())
    window.addEventListener(FAVORITOS_EVENT, onChange)
    window.addEventListener('storage', onChange)
    return () => {
      window.removeEventListener(FAVORITOS_EVENT, onChange)
      window.removeEventListener('storage', onChange)
    }
  }, [])

  const recursos = recursosIniciales.filter((r) => ids.includes(r.id) && r.status === 'active')

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <SiteNav wide />
      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:px-8 sm:py-12">
        <h1 className="text-2xl font-black text-azul sm:text-3xl">Mis recursos</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Los recursos que guardes quedan en este navegador, en este dispositivo. No hace falta
          crear ninguna cuenta.
        </p>

        <div className="mt-8">
          {!mounted ? null : recursos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-10 text-center">
              <p className="text-sm font-semibold text-foreground">
                Todavía no guardaste ningún recurso.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tocá el corazón en cualquier tarjeta para guardarla acá.
              </p>
            </div>
          ) : (
            <ul role="list" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {recursos.map((r) => (
                <li key={r.id}>
                  <InicialResourceCard recurso={r} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <SiteFooter wide />
    </main>
  )
}
