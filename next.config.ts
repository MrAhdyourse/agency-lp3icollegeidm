import type { NextConfig } from 'next'

/**
 * Next.js Configuration
 * File: next.config.ts
 * Purpose: Konfigurasi Next.js untuk static export (GitHub Pages)
 */

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
}

export default nextConfig
