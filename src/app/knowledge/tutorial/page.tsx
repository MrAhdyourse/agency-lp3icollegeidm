/**
 * Tutorial Page
 * File: src/app/knowledge/tutorial/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function TutorialPage() {
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
            Tutorial
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="card hover:shadow-lg transition-shadow">
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-navy-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎬</span>
                </div>
                <h3 className="font-semibold text-navy-700 mb-2">Tutorial {item}</h3>
                <p className="text-sm text-gray-500 mb-2">Durasi: 15 menit</p>
                <p className="text-sm text-gray-600">Pelajari langkah demi langkah...</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}