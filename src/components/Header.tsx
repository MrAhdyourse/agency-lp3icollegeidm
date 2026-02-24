/**
 * Header Component
 * File: src/components/Header.tsx
 * Purpose: Header dengan toggle sidebar dan info user
 */

'use client'

import React from 'react'
import Icon from './Icon'
import appConfig from '@/config/app.config'

interface HeaderProps {
  onMenuClick: () => void
  isSidebarOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[280px] h-16 bg-white shadow-sm z-30 transition-all duration-300">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left Side - Menu Toggle & Title */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isSidebarOpen ? 'close' : 'menu'} 
              size={24} 
              className="text-navy-700" 
            />
          </button>

          {/* Page Title */}
          <div>
            <h1 className="text-lg font-heading font-bold text-navy-700">
              {appConfig.name}
            </h1>
            <p className="text-xs text-gray-500 hidden sm:block">
              {appConfig.description}
            </p>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Icon name="megaphone" size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <Icon name="user" size={16} className="text-navy-900" />
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-700">
              Rekanan
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
