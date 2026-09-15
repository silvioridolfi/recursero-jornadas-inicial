'use client'

import { useState } from 'react'

export function ShareButton({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        // Usuario canceló el share nativo, o falló: caemos al copiar el link.
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // No hay clipboard disponible; no hacemos nada más.
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="flex min-h-[44px] items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:border-azul/40"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.6" y1="10.6" x2="15.4" y2="6.4" />
        <line x1="8.6" y1="13.4" x2="15.4" y2="17.6" />
      </svg>
      {copied ? 'Enlace copiado' : 'Compartir recurso'}
    </button>
  )
}
