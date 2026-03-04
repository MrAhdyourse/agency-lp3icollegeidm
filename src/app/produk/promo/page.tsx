/**
 * Promo Page
 * File: src/app/produk/promo/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function PromoPage() {
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
            Promo Produk 🔥
          </h1>
          <p className="text-gray-600 mb-6">Penawaran spesial untuk rekanan agensi</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="card border-2 border-gold-400 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">HOT</span>
                  <span className="text-sm text-gray-500">Diskon 20%</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Promo Spesial {item}</h3>
                <p className="text-sm text-gray-600 mb-3">Deskripsi promo menarik untuk rekanan agensi.</p>
                <div className="text-gold-600 font-bold">Rp 500.000</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}