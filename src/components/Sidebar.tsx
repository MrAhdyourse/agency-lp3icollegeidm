/**
 * Sidebar Component
 * File: src/components/Sidebar.tsx
 * Purpose: Sidebar collapsible dengan menu dan sub-menu
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { menuData } from '@/data/menuData'
import { MenuItem } from '@/types/menu.types'
import Icon from './Icon'
import Logo from './Logo'
import appConfig from '@/config/app.config'

interface SidebarProps {
  isOpen: boolean
  isCollapsed: boolean
  onToggle: () => void
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  isCollapsed, 
  onToggle, 
  onClose 
}) => {
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([])

  const toggleSubmenu = (menuId: string) => {
    setOpenSubmenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    )
  }

  const handleMenuClick = (item: MenuItem) => {
    if (item.children) {
      toggleSubmenu(item.id)
    }
  }

  const renderMenuItem = (item: MenuItem, isSubmenu = false) => {
    const hasChildren = item.children && item.children.length > 0
    const isSubmenuOpen = openSubmenus.includes(item.id)

    return (
      <li key={item.id} className="mb-1">
        {/* Menu Item */}
        {hasChildren ? (
          <button
            onClick={() => handleMenuClick(item)}
            className={`
              w-full flex items-center gap-3 px-4 py-3 rounded-lg
              transition-all duration-200 ease-in-out
              ${isSubmenu ? 'ml-4 text-sm' : ''}
              text-white/90 hover:text-white hover:bg-navy-600
              group
            `}
          >
            {/* Icon */}
            {item.icon && !isCollapsed && (
              <Icon 
                name={item.icon} 
                size={20} 
                className="text-gold-400 group-hover:text-gold-300" 
              />
            )}
            
            {/* Label */}
            {!isCollapsed && (
              <span className="flex-1 font-medium text-left">{item.label}</span>
            )}
            
            {/* Badge */}
            {!isCollapsed && item.badge && (
              <span className={`
                px-2 py-0.5 text-xs font-semibold rounded-full
                ${item.badgeColor === 'success' ? 'bg-green-500' : ''}
                ${item.badgeColor === 'warning' ? 'bg-yellow-500' : ''}
                ${item.badgeColor === 'error' ? 'bg-red-500' : ''}
                ${item.badgeColor === 'info' ? 'bg-blue-500' : ''}
                text-white
              `}>
                {item.badge}
              </span>
            )}
            
            {/* Chevron for submenu */}
            {!isCollapsed && hasChildren && (
              <Icon 
                name="chevronDown" 
                size={16} 
                className={`
                  transition-transform duration-200
                  ${isSubmenuOpen ? 'rotate-180' : ''}
                `} 
              />
            )}
          </button>
        ) : (
          <Link
            href={item.href || '#'}
            onClick={onClose}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-lg
              transition-all duration-200 ease-in-out
              ${isSubmenu ? 'ml-4 text-sm' : ''}
              text-white/90 hover:text-white hover:bg-navy-600
              group
            `}
          >
            {/* Icon */}
            {item.icon && !isCollapsed && (
              <Icon 
                name={item.icon} 
                size={20} 
                className="text-gold-400 group-hover:text-gold-300" 
              />
            )}
            
            {/* Label */}
            {!isCollapsed && (
              <span className="flex-1 font-medium">{item.label}</span>
            )}
            
            {/* Badge */}
            {!isCollapsed && item.badge && (
              <span className={`
                px-2 py-0.5 text-xs font-semibold rounded-full
                ${item.badgeColor === 'success' ? 'bg-green-500' : ''}
                ${item.badgeColor === 'warning' ? 'bg-yellow-500' : ''}
                ${item.badgeColor === 'error' ? 'bg-red-500' : ''}
                ${item.badgeColor === 'info' ? 'bg-blue-500' : ''}
                text-white
              `}>
                {item.badge}
              </span>
            )}
          </Link>
        )}

        {/* Submenu */}
        {!isCollapsed && hasChildren && isSubmenuOpen && (
          <ul className="mt-1 space-y-1 border-l-2 border-gold-500/30 ml-6">
            {item.children!.map(child => renderMenuItem(child, true))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50
          bg-gradient-to-b from-navy-700 to-navy-800
          shadow-sidebar
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-[70px]' : 'w-[280px]'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-navy-600">
          {!isCollapsed && <Logo size="md" />}
          
          {/* Collapse Button (Desktop) */}
          <button
            onClick={onToggle}
            className="hidden lg:flex p-2 rounded-lg hover:bg-navy-600 transition-colors"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <Icon 
              name={isCollapsed ? 'chevronRight' : 'menu'} 
              size={20} 
              className="text-white" 
            />
          </button>

          {/* Close Button (Mobile) */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-navy-600 transition-colors"
            aria-label="Close sidebar"
          >
            <Icon name="close" size={20} className="text-white" />
          </button>
        </div>

        {/* Menu */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
          {menuData.map(group => (
            <div key={group.id} className="mb-6">
              {/* Group Title */}
              {!isCollapsed && group.title && (
                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-4">
                  {group.title}
                </h3>
              )}
              
              {/* Menu Items */}
              <ul>
                {group.items.map(item => renderMenuItem(item))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-navy-600">
            <p className="text-xs text-white/50 text-center">
              © 2024 {appConfig.name}
            </p>
          </div>
        )}
      </aside>
    </>
  )
}

export default Sidebar
