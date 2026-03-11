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
                  Informasi harga produk untuk mitra dan calon customer
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
              <div className="space-y-6">
                {selectedKatalog.items.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Item Header */}
                    <div className="p-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-semibold text-navy-700 text-lg">
                              {item.name}
                            </h3>
                            {item.badge && (
                              <span className={`
                                px-3 py-1 text-xs font-semibold rounded-full border
                                ${getBadgeColorClass(item.badgeColor)}
                              `}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Biaya Proses Section - Khusus Loker Luar Negeri */}
                    {item.biayaProses && (
                      <div className="p-5 bg-gradient-to-r from-gold-50 to-amber-50 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              item.isFree 
                                ? 'bg-green-500' 
                                : 'bg-gradient-to-br from-gold-500 to-amber-500'
                            }`}>
                              <Icon 
                                name={item.isFree ? "gift" : "wallet"} 
                                size={24} 
                                className="text-white" 
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-600">Biaya Proses</h4>
                              <p className={`text-xl font-bold ${item.isFree ? 'text-green-600' : 'text-gold-700'}`}>
                                {item.biayaProses}
                              </p>
                              {item.biayaProsesNote && (
                                <p className="text-xs text-gray-500">{item.biayaProsesNote}</p>
                              )}
                            </div>
                          </div>
                          
                          {item.isFree && item.uangSaku && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-xl border border-green-200">
                              <Icon name="sparkles" size={18} className="text-green-600" />
                              <div>
                                <p className="text-xs text-green-600 font-medium">Bonus Uang Saku</p>
                                <p className="text-sm font-bold text-green-700">{item.uangSaku}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Termasuk & Tidak Termasuk Biaya */}
                    {item.termasukBiaya && item.termasukBiaya.length > 0 && (
                      <div className="p-5 border-b border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Termasuk Biaya */}
                          <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                                <Icon name="check" size={14} className="text-white" />
                              </div>
                              <h4 className="font-medium text-green-700">Termasuk Biaya</h4>
                            </div>
                            <ul className="space-y-2">
                              {item.termasukBiaya.map((termasuk, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-green-600">
                                  <Icon name="checkCircle" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{termasuk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Tidak Termasuk Biaya */}
                          {item.tidakTermasukBiaya && item.tidakTermasukBiaya.length > 0 && (
                            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                                  <Icon name="x" size={14} className="text-white" />
                                </div>
                                <h4 className="font-medium text-red-700">Tidak Termasuk</h4>
                              </div>
                              <ul className="space-y-2">
                                {item.tidakTermasukBiaya.map((tidak, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                                    <Icon name="xCircle" size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>{tidak}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Gaji Section */}
                    {(item.gajiMin || item.gajiMax) && (
                      <div className="p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                              <Icon name="cash" size={24} className="text-white" />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-600">Estimasi Gaji Bulanan</h4>
                              <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-emerald-700">
                                  {item.gajiMin}
                                  {item.gajiMax && ` - ${item.gajiMax}`}
                                </span>
                              </div>
                              {item.gajiNote && (
                                <p className="text-xs text-gray-500">{item.gajiNote}</p>
                              )}
                            </div>
                          </div>
                          
                          {/* Price Display */}
                          <div className="md:ml-auto flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-emerald-200 shadow-sm">
                            <Icon name="money" size={18} className="text-emerald-600" />
                            <div>
                              <p className="text-xs text-gray-500">Gaji Ditawarkan</p>
                              <p className="text-sm font-bold text-emerald-700">{item.price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Benefits & Requirements */}
                    <div className="p-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Benefits */}
                        {item.benefits && item.benefits.length > 0 && (
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                <Icon name="star" size={14} className="text-white" />
                              </div>
                              <h4 className="font-medium text-blue-700">Keuntungan</h4>
                            </div>
                            <ul className="space-y-2">
                              {item.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-blue-600">
                                  <Icon name="checkCircle" size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Requirements */}
                        {item.requirements && item.requirements.length > 0 && (
                          <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                                <Icon name="clipboard" size={14} className="text-white" />
                              </div>
                              <h4 className="font-medium text-amber-700">Persyaratan</h4>
                            </div>
                            <ul className="space-y-2">
                              {item.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-amber-600">
                                  <Icon name="dot" size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Catatan Penting NB */}
                      {item.catatan && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-200">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center flex-shrink-0">
                              <Icon name="info" size={18} className="text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-rose-700 mb-1">Catatan Penting</h4>
                              <p className="text-sm text-rose-600">{item.catatan}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price Footer - For items without biayaProses */}
                    {!item.biayaProses && (
                      <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500">Harga</p>
                            <p className="text-xl font-bold text-gold-600">{item.price}</p>
                            {item.priceNote && (
                              <p className="text-xs text-gray-500">{item.priceNote}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
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