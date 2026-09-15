const STORAGE_KEY = 'inicial-favoritos'

function readAll(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : []
  } catch {
    return []
  }
}

function writeAll(ids: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    window.dispatchEvent(new CustomEvent('inicial-favoritos-changed'))
  } catch {
    // localStorage no disponible (modo privado, cuota, etc.): fallamos en silencio.
  }
}

export function getFavoritos(): string[] {
  return readAll()
}

export function isFavorito(id: string): boolean {
  return readAll().includes(id)
}

export function toggleFavorito(id: string): boolean {
  const current = readAll()
  const isFav = current.includes(id)
  const next = isFav ? current.filter((x) => x !== id) : [...current, id]
  writeAll(next)
  return !isFav
}

export const FAVORITOS_EVENT = 'inicial-favoritos-changed'
