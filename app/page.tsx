import { SiteNav } from '@/components/site-nav'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ResourceGrid } from '@/components/resource-grid'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-md"
      >
        Saltar al contenido
      </a>
      <main className="flex min-h-screen flex-col bg-background">
        <SiteNav />
        <SiteHeader />
        <div id="contenido" className="flex flex-1 flex-col">
          <Hero />
          <ResourceGrid />
        </div>
        <SiteFooter />
      </main>
    </>
  )
}
