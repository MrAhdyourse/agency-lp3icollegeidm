'use client'

import React, { useMemo, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import SkemaCategoryIcon from '@/components/SkemaCategoryIcon'
import {
  skemaKategoriList,
  skemaSertifikasi,
  type SkemaKategori,
  type SkemaSertifikasi,
} from '@/data/skemaData'

export default function SertifikasiPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [selectedKategori, setSelectedKategori] = useState<SkemaKategori | 'all'>('all')
  const [query, setQuery] = useState('')

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)
  const toggleCollapse = () => setIsSidebarCollapsed(prev => !prev)
  const closeSidebar = () => setIsSidebarOpen(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return skemaSertifikasi
      .filter(s => (selectedKategori === 'all' ? true : s.kategori === selectedKategori))
      .filter(s => {
        if (!q) return true
        return (
          s.nama.toLowerCase().includes(q) ||
          s.kode.toLowerCase().includes(q) ||
          s.deskripsi.toLowerCase().includes(q)
        )
      })
  }, [query, selectedKategori])

  const kategoriInfo = useMemo(() => {
    const map = new Map<SkemaKategori, (typeof skemaKategoriList)[number]>()
    skemaKategoriList.forEach(k => map.set(k.id, k))
    return map
  }, [])

  return (
    <div className="min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleCollapse}
        onClose={closeSidebar}
      />

      <Header onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <main
        className={`
          pt-16 min-h-screen transition-all duration-300
          ${isSidebarCollapsed ? 'lg:pl-[70px]' : 'lg:pl-[280px]'}
        `}
      >
        {/* Header section */}
        <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold">Daftar Skema Sertifikasi</h1>
            <p className="text-white/80 mt-2 max-w-3xl">
              Katalog skema sertifikasi kompetensi (LSP P1 LP3I) — total {skemaSertifikasi.length} skema.
            </p>

            {/* Filters */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <label className="block text-sm text-white/70 mb-1">Cari (kode/nama/deskripsi)</label>
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Contoh: Junior Web Programmer"
                  className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/15 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-1">Kategori</label>
                <select
                  value={selectedKategori}
                  onChange={e => setSelectedKategori(e.target.value as SkemaKategori | 'all')}
                  className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/15 outline-none focus:ring-2 focus:ring-gold-400"
                >
                  <option value="all">Semua Kategori</option>
                  {skemaKategoriList.map(k => (
                    <option key={k.id} value={k.id}>
                      {k.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Menampilkan {filtered.length} skema</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((skema: SkemaSertifikasi) => {
                const info = kategoriInfo.get(skema.kategori)
                const gradient = info?.gradient ?? 'from-gray-500 to-slate-600'

                return (
                  <article
                    key={skema.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className={`p-5 bg-gradient-to-r ${gradient} text-white`}>
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                          <SkemaCategoryIcon kategori={skema.kategori} size={22} className="text-white" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-white/80">{info?.nama ?? skema.kategori}</p>
                          <h2 className="text-lg font-semibold leading-snug break-words">
                            {skema.nama}
                          </h2>
                          <p className="text-xs text-white/80 mt-1">
                            {skema.kode} • {skema.jenis} • {skema.jumlahUnit} Unit
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-gray-600 line-clamp-3">{skema.deskripsi}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          Persyaratan: {skema.persyaratan.length}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          Unit: {skema.unitKompetensi.length}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                          Manfaat: {skema.manfaat.length}
                        </span>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
