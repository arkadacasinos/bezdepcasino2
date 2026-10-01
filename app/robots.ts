import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://bezdepcasino2.vercel.app/sitemap.xml',
    host: 'https://bezdepcasino2.vercel.app',
  }
}
