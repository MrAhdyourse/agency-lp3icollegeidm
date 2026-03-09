/**
 * Harga Client Component
 * File: src/app/produk/harga/HargaClient.tsx
 * Purpose: Client component untuk halaman daftar harga dengan katalog dan detail
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import { hargaKatalog, HargaKatalog, HargaItem } from '@/data/hargaData'

export default function HargaClient() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [selectedKatalog, setSelectedKatalog] = useState<HargaKatalog | null>(null)

  const getBadgeColorClass = (color?: string) => {
    switch (color) {
      case 'success': return 'bg-green-100 text-green-700 border-green-200'
      case 'warning': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'error': return 'bg-red-100 text-red-700 border-red-200'
      case 'info': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const handleKatalogClick = (katalog: HargaKatalog) => {
    setSelectedKatalog(katalog)
  }

  const handleCloseModal = () => {
    setSelectedKatalog(null)
  }

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
          {/* Header Section */}
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-gold-600 transition-colors">Beranda</Link>
              <Icon name="chevronRight" size={14} />
              <Link href="/produk" className="hover:text-gold-600 transition-colors">Produk</Link>
              <Icon name="chevronRight" size={14} />
              <span className="text-navy-700 font-medium">Daftar Harga</span>
            </nav>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-heading font-bold text-navy-700 mb-1">
                  Daftar Harga Produk 💰
                </h1>
                <p className="text-gray-600">
                  Informasi harga produk untuk rekanan dan calon customer
                </p>
              </div>
            </div>
          </div>

          {/* Katalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {hargaKatalog.map((katalog, index) => (
              <button
                key={katalog.id}
                onClick={() => handleKatalogClick(katalog)}
                className="group text-left w-full"
              >
                <div className={`
                  bg-white rounded-2xl shadow-md overflow-hidden
                  transform transition-all duration-300 ease-out
                  group-hover:shadow-xl group-hover:-translate-y-1
                  animate-fadeIn
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header with gradient */}
                  <div className={`
                    relative h-32 bg-gradient-to-br ${katalog.gradient}
                    flex items-center justify-center
                  `}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon name={katalog.icon} size={32} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Item count badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                      {katalog.items.length} Produk
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-navy-700 text-lg mb-1 group-hover:text-gold-700 transition-colors">
                      {katalog.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {katalog.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        Klik untuk lihat harga
                      </span>
                      <div className="flex items-center text-gold-600 text-sm font-medium group-hover:text-gold-700">
                        <span>Detail</span>
                        <Icon 
                          name="chevronRight" 
                          size={14} 
                          className="ml-1 transform group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-8 p-4 bg-gradient-to-r from-navy-50 to-gold-50 rounded-xl border border-navy-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center flex-shrink-0">
                <Icon name="info" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-700 mb-1">Catatan Penting</h4>
                <p className="text-sm text-gray-600">
                  Harga yang tercantum dapat berubah sewaktu-waktu. Untuk informasi lebih lanjut dan penawaran khusus, 
                  silakan hubungi tim kami melalui halaman <Link href="/kontak" className="text-gold-600 hover:text-gold-700 font-medium">Kontak</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/produk"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-navy-50 to-navy-100 rounded-xl hover:from-navy-100 hover:to-navy-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="box" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-700">Lihat Daftar Produk</h4>
                <p className="text-sm text-gray-600">Detail lengkap semua produk</p>
              </div>
            </Link>
            
            <Link
              href="/kontak"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-gold-50 to-gold-100 rounded-xl hover:from-gold-100 hover:to-gold-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="phone" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-700">Hubungi Kami</h4>
                <p className="text-sm text-gray-600">Konsultasi dan penawaran khusus</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Modal Detail Harga */}
      {selectedKatalog && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`
              relative h-24 bg-gradient-to-br ${selectedKatalog.gradient}
              flex items-center justify-between px-6
            `}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon name={selectedKatalog.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Harga {selectedKatalog.name}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {selectedKatalog.description}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <Icon name="close" size={20} className="text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-96px)]">
              <div className="space-y-4">
                {selectedKatalog.items.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      {/* Left: Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-navy-700">
                            {item.name}
                          </h3>
                          {item.badge && (
                            <span className={`
                              px-2 py-0.5 text-xs font-semibold rounded-full border
                              ${getBadgeColorClass(item.badgeColor)}
                            `}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-3">
                          {item.description}
                        </p>
                        
                        {/* Benefits */}
                        {item.benefits && item.benefits.length > 0 && (
                          <div className="mb-3">
                            <h4 className="text-xs font-medium text-gray-600 mb-1">Keuntungan:</h4>
                            <ul className="text-xs text-gray-500 space-y-1">
                              {item.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Icon name="check" size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Requirements */}
                        {item.requirements && item.requirements.length > 0 && (
                          <div>
                            <h4 className="text-xs font-medium text-gray-600 mb-1">Persyaratan:</h4>
                            <ul className="text-xs text-gray-500 space-y-1">
                              {item.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <Icon name="dot" size={12} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Right: Price */}
                      <div className="md:text-right flex-shrink-0">
                        <div className="text-2xl font-bold text-gold-600">
                          {item.price}
                        </div>
                        {item.priceNote && (
                          <div className="text-xs text-gray-500 mt-1">
                            {item.priceNote}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}