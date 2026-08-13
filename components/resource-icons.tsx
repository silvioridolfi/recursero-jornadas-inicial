import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function TabletIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <rect x="5" y="2.5" width="14" height="19" rx="2" />
      <circle cx="12" cy="18" r="0.9" fill="currentColor" stroke="none" />
      <line x1="8" y1="5" x2="16" y2="5" />
    </svg>
  )
}

export function FolderIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M3 6.5c0-.83.67-1.5 1.5-1.5h4.4c.4 0 .78.16 1.06.44l1.1 1.1c.28.28.66.44 1.06.44H19.5c.83 0 1.5.67 1.5 1.5v9.02c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5V6.5Z" />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M6.5 2.75h7.4L18 7.15v13.1a1 1 0 0 1-1 1h-10.5a1 1 0 0 1-1-1V3.75a1 1 0 0 1 1-1Z" />
      <path d="M13.5 2.75V7h4.5" />
      <line x1="7.75" y1="12" x2="14.25" y2="12" />
      <line x1="7.75" y1="15.5" x2="14.25" y2="15.5" />
    </svg>
  )
}

export function MonitorIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <line x1="8" y1="20.5" x2="16" y2="20.5" />
      <line x1="12" y1="17" x2="12" y2="20.5" />
    </svg>
  )
}
