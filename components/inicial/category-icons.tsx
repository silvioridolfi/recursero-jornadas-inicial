import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Recursos oficiales */
export function BadgeCheckIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.75 14.2 4h2.6l1.3 2.25 2.25 1.3V10l1.25 2.2-1.25 2.2v2.45l-2.25 1.3L16.8 20.4h-2.6L12 21.65 9.8 20.4H7.2l-1.3-2.25-2.25-1.3v-2.45L2.4 12.2l1.25-2.2V7.55l2.25-1.3L7.2 4h2.6Z" />
      <path d="m8.75 12.25 2.1 2.1 4.4-4.5" />
    </svg>
  )
}

/** Educación Digital */
export function LaptopIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <rect x="4" y="4.5" width="16" height="10.5" rx="1.4" />
      <path d="M2.25 19.25h19.5" />
      <path d="M9.5 19.25 10.5 15h3l1 4.25" />
    </svg>
  )
}

/** Pensamiento Computacional, Programación y Robótica */
export function RobotIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <rect x="4.5" y="8.5" width="15" height="11" rx="2.2" />
      <path d="M12 8.5V5" />
      <circle cx="12" cy="3.3" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="8.75" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15.25" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
      <path d="M8.5 17.5h7" />
      <path d="M2.5 12v3" />
      <path d="M21.5 12v3" />
    </svg>
  )
}

/** Literatura y cuentos */
export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M12 6.2c-1.4-1.1-3.4-1.7-5.7-1.7-.9 0-1.55.67-1.55 1.5v11.3c0 .9.7 1.5 1.55 1.4 2.2-.25 4.2.3 5.7 1.55" />
      <path d="M12 6.2c1.4-1.1 3.4-1.7 5.7-1.7.9 0 1.55.67 1.55 1.5v11.3c0 .9-.7 1.5-1.55 1.4-2.2-.25-4.2.3-5.7 1.55Z" />
      <path d="M12 6.2v12.3" />
    </svg>
  )
}

/** Arte y creatividad */
export function PaletteIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3.25c-4.97 0-9 3.7-9 8.25 0 3.66 2.9 5.6 5.1 5.6.85 0 1.35-.5 1.35-1.2 0-.32-.13-.6-.33-.86-.2-.27-.33-.55-.33-.9 0-.72.6-1.3 1.35-1.3h2.1c2.98 0 5.76-2.24 5.76-5.34 0-2.45-2.6-4.25-6-4.25Z" />
      <circle cx="8.3" cy="10.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="7.6" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.3" cy="9" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Música y sonido */
export function MusicNoteIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M9 17.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
      <path d="M18 15a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
      <path d="M11.25 12.75V4.5L20.25 3v8.25" />
    </svg>
  )
}

/** Matemática y juegos */
export function ShapesIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <circle cx="7.25" cy="7.25" r="4" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.3" />
      <path d="M7.25 14.5 3 21.25h8.5L7.25 14.5Z" />
      <circle cx="16.75" cy="17.5" r="3.4" />
    </svg>
  )
}

/** Exploración del ambiente */
export function LeafGlobeIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M4.5 9.5c3 1.8 5.5 1.4 7-.4 1.3-1.55 1.7-3.6 1.3-5.6" />
      <path d="M3.3 14.3c2.6-.9 4.9-.4 7.3 1.4 2 1.5 3 3.4 3 5.7" />
    </svg>
  )
}

/** Herramientas para docentes */
export function ToolboxIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" aria-hidden="true" {...props}>
      <rect x="2.75" y="8.5" width="18.5" height="10.5" rx="1.6" />
      <path d="M8.25 8.5V6a1.6 1.6 0 0 1 1.6-1.6h4.3A1.6 1.6 0 0 1 15.75 6v2.5" />
      <path d="M2.75 13.5h18.5" />
      <path d="M10.75 13.5v2" />
      <path d="M13.25 13.5v2" />
    </svg>
  )
}
