import type { Categoria } from '@/lib/inicial/types'
import {
  BadgeCheckIcon,
  LaptopIcon,
  RobotIcon,
  BookOpenIcon,
  PaletteIcon,
  MusicNoteIcon,
  ShapesIcon,
  LeafGlobeIcon,
  ToolboxIcon,
} from '@/components/inicial/category-icons'

export const categorias: Categoria[] = [
  {
    slug: 'recursos-oficiales',
    nombre: 'Recursos oficiales',
    descripcion: 'Materiales y lineamientos oficiales de la Provincia de Buenos Aires.',
    icon: BadgeCheckIcon,
  },
  {
    slug: 'educacion-digital',
    nombre: 'Educación Digital',
    descripcion: 'Propuestas para explorar, crear y aprender con tecnologías digitales.',
    icon: LaptopIcon,
  },
  {
    slug: 'pensamiento-computacional',
    nombre: 'Pensamiento Computacional, Programación y Robótica',
    descripcion: 'Secuencias, algoritmos, programación y robótica educativa.',
    icon: RobotIcon,
  },
  {
    slug: 'literatura-y-cuentos',
    nombre: 'Literatura y cuentos',
    descripcion: 'Cuentos, poesías, narraciones y audiocuentos para Nivel Inicial.',
    icon: BookOpenIcon,
  },
  {
    slug: 'arte-y-creatividad',
    nombre: 'Arte y creatividad',
    descripcion: 'Herramientas y propuestas para explorar el arte y la creatividad.',
    icon: PaletteIcon,
  },
  {
    slug: 'musica-y-sonido',
    nombre: 'Música y sonido',
    descripcion: 'Exploración, escucha, creación y composición musical.',
    icon: MusicNoteIcon,
  },
  {
    slug: 'matematica-y-juegos',
    nombre: 'Matemática y juegos',
    descripcion: 'Conteo, clasificación, patrones, formas y resolución de problemas.',
    icon: ShapesIcon,
  },
  {
    slug: 'exploracion-del-ambiente',
    nombre: 'Exploración del ambiente',
    descripcion: 'Propuestas de observación y exploración del ambiente natural y social.',
    icon: LeafGlobeIcon,
  },
  {
    slug: 'herramientas-docentes',
    nombre: 'Herramientas y formación docente',
    descripcion: 'Tutoriales, microcursos y materiales para planificar, producir e integrar tecnología en la enseñanza.',
    icon: ToolboxIcon,
  },
]

export function getCategoria(slug: string) {
  return categorias.find((c) => c.slug === slug)
}
