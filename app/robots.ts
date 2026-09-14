import type { MetadataRoute } from 'next'

const siteUrl = 'https://recursero-jornadas-inicial.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
