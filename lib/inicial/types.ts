import type { ComponentType, SVGProps } from 'react'

export type Sala = 'Sala 2' | 'Sala 3' | 'Sala 4' | 'Sala 5' | 'Docentes'

export type CategoriaSlug =
  | 'recursos-oficiales'
  | 'educacion-digital'
  | 'pensamiento-computacional'
  | 'literatura-y-cuentos'
  | 'arte-y-creatividad'
  | 'musica-y-sonido'
  | 'matematica-y-juegos'
  | 'exploracion-del-ambiente'
  | 'herramientas-docentes'

export type TipoRecurso =
  | 'Sitio web'
  | 'App'
  | 'Software'
  | 'Juego'
  | 'Video'
  | 'Documento'
  | 'Colección'
  | 'Material docente'

export type Costo = 'Gratuito' | 'Freemium' | 'Pago'

export type Origen = 'Provincia de Buenos Aires' | 'Nación' | 'Institución educativa' | 'Otro'

export type EstadoRecurso = 'active' | 'review'

export type Categoria = {
  slug: CategoriaSlug
  nombre: string
  descripcion: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export type RecursoInicial = {
  id: string
  title: string
  description: string
  category: CategoriaSlug
  type: TipoRecurso
  levels: Sala[]
  areas: string[]
  platforms: string[]
  pricing: Costo
  url: string
  provider: string
  official: boolean
  featured: boolean
  verifiedAt: string
  status: EstadoRecurso
  tags: string[]
}
