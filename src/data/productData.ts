/**
 * Product Data
 * File: src/data/productData.ts
 * Purpose: Data produk dan kontak WhatsApp rekanan agensi
 */

// Import skema sertifikasi
import { skemaSertifikasi, SkemaSertifikasi, SkemaKategori, skemaKategoriList, SkemaKategoriInfo } from './skemaData'

// Re-export skema types for use in other components
export type { SkemaSertifikasi, SkemaKategori, SkemaKategoriInfo }
export { skemaSertifikasi, skemaKategoriList }

// Kategori Produk
export interface ProductCategory {
  id: string
  name: string
  description: string
  icon: string
  gradient: string
}

export const productCategories: ProductCategory[] = [
  {
    id: 'sertifikasi',
    name: 'Sertifikasi',
    description: 'Sertifikasi BNSP / Non BNSP',
    icon: 'certificate',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'pendidikan',
    name: 'Pendidikan',
    description: 'Pendidikan profesi bersama LP3I College Indramayu',
    icon: 'graduation',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'loker-luar-negeri',
    name: 'Loker Luar Negeri',
    description: 'Mari raih impian anda bekerja di luar negeri bersama LP3I Indramayu',
    icon: 'globe',
    gradient: 'from-emerald-500 to-teal-600'
  }
]

// Kontak WhatsApp Rekanan Agensi
export interface WhatsAppContact {
  id: string
  name: string
  role: string
  phone: string
  avatar?: string
}

export const whatsappContacts: WhatsAppContact[] = [
  {
    id: '1',
    name: 'Suaha Bakhtiar',
    role: 'Agen',
    phone: '6281214422064'
  },
  {
    id: '2',
    name: 'M. Dzaky Fikri',
    role: 'Agen',
    phone: '6282215665883'
  },
  {
    id: '3',
    name: 'Rizki A.',
    role: 'Agen',
    phone: '6282115639781'
  },
  {
    id: '4',
    name: 'Hari Mulyana',
    role: 'Agen',
    phone: '628773328938'
  },
  {
    id: '5',
    name: 'Jayadi',
    role: 'Agen',
    phone: '6287850979344'
  },
  {
    id: '6',
    name: 'Suwarie',
    role: 'Agen',
    phone: '6288901627975'
  },
  {
    id: '7',
    name: 'Ewarsan',
    role: 'Agen',
    phone: '6282317056560'
  },
  {
    id: '8',
    name: 'Bennie Setiadi',
    role: 'Agen',
    phone: '6282130575420'
  },
  {
    id: '9',
    name: 'Bambang S.',
    role: 'Agen',
    phone: '6287769103772'
  },
  {
    id: '10',
    name: 'Eko Kurniawan',
    role: 'Agen',
    phone: '6287873234417'
  },
  {
    id: '11',
    name: 'Abdul Rojak',
    role: 'Agen',
    phone: '6283841761878'
  },
  {
    id: '12',
    name: 'Asep Septiono',
    role: 'Agen',
    phone: '6283148303317'
  },
  {
    id: '13',
    name: 'Agus Sulis',
    role: 'Agen',
    phone: '6285201936871'
  },
  {
    id: '14',
    name: 'Bajuri',
    role: 'Agen',
    phone: '6281378154528'
  },
  {
    id: '15',
    name: 'Ahmad Yani',
    role: 'Agen',
    phone: '6282317660292'
  },
  {
    id: '16',
    name: 'Asti Mayasari',
    role: 'Agen',
    phone: '6285316177789'
  },
  {
    id: '17',
    name: 'Achmad Rifai',
    role: 'Agen',
    phone: '6281218677587'
  },
  {
    id: '18',
    name: 'Ahdi',
    role: 'Agen',
    phone: '6283867055809'
  },
  {
    id: '19',
    name: 'Triskaeni',
    role: 'Agen',
    phone: '6285163700628'
  },
  {
    id: '20',
    name: 'Ika Sugiarti',
    role: 'Agen',
    phone: '6287787006000'
  }
]

