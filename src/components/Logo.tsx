/**
 * Logo Component
 * File: src/components/Logo.tsx
 * Purpose: Logo placeholder - GANTI dengan logo asli di public/images/
 */

'use client'

import React from 'react'
import Image from 'next/image'
import appConfig from '@/config/app.config'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true,
  className = '' 
}) => {
  const sizes = {
    sm: { width: 32, height: 32, text: 'text-sm' },
    md: { width: 40, height: 40, text: 'text-lg' },
    lg: { width: 56, height: 56, text: 'text-xl' },
  }

  const { width, height, text } = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Placeholder - Ganti dengan Image jika sudah ada logo */}
      <div 
        className="flex items-center justify-center rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 shadow-md"
        style={{ width, height }}
      >
        <span className="text-navy-900 font-bold text-lg">
          {appConfig.name.charAt(0)}
        </span>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-heading font-bold text-white ${text} tracking-tight`}>
            {appConfig.name}
          </span>
          <span className="text-xs text-gold-400 hidden sm:block">
            {appConfig.organization.name}
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo

/**
 * CARA GANTI LOGO:
 * 1. Upload logo ke folder: public/images/logo.png
 * 2. Ganti komponen di atas dengan:
 * 
 * <Image 
 *   src="/images/logo.png" 
 *   alt={appConfig.name} 
 *   width={width} 
 *   height={height}
 *   className="object-contain"
 * />
 */
