/**
 * Skema Sertifikasi BNSP Data
 * File: src/data/skemaData.ts
 * Purpose: Data skema sertifikasi kompetensi dari LSP P1 LP3I BNSP
 * Source: https://lp3i.lspbnsp.id/daftar-skema
 * Total: 57 Skema Sertifikasi
 */

// Interface untuk Skema Sertifikasi
export interface SkemaSertifikasi {
  id: string
  kode: string
  nama: string
  jumlahUnit: number
  jenis: 'Klaster' | 'KKNI'
  kategori: SkemaKategori
  deskripsi: string
  persyaratan: string[]
  unitKompetensi: string[]
  manfaat: string[]
}

// Kategori Skema
export type SkemaKategori = 
  | 'it-programming'
  | 'design-multimedia'
  | 'business-trade'
  | 'hr-administration'
  | 'accounting-tax'
  | 'marketing-digital'
  | 'other-professional'

export interface SkemaKategoriInfo {
  id: SkemaKategori
  nama: string
  deskripsi: string
  icon: string
  gradient: string
}

export const skemaKategoriList: SkemaKategoriInfo[] = [
  {
    id: 'it-programming',
    nama: 'IT & Programming',
    deskripsi: 'Skema sertifikasi di bidang teknologi informasi dan pemrograman',
    icon: 'code',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'design-multimedia',
    nama: 'Design & Multimedia',
    deskripsi: 'Skema sertifikasi di bidang desain grafis dan multimedia',
    icon: 'palette',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'business-trade',
    nama: 'Business & Trade',
    deskripsi: 'Skema sertifikasi di bidang bisnis dan perdagangan ekspor-impor',
    icon: 'briefcase',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'hr-administration',
    nama: 'HR & Administration',
    deskripsi: 'Skema sertifikasi di bidang SDM dan administrasi',
    icon: 'users',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    id: 'accounting-tax',
    nama: 'Accounting & Tax',
    deskripsi: 'Skema sertifikasi di bidang akuntansi dan perpajakan',
    icon: 'calculator',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'marketing-digital',
    nama: 'Marketing & Digital',
    deskripsi: 'Skema sertifikasi di bidang pemasaran dan digital',
    icon: 'trending',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    id: 'other-professional',
    nama: 'Other Professional',
    deskripsi: 'Skema sertifikasi profesional lainnya',
    icon: 'award',
    gradient: 'from-gray-500 to-slate-600'
  }
]

// Helper function untuk membuat skema
const createSkema = (
  id: string,
  kode: string,
  nama: string,
  jumlahUnit: number,
  jenis: 'Klaster' | 'KKNI',
  kategori: SkemaKategori,
  deskripsi: string,
  persyaratan: string[],
  unitKompetensi: string[],
  manfaat: string[]
): SkemaSertifikasi => ({
  id, kode, nama, jumlahUnit, jenis, kategori, deskripsi, persyaratan, unitKompetensi, manfaat
})

