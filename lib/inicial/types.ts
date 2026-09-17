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
  | 'Interactivo'
  | 'Libro electrónico'

export type Costo = 'Gratuito' | 'Freemium' | 'Pago'

export type Origen = 'Provincia de Buenos Aires' | 'Nación' | 'Institución educativa' | 'Otro'

export type EstadoRecurso = 'active' | 'review'

// --- Metadatos curriculares y pedagógicos ---------------------------------
// Referencia: Diseño Curricular para la Educación Inicial (DGCyE, 2022) y
// Líneas prioritarias para la Educación Digital 2025-2027 (DTE).

/** Áreas del Diseño Curricular para la Educación Inicial. */
export type AreaCurricular =
  | 'Formación personal y social'
  | 'Prácticas del lenguaje'
  | 'Matemática'
  | 'Ambiente social y natural'
  | 'Juego'
  | 'Educación Artística'
  | 'Educación Física'
  | 'Educación Digital'

/** Dentro de Educación Artística, cuando corresponde distinguir el lenguaje. */
export type LenguajeArtistico =
  | 'Literatura'
  | 'Teatro'
  | 'Música'
  | 'Expresión corporal'
  | 'Educación visual'

/** Enfoques y perspectivas transversales (no reemplazan las áreas). */
export type Enfoque =
  | 'Educación Digital'
  | 'Ciencias de la Computación'
  | 'Pensamiento computacional'
  | 'Programación'
  | 'Robótica'
  | 'Cultura digital'
  | 'Multialfabetización'
  | 'Ciudadanía digital'
  | 'Creación y producción digital'
  | 'Inclusión y accesibilidad'
  | 'ESI'
  | 'Educación Ambiental Integral (EAI)'
  | 'Interculturalidad'

/** Conceptos de Ciencias de la Computación / Pensamiento Computacional. */
export type ConceptoComputacional =
  | 'Algoritmos'
  | 'Secuencias'
  | 'Patrones'
  | 'Clasificación'
  | 'Descomposición'
  | 'Resolución de problemas'
  | 'Programación'
  | 'Robótica'

export type Modalidad = 'Digital' | 'Analógica' | 'Mixta'

export type Dispositivo =
  | 'PC'
  | 'Notebook'
  | 'Tablet'
  | 'Celular'
  | 'Pizarra o pantalla'
  | 'Cualquier navegador'
  | 'Sin dispositivo'
  | 'Otro'

export type Conectividad =
  | 'Requiere internet'
  | 'Funciona sin internet'
  | 'Tiene modalidad offline'
  | 'Parcialmente offline'
  | 'No verificado'

export type RequisitoCuenta =
  | 'No requiere cuenta'
  | 'Requiere cuenta'
  | 'Cuenta institucional recomendada'

export type EstadoVerificacion = 'Activo' | 'Revisar' | 'Enlace no disponible'

export type Categoria = {
  slug: CategoriaSlug
  nombre: string
  descripcion: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export type RecursoInicial = {
  id: string
  /** slug de URL para /inicial/recurso/[slug]; por defecto igual a id. */
  slug?: string
  title: string
  description: string

  category: CategoriaSlug
  type: TipoRecurso

  levels: Sala[]

  /** Texto libre histórico (se sigue usando para búsqueda). */
  areas: string[]
  /** Áreas curriculares del Diseño Curricular EI. Vacío si no hay relación clara. */
  areasCurriculares?: AreaCurricular[]
  /** Solo si areasCurriculares incluye 'Educación Artística'. */
  lenguajesArtisticos?: LenguajeArtistico[]
  /** Enfoques/perspectivas transversales. Vacío si no aplica. */
  approaches?: Enfoque[]
  /** Conceptos de Ciencias de la Computación, cuando corresponda. */
  computationalConcepts?: ConceptoComputacional[]

  /** "¿Para qué puedo usarlo?": 2-5 usos concretos, no frases genéricas. */
  pedagogicalUses?: string[]

  platforms: string[]
  modality?: Modalidad
  devices?: Dispositivo[]
  connectivity?: Conectividad
  requiresAccount?: RequisitoCuenta
  requiresInstallation?: boolean

  pricing: Costo
  url: string
  provider: string
  official: boolean

  /** Notas de accesibilidad verificadas. Vacío si no hay info confiable. */
  accessibility?: string[]
  /** Notas de cuidado/privacidad. Vacío si no hay nada relevante que advertir. */
  privacyNotes?: string[]

  featured: boolean
  verifiedAt: string
  /** Espejo legible de `status`, para mostrar en la UI. */
  verificationStatus?: EstadoVerificacion
  status: EstadoRecurso
  tags: string[]
}
