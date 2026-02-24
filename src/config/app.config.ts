/**
 * Application Configuration
 * File: src/config/app.config.ts
 * Purpose: Konfigurasi utama aplikasi (nama, deskripsi, dll)
 * 
 * Cara update: Ubah nilai di bawah ini untuk mengubah info aplikasi
 */

export const appConfig = {
  // Informasi dasar aplikasi
  name: 'AGENCY-WNI',
  fullName: 'Agency WNI - LP3I College',
  description: 'Portal Informasi Produk & Knowledge untuk Rekanan Agensi',
  version: '1.0.0',
  
  // Informasi organisasi
  organization: {
    name: 'LP3I College',
    website: 'https://lp3i.ac.id',
  },
  
  // Repository GitHub
  repository: {
    url: 'https://github.com/MrAhdyourse/agency-lp3icollegeidm',
    pagesUrl: 'https://mrahdyourse.github.io/agency-lp3icollegeidm',
  },
  
  // Pengaturan tampilan
  ui: {
    sidebar: {
      defaultOpen: true,
      width: 280,
      collapsedWidth: 70,
    },
    header: {
      height: 64,
    },
  },
  
  // Metadata SEO
  seo: {
    title: 'Agency WNI - Portal Rekanan',
    description: 'Portal informasi produk dan knowledge untuk rekanan agensi LP3I College',
    keywords: ['agency', 'lp3i', 'college', 'rekanan', 'produk', 'knowledge'],
  },
} as const

export default appConfig
