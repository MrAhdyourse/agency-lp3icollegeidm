/**
 * FAQ Page
 * File: src/app/knowledge/faq/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function FAQPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { q: 'Bagaimana cara mendaftar sebagai rekanan?', a: 'Anda dapat menghubungi tim kami melalui halaman kontak.' },
    { q: 'Apa keuntungan menjadi rekanan?', a: 'Akses produk eksklusif, promo khusus, dan dukungan prioritas.' },
    { q: 'Bagaimana cara mengakses materi?', a: 'Login ke portal dan pilih menu Knowledge Base.' },
  ]

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
          <h1 className="text-3xl font-heading font-bold text-navy-700 mb-6">
            FAQ
          </h1>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left font-medium text-navy-700 flex justify-between items-center"
                >
                  {faq.q}
                  <span>{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}