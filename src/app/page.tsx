/**
 * Home Page
 * File: src/app/page.tsx
 * Purpose: Halaman utama dengan Sidebar dan Header
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import appConfig from '@/config/app.config'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleCollapse}
        onClose={closeSidebar}
      />

      {/* Header */}
      <Header 
        onMenuClick={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Content */}
      <main className={`
        pt-16 min-h-screen transition-all duration-300
        ${isSidebarCollapsed ? 'lg:pl-[70px]' : 'lg:pl-[280px]'}
      `}>
        <div className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-navy-700 mb-2">
              Selamat Datang di {appConfig.name}
            </h1>
            <p className="text-gray-600">
              {appConfig.description}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Produk</p>
                  <p className="text-2xl font-bold text-navy-700">128</p>
                </div>
              </div>
            </div>

            <div className="card animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-100 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Artikel</p>
                  <p className="text-2xl font-bold text-navy-700">45</p>
                </div>
              </div>
            </div>

            <div className="card animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">📢</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pengumuman</p>
                  <p className="text-2xl font-bold text-navy-700">12</p>
                </div>
              </div>
            </div>

            <div className="card animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">📅</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Agenda</p>
                  <p className="text-2xl font-bold text-navy-700">8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-heading font-semibold text-navy-700 mb-4">
              Aksi Cepat
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link href="/produk" className="card hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-navy-100 flex items-center justify-center group-hover:bg-navy-200 transition-colors">
                  <span className="text-3xl">📦</span>
                </div>
                <p className="font-medium text-navy-700">Lihat Produk</p>
              </Link>

              <Link href="/knowledge/artikel" className="card hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold-100 flex items-center justify-center group-hover:bg-gold-200 transition-colors">
                  <span className="text-3xl">📖</span>
                </div>
                <p className="font-medium text-navy-700">Knowledge Base</p>
              </Link>

              <Link href="/pengumuman" className="card hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">📢</span>
                </div>
                <p className="font-medium text-navy-700">Pengumuman</p>
              </Link>

              <Link href="/kontak" className="card hover:shadow-lg transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-3xl">📞</span>
                </div>
                <p className="font-medium text-navy-700">Hubungi Kami</p>
              </Link>
            </div>
          </div>

          {/* Recent Updates */}
          <div>
            <h2 className="text-xl font-heading font-semibold text-navy-700 mb-4">
              Update Terbaru
            </h2>
            <div className="card">
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span>🆕</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Produk Baru Ditambahkan</p>
                    <p className="text-sm text-gray-500">Program Pelatihan Digital Marketing 2024</p>
                    <p className="text-xs text-gray-400 mt-1">2 jam yang lalu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span>📝</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Artikel Baru</p>
                    <p className="text-sm text-gray-500">Tips Sukses Menjadi Rekanan Agensi</p>
                    <p className="text-xs text-gray-400 mt-1">1 hari yang lalu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span>📢</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Pengumuman</p>
                    <p className="text-sm text-gray-500">Jadwal Meeting Bulanan - Maret 2024</p>
                    <p className="text-xs text-gray-400 mt-1">3 hari yang lalu</p>
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
