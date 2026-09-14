import { resourceCategories, resources } from '@/lib/resources'
import { ResourceCard } from '@/components/resource-card'

export function ResourceGrid() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-12">
      <div className="flex flex-col gap-10">
        {resourceCategories.map((category) => {
          const categoryResources = resources.filter((r) => r.category === category)
          if (categoryResources.length === 0) return null

          return (
            <section key={category} aria-labelledby={`heading-${category}`}>
              <h2
                id={`heading-${category}`}
                className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                {category}
              </h2>
              <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {categoryResources.map((resource) => (
                  <li key={resource.title}>
                    <ResourceCard {...resource} />
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}
