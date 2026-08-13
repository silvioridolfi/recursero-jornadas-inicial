import { resources } from '@/lib/resources'
import { ResourceCard } from '@/components/resource-card'

export function ResourceGrid() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10 sm:px-8 sm:py-12">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {resources.map((resource) => (
          <li key={resource.title}>
            <ResourceCard {...resource} />
          </li>
        ))}
      </ul>
    </div>
  )
}
