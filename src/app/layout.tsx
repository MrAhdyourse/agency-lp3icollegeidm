/**
 * Root Layout
 * File: src/app/layout.tsx
 * Purpose: Layout utama dengan Sidebar dan Header
 */

import type { Metadata } from 'next'
import './globals.css'
import appConfig from '@/config/app.config'

export const metadata: Metadata = {
  title: appConfig.seo.title,
  description: appConfig.seo.description,
  keywords: [...appConfig.seo.keywords], // Convert to mutable array
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