// Produk
export interface Product {
  id: string
  name: string
  description: string
  fullDescription: string
  categoryId: string
  requirements: string[]
  benefits: string[]
  image?: string
  badge?: string
  badgeColor?: 'success' | 'warning' | 'error' | 'info'
  isActive: boolean
}

export const products: Product[] = [
  // Sertifikasi
  {
    id: 'sertifikasi-bnsp-1',
    name: 'Sertifikasi Kompetensi Digital Marketing',
    description: 'Sertifikasi BNSP untuk Digital Marketing Professional',
    fullDescription: 'Program sertifikasi BNSP untuk Digital Marketing Professional yang diakui secara nasional. Pelajari strategi pemasaran digital, SEO, SEM, Social Media Marketing, dan Content Marketing dari praktisi berpengalaman.',
    categoryId: 'sertifikasi',
    requirements: [
      'Minimal D3/S1 bidang terkait',
      'Pengalaman minimal 1 tahun di bidang marketing',
      'Mengikuti pelatihan intensif',
      'Lulus ujian kompetensi'
    ],
    benefits: [
      'Sertifikat BNSP yang diakui nasional',
      'Networking dengan praktisi digital marketing',
      'Materi pelatihan komprehensif',
      'Konsultasi pasca sertifikasi'
    ],
    badge: 'BNSP',
    badgeColor: 'success',
    isActive: true
  },
  {
    id: 'sertifikasi-bnsp-2',
    name: 'Sertifikasi Kompetensi HRD',
    description: 'Sertifikasi BNSP untuk Human Resource Development',
    fullDescription: 'Program sertifikasi BNSP untuk Human Resource Development. Pelajari manajemen SDM, rekrutmen, training & development, dan performance management dari ahli di bidangnya.',
    categoryId: 'sertifikasi',
    requirements: [
      'Minimal D3/S1 bidang psikologi/HR',
      'Pengalaman minimal 2 tahun di bidang HR',
      'Mengikuti pelatihan intensif',
      'Lulus ujian kompetensi'
    ],
    benefits: [
      'Sertifikat BNSP yang diakui nasional',
      'Networking dengan praktisi HR',
      'Materi pelatihan komprehensif',
      'Konsultasi pasca sertifikasi'
    ],
    badge: 'BNSP',
    badgeColor: 'success',
    isActive: true
  },
  {
    id: 'sertifikasi-non-bnsp-1',
    name: 'Sertifikasi Graphic Design',
    description: 'Sertifikasi profesional untuk Graphic Designer',
    fullDescription: 'Program sertifikasi profesional untuk Graphic Designer. Pelajari desain visual, Adobe Creative Suite, UI/UX design, dan branding dari praktisi industri kreatif.',
    categoryId: 'sertifikasi',
    requirements: [
      'Minimal SMA/SMK',
      'Kemampuan dasar komputer',
      'Memiliki laptop/PC',
      'Mengikuti pelatihan intensif'
    ],
    benefits: [
      'Sertifikat profesional',
      'Portfolio siap kerja',
      'Networking dengan desainer profesional',
      'Akses komunitas desainer'
    ],
    badge: 'Non BNSP',
    badgeColor: 'info',
    isActive: true
  },
  
  // Pendidikan
  {
    id: 'pendidikan-1',
    name: 'Program Profesi Digital Marketing',
    description: 'Program pendidikan profesi Digital Marketing bersama LP3I College',
    fullDescription: 'Program pendidikan profesi Digital Marketing bersama LP3I College Indramayu. Pelajari berbagai aspek digital marketing dari dasar hingga mahir dengan kurikulum yang disesuaikan dengan kebutuhan industri.',
    categoryId: 'pendidikan',
    requirements: [
      'Minimal SMA/SMK/sederajat',
      'Usia minimal 18 tahun',
      'Memiliki laptop/smartphone',
      'Bersedia mengikuti seluruh program'
    ],
    benefits: [
      'Sertifikat profesi dari LP3I',
      'Materi sesuai kebutuhan industri',
      'Praktik langsung dengan project nyata',
      'Bantuan penempatan kerja'
    ],
    badge: 'Populer',
    badgeColor: 'warning',
    isActive: true
  },
  {
    id: 'pendidikan-2',
    name: 'Program Profesi Administrasi Perkantoran',
    description: 'Program pendidikan profesi Administrasi Perkantoran',
    fullDescription: 'Program pendidikan profesi Administrasi Perkantoran bersama LP3I College Indramayu. Pelajari keterampilan administrasi modern, pengelolaan dokumen, dan komunikasi bisnis.',
    categoryId: 'pendidikan',
    requirements: [
      'Minimal SMA/SMK/sederajat',
      'Usia minimal 18 tahun',
      'Memiliki laptop/smartphone',
      'Bersedia mengikuti seluruh program'
    ],
    benefits: [
      'Sertifikat profesi dari LP3I',
      'Materi sesuai kebutuhan industri',
      'Praktik langsung dengan project nyata',
      'Bantuan penempatan kerja'
    ],
    isActive: true
  },
  {
    id: 'pendidikan-3',
    name: 'Program Profesi Akuntansi & Keuangan',
    description: 'Program pendidikan profesi Akuntansi & Keuangan',
    fullDescription: 'Program pendidikan profesi Akuntansi & Keuangan bersama LP3I College Indramayu. Pelajari akuntansi modern, perpajakan, dan manajemen keuangan dari praktisi berpengalaman.',
    categoryId: 'pendidikan',
    requirements: [
      'Minimal SMA/SMK/sederajat',
      'Usia minimal 18 tahun',
      'Memiliki laptop/smartphone',
      'Bersedia mengikuti seluruh program'
    ],
    benefits: [
      'Sertifikat profesi dari LP3I',
      'Materi sesuai kebutuhan industri',
      'Praktik langsung dengan project nyata',
      'Bantuan penempatan kerja'
    ],
    isActive: true
  },
  
  // Loker Luar Negeri
  {
    id: 'loker-ln-1',
    name: 'Lowongan Kerja Qatar (KAEFER - Oil & Gas)',
    description: 'Peluang kerja di sektor minyak dan gas di Qatar untuk posisi teknis dan manajerial tingkat awal',
    fullDescription: 'Peluang kerja di sektor minyak dan gas di Qatar untuk posisi teknis dan manajerial tingkat awal. Posisi tersedia: Sheet Metal Fitter (QAR 1.500 ± Rp6.949.500), Cold Insulator (QAR 1.500 ± Rp6.949.500), Cold Insulation Foreman (QAR 1.700 ± Rp7.876.100).',
    categoryId: 'loker-luar-negeri',
    image: '/images/loker-luar-negeri/qatar1.webp',
    requirements: [
      'Usia 23 - 45 tahun',
      'Pendidikan minimal SMA/K (dengan sertifikat) s/d D3',
      'Memiliki pengalaman pada bidang terkait',
      'Melampirkan CV terbaru'
    ],
    benefits: [
      'Biaya akomodasi & makan ditanggung',
      'Gaji lembur, transportasi, dan tiket penerbangan',
      'Asuransi kesehatan',
      'Jatah cuti 42 hari/2 tahun + Tiket Pulang Pergi'
    ],
    badge: 'Aktif',
    badgeColor: 'success',
    isActive: true
  },
  {
    id: 'loker-ln-2',
    name: 'Lowongan Kerja Arab Saudi (KAEFER - Oil & Gas)',
    description: 'Penempatan di Arab Saudi untuk pengerjaan proyek industri Oil & Gas',
    fullDescription: 'Penempatan di Arab Saudi untuk pengerjaan proyek industri Oil & Gas. Posisi tersedia: Cold Insulator & Fabricator (SAR 1.500 ± Rp6.766.500 sebagai upah dasar).',
    categoryId: 'loker-luar-negeri',
    image: '/images/loker-luar-negeri/saudiarab1.webp',
    requirements: [
      'Usia 20 - 48 tahun',
      'Pengalaman pada bidang terkait'
    ],
    benefits: [
      'Gratis akomodasi & makan',
      'Tiket penerbangan disediakan'
    ],
    badge: 'Aktif',
    badgeColor: 'success',
    isActive: true
  },
  {
    id: 'loker-ln-3',
    name: 'Lowongan Kerja Yunani (Hotel Bintang 5)',
    description: 'Program kerja musiman (seasonal) di sektor perhotelan mewah di Yunani',
    fullDescription: 'Program kerja musiman (seasonal) di sektor perhotelan mewah di Yunani. Posisi tersedia: Chef (EUR 1.100 ± Rp21.607.300), Waiters (EUR 1.000 ± Rp19.643.000). Overtime: 40 jam/minggu dengan bayaran 6 EUR/jam (± Rp117.858/jam).',
    categoryId: 'loker-luar-negeri',
    image: '/images/loker-luar-negeri/yunani1.webp',
    requirements: [
      'Usia 22 - 50 tahun',
      'Program berlangsung selama 7 bulan (namun dibayar untuk 9 bulan)'
    ],
    benefits: [
      'Gratis akomodasi & makan',
      'Lingkungan kerja di hotel bintang 5'
    ],
    badge: 'Aktif',
    badgeColor: 'success',
    isActive: true
  },
  {
    id: 'loker-ln-4',
    name: 'Lowongan Kerja Jerman (Chef Wanted)',
    description: 'Peluang bagi tenaga kerja Indonesia profesional untuk berkarir sebagai Chef di Jerman',
    fullDescription: 'Peluang bagi tenaga kerja Indonesia profesional untuk berkarir sebagai Chef di Jerman. Gaji: EUR 2.500 ± Rp49.107.500. Catatan: Terdapat biaya administrasi dalam program ini.',
    categoryId: 'loker-luar-negeri',
    image: '/images/loker-luar-negeri/germany1.webp',
    requirements: [
      'Usia 20 - 45 tahun',
      'Pendidikan minimal D3',
      'Wajib memiliki Sertifikat B1 Bahasa Jerman',
      'Siap MCU (Medical Check Up) & Paspor ready'
    ],
    benefits: [
      'Gaji yang sangat kompetitif secara global'
    ],
    badge: 'Aktif',
    badgeColor: 'success',
    isActive: true
  },
  {
    id: 'loker-ln-5',
    name: 'Program "Goes to Japan" (Vokasi & Industri)',
    description: 'Program komprehensif penempatan kerja di berbagai perusahaan multinasional di Jepang',
    fullDescription: 'Program komprehensif penempatan kerja di berbagai perusahaan multinasional di Jepang (Caregiver, Food Service, Konstruksi, dll). Gaji: Rp20.000.000 – Rp30.000.000.',
    categoryId: 'loker-luar-negeri',
    image: '/images/loker-luar-negeri/japan1.webp',
    requirements: [
      'Pria/Wanita usia 18 - 35 tahun',
      'Tinggi badan min. 160cm (Pria) & 155cm (Wanita)',
      'Sehat jasmani/rohani, tidak bertato/tindik, tidak buta warna',
      'Mendapatkan izin orang tua/wali'
    ],
    benefits: [
      'Pelatihan bahasa Jepang (sampai N4) dan keterampilan kerja (6 bulan)',
      'Asrama selama pelatihan',
      'Peluang meraih gelar Sarjana (S1) di Jepang melalui program RPL',
      'Tersedia pinjaman biaya pendidikan'
    ],
    badge: 'Aktif',
    badgeColor: 'success',
    isActive: true
  },
  {
    id: 'loker-ln-6',
    name: 'Lowongan Malaysia & Singapura (Khusus Wanita)',
    description: 'Penempatan khusus wanita untuk sektor rumah tangga dan perawatan di Malaysia dan Singapura',
    fullDescription: 'Penempatan khusus wanita untuk sektor rumah tangga dan perawatan di Malaysia dan Singapura. Posisi: Asisten Rumah Tangga, Perawat Bayi, Perawat Lansia. Malaysia: Rp7.000.000 + Lembur. Singapura: Rp6.600.000 + Lembur.',
    categoryId: 'loker-luar-negeri',
    image: '/images/loker-luar-negeri/malay-singapore-prt.webp',
    requirements: [
      'Khusus Wanita',
      'Usia 21 - 40 tahun (Malaysia), 23 - 37 tahun (Singapura)',
      'Bersedia mengikuti pelatihan BLK dan kontrak 2 tahun',
      'Izin resmi dari keluarga (Orang tua/Suami)'
    ],
    benefits: [
      'Tidak dipungut biaya (gratis)',
      'Dapat uang saku ± Rp5.000.000',
      'Proses penempatan cepat dan jalur resmi pemerintah'
    ],
    badge: 'Aktif',
    badgeColor: 'success',
    isActive: true
  }
]

