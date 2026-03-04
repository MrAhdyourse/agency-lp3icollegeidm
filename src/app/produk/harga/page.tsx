/**
 * Harga Page
 * File: src/app/produk/harga/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function HargaPage() {
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
          <h1 className="text-3xl font-heading font-bold text-navy-700 mb-2">
            Daftar Harga Produk 💰
          </h1>
          <p className="text-gray-600 mb-6">Informasi harga produk untuk rekanan dan calon customer</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card hover:shadow-lg transition-shadow">
                <div className="mb-3">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Produk {item}</h3>
                <p className="text-sm text-gray-600 mb-3">Deskripsi singkat produk yang tersedia.</p>
                <div className="flex items-center justify-between">
                  <div className="text-gold-600 font-bold">Rp 500.000</div>
                  <span className="text-xs text-gray-400">/unit</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              💡 <strong>Catatan:</strong> Harga dapat berubah sewaktu-waktu. Hubungi kami untuk informasi lebih lanjut dan penawaran khusus.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
