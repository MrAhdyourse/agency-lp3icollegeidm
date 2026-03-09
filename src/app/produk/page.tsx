/**
 * Produk Page
 * File: src/app/produk/page.tsx
 * Purpose: Halaman daftar produk dengan desain marketplace
 */

import { Suspense } from 'react'
import ProdukClient from './ProdukClient'

export default function ProdukPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-navy-700"></div>
      </div>
    }>
      <ProdukClient />
    </Suspense>
  )
}