// Helper functions
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.categoryId === categoryId && product.isActive)
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getCategoryById(id: string): ProductCategory | undefined {
  return productCategories.find(category => category.id === id)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(product => 
    product.isActive && (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    )
  )
}

// Generate WhatsApp link
export function generateWhatsAppLink(phone: string, productName: string): string {
  const message = `Halo, saya tertarik dengan produk "${productName}" dari LP3I College Indramayu. Mohon informasi lebih lanjut.`
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

// ==================== SKEMA HELPER FUNCTIONS ====================

// Mendapatkan skema berdasarkan kategori
export function getSkemaByKategori(kategori: SkemaKategori): SkemaSertifikasi[] {
  return skemaSertifikasi.filter(skema => skema.kategori === kategori)
}

// Mendapatkan skema berdasarkan ID
export function getSkemaById(id: string): SkemaSertifikasi | undefined {
  return skemaSertifikasi.find(skema => skema.id === id)
}

// Mendapatkan kategori skema berdasarkan ID
export function getSkemaKategoriById(id: SkemaKategori): SkemaKategoriInfo | undefined {
  return skemaKategoriList.find(kategori => kategori.id === id)
}

// Mencari skema berdasarkan query
export function searchSkema(query: string): SkemaSertifikasi[] {
  const lowerQuery = query.toLowerCase()
  return skemaSertifikasi.filter(skema =>
    skema.nama.toLowerCase().includes(lowerQuery) ||
    skema.kode.toLowerCase().includes(lowerQuery) ||
    skema.deskripsi.toLowerCase().includes(lowerQuery)
  )
}

// Mendapatkan semua skema yang berjenis KKNI
export function getSkemaKKNI(): SkemaSertifikasi[] {
  return skemaSertifikasi.filter(skema => skema.jenis === 'KKNI')
}

// Mendapatkan semua skema yang berjenis Klaster
export function getSkemaKlaster(): SkemaSertifikasi[] {
  return skemaSertifikasi.filter(skema => skema.jenis === 'Klaster')
}

// Statistik skema per kategori
export function getSkemaStats(): Record<SkemaKategori, number> {
  const stats: Record<SkemaKategori, number> = {
    'it-programming': 0,
    'design-multimedia': 0,
    'business-trade': 0,
    'hr-administration': 0,
    'accounting-tax': 0,
    'marketing-digital': 0,
    'other-professional': 0
  }
  
  skemaSertifikasi.forEach(skema => {
    stats[skema.kategori]++
  })
  
  return stats
}

// Total skema
export const totalSkema = skemaSertifikasi.length