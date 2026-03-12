/**
 * Product Detail Modal Component
 * File: src/components/ProductDetailModal.tsx
 * Purpose: Modal popup untuk menampilkan detail produk dan skema sertifikasi (Marketplace Style)
 */

'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Icon from '@/components/Icon'
import { 
  Product, 
  ProductCategory, 
  getCategoryById, 
  whatsappContacts, 
  generateWhatsAppLink,
  SkemaSertifikasi,
  getSkemaKategoriById
} from '@/data/productData'
import { getImagePath } from '@/utils/imagePath'

interface ProductDetailModalProps {
  product: Product | null
  skema?: SkemaSertifikasi | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductDetailModal({ product, skema, isOpen, onClose }: ProductDetailModalProps) {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  // Determine if we're showing a product or skema
  const isSkema = !!skema && !product
  const displayItem = product || skema

  // Reset states when item changes
  useEffect(() => {
    setSelectedImage(null)
    setIsImageZoomed(false)
    setShowWhatsAppModal(false)
  }, [product?.id, skema?.id])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isImageZoomed) {
          setIsImageZoomed(false)
        } else if (showWhatsAppModal) {
          setShowWhatsAppModal(false)
        } else {
          onClose()
        }
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, isImageZoomed, showWhatsAppModal, onClose])

  if (!displayItem) return null

  const category = product ? getCategoryById(product.categoryId) : null
  const skemaKategori = skema ? getSkemaKategoriById(skema.kategori) : null
  const productImage = selectedImage ? getImagePath(selectedImage) : (product?.image ? getImagePath(product.image) : null)
  
  // Get item name and description based on type
  const itemName = product?.name || skema?.nama || ''
  const itemDescription = product?.description || skema?.deskripsi || ''
  const itemFullDescription = product?.fullDescription || skema?.deskripsi || ''
  const requirements = product?.requirements || skema?.persyaratan || []
  const benefits = product?.benefits || skema?.manfaat || []

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
    <>
      {/* Main Product Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen && !isImageZoomed && !showWhatsAppModal ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <Icon name="close" size={20} className="text-gray-600" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              
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
                      alt={itemName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-50 to-gold-50">
                      <div className={`
                        w-24 h-24 rounded-2xl
                        bg-gradient-to-br ${category?.gradient || skemaKategori?.gradient || 'from-gray-400 to-gray-600'}
                        flex items-center justify-center
                        shadow-lg
                      `}>
                        <Icon 
                          name={category?.icon || skemaKategori?.icon || 'box'} 
                          size={48} 
                          className="text-white"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Badge */}
                  {product?.badge && (
                    <div className={`
                      absolute top-3 left-3 px-3 py-1.5 rounded-lg text-sm font-semibold
                      border ${getBadgeColorClass(product.badgeColor)}
                      bg-white/90 backdrop-blur-sm
                    `}>
                      {product.badge}
                    </div>
                  )}
                  
                  {/* BNSP Badge for Skema */}
                  {isSkema && (
                    <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg text-sm font-semibold border bg-green-100 text-green-700 border-green-200 bg-white/90 backdrop-blur-sm">
                      BNSP
                    </div>
                  )}

                  {/* Zoom Icon */}
                  {productImage && (
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center">
                      <Icon name="search" size={18} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Thumbnail Images */}
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {product?.image && (
                    <button
                      onClick={() => setSelectedImage(null)}
                      className={`
                        relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0
                        border-2 transition-all
                        ${!selectedImage ? 'border-gold-500 ring-2 ring-gold-200' : 'border-gray-200 hover:border-gray-300'}
                      `}
                    >
                      <Image
                        src={getImagePath(product.image)}
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
                    bg-gradient-to-r ${category?.gradient || skemaKategori?.gradient || 'from-gray-400 to-gray-600'} text-white
                  `}>
                    <Icon name={category?.icon || skemaKategori?.icon || 'box'} size={12} />
                    {category?.name || skemaKategori?.nama}
                  </span>
                </div>

                {/* Product/Skema Name */}
                <h1 className="text-xl lg:text-2xl font-bold text-navy-700 mb-3 leading-tight pr-8">
                  {itemName}
                </h1>

                {/* Short Description */}
                <p className="text-gray-500 text-sm mb-4">
                  {itemDescription}
                </p>

                {/* Skema Specific Info */}
                {isSkema && skema && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                      BNSP
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200">
                      {skema.jenis}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
                      {skema.jumlahUnit} Unit Kompetensi
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                      {skema.kode}
                    </span>
                  </div>
                )}

                {/* Divider */}
                <div className="border-t border-gray-100 my-4" />

                {/* Full Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-navy-700 mb-2 text-sm">
                    {isSkema ? 'Deskripsi Skema' : 'Deskripsi Produk'}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {itemFullDescription}
                  </p>
                </div>

                {/* Unit Kompetensi - Only for Skema */}
                {isSkema && skema && (
                  <div className="mb-6 bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-navy-700 mb-3 flex items-center gap-2 text-sm">
                      <Icon name="layers" size={18} className="text-blue-500" />
                      Unit Kompetensi
                    </h3>
                    <ul className="space-y-2">
                      {skema.unitKompetensi.map((unit, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          {unit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements Section */}
                <div className="mb-6 bg-amber-50 rounded-xl p-4">
                  <h3 className="font-semibold text-navy-700 mb-3 flex items-center gap-2 text-sm">
                    <Icon name="clipboard" size={18} className="text-amber-500" />
                    Persyaratan
                  </h3>
                  <ul className="space-y-2">
                    {requirements.map((req, index) => (
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
                    {isSkema ? 'Manfaat' : 'Keuntungan'}
                  </h3>
                  <ul className="space-y-2">
                    {benefits.map((benefit, index) => (
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
        </div>
      </div>

      {/* Image Zoom Modal */}
      {isImageZoomed && productImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
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
              alt={itemName}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
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

            {/* Product/Skema Info */}
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-3">
                {productImage ? (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={productImage}
                      alt={itemName}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category?.gradient || skemaKategori?.gradient || 'from-gray-400 to-gray-600'} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={category?.icon || skemaKategori?.icon || 'box'} size={20} className="text-white" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy-700 truncate">{itemName}</p>
                  <p className="text-xs text-gray-500">{category?.name || skemaKategori?.nama}</p>
                </div>
              </div>
            </div>

            {/* Contact List */}
            <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.id}
                  href={generateWhatsAppLink(contact.phone, itemName)}
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
    </>
  )
}
