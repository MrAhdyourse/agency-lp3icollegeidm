/**
 * Pengumuman Page
 * File: src/app/pengumuman/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function PengumumanPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const announcements = [
    { title: 'Meeting Bulanan', date: '15 Maret 2024', content: 'Meeting akan dilaksanakan secara online...', badge: 'Penting' },
    { title: 'Update Produk Baru', date: '10 Maret 2024', content: 'Kami menghadirkan produk terbaru...', badge: 'Baru' },
    { title: 'Libur Nasional', date: '1 Maret 2024', content: 'Kantor tutup pada hari libur nasional...', badge: 'Info' },
  ]

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
            Pengumuman 📢
          </h1>

          <div className="space-y-4">
            {announcements.map((item, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📢</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-navy-700">{item.title}</h3>
                      <span className="px-2 py-0.5 text-xs bg-gold-100 text-gold-700 rounded">{item.badge}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <p className="text-gray-600">{item.content}</p>
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