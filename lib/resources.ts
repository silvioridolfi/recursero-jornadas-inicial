import type { ComponentType, SVGProps } from 'react'
import {
  TabletIcon,
  FolderIcon,
  GlobeIcon,
  DocumentIcon,
  MonitorIcon,
} from '@/components/resource-icons'

export type AccentColor = 'magenta' | 'cian' | 'azul'

export type Resource = {
  tag: string
  title: string
  href: string
  accent: AccentColor
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const resources: Resource[] = [
  {
    tag: 'App',
    title: 'Aprender Conectados Tablet Inicial',
    href: 'https://drive.google.com/drive/folders/1Jww4n2SWhBDaT0H_IE4PXYBm6DS7njqk?usp=drive_link',
    accent: 'magenta',
    icon: TabletIcon,
  },
  {
    tag: 'Carpeta',
    title: 'Colección de actividades',
    href: 'https://drive.google.com/drive/folders/1Jf0u4B2BtFhJkYY0PrIB1uJvC54882XF?usp=drive_link',
    accent: 'cian',
    icon: FolderIcon,
  },
  {
    tag: 'Sitio',
    title: 'Educ.ar',
    href: 'https://drive.google.com/drive/folders/1QeNXRm1sdztfN9XJhTJTc2MLtDoe_Q4R?usp=drive_link',
    accent: 'azul',
    icon: GlobeIcon,
  },
  {
    tag: 'Carpeta',
    title: 'Guías',
    href: 'https://drive.google.com/drive/folders/1mtWWs0HH-rVoWd7raKtlO2o0QVLruinh?usp=drive_link',
    accent: 'cian',
    icon: FolderIcon,
  },
  {
    tag: 'Documento',
    title: 'Marco General de Lineamientos Pedagógicos',
    href: 'https://drive.google.com/drive/folders/1BtSPcB9nPF50Uc6Y-eNG1IPpr7rAGqFk?usp=drive_link',
    accent: 'magenta',
    icon: DocumentIcon,
  },
  {
    tag: 'Software',
    title: 'Pizarra Digital',
    href: 'https://drive.google.com/drive/folders/1AwlJLRR8SpLIxUhGscIH8jTOQ30IKCo4?usp=drive_link',
    accent: 'azul',
    icon: MonitorIcon,
  },
]
