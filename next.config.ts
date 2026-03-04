import type { NextConfig } from 'next'

/**
 * Next.js Configuration
 * File: next.config.ts
 * Purpose: Konfigurasi Next.js untuk static export (GitHub Pages)
 */

const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? basePath : '',
  assetPrefix: isProd ? `${basePath}/` : '',
}

export default nextConfig