// Data lengkap 57 Skema Sertifikasi BNSP
export const skemaSertifikasi: SkemaSertifikasi[] = [
  // ==================== IT & PROGRAMMING (15 Skema) ====================
  createSkema('skema-001', 'JWP-001', 'Junior Web Programmer', 11, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk programmer web tingkat junior yang mampu mengembangkan aplikasi web menggunakan teknologi web modern.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memiliki pengetahuan dasar HTML, CSS, JavaScript', 'Mampu menggunakan framework web', 'Memiliki portfolio atau pengalaman proyek web'],
    ['Menerapkan prinsip-prinsip pemrograman web', 'Mengembangkan aplikasi web dengan HTML/CSS', 'Mengembangkan aplikasi web dengan JavaScript', 'Mengelola database untuk aplikasi web', 'Menerapkan keamanan aplikasi web'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi di bidang web development', 'Meningkatkan peluang karir sebagai web developer', 'Validasi kemampuan teknis']
  ),
  createSkema('skema-002', 'JDP-001', 'Junior Database Programmer', 14, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk programmer database tingkat junior yang mampu mengelola dan mengembangkan sistem database.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memiliki pengetahuan dasar SQL', 'Mampu menggunakan DBMS (MySQL, PostgreSQL, SQL Server)', 'Memahami konsep normalisasi database'],
    ['Menerapkan perintah SQL dasar', 'Mengelola struktur database', 'Mengoptimasi query database', 'Menerapkan keamanan database', 'Melakukan backup dan recovery database'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi di bidang database', 'Meningkatkan peluang karir sebagai database administrator', 'Validasi kemampuan teknis database']
  ),
  createSkema('skema-003', 'DBA-001', 'Database Administrator', 12, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk administrator database yang mampu mengelola sistem database secara profesional.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Pengalaman minimal 2 tahun di bidang database', 'Menguasai DBMS enterprise', 'Memahami konsep high availability dan disaster recovery'],
    ['Mengelola instalasi dan konfigurasi DBMS', 'Mengelola keamanan database', 'Melakukan tuning dan optimasi performa', 'Mengelola backup dan recovery', 'Menerapkan replikasi dan clustering'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai profesional database administrator', 'Meningkatkan kredibilitas di industri IT', 'Validasi kemampuan manajemen database enterprise']
  ),
  createSkema('skema-004', 'NT-001', 'Network Technician', 10, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk teknisi jaringan yang mampu mengelola infrastruktur jaringan komputer.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami konsep jaringan komputer (OSI Model, TCP/IP)', 'Mampu mengkonfigurasi router dan switch', 'Memiliki pengetahuan dasar keamanan jaringan'],
    ['Menginstalasi perangkat jaringan', 'Mengkonfigurasi perangkat jaringan', 'Melakukan troubleshooting jaringan', 'Menerapkan keamanan jaringan dasar', 'Mendokumentasikan konfigurasi jaringan'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi di bidang networking', 'Meningkatkan peluang karir sebagai network technician', 'Validasi kemampuan teknis jaringan']
  ),
  createSkema('skema-005', 'JTS-001', 'Junior Technical Support', 8, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk technical support tingkat junior yang mampu memberikan dukungan teknis kepada pengguna.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami sistem operasi Windows/Linux', 'Mampu melakukan troubleshooting hardware dan software', 'Memiliki kemampuan komunikasi yang baik'],
    ['Mendiagnosis masalah hardware', 'Mendiagnosis masalah software', 'Memberikan solusi teknis kepada pengguna', 'Mendokumentasikan masalah dan solusi', 'Menerapkan prosedur helpdesk'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi di bidang technical support', 'Meningkatkan peluang karir di IT support', 'Validasi kemampuan troubleshooting']
  ),
  createSkema('skema-006', 'TS-001', 'Technical Support', 10, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk technical support yang mampu memberikan dukungan teknis tingkat lanjut.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Pengalaman minimal 1 tahun di bidang IT support', 'Menguasai troubleshooting hardware dan software', 'Memahami jaringan dan sistem operasi'],
    ['Melakukan troubleshooting tingkat lanjut', 'Mengelola inventaris IT', 'Menerapkan SOP helpdesk', 'Memberikan pelatihan kepada pengguna', 'Mengelola tiket dan eskalasi'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai profesional technical support', 'Meningkatkan kredibilitas di industri IT', 'Validasi kemampuan problem solving']
  ),
  createSkema('skema-007', 'PA-001', 'Analis Program (Program Analyst)', 12, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk analis program yang mampu menganalisis kebutuhan dan merancang solusi perangkat lunak.',
    ['Minimal pendidikan S1 bidang informatika/sistem informasi', 'Pengalaman minimal 2 tahun di bidang analisis sistem', 'Mampu membuat dokumentasi teknis', 'Memahami metodologi pengembangan software'],
    ['Mengumpulkan kebutuhan pengguna', 'Menganalisis kebutuhan sistem', 'Merancang solusi perangkat lunak', 'Membuat dokumentasi teknis', 'Melakukan testing dan validasi'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai profesional program analyst', 'Meningkatkan peluang karir di bidang analisis sistem', 'Validasi kemampuan analitis']
  ),
  createSkema('skema-008', 'DS-001', 'Ilmuwan Data (Data Scientist)', 15, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk data scientist yang mampu menganalisis data dan membangun model machine learning.',
    ['Minimal pendidikan S1 bidang informatika/statistika/matematika', 'Pengalaman minimal 2 tahun di bidang data science', 'Menguasai Python/R untuk data analysis', 'Memahami algoritma machine learning'],
    ['Melakukan exploratory data analysis', 'Membangun model machine learning', 'Mengevaluasi performa model', 'Membuat visualisasi data', 'Mengkomunikasikan insight dari data'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai profesional data scientist', 'Meningkatkan peluang karir di bidang data', 'Validasi kemampuan analisis data']
  ),
  createSkema('skema-009', 'JCS-001', 'Junior Cyber Security', 12, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk junior cyber security yang mampu mengamankan sistem dan jaringan dari ancaman cyber.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Memahami konsep keamanan jaringan', 'Mampu melakukan vulnerability assessment', 'Memahami standar keamanan informasi'],
    ['Mengidentifikasi ancaman keamanan', 'Melakukan vulnerability scanning', 'Menerapkan keamanan jaringan', 'Melakukan incident response', 'Mendokumentasikan keamanan sistem'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi di bidang cyber security', 'Meningkatkan peluang karir di bidang keamanan siber', 'Validasi kemampuan security']
  ),
  createSkema('skema-010', 'JMC-001', 'Mobile Computing Junior', 10, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk developer mobile tingkat junior yang mampu mengembangkan aplikasi mobile.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar pemrograman', 'Mampu menggunakan Android Studio atau Xcode', 'Memahami UI/UX mobile'],
    ['Mengembangkan aplikasi mobile dasar', 'Mengelola data lokal di aplikasi mobile', 'Mengintegrasikan API di aplikasi mobile', 'Menerapkan UI/UX mobile', 'Melakukan testing aplikasi mobile'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi di bidang mobile development', 'Meningkatkan peluang karir sebagai mobile developer', 'Validasi kemampuan pengembangan aplikasi mobile']
  ),
  createSkema('skema-011', 'MCS-001', 'Mobile Computing Senior', 14, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk senior mobile developer yang mampu mengembangkan aplikasi mobile kompleks.',
    ['Minimal pendidikan D3/S1 bidang informatika', 'Pengalaman minimal 3 tahun di mobile development', 'Menguasai cross-platform development', 'Memahami arsitektur aplikasi mobile'],
    ['Merancang arsitektur aplikasi mobile', 'Mengembangkan aplikasi mobile kompleks', 'Mengoptimasi performa aplikasi', 'Menerapkan keamanan aplikasi mobile', 'Mengelola deployment ke app store'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai senior mobile developer', 'Meningkatkan kredibilitas di industri mobile', 'Validasi kemampuan advanced mobile development']
  ),
  createSkema('skema-012', 'MPC-001', 'Mobile Programming Clerk', 8, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk mobile programming clerk yang mampu mendukung pengembangan aplikasi mobile.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar pemrograman', 'Mampu menggunakan tools development', 'Memiliki kemampuan dokumentasi'],
    ['Mendokumentasikan spesifikasi aplikasi', 'Melakukan testing aplikasi mobile', 'Mendukung proses deployment', 'Membuat laporan pengembangan', 'Mengelola versi kode'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi di bidang mobile programming', 'Meningkatkan peluang karir di IT', 'Validasi kemampuan dokumentasi teknis']
  ),
  createSkema('skema-013', 'JMP-001', 'Junior Mobile Programmer', 10, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk junior mobile programmer yang mampu mengembangkan aplikasi mobile dasar.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar pemrograman', 'Mampu menggunakan IDE mobile development', 'Memahami konsep OOP'],
    ['Mengembangkan aplikasi mobile dasar', 'Mengelola data lokal', 'Mengintegrasikan API', 'Menerapkan UI/UX dasar', 'Melakukan debugging'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi mobile programming', 'Meningkatkan peluang karir', 'Validasi kemampuan teknis']
  ),
  createSkema('skema-014', 'JNA-001', 'Junior Network Administrator', 10, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk junior network administrator yang mampu mengelola jaringan komputer.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami konsep jaringan komputer', 'Mampu mengkonfigurasi perangkat jaringan', 'Memahami protocol TCP/IP'],
    ['Mengelola konfigurasi jaringan', 'Melakukan monitoring jaringan', 'Menerapkan keamanan jaringan dasar', 'Melakukan troubleshooting', 'Mendokumentasikan jaringan'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi network administration', 'Meningkatkan peluang karir', 'Validasi kemampuan teknis jaringan']
  ),
  createSkema('skema-015', 'PCC-001', 'Pengamanan Cloud Computing', 12, 'Klaster', 'it-programming',
    'Skema sertifikasi untuk profesional yang mampu mengamankan infrastruktur cloud computing.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Memahami konsep cloud computing', 'Pengalaman dengan platform cloud (AWS/Azure/GCP)', 'Memahami keamanan cloud'],
    ['Mengamankan infrastruktur cloud', 'Menerapkan identity management', 'Melakukan monitoring keamanan', 'Mengelola backup cloud', 'Menerapkan compliance cloud'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi cloud security', 'Meningkatkan peluang karir di cloud', 'Validasi kemampuan keamanan cloud']
  ),

  // ==================== DESIGN & MULTIMEDIA (5 Skema) ====================
  createSkema('skema-016', 'JGD-001', 'Tenaga Junior Graphic Designer', 15, 'Klaster', 'design-multimedia',
    'Skema sertifikasi untuk desainer grafis tingkat junior yang mampu membuat desain visual profesional.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu menggunakan Adobe Photoshop/Illustrator', 'Memahami prinsip desain visual', 'Memiliki portfolio desain'],
    ['Membuat desain grafis untuk media cetak', 'Membuat desain untuk media digital', 'Menerapkan prinsip tipografi', 'Mengolah gambar digital', 'Membuat layout desain'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi desain grafis', 'Meningkatkan peluang karir sebagai desainer', 'Validasi kemampuan desain visual']
  ),
  createSkema('skema-017', 'TA2-001', 'Tenaga Animator 2D', 10, 'Klaster', 'design-multimedia',
    'Skema sertifikasi untuk animator 2D yang mampu membuat animasi untuk berbagai media.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu menggunakan software animasi 2D', 'Memahami prinsip animasi', 'Memiliki portfolio animasi'],
    ['Membuat storyboard animasi', 'Membuat karakter animasi', 'Membuat animasi 2D', 'Mengedit dan mengomposisi animasi', 'Mengekspor animasi'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi animasi 2D', 'Meningkatkan peluang karir sebagai animator', 'Validasi kemampuan animasi']
  ),
  createSkema('skema-018', 'TVE-001', 'Tenaga Video Editor', 11, 'Klaster', 'design-multimedia',
    'Skema sertifikasi untuk video editor yang mampu mengedit video untuk berbagai kebutuhan.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu menggunakan Adobe Premiere/Final Cut', 'Memahami teknik editing video', 'Memiliki portfolio video editing'],
    ['Mengimpor dan mengorganisir footage', 'Melakukan editing video', 'Menerapkan efek dan transisi', 'Melakukan color grading', 'Mengekspor video final'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi video editing', 'Meningkatkan peluang karir sebagai video editor', 'Validasi kemampuan editing']
  ),
  createSkema('skema-019', 'TDI-001', 'Tenaga Digital Imaging', 8, 'Klaster', 'design-multimedia',
    'Skema sertifikasi untuk digital imaging yang mampu mengolah dan memanipulasi gambar digital.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu menggunakan Adobe Photoshop', 'Memahami teknik pengolahan gambar', 'Memiliki portfolio digital imaging'],
    ['Melakukan retouching gambar', 'Melakukan manipulasi gambar', 'Membuat komposisi digital', 'Mengoptimasi gambar untuk berbagai media', 'Membuat efek digital'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi digital imaging', 'Meningkatkan peluang karir', 'Validasi kemampuan pengolahan gambar']
  ),
  createSkema('skema-020', 'DIP-001', 'Digital Imaging Public', 8, 'Klaster', 'design-multimedia',
    'Skema sertifikasi untuk digital imaging public yang mampu mengolah gambar untuk kebutuhan publik.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu menggunakan software digital imaging', 'Memahami kebutuhan visual publik', 'Memiliki portfolio'],
    ['Mengolah gambar untuk media sosial', 'Membuat konten visual untuk publik', 'Mengoptimasi gambar untuk web', 'Membuat infografis', 'Mengelola aset digital'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi digital imaging', 'Meningkatkan peluang karir', 'Validasi kemampuan visual content']
  ),
  createSkema('skema-021', 'I3D-001', 'Intermediate 3D Animator', 12, 'Klaster', 'design-multimedia',
    'Skema sertifikasi untuk 3D animator tingkat menengah yang mampu membuat animasi 3D.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Mampu menggunakan Blender/Maya/3ds Max', 'Pengalaman minimal 2 tahun di 3D animation', 'Memahami rigging dan texturing'],
    ['Membuat model 3D', 'Melakukan rigging karakter', 'Membuat animasi 3D', 'Melakukan texturing dan shading', 'Merender animasi 3D'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi 3D animation', 'Meningkatkan peluang karir di industri kreatif', 'Validasi kemampuan 3D']
  ),

  // ==================== BUSINESS & TRADE (10 Skema) ====================
  createSkema('skema-022', 'PBE-001', 'Perdagangan Besar Sub Ekspor Bidang Penyelia Impor', 9, 'KKNI', 'business-trade',
    'Skema sertifikasi untuk penyelia impor yang mampu mengelola proses impor barang.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Pengalaman di bidang ekspor-impor', 'Memahami regulasi impor', 'Mampu mengelola dokumentasi impor'],
    ['Mengelola proses impor', 'Menyusun dokumentasi impor', 'Menghitung bea dan pajak impor', 'Mengelola logistics impor', 'Menerapkan compliance impor'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi impor', 'Meningkatkan peluang karir di perdagangan internasional', 'Validasi kemampuan import management']
  ),
  createSkema('skema-023', 'PAI-001', 'Perdagangan Besar Sub Ekspor Bidang Ahli Impor', 9, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk ahli impor yang mampu mengelola operasi impor secara strategis.',
    ['Minimal pendidikan S1 bidang terkait', 'Pengalaman minimal 3 tahun di bidang impor', 'Menguasai regulasi perdagangan internasional', 'Memahami supply chain global'],
    ['Merencanakan strategi impor', 'Mengelola supplier internasional', 'Mengoptimasi biaya impor', 'Mengelola risiko impor', 'Menerapkan best practice impor'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai ahli impor', 'Meningkatkan kredibilitas di industri perdagangan', 'Validasi kemampuan strategic import']
  ),
  createSkema('skema-024', 'PAE-001', 'Perdagangan Besar Sub Ekspor Bidang Ahli Ekspor', 11, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk ahli ekspor yang mampu mengelola operasi ekspor secara strategis.',
    ['Minimal pendidikan S1 bidang terkait', 'Pengalaman minimal 3 tahun di bidang ekspor', 'Menguasai regulasi ekspor', 'Memahami pasar internasional'],
    ['Merencanakan strategi ekspor', 'Mengelola buyer internasional', 'Mengoptimasi biaya ekspor', 'Mengelola risiko ekspor', 'Menerapkan best practice ekspor'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai ahli ekspor', 'Meningkatkan kredibilitas di industri perdagangan', 'Validasi kemampuan strategic export']
  ),
  createSkema('skema-025', 'PPE-001', 'Perdagangan Besar Sub Ekspor Bidang Penyelia Ekspor', 9, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk penyelia ekspor yang mampu mengelola proses ekspor barang.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Pengalaman di bidang ekspor-impor', 'Memahami regulasi ekspor', 'Mampu mengelola dokumentasi ekspor'],
    ['Mengelola proses ekspor', 'Menyusun dokumentasi ekspor', 'Mengelola logistics ekspor', 'Menerapkan compliance ekspor', 'Mengelola buyer relation'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi ekspor', 'Meningkatkan peluang karir di perdagangan internasional', 'Validasi kemampuan export management']
  ),
  createSkema('skema-026', 'PPB-001', 'Pelayanan Perjalanan Bisnis', 8, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk profesional yang mampu mengelola perjalanan bisnis.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami industri travel', 'Mampu menggunakan sistem reservasi', 'Memiliki kemampuan komunikasi baik'],
    ['Merencanakan perjalanan bisnis', 'Melakukan reservasi travel', 'Mengelola itinerary', 'Menangani masalah perjalanan', 'Membuat laporan perjalanan'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi business travel', 'Meningkatkan peluang karir di industri travel', 'Validasi kemampuan travel management']
  ),
  createSkema('skema-027', 'PEI-001', 'Pelaksana Ekspor Impor', 8, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk pelaksana ekspor impor yang mampu menjalankan prosedur ekspor impor.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar-dasar ekspor impor', 'Mampu mengelola dokumentasi', 'Memahami regulasi perdagangan'],
    ['Menyiapkan dokumen ekspor impor', 'Melakukan prosedur bea cukai', 'Mengelola pengiriman barang', 'Menghitung biaya ekspor impor', 'Membuat laporan'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi ekspor impor', 'Meningkatkan peluang karir di perdagangan', 'Validasi kemampuan operasional']
  ),
  createSkema('skema-028', 'TKE-001', 'Tata Kelola Ekspor Impor', 10, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk profesional yang mampu mengelola tata kelola ekspor impor.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Pengalaman di bidang ekspor impor', 'Memahami regulasi perdagangan', 'Mampu menyusun SOP'],
    ['Menyusun SOP ekspor impor', 'Mengelola compliance', 'Melakukan audit internal', 'Mengelola dokumentasi', 'Menerapkan continuous improvement'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi tata kelola', 'Meningkatkan peluang karir managerial', 'Validasi kemampuan governance']
  ),
  createSkema('skema-029', 'STE-001', 'Supervisor Tata Kelola Ekspor Impor', 12, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk supervisor yang mampu mengawasi operasi ekspor impor.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Pengalaman minimal 3 tahun di ekspor impor', 'Memahami regulasi lengkap', 'Mampu memimpin tim'],
    ['Mengawasi operasi ekspor impor', 'Mengelola tim', 'Melakukan evaluasi kinerja', 'Menangani masalah operasional', 'Membuat laporan manajemen'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai supervisor', 'Meningkatkan kredibilitas leadership', 'Validasi kemampuan supervisory']
  ),
  createSkema('skema-030', 'ATE-001', 'Ahli Tata Kelola Ekspor Impor', 14, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk ahli yang mampu merancang dan mengelola sistem ekspor impor.',
    ['Minimal pendidikan S1 bidang terkait', 'Pengalaman minimal 5 tahun di ekspor impor', 'Menguasai regulasi internasional', 'Mampu strategic planning'],
    ['Merancang sistem ekspor impor', 'Melakukan strategic planning', 'Mengelola stakeholder', 'Menerapkan best practice', 'Melakukan continuous improvement'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai ahli', 'Meningkatkan kredibilitas executive', 'Validasi kemampuan strategic']
  ),
  createSkema('skema-031', 'LAO-001', 'Logistic Administrative Officer', 10, 'Klaster', 'business-trade',
    'Skema sertifikasi untuk officer yang mampu mengelola administrasi logistik.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar logistik', 'Mampu mengelola dokumentasi', 'Memahami supply chain'],
    ['Mengelola dokumentasi logistik', 'Melakukan tracking shipment', 'Mengkoordinasi pengiriman', 'Membuat laporan logistik', 'Mengelola inventory'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi logistik', 'Meningkatkan peluang karir di supply chain', 'Validasi kemampuan administrasi']
  ),

  // ==================== HR & ADMINISTRATION (8 Skema) ====================
  createSkema('skema-032', 'ASS-001', 'Analisis Senior Sumber Daya Manusia', 12, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk senior HR analyst yang mampu menganalisis dan merencanakan SDM.',
    ['Minimal pendidikan S1 bidang psikologi/HR', 'Pengalaman minimal 5 tahun di HR', 'Mampu melakukan analisis HR', 'Memahami workforce planning'],
    ['Melakukan analisis kebutuhan SDM', 'Merencanakan workforce', 'Menganalisis kinerja organisasi', 'Membuat rekomendasi strategis', 'Mengelola data HR analytics'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai senior HR analyst', 'Meningkatkan kredibilitas di HR', 'Validasi kemampuan analitis HR']
  ),
  createSkema('skema-033', 'MSD-001', 'Manajer Sumber Daya Manusia', 14, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk HR manager yang mampu mengelola fungsi SDM secara strategis.',
    ['Minimal pendidikan S1 bidang psikologi/HR/Manajemen', 'Pengalaman minimal 5 tahun di HR', 'Mampu strategic planning', 'Memahami business partnering'],
    ['Merencanakan strategi SDM', 'Mengelola fungsi HR', 'Melakukan business partnering', 'Mengelola change management', 'Mengembangkan talent strategy'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai HR Manager', 'Meningkatkan kredibilitas leadership', 'Validasi kemampuan strategic HR']
  ),
  createSkema('skema-034', 'SSD-001', 'Supervisor Sumber Daya Manusia', 10, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk HR supervisor yang mampu mengawasi operasi HR.',
    ['Minimal pendidikan D3/S1 bidang terkait', 'Pengalaman minimal 3 tahun di HR', 'Mampu memimpin tim', 'Memahami operasi HR'],
    ['Mengawasi operasi HR', 'Mengelola tim HR', 'Melakukan monitoring kinerja', 'Menangani employee relations', 'Membuat laporan HR'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan sebagai HR Supervisor', 'Meningkatkan peluang karir supervisory', 'Validasi kemampuan leadership']
  ),
  createSkema('skema-035', 'TAK-001', 'Tenaga Administrasi Kepegawaian', 6, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk administrasi kepegawaian yang mampu mengelola data karyawan.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami administrasi kepegawaian', 'Mampu mengelola data', 'Memahami regulasi ketenagakerjaan'],
    ['Mengelola data karyawan', 'Memproses administrasi kepegawaian', 'Menyusun laporan kepegawaian', 'Mengelola absensi dan cuti', 'Mendokumentasikan kebijakan HR'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi administrasi kepegawaian', 'Meningkatkan peluang karir di HR', 'Validasi kemampuan administrasi']
  ),
  createSkema('skema-036', 'TAP-001', 'Tenaga Administrasi Perkantoran', 5, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk administrasi perkantoran yang mampu mengelola operasi kantor.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu mengoperasikan komputer', 'Memiliki kemampuan komunikasi', 'Memahami prosedur perkantoran'],
    ['Mengelola surat menyurat', 'Mengatur jadwal dan pertemuan', 'Mengelola arsip dokumen', 'Melayani tamu dan telepon', 'Mengelola perlengkapan kantor'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi administrasi', 'Meningkatkan peluang karir', 'Validasi kemampuan office management']
  ),
  createSkema('skema-037', 'PAP-001', 'Pelayanan Administrasi Pimpinan', 3, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk sekretaris pimpinan yang mampu mendukung eksekutif.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu mengoperasikan komputer', 'Memiliki kemampuan komunikasi baik', 'Memahami etika bisnis'],
    ['Mengatur jadwal pimpinan', 'Menyiapkan dokumen dan presentasi', 'Mengelola komunikasi pimpinan', 'Mengatur pertemuan dan rapat', 'Mendukung kegiatan pimpinan'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi executive secretary', 'Meningkatkan peluang karir', 'Validasi kemampuan sekretaris']
  ),
  createSkema('skema-038', 'KHM-001', 'Kehumasan', 8, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk profesional humas yang mampu mengelola hubungan masyarakat.',
    ['Minimal pendidikan D3/S1 bidang komunikasi/PR', 'Memahami media relations', 'Mampu membuat press release', 'Memiliki kemampuan komunikasi'],
    ['Mengelola hubungan media', 'Membuat press release', 'Mengelola crisis communication', 'Mengorganisir event', 'Mengelola corporate communication'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi public relations', 'Meningkatkan peluang karir di PR', 'Validasi kemampuan komunikasi']
  ),
  createSkema('skema-039', 'TOK-001', 'Tenaga Operator Komputer', 5, 'Klaster', 'hr-administration',
    'Skema sertifikasi untuk operator komputer yang mampu mengoperasikan komputer untuk keperluan kantor.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Mampu mengoperasikan Microsoft Office', 'Memahami sistem operasi komputer', 'Mampu mengelola data'],
    ['Mengoperasikan aplikasi office', 'Mengelola file dan dokumen', 'Melakukan input data', 'Membuat laporan', 'Mengelola email dan komunikasi digital'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi operator komputer', 'Meningkatkan peluang karir', 'Validasi kemampuan IT dasar']
  ),

  // ==================== ACCOUNTING & TAX (8 Skema) ====================
  createSkema('skema-040', 'TAM-001', 'Teknisi Akuntansi Muda', 10, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk teknisi akuntansi tingkat muda yang mampu melakukan pembukuan.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar-dasar akuntansi', 'Mampu menggunakan software akuntansi', 'Memahami siklus akuntansi'],
    ['Melakukan pencatatan transaksi', 'Membuat jurnal dan ledger', 'Menyusun laporan keuangan dasar', 'Mengelola piutang dan hutang', 'Melakukan rekonsiliasi bank'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi akuntansi', 'Meningkatkan peluang karir di akuntansi', 'Validasi kemampuan bookkeeping']
  ),
  createSkema('skema-041', 'TAP-002', 'Teknisi Akuntansi Pratama', 8, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk teknisi akuntansi tingkat pratama.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar akuntansi', 'Mampu melakukan pencatatan', 'Memahami laporan keuangan'],
    ['Melakukan pencatatan dasar', 'Membuat laporan keuangan sederhana', 'Mengelola kas dan bank', 'Mendokumentasikan transaksi', 'Membantu proses audit'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi akuntansi dasar', 'Meningkatkan peluang karir', 'Validasi kemampuan entry-level']
  ),
  createSkema('skema-042', 'TAK-002', 'Teknisi Akuntansi Madya', 12, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk teknisi akuntansi tingkat madya.',
    ['Minimal pendidikan D3/S1 bidang akuntansi', 'Pengalaman minimal 2 tahun di akuntansi', 'Mampu menyusun laporan keuangan', 'Memahami standar akuntansi'],
    ['Menyusun laporan keuangan lengkap', 'Melakukan analisis laporan keuangan', 'Mengelola fixed asset', 'Melakukan penyesuaian akuntansi', 'Membantu proses audit'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi akuntansi intermediate', 'Meningkatkan peluang karir senior', 'Validasi kemampuan akuntansi']
  ),
  createSkema('skema-043', 'TAS-001', 'Teknisi Akuntansi Madya-Syariah', 12, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk teknisi akuntansi syariah tingkat madya.',
    ['Minimal pendidikan D3/S1 bidang akuntansi/ekonomi islam', 'Pengalaman di lembaga keuangan syariah', 'Memahami PSAK Syariah', 'Mampu menyusun laporan keuangan syariah'],
    ['Menyusun laporan keuangan syariah', 'Mengelola transaksi syariah', 'Melakukan analisis keuangan syariah', 'Menerapkan prinsip akuntansi syariah', 'Membantu audit syariah'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi akuntansi syariah', 'Meningkatkan peluang karir di lembaga syariah', 'Validasi kemampuan akuntansi syariah']
  ),
  createSkema('skema-044', 'TPP-001', 'Teknisi Perpajakan Pajak Penghasilan Orang Pribadi', 8, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk teknisi perpajakan yang mampu mengelola pajak orang pribadi.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar perpajakan', 'Mampu menghitung PPh Orang Pribadi', 'Memahami regulasi perpajakan'],
    ['Menghitung PPh Orang Pribadi', 'Menyusun SPT Orang Pribadi', 'Melakukan konsultasi pajak dasar', 'Mengelola administrasi perpajakan', 'Membantu tax planning'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi perpajakan individual', 'Meningkatkan peluang karir di tax', 'Validasi kemampuan pajak OP']
  ),
  createSkema('skema-045', 'TPP-002', 'Teknisi Perpajakan Pajak Penghasilan Pasal 21', 8, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk teknisi perpajakan yang mampu mengelola PPh Pasal 21.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar perpajakan', 'Mampu menghitung PPh 21', 'Memahami regulasi PPh 21'],
    ['Menghitung PPh Pasal 21', 'Menyusun SPT PPh 21', 'Melakukan konsultasi PPh 21', 'Mengelola administrasi PPh 21', 'Membantu tax planning karyawan'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi PPh 21', 'Meningkatkan peluang karir di tax', 'Validasi kemampuan pajak penghasilan']
  ),
  createSkema('skema-046', 'TPB-001', 'Teknik Perpajakan PPh Badan', 10, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk teknisi perpajakan yang mampu mengelola PPh Badan.',
    ['Minimal pendidikan D3/S1 bidang akuntansi/pajak', 'Pengalaman di bidang perpajakan', 'Mampu menghitung PPh Badan', 'Memahami regulasi PPh Badan'],
    ['Menghitung PPh Badan', 'Menyusun SPT Badan', 'Melakukan rekonsiliasi fiskal', 'Melakukan tax planning', 'Membantu tax review'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi PPh Badan', 'Meningkatkan peluang karir di tax corporate', 'Validasi kemampuan pajak badan']
  ),
  createSkema('skema-047', 'MAU-001', 'Melaksanakan Audit', 12, 'Klaster', 'accounting-tax',
    'Skema sertifikasi untuk auditor yang mampu melaksanakan audit.',
    ['Minimal pendidikan D3/S1 bidang akuntansi', 'Pengalaman di bidang audit', 'Memahami standar audit', 'Mampu melakukan prosedur audit'],
    ['Melakukan perencanaan audit', 'Melaksanakan prosedur audit', 'Mengumpulkan bukti audit', 'Membuat working paper', 'Membantu penyusunan laporan audit'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi audit', 'Meningkatkan peluang karir di audit', 'Validasi kemampuan auditing']
  ),

  // ==================== MARKETING & DIGITAL (6 Skema) ====================
  createSkema('skema-048', 'DMK-001', 'Digital Marketing', 12, 'Klaster', 'marketing-digital',
    'Skema sertifikasi untuk digital marketer yang mampu mengelola pemasaran digital.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami konsep digital marketing', 'Mampu menggunakan platform digital ads', 'Memahami SEO dan SEM'],
    ['Membuat strategi digital marketing', 'Mengelola social media marketing', 'Melakukan SEO dan SEM', 'Mengelola content marketing', 'Menganalisis digital metrics'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi digital marketing', 'Meningkatkan peluang karir di digital', 'Validasi kemampuan marketing digital']
  ),
  createSkema('skema-049', 'SME-001', 'Social Media Evaluation', 8, 'Klaster', 'marketing-digital',
    'Skema sertifikasi untuk profesional yang mampu mengevaluasi strategi social media.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami social media platforms', 'Mampu menganalisis metrics', 'Memahami content strategy'],
    ['Menganalisis performa social media', 'Mengevaluasi konten', 'Membuat rekomendasi strategi', 'Mengukur engagement', 'Membuat laporan analytics'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi social media', 'Meningkatkan peluang karir', 'Validasi kemampuan social media analysis']
  ),
  createSkema('skema-050', 'PCK-001', 'Pembuatan Kreasi Konten', 10, 'Klaster', 'marketing-digital',
    'Skema sertifikasi untuk content creator yang mampu membuat konten kreatif.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami content creation', 'Mampu menggunakan tools editing', 'Memiliki kreativitas'],
    ['Membuat konten visual', 'Membuat konten video', 'Membuat konten tulisan', 'Mengedit dan mempublikasi konten', 'Mengoptimasi konten untuk platform'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi content creation', 'Meningkatkan peluang karir sebagai creator', 'Validasi kemampuan kreatif']
  ),
  createSkema('skema-051', 'DPR-001', 'Digital Public Relation Officer', 10, 'Klaster', 'marketing-digital',
    'Skema sertifikasi untuk digital PR yang mampu mengelola hubungan publik secara digital.',
    ['Minimal pendidikan D3/S1 bidang komunikasi/PR', 'Memahami digital communication', 'Mampu mengelola online reputation', 'Memahami crisis management'],
    ['Mengelola online reputation', 'Membuat konten PR digital', 'Mengelola media relations digital', 'Menangani crisis communication', 'Mengukur PR metrics'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi digital PR', 'Meningkatkan peluang karir di PR digital', 'Validasi kemampuan communication']
  ),
  createSkema('skema-052', 'KBM-001', 'Kualifikasi 3 Bidang Pemasaran Subbidang Layanan', 8, 'Klaster', 'marketing-digital',
    'Skema sertifikasi untuk profesional pemasaran tingkat 3 di bidang layanan.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar pemasaran', 'Mampu memberikan pelayanan', 'Memiliki kemampuan komunikasi'],
    ['Memberikan pelayanan pelanggan', 'Melakukan penjualan', 'Mengelola keluhan pelanggan', 'Membuat laporan penjualan', 'Menerapkan etika pemasaran'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi pemasaran', 'Meningkatkan peluang karir di sales', 'Validasi kemampuan customer service']
  ),
  createSkema('skema-053', 'KBM-002', 'Kualifikasi 3 Bidang Pemasaran Subbidang Merk', 8, 'Klaster', 'marketing-digital',
    'Skema sertifikasi untuk profesional pemasaran tingkat 3 di bidang merk.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami dasar branding', 'Mampu mengelola produk', 'Memahami market research'],
    ['Mengelola brand awareness', 'Melakukan promosi produk', 'Menganalisis pasar', 'Mengelola display produk', 'Membuat laporan marketing'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi branding', 'Meningkatkan peluang karir di marketing', 'Validasi kemampuan brand management']
  ),
  createSkema('skema-054', 'KBM-003', 'Kualifikasi 5 Bidang Pemasaran Subbidang Merk', 10, 'Klaster', 'marketing-digital',
    'Skema sertifikasi untuk profesional pemasaran tingkat 5 di bidang merk.',
    ['Minimal pendidikan D3/S1 bidang marketing', 'Pengalaman di bidang marketing', 'Mampu strategic branding', 'Memahami consumer behavior'],
    ['Merencanakan strategi brand', 'Mengelola brand portfolio', 'Melakukan brand positioning', 'Mengukur brand equity', 'Membuat rekomendasi strategis'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi brand strategy', 'Meningkatkan peluang karir managerial', 'Validasi kemampuan strategic marketing']
  ),

  // ==================== OTHER PROFESSIONAL (3 Skema) ====================
  createSkema('skema-055', 'COF-001', 'Credit Officer', 12, 'Klaster', 'other-professional',
    'Skema sertifikasi untuk credit officer yang mampu menganalisis dan mengelola kredit.',
    ['Minimal pendidikan D3/S1 bidang ekonomi/akuntansi', 'Pengalaman di bidang perbankan/leasing', 'Memahami analisis kredit', 'Mampu melakukan credit scoring'],
    ['Melakukan analisis kredit', 'Menilai kelayakan kredit', 'Mengelola portofolio kredit', 'Melakukan monitoring kredit', 'Menangani kredit bermasalah'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi credit analysis', 'Meningkatkan peluang karir di perbankan', 'Validasi kemampuan credit management']
  ),
  createSkema('skema-056', 'SEO-001', 'Special Event Office', 10, 'Klaster', 'other-professional',
    'Skema sertifikasi untuk event organizer yang mampu mengelola acara khusus.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami event management', 'Mampu mengkoordinasi acara', 'Memiliki kemampuan komunikasi'],
    ['Merencanakan acara', 'Mengkoordinasi vendor', 'Mengelola logistics acara', 'Menangani peserta acara', 'Membuat laporan acara'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi event management', 'Meningkatkan peluang karir di event', 'Validasi kemampuan organizing']
  ),
  createSkema('skema-057', 'K3-001', 'Petugas Keselamatan dan Kesehatan Kerja', 10, 'Klaster', 'other-professional',
    'Skema sertifikasi untuk petugas K3 yang mampu mengelola keselamatan dan kesehatan kerja.',
    ['Minimal pendidikan SMA/SMK/sederajat', 'Memahami regulasi K3', 'Mampu melakukan identifikasi bahaya', 'Memahami prosedur keamanan'],
    ['Melakukan identifikasi bahaya', 'Melakukan penilaian risiko', 'Menerapkan prosedur K3', 'Melakukan investigasi kecelakaan', 'Membuat laporan K3'],
    ['Sertifikat BNSP yang diakui nasional', 'Pengakuan kompetensi K3', 'Meningkatkan peluang karir di safety', 'Validasi kemampuan occupational safety']
  )
]

// ==================== HELPER FUNCTIONS ====================

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