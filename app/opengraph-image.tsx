import { ImageResponse } from 'next/og'

export const alt =
  'Recursero | Jornadas de Pensamiento Computacional, Programación y Robótica en Nivel Inicial'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'linear-gradient(115deg, #0B3B63 0%, #6F3976 45%, #D31C6B 78%, #F43F91 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 48,
            right: 90,
            width: 70,
            height: 70,
            borderRadius: '9999px',
            background: 'rgba(144,214,230,0.45)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 140,
            right: 200,
            width: 26,
            height: 26,
            borderRadius: '9999px',
            background: 'rgba(212,118,169,0.7)',
            display: 'flex',
          }}
        />
        <span
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.85)',
            display: 'flex',
            marginBottom: 28,
          }}
        >
          Dirección de Tecnología Educativa
        </span>
        <span
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#ffffff',
            display: 'flex',
            maxWidth: 980,
          }}
        >
          Pensamiento Computacional, Programación y Robótica en Nivel Inicial
        </span>
        <span
          style={{
            marginTop: 36,
            fontSize: 30,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.9)',
            display: 'flex',
          }}
        >
          Recursero de las Jornadas
        </span>
      </div>
    ),
    { ...size },
  )
}
