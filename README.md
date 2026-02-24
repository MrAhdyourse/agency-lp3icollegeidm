# AGENCY-WNI

Portal Informasi Produk & Knowledge untuk Rekanan Agensi LP3I College

## 🚀 Tech Stack

- **Framework:** Next.js 16 (Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages

## 📁 Struktur Proyek

```
AGENCY-WNI/
├── src/
│   ├── app/                    # Halaman (Next.js App Router)
│   │   ├── layout.tsx          # Layout utama
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/             # Komponen UI
│   │   ├── Sidebar.tsx         # Sidebar collapsible
│   │   ├── Header.tsx          # Header
│   │   ├── Logo.tsx            # Logo placeholder
│   │   └── Icon.tsx            # Icon component
│   ├── config/                 # File Konfigurasi (TERPISAH)
│   │   ├── app.config.ts       # Konfigurasi aplikasi
│   │   └── theme.config.ts     # Konfigurasi tema/warna
│   ├── data/                   # Data (MUDAH DI-UPDATE)
│   │   └── menuData.ts         # Data menu sidebar
│   └── types/                  # TypeScript types
│       └── menu.types.ts       # Type definitions
├── public/
│   └── images/                 # Folder untuk logo & gambar
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── deploy.sh                   # Script deployment
└── package.json
```

## 🎨 Cara Update Konten

### 1. Update Menu Sidebar
Edit file: `src/data/menuData.ts`

```typescript
{
  id: 'menu-baru',
  label: 'Menu Baru',
  icon: 'star',
  href: '/menu-baru',
  badge: 'New',
  badgeColor: 'success'
}
```

### 2. Update Info Aplikasi
Edit file: `src/config/app.config.ts`

### 3. Update Warna/Tema
Edit file: `src/config/theme.config.ts`

### 4. Ganti Logo
1. Upload logo ke: `public/images/logo.png`
2. Edit file: `src/components/Logo.tsx`
3. Ikuti instruksi di komentar file tersebut

## 🛠️ Commands

```bash
# Development
npm run dev

# Build untuk production
npm run build

# Deploy ke GitHub Pages
./deploy.sh        # Linux/Mac
# atau manual:
npm run build
git add .
git commit -m "Update website"
git push origin main
```

## 📱 Fitur

- ✅ Sidebar collapsible (buka/tutup)
- ✅ Menu dengan sub-menu
- ✅ Responsive design (mobile-friendly)
- ✅ Tema profesional (Navy Blue + Gold)
- ✅ Static export (GitHub Pages ready)
- ✅ TypeScript (type-safe)
- ✅ File konfigurasi terpisah & sinkron

## 🌐 Deployment

Website akan di-deploy ke:
**https://mrahdyourse.github.io/agency-lp3icollegeidm**

## 📝 License

MIT License - MrAhdyourse
