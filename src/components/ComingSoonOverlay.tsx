/**
 * Coming Soon Overlay Component
 * File: src/components/ComingSoonOverlay.tsx
 * 
 * A beautiful glassmorphism overlay for "Coming Soon" pages
 */

'use client'

import React, { useState } from 'react'

interface ComingSoonOverlayProps {
  title?: string
  subtitle?: string
}

export default function ComingSoonOverlay({ 
  title = "Coming Soon",
  subtitle = "Fitur ini sedang dalam pengembangan"
}: ComingSoonOverlayProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      {/* Glassmorphism backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/60 via-navy-800/50 to-gold-900/40 backdrop-blur-md">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 group"
        title="Tutup"
      >
        <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Icon with animation */}
        <div className="mb-6 relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <span className="text-5xl">🚀</span>
          </div>
          {/* Floating particles */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold-300 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-navy-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3 drop-shadow-lg">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/80 mb-6 max-w-md mx-auto">
          {subtitle}
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent to-gold-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
          <div className="w-12 h-1 bg-gradient-to-l from-transparent to-gold-400 rounded-full"></div>
        </div>

        {/* Lock icon */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <svg className="w-5 h-5 text-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-white/90 text-sm font-medium">Terkunci</span>
        </div>
      </div>
    </div>
  )
}