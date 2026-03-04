/**
 * Agenda Page
 * File: src/app/agenda/page.tsx
 */

'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function AgendaPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const events = [
    { title: 'Workshop Digital Marketing', date: '20 Maret 2024', time: '09:00 - 12:00', type: 'Workshop' },
    { title: 'Meeting Bulanan', date: '25 Maret 2024', time: '14:00 - 16:00', type: 'Meeting' },
    { title: 'Training Produk', date: '1 April 2024', time: '10:00 - 15:00', type: 'Training' },
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
            Agenda 📅
          </h1>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-navy-100 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-xs text-navy-600">{event.date.split(' ')[0]}</span>
                    <span className="text-lg font-bold text-navy-700">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-navy-700">{event.title}</h3>
                      <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-700 rounded">{event.type}</span>
                    </div>
                    <p className="text-sm text-gray-500">⏰ {event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}