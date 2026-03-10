/**
 * Harga Data
 * File: src/data/hargaData.ts
 * Purpose: Data katalog dan harga produk per kategori
 */

// Interface untuk item harga
export interface HargaItem {
  id: string
  name: string
  description: string
  price: string
  priceNote?: string
  benefits?: string[]
  requirements?: string[]
  badge?: string
  badgeColor?: 'success' | 'warning' | 'error' | 'info'
  // Field khusus untuk Loker Luar Negeri
  biayaProses?: string
  biayaProsesNote?: string
  uangSaku?: string
  termasukBiaya?: string[]
  tidakTermasukBiaya?: string[]
  gajiMin?: string
  gajiMax?: string
  gajiNote?: string
  isFree?: boolean
  // Catatan penting
  catatan?: string
}

// Interface untuk katalog kategori
export interface HargaKatalog {
  id: string
  name: string
  description: string
  icon: string
  gradient: string
  items: HargaItem[]
}

// Data katalog harga
export const hargaKatalog: HargaKatalog[] = [
  {
    id: 'sertifikasi',
    name: 'Sertifikasi',
    description: 'Sertifikasi BNSP / Non BNSP',
    icon: 'certificate',
    gradient: 'from-amber-500 to-orange-600',
    items: [
      {
        id: 'sertifikasi-bnsp-digital-marketing',
        name: 'Sertifikasi Kompetensi Digital Marketing',
        description: 'Sertifikasi BNSP untuk Digital Marketing Professional',
        price: 'Rp 3.500.000',
        priceNote: 'Termasuk pelatihan dan ujian kompetensi',
        benefits: [
          'Sertifikat BNSP yang diakui nasional',
          'Materi pelatihan komprehensif',
          'Konsultasi pasca sertifikasi'
        ],
        requirements: [
          'Minimal D3/S1 bidang terkait',
          'Pengalaman minimal 1 tahun di bidang marketing'
        ],
        badge: 'BNSP',
        badgeColor: 'success'
      },
      {
        id: 'sertifikasi-bnsp-hrd',
        name: 'Sertifikasi Kompetensi HRD',
        description: 'Sertifikasi BNSP untuk Human Resource Development',
        price: 'Rp 3.500.000',
        priceNote: 'Termasuk pelatihan dan ujian kompetensi',
        benefits: [
          'Sertifikat BNSP yang diakui nasional',
          'Materi pelatihan komprehensif',
          'Networking dengan praktisi HR'
        ],
        requirements: [
          'Minimal D3/S1 bidang psikologi/HR',
          'Pengalaman minimal 2 tahun di bidang HR'
        ],
        badge: 'BNSP',
        badgeColor: 'success'
      },
      {
        id: 'sertifikasi-graphic-design',
        name: 'Sertifikasi Graphic Design',
        description: 'Sertifikasi profesional untuk Graphic Designer',
        price: 'Rp 2.500.000',
        priceNote: 'Termasuk materi dan sertifikat profesional',
        benefits: [
          'Sertifikat profesional',
          'Portfolio siap kerja',
          'Akses komunitas desainer'
        ],
        requirements: [
          'Minimal SMA/SMK',
          'Kemampuan dasar komputer'
        ],
        badge: 'Non BNSP',
        badgeColor: 'info'
      }
    ]
  },
  {
    id: 'loker-luar-negeri',
    name: 'Loker Luar Negeri',
    description: 'Lowongan kerja di luar negeri',
    icon: 'globe',
    gradient: 'from-emerald-500 to-teal-600',
    items: [
      {
        id: 'loker-qatar',
        name: 'Lowongan Kerja Qatar (KAEFER - Oil & Gas)',
        description: 'Sheet Metal Fitter, Cold Insulator, Cold Insulation Foreman',
        price: 'QAR 1.500 - 1.700',
        priceNote: '± Rp 6.949.500 - Rp 7.876.100',
        biayaProses: 'Rp 5.000.000',
        biayaProsesNote: 'Biaya proses pengerjaan dokumen',
        termasukBiaya: [
          'Proses administrasi',
          'Pelatihan dasar',
          'Pembuatan dokumen dasar',
          'Tiket pesawat'
        ],
        tidakTermasukBiaya: [
          'Paspor',
          'MCU (Medical Check Up)',
          'Biaya kebutuhan pribadi'
        ],
        gajiMin: 'Rp 6.949.500',
        gajiMax: 'Rp 7.876.100',
        gajiNote: 'Gaji bulanan (belum termasuk lembur)',
        benefits: [
          'Biaya akomodasi & makan ditanggung',
          'Gaji lembur, transportasi, dan tiket penerbangan',
          'Asuransi kesehatan',
          'Jatah cuti 42 hari/2 tahun + Tiket PP'
        ],
        requirements: [
          'Usia 23 - 45 tahun',
          'Pendidikan minimal SMA/K s/d D3',
          'Pengalaman di bidang terkait'
        ],
        badge: 'Aktif',
        badgeColor: 'success',
        isFree: false,
        catatan: 'Harga dan biaya dapat berubah sewaktu-waktu. Disarankan segera mendaftar untuk mendapatkan harga terbaik!'
      },
      {
        id: 'loker-arab-saudi',
        name: 'Lowongan Kerja Arab Saudi (KAEFER - Oil & Gas)',
        description: 'Cold Insulator & Fabricator',
        price: 'SAR 1.500',
        priceNote: '± Rp 6.766.500',
        biayaProses: 'Hubungi Kami',
        biayaProsesNote: 'Biaya proses dapat berbeda tergantung posisi',
        termasukBiaya: [
          'Proses administrasi dasar',
          'Tiket pesawat'
        ],
        tidakTermasukBiaya: [
          'Paspor',
          'MCU (Medical Check Up)',
          'Biaya kebutuhan pribadi'
        ],
        gajiMin: 'Rp 6.766.500',
        gajiNote: 'Gaji bulanan (belum termasuk lembur)',
        benefits: [
          'Gratis akomodasi & makan',
          'Tiket penerbangan disediakan'
        ],
        requirements: [
          'Usia 20 - 48 tahun',
          'Pengalaman pada bidang terkait'
        ],
        badge: 'Aktif',
        badgeColor: 'success',
        isFree: false,
        catatan: 'Harga dan biaya dapat berubah sewaktu-waktu. Disarankan segera mendaftar untuk mendapatkan harga terbaik!'
      },
      {
        id: 'loker-yunani',
        name: 'Lowongan Kerja Yunani (Hotel Bintang 5)',
        description: 'Chef, Waiters - Program kerja musiman',
        price: 'EUR 1.000 - 1.100',
        priceNote: '± Rp 19.643.000 - Rp 21.607.300',
        biayaProses: 'Rp 55.000.000',
        biayaProsesNote: 'Biaya proses program kerja musiman',
        termasukBiaya: [
          'Visa kerja',
          'Tiket pesawat PP',
          'Akomodasi selama kerja',
          'Proses administrasi'
        ],
        tidakTermasukBiaya: [
          'Paspor',
          'MCU (Medical Check Up)',
          'Biaya kebutuhan pribadi'
        ],
        gajiMin: 'Rp 19.643.000',
        gajiMax: 'Rp 21.607.300',
        gajiNote: 'Gaji bulanan + overtime 6 EUR/jam',
        benefits: [
          'Gratis akomodasi & makan',
          'Lingkungan kerja hotel bintang 5',
          'Overtime: 6 EUR/jam (± Rp 117.858/jam)'
        ],
        requirements: [
          'Usia 22 - 50 tahun',
          'Program berlangsung 7 bulan (dibayar 9 bulan)'
        ],
        badge: 'Aktif',
        badgeColor: 'success',
        isFree: false,
        catatan: 'Harga dan biaya dapat berubah sewaktu-waktu. Disarankan segera mendaftar untuk mendapatkan harga terbaik!'
      },
      {
        id: 'loker-jerman',
        name: 'Lowongan Kerja Jerman (Chef Wanted)',
        description: 'Chef profesional di Jerman',
        price: 'EUR 2.500',
        priceNote: '± Rp 49.107.500',
        biayaProses: 'Rp 60.000.000',
        biayaProsesNote: 'Biaya proses penempatan kerja di Jerman',
        termasukBiaya: [
          'Proses administrasi lengkap',
          'Pelatihan bahasa Jerman dasar',
          'Bantuan pencarian tempat tinggal',
          'Tiket pesawat'
        ],
        tidakTermasukBiaya: [
          'Sertifikat B1 Bahasa Jerman (wajib dimiliki)',
          'Paspor',
          'MCU (Medical Check Up)',
          'Biaya kebutuhan pribadi'
        ],
        gajiMin: 'Rp 49.107.500',
        gajiNote: 'Gaji bulanan (sangat kompetitif)',
        benefits: [
          'Gaji kompetitif secara global',
          'Kesempatan karir di Eropa',
          'Lingkungan kerja profesional'
        ],
        requirements: [
          'Usia 20 - 45 tahun',
          'Pendidikan minimal D3',
          'Wajib memiliki Sertifikat B1 Bahasa Jerman'
        ],
        badge: 'Aktif',
        badgeColor: 'success',
        isFree: false,
        catatan: 'Harga dan biaya dapat berubah sewaktu-waktu. Disarankan segera mendaftar untuk mendapatkan harga terbaik!'
      },
      {
        id: 'loker-jepang',
        name: 'Program "Goes to Japan" (Vokasi & Industri)',
        description: 'Caregiver, Food Service, Konstruksi, dll',
        price: 'Rp 20.000.000 - Rp 30.000.000',
        priceNote: 'Gaji bulanan',
        biayaProses: 'Rp 35.000.000',
        biayaProsesNote: 'Biaya proses program kerja di Jepang',
        termasukBiaya: [
          'Pelatihan bahasa Jepang (sampai N4)',
          'Pelatihan keterampilan kerja (6 bulan)',
          'Asrama selama pelatihan',
          'Proses administrasi',
          'Tiket pesawat'
        ],
        tidakTermasukBiaya: [
          'Paspor',
          'MCU (Medical Check Up)',
          'Biaya kebutuhan pribadi'
        ],
        gajiMin: 'Rp 20.000.000',
        gajiMax: 'Rp 30.000.000',
        gajiNote: 'Gaji bulanan (bervariasi sesuai posisi)',
        benefits: [
          'Pelatihan bahasa Jepang (sampai N4)',
          'Asrama selama pelatihan',
          'Peluang gelar S1 di Jepang (RPL)',
          'Pinjaman biaya pendidikan tersedia'
        ],
        requirements: [
          'Pria/Wanita usia 18 - 35 tahun',
          'Tinggi min. 160cm (Pria) & 155cm (Wanita)',
          'Sehat jasmani/rohani, tidak bertato/tindik'
        ],
        badge: 'Aktif',
        badgeColor: 'success',
        isFree: false,
        catatan: 'Harga dan biaya dapat berubah sewaktu-waktu. Disarankan segera mendaftar untuk mendapatkan harga terbaik!'
      },
      {
        id: 'loker-malaysia-singapura',
        name: 'Lowongan Malaysia & Singapura (Khusus Wanita)',
        description: 'ART, Perawat Bayi, Perawat Lansia',
        price: 'Rp 6.600.000 - Rp 7.000.000',
        priceNote: '+ Lembur',
        biayaProses: 'GRATIS',
        biayaProsesNote: 'Tidak dipungut biaya apapun',
        uangSaku: 'Rp 5.000.000',
        termasukBiaya: [
          'Proses administrasi lengkap',
          'Pelatihan di BLK PJTKI',
          'Ongkos mengantarkan ke tempat pelatihan',
          'Tiket pesawat',
          'Visa kerja'
        ],
        tidakTermasukBiaya: [
          'Paspor (dibantu proses)',
          'MCU (Medical Check Up)',
          'Biaya kebutuhan pribadi'
        ],
        gajiMin: 'Rp 6.600.000',
        gajiMax: 'Rp 7.000.000',
        gajiNote: 'Gaji bersih + lembur',
        benefits: [
          'GRATIS - Tidak dipungut biaya',
          'Dapat uang saku ± Rp 5.000.000',
          'Tinggal & konsumsi disediakan',
          'Proses penempatan cepat & resmi'
        ],
        requirements: [
          'Khusus Wanita',
          'Usia 21 - 40 tahun (Malaysia), 23 - 37 tahun (Singapura)',
          'Izin resmi dari keluarga'
        ],
        badge: 'GRATIS',
        badgeColor: 'warning',
        isFree: true,
        catatan: 'Harga dan biaya dapat berubah sewaktu-waktu. Disarankan segera mendaftar untuk mendapatkan harga terbaik!'
      },
      {
        id: 'loker-restoran-hotel',
        name: 'Lowongan Restoran & Hotel Bintang 5',
        description: 'Staff Restoran, Hotel - Berbagai negara',
        price: 'Variatif',
        priceNote: 'Gaji sesuai posisi & negara',
        biayaProses: 'Rp 8.000.000',
        biayaProsesNote: 'Biaya proses termasuk visa & tiket',
        termasukBiaya: [
          'Visa kerja',
          'Tiket pesawat',
          'Proses administrasi'
        ],
        tidakTermasukBiaya: [
          'Paspor',
          'MCU (Medical Check Up)',
          'Biaya kebutuhan pribadi'
        ],
        gajiMin: 'Rp 6.000.000',
        gajiMax: 'Rp 10.000.000',
        gajiNote: 'Gaji bersih (bervariasi sesuai negara)',
        benefits: [
          'Tidak ada potongan gaji',
          'Tinggal & konsumsi disediakan',
          'Lingkungan kerja profesional',
          'Peluang karir di luar negeri'
        ],
        requirements: [
          'Usia 21 - 40 tahun',
          'Pendidikan minimal SMA/SMK',
          'Bersedia ditempatkan di luar negeri'
        ],
        badge: 'Populer',
        badgeColor: 'warning',
        isFree: false,
        catatan: 'Harga dan biaya dapat berubah sewaktu-waktu. Disarankan segera mendaftar untuk mendapatkan harga terbaik!'
      }
    ]
  },
  {
    id: 'pendidikan',
    name: 'Pendidikan',
    description: 'Program pendidikan profesi bersama LP3I College',
    icon: 'graduation',
    gradient: 'from-blue-500 to-indigo-600',
    items: [
      {
        id: 'pendidikan-digital-marketing',
        name: 'Program Profesi Digital Marketing',
        description: 'Program pendidikan profesi Digital Marketing bersama LP3I College',
        price: 'Rp 5.000.000',
        priceNote: 'Per semester',
        benefits: [
          'Sertifikat profesi dari LP3I',
          'Materi sesuai kebutuhan industri',
          'Praktik langsung dengan project nyata',
          'Bantuan penempatan kerja'
        ],
        requirements: [
          'Minimal SMA/SMK/sederajat',
          'Usia minimal 18 tahun',
          'Memiliki laptop/smartphone'
        ],
        badge: 'Populer',
        badgeColor: 'warning'
      },
      {
        id: 'pendidikan-administrasi',
        name: 'Program Profesi Administrasi Perkantoran',
        description: 'Program pendidikan profesi Administrasi Perkantoran',
        price: 'Rp 4.500.000',
        priceNote: 'Per semester',
        benefits: [
          'Sertifikat profesi dari LP3I',
          'Materi sesuai kebutuhan industri',
          'Praktik langsung dengan project nyata',
          'Bantuan penempatan kerja'
        ],
        requirements: [
          'Minimal SMA/SMK/sederajat',
          'Usia minimal 18 tahun',
          'Memiliki laptop/smartphone'
        ]
      },
      {
        id: 'pendidikan-akuntansi',
        name: 'Program Profesi Akuntansi & Keuangan',
        description: 'Program pendidikan profesi Akuntansi & Keuangan',
        price: 'Rp 4.500.000',
        priceNote: 'Per semester',
        benefits: [
          'Sertifikat profesi dari LP3I',
          'Materi sesuai kebutuhan industri',
          'Praktik langsung dengan project nyata',
          'Bantuan penempatan kerja'
        ],
        requirements: [
          'Minimal SMA/SMK/sederajat',
          'Usia minimal 18 tahun',
          'Memiliki laptop/smartphone'
        ]
      }
    ]
  }
]

// Helper function untuk mendapatkan katalog berdasarkan ID
export function getKatalogById(id: string): HargaKatalog | undefined {
  return hargaKatalog.find(katalog => katalog.id === id)
}

// Helper function untuk mendapatkan item harga berdasarkan ID
export function getHargaItemById(katalogId: string, itemId: string): HargaItem | undefined {
  const katalog = getKatalogById(katalogId)
  if (!katalog) return undefined
  return katalog.items.find(item => item.id === itemId)
}