/**
 * Artikel Page
 * File: src/app/knowledge/artikel/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function ArtikelPage() {
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
            Artikel
          </h1>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-gold-100 to-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">📝</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy-700 mb-1">Artikel {item}</h3>
                    <p className="text-sm text-gray-500 mb-2">Penulis • 1 Jan 2024</p>
                    <p className="text-sm text-gray-600">Ringkasan artikel yang menarik dan informatif...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}