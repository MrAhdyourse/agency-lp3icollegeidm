/**
 * Menu Types
 * File: src/types/menu.types.ts
 * Purpose: Type definitions untuk sistem menu
 */

export interface MenuItem {
  id: string
  label: string
  icon?: string
  href?: string
  children?: MenuItem[]
  badge?: string
  badgeColor?: 'success' | 'warning' | 'error' | 'info'
}

export interface MenuGroup {
  id: string
  title?: string
  items: MenuItem[]
}

export interface SidebarState {
  isOpen: boolean
  isCollapsed: boolean
  activeMenu: string | null
  openSubmenus: string[]
}
