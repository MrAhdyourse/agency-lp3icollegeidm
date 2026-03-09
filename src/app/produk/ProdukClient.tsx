/**
 * Produk Client Component
 * File: src/app/produk/ProdukClient.tsx
 * Purpose: Client component untuk halaman daftar produk dengan popup detail
 */

'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Icon from '@/components/Icon'
import ProductDetailModal from '@/components/ProductDetailModal'
import { 
  products, 
  productCategories, 
  getCategoryById, 
  Product,
  skemaSertifikasi,
  skemaKategoriList,
  getSkemaKategoriById,
  SkemaSertifikasi,
  SkemaKategori
} from '@/data/productData'

export default function ProdukClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoryParam = searchParams.get('category')
  const productParam = searchParams.get('product')
  const skemaParam = searchParams.get('skema')
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
  const [selectedSkemaKategori, setSelectedSkemaKategori] = useState<SkemaKategori | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filteredSkema, setFilteredSkema] = useState<SkemaSertifikasi[]>([])
  
  // Modal state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSkema, setSelectedSkema] = useState<SkemaSertifikasi | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  // Filter products
  useEffect(() => {
    let result = products.filter(p => p.isActive)
    
    if (selectedCategory && selectedCategory !== 'sertifikasi') {
      result = result.filter(p => p.categoryId === selectedCategory)
    }
    
    if (searchQuery.trim()) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    setFilteredProducts(result)
  }, [selectedCategory, searchQuery])

  // Filter skema sertifikasi
  useEffect(() => {
    if (selectedCategory === 'sertifikasi') {
      let result = skemaSertifikasi
      
      if (selectedSkemaKategori) {
        result = result.filter(s => s.kategori === selectedSkemaKategori)
      }
      
      if (searchQuery.trim()) {
        result = result.filter(s => 
          s.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.kode.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.deskripsi.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }
      
      setFilteredSkema(result)
    }
  }, [selectedCategory, selectedSkemaKategori, searchQuery])

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
    setSelectedSkemaKategori(null)
    setSearchQuery('')
  }

  const handleSkemaKategoriClick = (kategori: SkemaKategori | null) => {
    setSelectedSkemaKategori(kategori)
  }

  const getBadgeColorClass = (color?: string) => {
    switch (color) {
      case 'success': return 'bg-green-100 text-green-700 border-green-200'
      case 'warning': return 'bg-amber-100 text-amber-700 border-amber-200'
      case 'error': return 'bg-red-100 text-red-700 border-red-200'
      case 'info': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  // Handle product click - open modal instead of navigating
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setSelectedSkema(null)
    setIsModalOpen(true)
    window.history.pushState({}, '', `/produk?product=${product.id}`)
  }

  // Handle skema click
  const handleSkemaClick = (skema: SkemaSertifikasi) => {
    setSelectedSkema(skema)
    setSelectedProduct(null)
    setIsModalOpen(true)
    window.history.pushState({}, '', `/produk?category=sertifikasi&skema=${skema.id}`)
  }

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
    setSelectedSkema(null)
    const categoryUrl = selectedCategory ? `/produk?category=${selectedCategory}` : '/produk'
    window.history.pushState({}, '', categoryUrl)
  }

  // Open product/skema from URL param on mount
  useEffect(() => {
    if (productParam) {
      const product = products.find(p => p.id === productParam)
      if (product) {
        setSelectedProduct(product)
        setIsModalOpen(true)
      }
    }
    if (skemaParam) {
      const skema = skemaSertifikasi.find(s => s.id === skemaParam)
      if (skema) {
        setSelectedSkema(skema)
        setIsModalOpen(true)
      }
    }
  }, [productParam, skemaParam])

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
              <span className="text-navy-700 font-medium">Produk</span>
            </nav>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-heading font-bold text-navy-700 mb-1">
                  Daftar Produk
                </h1>
                <p className="text-gray-600">
                  Temukan produk terbaik untuk kebutuhan Anda
                </p>
              </div>
              
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-100 outline-none transition-all"
                />
                <Icon 
                  name="search" 
                  size={20} 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Icon name="filter" size={18} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Filter Kategori</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${!selectedCategory 
                    ? 'bg-navy-700 text-white shadow-lg' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-400 hover:text-gold-600'
                  }
                `}
              >
                Semua
              </button>
              
              {productCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    flex items-center gap-2
                    ${selectedCategory === category.id 
                      ? 'bg-navy-700 text-white shadow-lg' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-gold-400 hover:text-gold-600'
                    }
                  `}
                >
                  <Icon name={category.icon} size={16} />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Info */}
          {selectedCategory && selectedCategory !== 'sertifikasi' && (
            <div className="mb-6 bg-gradient-to-r from-navy-50 to-gold-50 rounded-xl p-4 border border-navy-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`
                    w-10 h-10 rounded-lg bg-gradient-to-br ${getCategoryById(selectedCategory)?.gradient}
                    flex items-center justify-center
                  `}>
                    <Icon 
                      name={getCategoryById(selectedCategory)?.icon || 'box'} 
                      size={20} 
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-700">
                      {getCategoryById(selectedCategory)?.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {getCategoryById(selectedCategory)?.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCategoryClick(null)}
                  className="text-sm text-gray-500 hover:text-navy-700 transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          )}

          {/* Skema Sertifikasi Section - Show when sertifikasi category is selected */}
          {selectedCategory === 'sertifikasi' && (
            <div className="mb-6">
              {/* Sertifikasi Header */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                      <Icon name="certificate" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-700">
                        Sertifikasi BNSP
                      </h3>
                      <p className="text-sm text-gray-600">
                        {skemaSertifikasi.length} Skema Kompetensi Tersedia
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCategoryClick(null)}
                    className="text-sm text-gray-500 hover:text-navy-700 transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>

              {/* Skema Kategori Filter */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="layers" size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-600">Filter Bidang:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleSkemaKategoriClick(null)}
                    className={`
                      px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                      ${!selectedSkemaKategori 
                        ? 'bg-amber-500 text-white shadow-lg' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-600'
                      }
                    `}
                  >
                    Semua ({skemaSertifikasi.length})
                  </button>
                  {skemaKategoriList.map(kategori => {
                    const count = skemaSertifikasi.filter(s => s.kategori === kategori.id).length
                    return (
                      <button
                        key={kategori.id}
                        onClick={() => handleSkemaKategoriClick(kategori.id)}
                        className={`
                          px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                          flex items-center gap-1.5
                          ${selectedSkemaKategori === kategori.id 
                            ? 'bg-amber-500 text-white shadow-lg' 
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-600'
                          }
                        `}
                      >
                        <Icon name={kategori.icon} size={12} />
                        {kategori.nama} ({count})
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid - Show for non-sertifikasi categories */}
          {selectedCategory !== 'sertifikasi' && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="group text-left w-full"
                >
                  <div className={`
                    bg-white rounded-2xl shadow-md overflow-hidden
                    transform transition-all duration-300 ease-out
                    group-hover:shadow-xl group-hover:-translate-y-1
                    animate-fadeIn
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Product Image */}
                    <div className="relative h-40 bg-gradient-to-br from-navy-50 to-gold-50 overflow-hidden">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <>
                          {/* Decorative Background */}
                          <div className="absolute inset-0 bg-gradient-to-br from-navy-100/30 to-gold-100/30" />
                          
                          {/* Category Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`
                              w-16 h-16 rounded-2xl
                              bg-gradient-to-br ${getCategoryById(product.categoryId)?.gradient || 'from-gray-400 to-gray-600'}
                              flex items-center justify-center
                              shadow-lg transform group-hover:scale-110 transition-transform duration-300
                            `}>
                              <Icon 
                                name={getCategoryById(product.categoryId)?.icon || 'box'} 
                                size={32} 
                                className="text-white"
                              />
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className={`
                          absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold
                          border ${getBadgeColorClass(product.badgeColor)}
                          bg-white/90 backdrop-blur-sm
                        `}>
                          {product.badge}
                        </div>
                      )}
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4">
                      {/* Category Tag */}
                      <div className="mb-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {getCategoryById(product.categoryId)?.name}
                        </span>
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="font-semibold text-navy-700 mb-2 line-clamp-2 group-hover:text-gold-700 transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {product.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {product.requirements.length} Persyaratan
                        </span>
                        <div className="flex items-center text-gold-600 text-sm font-medium group-hover:text-gold-700">
                          <span>Lihat Detail</span>
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
          )}

          {/* Skema Sertifikasi Grid - Show when sertifikasi category is selected */}
          {selectedCategory === 'sertifikasi' && filteredSkema.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSkema.map((skema, index) => (
                <button
                  key={skema.id}
                  onClick={() => handleSkemaClick(skema)}
                  className="group text-left w-full"
                >
                  <div className={`
                    bg-white rounded-2xl shadow-md overflow-hidden
                    transform transition-all duration-300 ease-out
                    group-hover:shadow-xl group-hover:-translate-y-1
                    animate-fadeIn
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Skema Header */}
                    <div className="relative h-32 bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
                      {/* Decorative Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-orange-100/30" />
                      
                      {/* Category Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`
                          w-14 h-14 rounded-2xl
                          bg-gradient-to-br ${getSkemaKategoriById(skema.kategori)?.gradient || 'from-gray-400 to-gray-600'}
                          flex items-center justify-center
                          shadow-lg transform group-hover:scale-110 transition-transform duration-300
                        `}>
                          <Icon 
                            name={getSkemaKategoriById(skema.kategori)?.icon || 'award'} 
                            size={28} 
                            className="text-white"
                          />
                        </div>
                      </div>
                      
                      {/* Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold border bg-green-100 text-green-700 border-green-200 bg-white/90 backdrop-blur-sm">
                        BNSP
                      </div>
                      
                      {/* Jenis Badge */}
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-semibold border bg-amber-100 text-amber-700 border-amber-200 bg-white/90 backdrop-blur-sm">
                        {skema.jenis}
                      </div>
                    </div>
                    
                    {/* Skema Info */}
                    <div className="p-4">
                      {/* Kategori Tag */}
                      <div className="mb-2">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {getSkemaKategoriById(skema.kategori)?.nama}
                        </span>
                      </div>
                      
                      {/* Skema Name */}
                      <h3 className="font-semibold text-navy-700 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
                        {skema.nama}
                      </h3>
                      
                      {/* Kode & Unit */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                          {skema.kode}
                        </span>
                        <span className="text-xs text-gray-400">
                          {skema.jumlahUnit} Unit
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {skema.deskripsi}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {skema.persyaratan.length} Persyaratan
                        </span>
                        <div className="flex items-center text-amber-600 text-sm font-medium group-hover:text-amber-700">
                          <span>Lihat Detail</span>
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
          )}

          {/* Empty State for Skema */}
          {selectedCategory === 'sertifikasi' && filteredSkema.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                <Icon name="search" size={40} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-navy-700 mb-2">
                Skema tidak ditemukan
              </h3>
              <p className="text-gray-500 mb-6">
                Tidak ada skema sertifikasi yang sesuai dengan pencarian Anda
              </p>
              <button
                onClick={() => {
                  setSelectedSkemaKategori(null)
                  setSearchQuery('')
                }}
                className="px-6 py-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Empty State for Products */}
          {selectedCategory !== 'sertifikasi' && filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon name="search" size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-navy-700 mb-2">
                Produk tidak ditemukan
              </h3>
              <p className="text-gray-500 mb-6">
                Tidak ada produk yang sesuai dengan pencarian Anda
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null)
                  setSearchQuery('')
                }}
                className="px-6 py-2 bg-navy-700 text-white rounded-xl hover:bg-navy-800 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Quick Links */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/produk/kategori"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-navy-50 to-navy-100 rounded-xl hover:from-navy-100 hover:to-navy-200 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="box" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-700">Lihat Semua Kategori</h4>
                <p className="text-sm text-gray-600">Jelajahi semua kategori produk</p>
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
                <h4 className="font-semibold text-navy-700">Butuh Bantuan?</h4>
                <p className="text-sm text-gray-600">Hubungi tim kami untuk konsultasi</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Product/Skema Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        skema={selectedSkema}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  )
}