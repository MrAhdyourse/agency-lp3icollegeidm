/**
 * Kategori Page
 * File: src/app/produk/kategori/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function KategoriPage() {
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
            Kategori Produk
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Digital Marketing', 'Web Development', 'Graphic Design', 'Data Science'].map((cat) => (
              <div key={cat} className="card hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-2xl">📁</span>
                </div>
                <h3 className="font-medium text-navy-700">{cat}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}