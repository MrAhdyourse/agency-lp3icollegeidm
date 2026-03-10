# CLAUDE.md - Standard Operating Procedure (SOP)

## 📋 Informasi Proyek

**Nama:** AGENCY-WNI  
**Deskripsi:** Portal Informasi Produk & Knowledge untuk Rekanan Agensi LP3I College  
**Framework:** Next.js 16 (Static Export)  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Hosting:** GitHub Pages  

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| Next.js | 16.x | Framework React dengan App Router |
| React | 19.x | Library UI |
| TypeScript | 5.x | Type-safe JavaScript |
| Tailwind CSS | 4.x | Utility-first CSS |
| Lucide React | 0.577+ | Icon library |

---

## 📁 Struktur Folder

```
AGENCY-WNI/
├── src/
│   ├── app/                    # Halaman (Next.js App Router)
│   │   ├── layout.tsx         # Layout utama
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/             # Komponen UI
│   ├── config/                 # File Konfigurasi
│   │   ├── app.config.ts      # Konfigurasi aplikasi
│   │   └── theme.config.ts    # Konfigurasi tema/warna
│   ├── data/                   # Data (MUDAH DI-UPDATE)
│   │   └── menuData.ts        # Data menu sidebar
│   └── types/                  # TypeScript types
├── public/
│   └── images/                # Logo & gambar
├── docs/                       # Dokumentasi
├── .blackbox/                  # Blackbox CLI config
└── .blackboxcli/              # Blackbox CLI memory
```

---

## 🔧 Commands

### Development
```bash
npm run dev          # Jalankan development server
npm run build        # Build untuk production
npm run start        # Jalankan production server
npm run lint         # Jalankan ESLint
```

### Deployment
```bash
npm run deploy       # Build + siap untuk GitHub Pages
```

---

## 📖 SOP Pembacaan Kode

### 1. Urutan Prioritas File

Saat membaca atau menganalisis kode, ikuti urutan berikut:

1. **Konfigurasi Utama:**
   - `package.json` - Dependencies & scripts
   - `tsconfig.json` - TypeScript config
   - `next.config.ts` - Next.js config
   - `tailwind.config.ts` - Tailwind config

2. **Konfigurasi Aplikasi:**
   - `src/config/app.config.ts` - Info aplikasi
   - `src/config/theme.config.ts` - Tema & warna

3. **Types:**
   - `src/types/*.ts` - Type definitions

4. **Data:**
   - `src/data/*.ts` - Data statis

5. **Komponen:**
   - `src/components/*.tsx` - Komponen UI

6. **Halaman:**
   - `src/app/**/*.tsx` - Halaman Next.js

### 2. Path Alias

Proyek ini menggunakan path alias `@/*` untuk `./src/*`:

```typescript
// Contoh import
import { Sidebar } from '@/components/Sidebar';
import { appConfig } from '@/config/app.config';
import { menuData } from '@/data/menuData';
```

### 3. Konvensi Kode

- **File Naming:** camelCase untuk file TypeScript/TSX
- **Component Naming:** PascalCase untuk komponen React
- **Type Naming:** PascalCase dengan prefix `I` untuk interface (opsional)
- **Styling:** Tailwind CSS utility classes

### 4. Struktur Komponen

```tsx
// Template komponen standar
'use client'; // Jika menggunakan hooks/client-side

import { IconName } from 'lucide-react';

interface ComponentProps {
  // Props definition
}

export default function ComponentName({ props }: ComponentProps) {
  return (
    // JSX
  );
}
```

### 5. Cara Update Konten

| Yang Diupdate | File | Lokasi |
|---------------|------|--------|
| Menu Sidebar | `src/data/menuData.ts` | Data menu |
| Info Aplikasi | `src/config/app.config.ts` | Nama, deskripsi, dll |
| Warna/Tema | `src/config/theme.config.ts` | Primary, secondary color |
| Logo | `public/images/logo.png` + `src/components/Logo.tsx` | Logo & referensi |

---

## 🎨 Tema & Warna

Proyek menggunakan tema profesional:
- **Primary:** Navy Blue
- **Secondary:** Gold
- **Style:** Professional & clean

---

## 📝 Catatan Penting

1. **Static Export:** Proyek ini menggunakan static export untuk GitHub Pages
2. **App Router:** Menggunakan Next.js App Router (bukan Pages Router)
3. **TypeScript:** Semua file menggunakan TypeScript (.ts/.tsx)
4. **Tailwind v4:** Menggunakan Tailwind CSS versi 4.x

---

## 🚀 Quick Start untuk AI Assistant

Saat diminta untuk membantu proyek ini:

1. **Baca konfigurasi terlebih dahulu:**
   - `src/config/app.config.ts`
   - `src/config/theme.config.ts`

2. **Pahami struktur data:**
   - `src/data/menuData.ts`
   - `src/types/menu.types.ts`

3. **Identifikasi komponen yang relevan:**
   - Cek `src/components/` untuk komponen yang ada

4. **Ikuti konvensi yang ada:**
   - Gunakan path alias `@/*`
   - Ikuti struktur komponen yang ada
   - Gunakan Tailwind CSS untuk styling

---

*File ini dibuat sebagai SOP untuk pembacaan kode di proyek AGENCY-WNI*