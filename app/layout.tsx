import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Encode_Sans } from 'next/font/google'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

const encodeSans = Encode_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-encode-sans',
})

const siteUrl = 'https://recurserodigitaldte.vercel.app'
const title = 'Recursero | Jornadas de Pensamiento Computacional, Programación y Robótica'
const description =
  'Recursero de las Jornadas de Pensamiento Computacional, Programación y Robótica en Nivel Inicial. Dirección de Tecnología Educativa (DTE), Región 1, Dirección General de Cultura y Educación, Provincia de Buenos Aires.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  generator: 'v0.app',
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Recursero DTE | Jornadas Nivel Inicial',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
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
        <BackToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
