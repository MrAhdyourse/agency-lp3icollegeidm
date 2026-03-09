/**
 * Kategori Page
 * File: src/app/produk/kategori/page.tsx
 * Purpose: Halaman kategori produk dengan desain mewah
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import { productCategories } from '@/data/productData'

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
          {/* Header Section */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-gold-600 transition-colors">Beranda</Link>
              <Icon name="chevronRight" size={14} />
              <Link href="/produk" className="hover:text-gold-600 transition-colors">Produk</Link>
              <Icon name="chevronRight" size={14} />
              <span className="text-navy-700 font-medium">Kategori</span>
            </nav>
            
            <h1 className="text-3xl font-heading font-bold text-navy-700 mb-2">
              Kategori Produk
            </h1>
            <p className="text-gray-600">
              Pilih kategori produk yang sesuai dengan kebutuhan Anda
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/produk?category=${category.id}`}
                className="group relative overflow-hidden"
              >
                <div className={`
                  relative bg-white rounded-2xl shadow-lg overflow-hidden
                  transform transition-all duration-500 ease-out
                  group-hover:scale-[1.02] group-hover:shadow-2xl
                  animate-fadeIn
                `}
                style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${category.gradient}
                    opacity-0 group-hover:opacity-5 transition-opacity duration-300
                  `} />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                  
                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon Container */}
                    <div className={`
                      w-20 h-20 rounded-2xl mb-6
                      bg-gradient-to-br ${category.gradient}
                      flex items-center justify-center
                      shadow-lg transform group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-300
                    `}>
                      <Icon 
                        name={category.icon} 
                        size={36} 
                        className="text-white"
                      />
                    </div>
                    
                    {/* Category Name */}
                    <h3 className="text-xl font-heading font-bold text-navy-700 mb-2 group-hover:text-navy-800 transition-colors">
                      {category.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-gold-600 font-medium group-hover:text-gold-700 transition-colors">
                      <span className="text-sm">Lihat Produk</span>
                      <Icon 
                        name="chevronRight" 
                        size={16} 
                        className="ml-1 transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1
                    bg-gradient-to-r ${category.gradient}
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 origin-left
                  `} />
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 bg-gradient-to-r from-navy-700 to-navy-800 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  Tidak menemukan yang Anda cari?
                </h3>
                <p className="text-white/80">
                  Hubungi tim kami untuk konsultasi lebih lanjut
                </p>
              </div>
              <Link
                href="/kontak"
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <Icon name="phone" size={20} />
                <span>Hubungi Kami</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}