/**
 * Profil Page
 * File: src/app/profil/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function ProfilPage() {
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
            Profil 👤
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="card text-center md:col-span-1">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy-500 to-gold-500 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h2 className="font-semibold text-navy-700 mb-1">Nama Rekanan</h2>
              <p className="text-sm text-gray-500 mb-4">rekanan@agency.com</p>
              <button className="px-4 py-2 bg-gold-500 text-white rounded-lg hover:bg-gold-600 transition-colors">
                Edit Profil
              </button>
            </div>

            {/* Profile Info */}
            <div className="card md:col-span-2">
              <h2 className="font-semibold text-navy-700 mb-4">Informasi Akun</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Nama Lengkap</label>
                    <p className="text-navy-700">Nama Rekanan</p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Email</label>
                    <p className="text-navy-700">rekanan@agency.com</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Telepon</label>
                    <p className="text-navy-700">+62 812-3456-7890</p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1">Status</label>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-sm rounded">Aktif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}