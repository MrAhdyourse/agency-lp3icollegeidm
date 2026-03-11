/**
 * Application Configuration
 * File: src/config/app.config.ts
 * Purpose: Konfigurasi utama aplikasi (nama, deskripsi, dll)
 * 
 * Cara update: Ubah nilai di bawah ini untuk mengubah info aplikasi
 */

export const appConfig = {
  // Informasi dasar aplikasi
  name: 'LP3IIDM-CONNECT',
  fullName: 'LP3IIDM Connect - LP3I College',
  description: 'Portal Informasi Produk & Knowledge untuk Mitra dan Calon Customer',
  version: '1.0.0',
  
  // Informasi organisasi
  organization: {
    name: 'LP3I College',
    website: 'https://lp3i.ac.id',
  },
  
  // Repository GitHub
  repository: {
    url: 'https://github.com/MrAhdyourse/lp3iidm-connect',
    pagesUrl: 'https://mrahdyourse.github.io/lp3iidm-connect',
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
    title: 'LP3IIDM Connect - Portal Mitra',
    description: 'Portal informasi produk dan knowledge untuk mitra dan calon customer LP3I College',
    keywords: ['lp3iidm', 'lp3i', 'college', 'mitra', 'produk', 'knowledge', 'connect'],
  },
} as const

export default appConfig