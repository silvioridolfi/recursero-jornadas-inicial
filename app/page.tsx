import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ResourceGrid } from '@/components/resource-grid'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <Hero />
      <ResourceGrid />
      <SiteFooter />
    </main>
  )
}
