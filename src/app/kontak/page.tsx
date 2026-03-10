/**
 * Kontak Page - Hubungi Kami
 * File: src/app/kontak/page.tsx
 * Purpose: Halaman kontak dengan WhatsApp dan Maps
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Icon from '@/components/Icon'

export default function KontakPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  // WhatsApp contacts
  const whatsappContacts = [
    {
      id: 'kantor',
      name: 'Kantor Utama',
      number: '6281809178445',
      displayNumber: '0818 0917 8445',
      description: 'Layanan informasi umum, pendaftaran, dan administrasi',
      availability: 'Senin - Jumat, 08:00 - 17:00 WIB',
      icon: 'phone',
      color: 'navy'
    },
    {
      id: 'developer',
      name: 'Dukungan Teknis',
      number: '6283867055809',
      displayNumber: '0838 6705 5809',
      description: 'Bantuan teknis, troubleshooting, dan konsultasi sistem',
      availability: 'Senin - Sabtu, 09:00 - 21:00 WIB',
      icon: 'settings',
      color: 'gold'
    }
  ]

  const handleWhatsAppClick = (number: string) => {
    window.open(`https://wa.me/${number}`, '_blank')
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/20 mb-4">
              <Icon name="phone" size={32} className="text-gold-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">
              Sambut Layanan Prima
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Kami siap melayani Anda dengan sepenuh hati. Pilih saluran komunikasi yang paling nyaman bagi Anda.
            </p>
          </div>
        </section>

        <div className="p-6 max-w-6xl mx-auto">
          {/* WhatsApp Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gold-500 rounded-full"></div>
              <h2 className="text-xl font-heading font-semibold text-navy-700">
                Hubungi via WhatsApp
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatsappContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Card Header */}
                  <div className={`
                    p-4 relative overflow-hidden
                    ${contact.color === 'navy' 
                      ? 'bg-gradient-to-r from-navy-600 to-navy-700' 
                      : 'bg-gradient-to-r from-gold-400 to-gold-500'}
                  `}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative flex items-center gap-3">
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center
                        ${contact.color === 'navy' ? 'bg-white/20' : 'bg-navy-900/20'}
                      `}>
                        <Icon name={contact.icon} size={24} className={contact.color === 'navy' ? 'text-white' : 'text-navy-900'} />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg ${contact.color === 'navy' ? 'text-white' : 'text-navy-900'}`}>
                          {contact.name}
                        </h3>
                        <p className={`text-sm ${contact.color === 'navy' ? 'text-white/80' : 'text-navy-800'}`}>
                          {contact.displayNumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <p className="text-gray-600 mb-3">
                      {contact.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Icon name="calendar" size={16} className="text-gray-400" />
                      <span>{contact.availability}</span>
                    </div>

                    {/* WhatsApp Button */}
                    <button
                      onClick={() => handleWhatsAppClick(contact.number)}
                      className={`
                        w-full py-3 px-4 rounded-xl font-semibold
                        flex items-center justify-center gap-3
                        transition-all duration-300
                        ${contact.color === 'navy'
                          ? 'bg-navy-700 hover:bg-navy-800 text-white'
                          : 'bg-gold-500 hover:bg-gold-600 text-navy-900'}
                        group-hover:shadow-md
                      `}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.866 9.866 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span>Hubungi via WhatsApp</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Location Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gold-500 rounded-full"></div>
              <h2 className="text-xl font-heading font-semibold text-navy-700">
                Lokasi Kantor
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Map Embed */}
                <div className="relative h-[300px] lg:h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.9671056557736!2d108.33980321278266!3d-6.34113103573995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eb951c4d31181%3A0x311702c332079b2c!2sLP3I%20COLLEGE%20INDRAMAYU!5e0!3m2!1sid!2sjp!4v1773110009047!5m2!1sid!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>

                {/* Location Info */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                      <Icon name="globe" size={24} className="text-navy-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-700 text-lg mb-1">
                        LP3I COLLEGE INDRAMAYU
                      </h3>
                      <p className="text-gray-600">
                        Jl. Raya Losarang No.KM 7, Losarang, Kec. Indramayu, Kabupaten Indramayu, Jawa Barat
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Icon name="calendar" size={18} className="text-gold-500" />
                      <span>Senin - Jumat: 08:00 - 17:00 WIB</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Icon name="calendar" size={18} className="text-gold-500" />
                      <span>Sabtu: 08:00 - 12:00 WIB</span>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <a
                    href="https://maps.app.goo.gl/yK3LaSX5yGLfWPmW6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Icon name="globe" size={20} />
                    <span>Dapatkan Petunjuk Arah</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Info Cards */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gold-500 rounded-full"></div>
              <h2 className="text-xl font-heading font-semibold text-navy-700">
                Mengapa Memilih Kami?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                  <Icon name="checkCircle" size={20} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Respon Cepat</h3>
                <p className="text-sm text-gray-600">
                  Tim kami siap merespon setiap pertanyaan Anda dalam waktu kurang dari 1 jam pada jam kerja.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                  <Icon name="sparkles" size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Layanan Profesional</h3>
                <p className="text-sm text-gray-600">
                  Didukung oleh tim yang berpengalaman dan profesional di bidangnya masing-masing.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center mb-3">
                  <Icon name="star" size={20} className="text-gold-600" />
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Kepuasan Terjamin</h3>
                <p className="text-sm text-gray-600">
                  Komitmen kami adalah memberikan layanan terbaik untuk kepuasan setiap klien.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}