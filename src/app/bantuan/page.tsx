/**
 * Bantuan Page
 * File: src/app/bantuan/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function BantuanPage() {
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
          <h1 className="text-3xl font-heading font-bold text-navy-700 mb-6">
            Bantuan ❓
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Help */}
            <div className="card">
              <h2 className="font-semibold text-navy-700 mb-4">Bantuan Cepat</h2>
              <div className="space-y-3">
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📖</span>
                    <div>
                      <p className="font-medium text-navy-700">Panduan Penggunaan</p>
                      <p className="text-sm text-gray-500">Cara menggunakan portal</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🔑</span>
                    <div>
                      <p className="font-medium text-navy-700">Reset Password</p>
                      <p className="text-sm text-gray-500">Cara mengatur ulang password</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💬</span>
                    <div>
                      <p className="font-medium text-navy-700">Hubungi Support</p>
                      <p className="text-sm text-gray-500">Chat dengan tim support</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Support */}
            <div className="card">
              <h2 className="font-semibold text-navy-700 mb-4">Hubungi Support</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span>💬</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Live Chat</p>
                    <p className="text-sm text-gray-500">Senin - Jumat, 09:00 - 17:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span>📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Email Support</p>
                    <p className="text-sm text-gray-500">support@agency-wni.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span>📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">Telepon</p>
                    <p className="text-sm text-gray-500">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}