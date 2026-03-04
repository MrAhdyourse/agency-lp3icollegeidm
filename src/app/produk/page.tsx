/**
 * Produk Page
 * File: src/app/produk/page.tsx
 * Purpose: Halaman daftar produk
 */

'use client'

import React from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { useState } from 'react'

export default function ProdukPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        onClose={() => setIsSidebarOpen(false)}
      />

      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      <main className={`
        pt-16 min-h-screen transition-all duration-300
        ${isSidebarCollapsed ? 'lg:pl-[70px]' : 'lg:pl-[280px]'}
      `}>
        <div className="p-6">
          <h1 className="text-3xl font-heading font-bold text-navy-700 mb-6">
            Daftar Produk
          </h1>

          <div className="card mb-6">
            <p className="text-gray-600">
              Halaman ini akan menampilkan daftar produk yang tersedia untuk rekanan agensi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card hover:shadow-lg transition-shadow">
                <div className="w-full h-32 bg-gradient-to-br from-navy-100 to-gold-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Produk {item}</h3>
                <p className="text-sm text-gray-500 mb-3">Deskripsi singkat produk {item}</p>
                <Link href="/produk" className="text-gold-600 hover:text-gold-700 text-sm font-medium">
                  Lihat Detail →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}