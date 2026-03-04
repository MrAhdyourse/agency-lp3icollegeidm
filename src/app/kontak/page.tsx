/**
 * Kontak Page
 * File: src/app/kontak/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function KontakPage() {
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
            Hubungi Kami 📞
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="card">
              <h2 className="font-semibold text-navy-700 mb-4">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="text-navy-700">Jl. Contoh No. 123, Jakarta</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                    <span>📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-navy-700">info@agency-wni.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                    <span>📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telepon</p>
                    <p className="text-navy-700">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="font-semibold text-navy-700 mb-4">Kirim Pesan</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Nama</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Pesan</label>
                  <textarea className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gold-400 h-24" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button className="w-full py-2 bg-navy-700 text-white rounded-lg hover:bg-navy-800 transition-colors">
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}