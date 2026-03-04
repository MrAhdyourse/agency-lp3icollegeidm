/**
 * Home Page - Public Landing Page
 * File: src/app/page.tsx
 * Purpose: Halaman utama untuk publik (rekanan & calon customer)
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Selamat Datang di {appConfig.name}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {appConfig.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/produk" 
                className="btn-primary bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Lihat Produk
              </Link>
              <Link 
                href="/kontak" 
                className="btn-secondary bg-transparent border-2 border-white hover:bg-white hover:text-navy-700 px-8 py-3 rounded-lg transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <p className="text-4xl font-bold text-navy-700">128+</p>
                <p className="text-gray-600 mt-2">Produk Tersedia</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-navy-700">50+</p>
                <p className="text-gray-600 mt-2">Rekanan Aktif</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-navy-700">45+</p>
                <p className="text-gray-600 mt-2">Artikel & Tutorial</p>
              </div>
              <div className="p-6">
                <p className="text-4xl font-bold text-navy-700">24/7</p>
                <p className="text-gray-600 mt-2">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-navy-700 text-center mb-8">
              Akses Cepat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/produk" className="card hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-100 flex items-center justify-center group-hover:bg-navy-200 transition-colors">
                  <span className="text-3xl">📦</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Katalog Produk</h3>
                <p className="text-sm text-gray-500">Lihat semua produk yang tersedia</p>
              </Link>

              <Link href="/knowledge/artikel" className="card hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-100 flex items-center justify-center group-hover:bg-gold-200 transition-colors">
                  <span className="text-3xl">📖</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Knowledge Base</h3>
                <p className="text-sm text-gray-500">Artikel & tutorial edukatif</p>
              </Link>

              <Link href="/pengumuman" className="card hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <span className="text-3xl">📢</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Pengumuman</h3>
                <p className="text-sm text-gray-500">Info terbaru untuk rekanan</p>
              </Link>

              <Link href="/agenda" className="card hover:shadow-lg transition-all text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-3xl">📅</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Agenda</h3>
                <p className="text-sm text-gray-500">Jadwal kegiatan & event</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Harga Section */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-gold-400 to-gold-500 rounded-2xl p-8 text-center">
              <span className="text-4xl mb-4 block">💰</span>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">
                Lihat Harga Produk
              </h2>
              <p className="text-navy-800 mb-6">
                Temukan harga terbaik untuk produk yang Anda butuhkan
              </p>
              <Link 
                href="/produk/harga" 
                className="inline-block bg-navy-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
              >
                Lihat Harga
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-navy-700 mb-8">
              Update Terbaru
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🆕</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700">Produk Baru</p>
                    <p className="text-sm text-gray-600">Program Pelatihan Digital Marketing 2024</p>
                    <p className="text-xs text-gray-400 mt-2">2 jam yang lalu</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📝</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700">Artikel Baru</p>
                    <p className="text-sm text-gray-600">Tips Sukses Menjadi Rekanan Agensi</p>
                    <p className="text-xs text-gray-400 mt-2">1 hari yang lalu</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📢</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700">Pengumuman</p>
                    <p className="text-sm text-gray-600">Jadwal Meeting Bulanan - Maret 2024</p>
                    <p className="text-xs text-gray-400 mt-2">3 hari yang lalu</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-700">Agenda</p>
                    <p className="text-sm text-gray-600">Workshop Online: Strategi Bisnis 2024</p>
                    <p className="text-xs text-gray-400 mt-2">5 hari yang lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-navy-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Tertarik Menjadi Rekanan?
            </h2>
            <p className="text-gray-200 mb-8">
              Hubungi kami untuk informasi lebih lanjut tentang kerjasama dan produk yang kami sediakan
            </p>
            <Link 
              href="/kontak" 
              className="inline-block bg-gold-500 text-navy-900 font-semibold px-8 py-3 rounded-lg hover:bg-gold-400 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-navy-900 text-gray-400 text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} {appConfig.fullName}
          </p>
          <p className="text-sm">
            {appConfig.organization.name} - {appConfig.organization.website}
          </p>
        </footer>
      </main>
    </div>
  )
}
