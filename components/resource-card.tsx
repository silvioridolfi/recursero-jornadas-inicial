import type { Resource } from '@/lib/resources'

const ACCENT_STYLES: Record<
  Resource['accent'],
  { border: string; iconBg: string; iconText: string }
> = {
  magenta: {
    border: 'border-l-magenta',
    iconBg: 'bg-magenta/10',
    iconText: 'text-magenta',
  },
  cian: {
    border: 'border-l-cian',
    iconBg: 'bg-cian/10',
    iconText: 'text-cian',
  },
  azul: {
    border: 'border-l-azul',
    iconBg: 'bg-azul/10',
    iconText: 'text-azul',
  },
}

export function ResourceCard({ tag, title, href, accent, icon: Icon }: Resource) {
  const styles = ACCENT_STYLES[accent]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 rounded-md border border-border ${styles.border} border-l-4 bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azul sm:p-5`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${styles.iconBg} ${styles.iconText}`}
      >
        <Icon />
      </span>
      <span className="flex flex-1 flex-col gap-0.5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {tag}
        </span>
        <span className="text-base font-bold leading-snug text-pretty text-foreground">
          {title}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 text-lg text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground"
      >
        →
      </span>
    </a>
  )
}
