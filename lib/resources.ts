import type { ComponentType, SVGProps } from 'react'
import {
  TabletIcon,
  FolderIcon,
  GlobeIcon,
  DocumentIcon,
  MonitorIcon,
} from '@/components/resource-icons'

export type AccentColor = 'magenta' | 'cian' | 'azul'

export type ResourceCategory = 'Apps y software' | 'Documentos y guías' | 'Sitios recomendados'

export type Resource = {
  tag: string
  title: string
  href: string
  accent: AccentColor
  icon: ComponentType<SVGProps<SVGSVGElement>>
  category: ResourceCategory
}

// Última verificación de que los links de Drive siguen vigentes.
export const lastVerifiedDate = '2026-09-14'

export const resources: Resource[] = [
  {
    tag: 'App',
    title: 'Aprender Conectados Tablet Inicial',
    href: 'https://drive.google.com/drive/folders/1Jww4n2SWhBDaT0H_IE4PXYBm6DS7njqk?usp=drive_link',
    accent: 'magenta',
    icon: TabletIcon,
    category: 'Apps y software',
  },
  {
    tag: 'Software',
    title: 'Pizarra Digital',
    href: 'https://drive.google.com/drive/folders/1AwlJLRR8SpLIxUhGscIH8jTOQ30IKCo4?usp=drive_link',
    accent: 'azul',
    icon: MonitorIcon,
    category: 'Apps y software',
  },
  {
    tag: 'Carpeta',
    title: 'Colección de actividades',
    href: 'https://drive.google.com/drive/folders/1Jf0u4B2BtFhJkYY0PrIB1uJvC54882XF?usp=drive_link',
    accent: 'cian',
    icon: FolderIcon,
    category: 'Documentos y guías',
  },
  {
    tag: 'Carpeta',
    title: 'Guías',
    href: 'https://drive.google.com/drive/folders/1mtWWs0HH-rVoWd7raKtlO2o0QVLruinh?usp=drive_link',
    accent: 'cian',
    icon: FolderIcon,
    category: 'Documentos y guías',
  },
  {
    tag: 'Documento',
    title: 'Marco General de Lineamientos Pedagógicos',
    href: 'https://drive.google.com/drive/folders/1BtSPcB9nPF50Uc6Y-eNG1IPpr7rAGqFk?usp=drive_link',
    accent: 'magenta',
    icon: DocumentIcon,
    category: 'Documentos y guías',
  },
  {
    tag: 'Sitio',
    title: 'Educ.ar',
    href: 'https://drive.google.com/drive/folders/1QeNXRm1sdztfN9XJhTJTc2MLtDoe_Q4R?usp=drive_link',
    accent: 'azul',
    icon: GlobeIcon,
    category: 'Sitios recomendados',
  },
]

export const resourceCategories: ResourceCategory[] = [
  'Apps y software',
  'Documentos y guías',
  'Sitios recomendados',
]
