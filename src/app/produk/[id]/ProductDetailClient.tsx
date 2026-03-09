/**
 * Product Detail Client Component
 * File: src/app/produk/[id]/ProductDetailClient.tsx
 * Purpose: Client component untuk halaman detail produk (Marketplace Style)
 */

'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import { getProductById, getCategoryById, whatsappContacts, generateWhatsAppLink } from '@/data/productData'

interface ProductDetailClientProps {
  productId: string
}

export default function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [product, setProduct] = useState(getProductById(productId))
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  useEffect(() => {
    setProduct(getProductById(productId))
    setSelectedImage(null)
  }, [productId])

  if (!product) {
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
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                <Icon name="box" size={40} className="text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-navy-700 mb-2">Produk Tidak Ditemukan</h2>
              <p className="text-gray-500 mb-6">Produk yang Anda cari tidak tersedia</p>
              <Link
                href="/produk"
                className="px-6 py-3 bg-navy-700 text-white rounded-xl hover:bg-navy-800 transition-colors"
              >
                Kembali ke Daftar Produk
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  const category = getCategoryById(product.categoryId)
  const productImage = product.image || null

  const getBadgeColorClass = (color?: string) => {
    switch (color) {
      case 'success': return 'bg-green-100 text-green-700 border-green-200'
      case 'warning': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'error': return 'bg-red-100 text-red-700 border-red-200'
      case 'info': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="p-4 lg:p-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-gold-600 transition-colors flex-shrink-0">Beranda</Link>
            <Icon name="chevronRight" size={14} className="flex-shrink-0" />
            <Link href="/produk" className="hover:text-gold-600 transition-colors flex-shrink-0">Produk</Link>
            <Icon name="chevronRight" size={14} className="flex-shrink-0" />
            <Link href={`/produk?category=${category?.id}`} className="hover:text-gold-600 transition-colors flex-shrink-0">
              {category?.name}
            </Link>
            <Icon name="chevronRight" size={14} className="flex-shrink-0" />
            <span className="text-navy-700 font-medium truncate">{product.name}</span>
          </nav>

          {/* Back Button - Mobile */}
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-navy-700 mb-4 lg:hidden transition-colors"
          >
            <Icon name="arrowLeft" size={20} />
            <span>Kembali</span>
          </Link>

          {/* Product Detail - Marketplace Style */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              
              {/* Left - Product Image Gallery */}
              <div className="bg-white p-4 lg:p-6">
                {/* Main Image */}
                <div 
                  className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in"
                  onClick={() => productImage && setIsImageZoomed(true)}
                >
                  {productImage ? (
                    <Image
                      src={productImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-50 to-gold-50">
                      <div className={`
                        w-24 h-24 rounded-2xl
                        bg-gradient-to-br ${category?.gradient || 'from-gray-400 to-gray-600'}
                        flex items-center justify-center
                        shadow-lg
                      `}>
                        <Icon 
                          name={category?.icon || 'box'} 
                          size={48} 
                          className="text-white"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className={`
                      absolute top-3 left-3 px-3 py-1.5 rounded-lg text-sm font-semibold
                      border ${getBadgeColorClass(product.badgeColor)}
                      bg-white/90 backdrop-blur-sm
                    `}>
                      {product.badge}
                    </div>
                  )}

                  {/* Zoom Icon */}
                  {productImage && (
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center">
                      <Icon name="search" size={18} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Thumbnail Images - For future multiple images */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {/* Main Product Image Thumbnail */}
                  {productImage && (
                    <button
                      onClick={() => setSelectedImage(null)}
                      className={`
                        relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0
                        border-2 transition-all
                        ${!selectedImage ? 'border-gold-500 ring-2 ring-gold-200' : 'border-gray-200 hover:border-gray-300'}
                      `}
                    >
                      <Image
                        src={productImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  )}
                  
                  {/* Placeholder for additional images */}
                  <div className="w-16 h-16 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Icon name="image" size={20} className="text-gray-300" />
                  </div>
                </div>
              </div>

              {/* Right - Product Info */}
              <div className="p-4 lg:p-6 lg:border-l border-gray-100">
                {/* Category Tag */}
                <div className="mb-3">
                  <span className={`
                    inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium
                    bg-gradient-to-r ${category?.gradient || 'from-gray-400 to-gray-600'} text-white
                  `}>
                    <Icon name={category?.icon || 'box'} size={12} />
                    {category?.name}
                  </span>
                </div>

                {/* Product Name */}
                <h1 className="text-xl lg:text-2xl font-bold text-navy-700 mb-3 leading-tight">
                  {product.name}
                </h1>

                {/* Short Description */}
                <p className="text-gray-500 text-sm mb-4">
                  {product.description}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4" />

                {/* Full Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-navy-700 mb-2 text-sm">Deskripsi Produk</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Requirements Section */}
                <div className="mb-6 bg-amber-50 rounded-xl p-4">
                  <h3 className="font-semibold text-navy-700 mb-3 flex items-center gap-2 text-sm">
                    <Icon name="clipboard" size={18} className="text-amber-500" />
                    Persyaratan
                  </h3>
                  <ul className="space-y-2">
                    {product.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Section */}
                <div className="mb-6 bg-green-50 rounded-xl p-4">
                  <h3 className="font-semibold text-navy-700 mb-3 flex items-center gap-2 text-sm">
                    <Icon name="star" size={18} className="text-green-500" />
                    Keuntungan
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setShowWhatsAppModal(true)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="whatsapp" size={24} />
                  <span className="text-lg">Saya Minat!</span>
                </button>

                {/* Trust Badges */}
                <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="shield" size={14} className="text-green-500" />
                    <span>Terpercaya</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="clock" size={14} className="text-blue-500" />
                    <span>Respon Cepat</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="headphones" size={14} className="text-gold-500" />
                    <span>Konsultasi Gratis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-navy-700">
                Produk Lainnya
              </h2>
              <Link
                href="/produk"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors"
              >
                <span>Lihat semua</span>
                <Icon name="chevronRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Image Zoom Modal */}
      {isImageZoomed && productImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsImageZoomed(false)}
        >
          <button
            onClick={() => setIsImageZoomed(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <Icon name="close" size={24} className="text-white" />
          </button>
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] mx-4">
            <Image
              src={productImage}
              alt={product.name}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowWhatsAppModal(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="whatsapp" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Hubungi via WhatsApp</h3>
                    <p className="text-white/80 text-sm">Pilih nomor untuk menghubungi</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowWhatsAppModal(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <Icon name="close" size={18} className="text-white" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-3">
                {productImage ? (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={productImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category?.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={category?.icon || 'box'} size={20} className="text-white" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy-700 truncate">{product.name}</p>
                  <p className="text-xs text-gray-500">{category?.name}</p>
                </div>
              </div>
            </div>

            {/* Contact List */}
            <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.id}
                  href={generateWhatsAppLink(contact.phone, product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all group"
                >
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                    {contact.name.charAt(0)}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy-700 group-hover:text-green-700 transition-colors">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-gray-500">{contact.role}</p>
                    <p className="text-sm text-green-600 font-medium">
                      +{contact.phone}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="w-10 h-10 rounded-full bg-green-100 group-hover:bg-green-500 flex items-center justify-center transition-colors">
                    <Icon 
                      name="whatsapp" 
                      size={20} 
                      className="text-green-600 group-hover:text-white transition-colors"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-xs text-center text-gray-500">
                Pesan akan otomatis terisi dengan informasi produk yang Anda minati
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}