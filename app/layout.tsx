import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Encode_Sans } from 'next/font/google'
import './globals.css'

const encodeSans = Encode_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-encode-sans',
})

export const metadata: Metadata = {
  title: 'Recursero | Jornadas de Pensamiento Computacional, Programación y Robótica',
  description:
    'Recursero de las Jornadas de Pensamiento Computacional, Programación y Robótica en Nivel Inicial. Dirección de Tecnología Educativa (DTE), Región 1, Dirección General de Cultura y Educación, Provincia de Buenos Aires.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F6F7F9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${encodeSans.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
