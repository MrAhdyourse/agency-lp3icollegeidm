/**
 * Header Component
 * File: src/components/Header.tsx
 * Purpose: Header dengan toggle sidebar
 */

'use client'

import React from 'react'
import Icon from './Icon'

interface HeaderProps {
  onMenuClick: () => void
  isSidebarOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[280px] h-16 bg-white shadow-sm z-30 transition-all duration-300">
      <div className="flex items-center justify-between h-full px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          <Icon
            name={isSidebarOpen ? 'close' : 'menu'}
            size={24}
            className="text-navy-700"
          />
        </button>

        {/* Running Text Marquee */}
        <div className="flex-1 mx-4 relative">
          {/* Gradient overlay kiri */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          {/* Gradient overlay kanan */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          {/* Container marquee */}
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-gray-600 font-medium">
                Selamat Datang di Portal Informasi Produk & Knowledge Rekanan Agency LP3I College Indramayu • Dapatkan Informasi Terbaru Mengenai Program Pelatihan Digital Marketing 2024 • Hubungi Kami Untuk Konsultasi Lebih Lanjut
              </span>
            </div>
          </div>
        </div>

        {/* Kosong untuk balance */}
        <div className="w-10 lg:hidden"></div>
      </div>
    </header>
  )
}

export default Header
